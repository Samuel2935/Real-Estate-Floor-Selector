import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tower, Floor, Unit } from '../types';
import { UnitsView } from '../components/UnitsView';
import { UnitDetailView } from '../components/UnitDetailView';

interface FloorPageProps {
  tower: Tower;
  floor: Floor;
}

export function FloorPage({ tower, floor }: FloorPageProps) {
  const { floorId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [floorId]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!tower || !floor) {
    navigate('/');
    return null;
  }

  if (selectedUnit) {
    return (
      <UnitDetailView
        tower={tower}
        floor={floor}
        unit={selectedUnit}
        onBackToTowers={() => navigate('/')}
        onBackToFloors={() => navigate(`/tower/${tower.id}/floor/${floor.id}`)}
        onBackToUnits={() => {
          setSelectedUnit(null);
          navigate(`/tower/${tower.id}/floor/${floor.id}`);
        }}
      />
    );
  }

  return (
    <UnitsView
      tower={tower}
      floor={floor}
      onUnitSelect={(unit) => {
        setSelectedUnit(unit);
        navigate(`/tower/${tower.id}/floor/${floor.id}/unit/${unit.id}`);
      }}
      onBackToTowers={() => navigate('/')}
      onBackToFloors={() => navigate(`/tower/${tower.id}/floor/${floor.id}`)}
    />
  );
}
