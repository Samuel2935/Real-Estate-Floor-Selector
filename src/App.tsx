import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { towers } from './data/towers';
import { LandingPage } from './components/LandingPage';
import { TowerOverview } from './components/TowerOverview';
import { TowerRouteWrapper, FloorRouteWrapper, UnitRouteWrapper } from './pages/RouteWrapper';

const NotFound: React.FC<{}> = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
          <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;