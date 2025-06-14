import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tower, Floor, Unit } from '../types';
import { FloorView } from '../components/FloorView';
import { UnitsView } from '../components/UnitsView';
import { UnitDetailView } from '../components/UnitDetailView';

interface TowerPageProps {
  tower: Tower;
}

export function TowerPage({ tower }: TowerPageProps) {
  const { towerId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [towerId]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!tower) {
    navigate('/');
    return null;
  }

  if (selectedUnit && selectedFloor) {
    return (
      <UnitDetailView
        tower={tower}
        floor={selectedFloor}
        unit={selectedUnit}
        onBackToTowers={() => {
          setSelectedFloor(null);
          setSelectedUnit(null);
          navigate(`/tower/${tower.id}`);
        }}
        onBackToFloors={() => {
          setSelectedUnit(null);
          navigate(`/tower/${tower.id}/floor/${selectedFloor?.id}`);
        }}
        onBackToUnits={() => {
          navigate(`/tower/${tower.id}`);
        }}
      />
    );
  }

  if (selectedFloor) {
    return (
      <UnitsView
        tower={tower}
        floor={selectedFloor}
        onUnitSelect={(unit) => {
          setSelectedUnit(unit);
        }}
        onBackToTowers={() => {
          setSelectedFloor(null);
          navigate(`/tower/${tower.id}`);
        }}
        onBackToFloors={() => {
          navigate(`/tower/${tower.id}/floor/${selectedFloor?.id}`);
        }}
      />
    );
  }

  return (
    <FloorView
      tower={tower}
      onFloorSelect={(floor) => {
        setSelectedFloor(floor);
        navigate(`/tower/${tower.id}/floor/${floor.id}`);
      }}
      onBackToTowers={() => navigate('/')}
    />
  );
}
