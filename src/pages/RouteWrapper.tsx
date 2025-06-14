import { useParams } from 'react-router-dom';
import { Tower, Floor, Unit } from '../types';
import { TowerPage } from './TowerPage';
import { FloorPage } from './FloorPage';
import { UnitPage } from './UnitPage';
import { towers } from '../data/towers';
import { useEffect, useState } from 'react';

export function TowerRouteWrapper() {
  const { towerId } = useParams();
  const [loading, setLoading] = useState(true);
  const tower = towers.find((t: Tower) => t.id === towerId) || {
    id: '',
    name: '',
    floors: [],
    totalUnits: 0,
    height: ''
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [towerId]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return <TowerPage tower={tower} />;
}

export function FloorRouteWrapper() {
  const { towerId, floorId } = useParams();
  const tower = towers.find((t: Tower) => t.id === towerId) || {
    id: '',
    name: '',
    floors: [],
    totalUnits: 0,
    height: ''
  };
  const floor = tower.floors.find((f: Floor) => f.id === floorId) || {
    id: '',
    number: 0,
    units: []
  };
  return <FloorPage tower={tower} floor={floor} />;
}

export function UnitRouteWrapper() {
  const { towerId, floorId, unitId } = useParams();
  const tower = towers.find((t: Tower) => t.id === towerId) || {
    id: '',
    name: '',
    floors: [],
    totalUnits: 0,
    height: ''
  };
  const floor = tower.floors.find((f: Floor) => f.id === floorId) || {
    id: '',
    number: 0,
    units: []
  };
  const unit = floor.units.find((u: Unit) => u.id === unitId) || {
    id: '',
    name: '',
    area: 0,
    unitType: '',
    rooms: 0,
    bathrooms: 0,
    price: 0,
    thumbnail: '',
    features: []
  };
  return <UnitPage tower={tower} floor={floor} unit={unit} />;
}
