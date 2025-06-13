import { useState } from 'react';
import { Tower, Floor, Unit } from './types';
import { towers } from './data/towers';
import { TowerOverview } from './components/TowerOverview';
import { FloorView } from './components/FloorView';
import { UnitsView } from './components/UnitsView';
import { UnitDetailView } from './components/UnitDetailView';

function App() {
  const [selectedTower, setSelectedTower] = useState<Tower | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

  const resetToTowers = () => {
    setSelectedTower(null);
    setSelectedFloor(null);
    setSelectedUnit(null);
  };

  const resetToFloors = () => {
    setSelectedFloor(null);
    setSelectedUnit(null);
  };

  const resetToUnits = () => {
    setSelectedUnit(null);
  };

  // Render appropriate view based on state
  if (selectedUnit && selectedFloor && selectedTower) {
    return (
      <UnitDetailView
        tower={selectedTower}
        floor={selectedFloor}
        unit={selectedUnit}
        onBackToTowers={resetToTowers}
        onBackToFloors={resetToFloors}
        onBackToUnits={resetToUnits}
      />
    );
  }
  
  if (selectedFloor && selectedTower) {
    return (
      <UnitsView
        tower={selectedTower}
        floor={selectedFloor}
        onUnitSelect={setSelectedUnit}
        onBackToTowers={resetToTowers}
        onBackToFloors={resetToFloors}
      />
    );
  }
  
  if (selectedTower) {
    return (
      <FloorView
        tower={selectedTower}
        onFloorSelect={setSelectedFloor}
        onBackToTowers={resetToTowers}
      />
    );
  }
  
  return (
    <TowerOverview
      towers={towers}
      onTowerSelect={setSelectedTower}
    />
  );
}

export default App;