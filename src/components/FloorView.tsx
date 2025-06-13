import React from 'react';
import { Tower, Floor } from '../types';
import { Breadcrumb } from './BreadCrumb';

interface FloorViewProps {
  tower: Tower;
  onFloorSelect: (floor: Floor) => void;
  onBackToTowers: () => void;
}

export const FloorView: React.FC<FloorViewProps> = ({ 
  tower, 
  onFloorSelect, 
  onBackToTowers 
}) => {
  const breadcrumbItems = [
    { label: 'Towers', onClick: onBackToTowers },
    { label: tower.name, isActive: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {tower.name} - Select Floor
          </h1>
          <p className="text-lg text-gray-600">
            Choose from {tower.floors.length} available floors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {tower.floors.map((floor) => (
            <div
              key={floor.id}
              onClick={() => onFloorSelect(floor)}
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
};