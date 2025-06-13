import React from 'react';
import { Home, MapPin } from 'lucide-react';
import { Tower, Floor, Unit } from '../types';
import { Breadcrumb } from './BreadCrumb';

interface UnitsViewProps {
  tower: Tower;
  floor: Floor;
  onUnitSelect: (unit: Unit) => void;
  onBackToTowers: () => void;
  onBackToFloors: () => void;
}

export const UnitsView: React.FC<UnitsViewProps> = ({ 
  tower, 
  floor, 
  onUnitSelect, 
  onBackToTowers, 
  onBackToFloors 
}) => {
  const breadcrumbItems = [
    { label: 'Towers', onClick: onBackToTowers },
    { label: tower.name, onClick: onBackToFloors },
    { label: `Floor ${floor.number}`, isActive: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Floor {floor.number} - Available Units
          </h1>
          <p className="text-lg text-gray-600">
            Choose your perfect home from {floor.units.length} available units
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {floor.units.map((unit) => (
            <div
              key={unit.id}
              onClick={() => onUnitSelect(unit)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group relative"
            >
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
};