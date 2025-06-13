import React from 'react';
import { ChevronRight, Home, Building } from 'lucide-react';
import { Tower } from '../types';

interface TowerOverviewProps {
  towers: Tower[];
  onTowerSelect: (tower: Tower) => void;
}

export const TowerOverview: React.FC<TowerOverviewProps> = ({ 
  towers, 
  onTowerSelect 
}) => {
  return (
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
              onClick={() => onTowerSelect(tower)}
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
};