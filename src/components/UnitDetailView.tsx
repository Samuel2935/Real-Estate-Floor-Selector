import React from 'react';
import { Tower, Floor, Unit } from '../types';
import { Breadcrumb } from './BreadCrumb';

interface UnitDetailViewProps {
  tower: Tower;
  floor: Floor;
  unit: Unit;
  onBackToTowers: () => void;
  onBackToFloors: () => void;
  onBackToUnits: () => void;
}

export const UnitDetailView: React.FC<UnitDetailViewProps> = ({ 
  tower, 
  floor, 
  unit, 
  onBackToTowers, 
  onBackToFloors, 
  onBackToUnits 
}) => {
  const breadcrumbItems = [
    { label: 'Towers', onClick: onBackToTowers },
    { label: tower.name, onClick: onBackToFloors },
    { label: `Floor ${floor.number}`, onClick: onBackToUnits },
    { label: unit.name, isActive: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={unit.thumbnail}
                  alt={unit.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                  {unit.unitType}
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {unit.name}
                </h1>
                <p className="text-xl text-gray-600">
                  {tower.name} • Floor {floor.number}
                </p>
              </div>

              <div className="text-3xl font-bold text-blue-600">
                ${unit.price.toLocaleString()}
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-gray-900">{unit.area}</div>
                  <div className="text-sm text-gray-600">sq ft</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-gray-900">{unit.rooms}</div>
                  <div className="text-sm text-gray-600">rooms</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-gray-900">{unit.bathrooms}</div>
                  <div className="text-sm text-gray-600">bathrooms</div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {unit.features.map((feature, index) => (
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
};