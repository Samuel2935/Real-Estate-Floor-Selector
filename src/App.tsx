import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { towers } from './data/towers';
import { LandingPage } from './components/LandingPage';
import { TowerOverview } from './components/TowerOverview';
import { TowerRouteWrapper, FloorRouteWrapper, UnitRouteWrapper } from './pages/RouteWrapper';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/towers" element={
          <TowerOverview
            towers={towers}
            onTowerSelect={(tower) => {
              window.location.href = `/tower/${tower.id}`;
            }}
          />
        } />
        <Route path="/tower/:towerId" element={<TowerRouteWrapper />} />
        <Route path="/tower/:towerId/floor/:floorId" element={<FloorRouteWrapper />} />
        <Route path="/tower/:towerId/floor/:floorId/unit/:unitId" element={<UnitRouteWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;