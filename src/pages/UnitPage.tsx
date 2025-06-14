import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Unit, Tower, Floor } from '../types';
import { UnitDetailView } from '../components/UnitDetailView';

interface UnitPageProps {
  tower: Tower;
  floor: Floor;
  unit: Unit;
}

export function UnitPage({ tower, floor, unit }: UnitPageProps) {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [unitId]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!tower || !floor || !unit) {
    navigate('/');
    return null;
  }

  return (
    <UnitDetailView
      tower={tower}
      floor={floor}
      unit={unit}
      onBackToTowers={() => navigate('/')}
      onBackToFloors={() => navigate(`/tower/${tower.id}/floor/${floor.id}`)}
      onBackToUnits={() => navigate(`/tower/${tower.id}/floor/${floor.id}`)}
    />
  );
}
