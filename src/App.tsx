import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
          />
        } />
        <Route path="/tower/:towerId" element={<TowerRouteWrapper />} />
        <Route path="/tower/:towerId/floor/:floorId" element={<FloorRouteWrapper />} />
        <Route path="/tower/:towerId/floor/:floorId/unit/:unitId" element={<UnitRouteWrapper />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;