import React, { useState } from 'react';
import { ChevronRight, Home, Building, MapPin } from 'lucide-react';

interface Unit {
  id: string;
  name: string;
  area: number;
  unitType: string;
  rooms: number;
  bathrooms: number;
  price: number;
  thumbnail: string;
  features: string[];
}

interface Floor {
  id: string;
  number: number;
  units: Unit[];
}

interface Tower {
  id: string;
  name: string;
  floors: Floor[];
  totalUnits: number;
  height: string;
}

// Sample data
const towers: Tower[] = [
  {
    id: 'tower-a',
    name: 'Tower A',
    totalUnits: 48,
    height: '12 floors',
    floors: Array.from({ length: 12 }, (_, i) => ({
      id: `floor-a-${i + 1}`,
      number: i + 1,
      units: Array.from({ length: 4 }, (_, j) => ({
        id: `unit-a-${i + 1}-${j + 1}`,
        name: `Unit ${String.fromCharCode(65 + j)}${i + 1}`,
        area: 850 + Math.floor(Math.random() * 400),
        unitType: ['Studio', '1BR', '2BR', '3BR'][j],
        rooms: j + 1,
        bathrooms: Math.ceil((j + 1) / 2),
        price: 450000 + Math.floor(Math.random() * 200000),
        thumbnail: `https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop`,
        features: ['Balcony', 'City View', 'Modern Kitchen', 'Hardwood Floors']
      }))
    }))
  },
  {
    id: 'tower-b',
    name: 'Tower B',
    totalUnits: 60,
    height: '15 floors',
    floors: Array.from({ length: 15 }, (_, i) => ({
      id: `floor-b-${i + 1}`,
      number: i + 1,
      units: Array.from({ length: 4 }, (_, j) => ({
        id: `unit-b-${i + 1}-${j + 1}`,
        name: `Unit ${String.fromCharCode(65 + j)}${i + 1}`,
        area: 920 + Math.floor(Math.random() * 500),
        unitType: ['1BR', '2BR', '3BR', 'Penthouse'][j],
        rooms: j + 1,
        bathrooms: Math.ceil((j + 1) / 2),
        price: 520000 + Math.floor(Math.random() * 300000),
        thumbnail: `https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop`,
        features: ['Ocean View', 'Premium Finishes', 'Walk-in Closet', 'Private Terrace']
      }))
    }))
  },
  {
    id: 'tower-c',
    name: 'Tower C',
    totalUnits: 40,
    height: '10 floors',
    floors: Array.from({ length: 10 }, (_, i) => ({
      id: `floor-c-${i + 1}`,
      number: i + 1,
      units: Array.from({ length: 4 }, (_, j) => ({
        id: `unit-c-${i + 1}-${j + 1}`,
        name: `Unit ${String.fromCharCode(65 + j)}${i + 1}`,
        area: 780 + Math.floor(Math.random() * 350),
        unitType: ['Studio', '1BR', '2BR', '2BR+Den'][j],
        rooms: j === 3 ? 3 : j + 1,
        bathrooms: Math.max(1, Math.ceil((j + 1) / 2)),
        price: 380000 + Math.floor(Math.random() * 180000),
        thumbnail: `https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop`,
        features: ['Garden View', 'Open Concept', 'In-unit Laundry', 'Storage Locker']
      }))
    }))
  }
];

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

  // Tower Overview Component
  const TowerOverview = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Select Your Tower
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover exceptional living spaces across our three premium residential towers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {towers.map((tower) => (
            <div
              key={tower.id}
              onClick={() => setSelectedTower(tower)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building className="w-16 h-16 text-white opacity-80" />
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tower.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    <span>{tower.height}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    <span>{tower.totalUnits} units available</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                    Explore Floors
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Floor View Component
  const FloorView = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <button onClick={resetToTowers} className="hover:text-blue-600 transition-colors">
            Towers
          </button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{selectedTower?.name}</span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {selectedTower?.name} - Select Floor
          </h1>
          <p className="text-lg text-gray-600">
            Choose from {selectedTower?.floors.length} available floors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {selectedTower?.floors.map((floor) => (
            <div
              key={floor.id}
              onClick={() => setSelectedFloor(floor)}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer p-6 text-center group"
            >
              <div className="text-2xl font-bold text-blue-600 mb-2 group-hover:text-blue-700">
                {floor.number}
              </div>
              <div className="text-sm text-gray-600 mb-3">Floor {floor.number}</div>
              <div className="text-xs text-gray-500">
                {floor.units.length} units
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Units View Component
  const UnitsView = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <button onClick={resetToTowers} className="hover:text-blue-600 transition-colors">
            Towers
          </button>
          <ChevronRight className="w-4 h-4" />
          <button onClick={resetToFloors} className="hover:text-blue-600 transition-colors">
            {selectedTower?.name}
          </button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Floor {selectedFloor?.number}</span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Floor {selectedFloor?.number} - Available Units
          </h1>
          <p className="text-lg text-gray-600">
            Choose your perfect home from {selectedFloor?.units.length} available units
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {selectedFloor?.units.map((unit) => (
            <div
              key={unit.id}
              onClick={() => setSelectedUnit(unit)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group relative"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 z-10 pointer-events-none"></div>
              
              <div className="relative overflow-hidden">
                <img
                  src={unit.thumbnail}
                  alt={unit.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {unit.unitType}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{unit.name}</h3>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{unit.area} sq ft</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Home className="w-4 h-4" />
                    <span>{unit.rooms} rooms</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  ${unit.price.toLocaleString()}
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Unit Detail View Component
  const UnitDetailView = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <button onClick={resetToTowers} className="hover:text-blue-600 transition-colors">
            Towers
          </button>
          <ChevronRight className="w-4 h-4" />
          <button onClick={resetToFloors} className="hover:text-blue-600 transition-colors">
            {selectedTower?.name}
          </button>
          <ChevronRight className="w-4 h-4" />
          <button onClick={resetToUnits} className="hover:text-blue-600 transition-colors">
            Floor {selectedFloor?.number}
          </button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{selectedUnit?.name}</span>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={selectedUnit?.thumbnail}
                  alt={selectedUnit?.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                  {selectedUnit?.unitType}
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {selectedUnit?.name}
                </h1>
                <p className="text-xl text-gray-600">
                  {selectedTower?.name} • Floor {selectedFloor?.number}
                </p>
              </div>

              <div className="text-3xl font-bold text-blue-600">
                ${selectedUnit?.price.toLocaleString()}
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-gray-900">{selectedUnit?.area}</div>
                  <div className="text-sm text-gray-600">sq ft</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-gray-900">{selectedUnit?.rooms}</div>
                  <div className="text-sm text-gray-600">rooms</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-gray-900">{selectedUnit?.bathrooms}</div>
                  <div className="text-sm text-gray-600">bathrooms</div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedUnit?.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 text-lg">
                  Schedule Viewing
                </button>
                <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-4 px-6 rounded-xl transition-colors duration-200 text-lg">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render appropriate view based on state
  if (selectedUnit) {
    return <UnitDetailView />;
  }
  
  if (selectedFloor) {
    return <UnitsView />;
  }
  
  if (selectedTower) {
    return <FloorView />;
  }
  
  return <TowerOverview />;
}

export default App;