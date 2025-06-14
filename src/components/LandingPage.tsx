import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Welcome to Our Real Estate Floor Selector
          </h1>
          <p className="text-xl text-gray-600">
            Discover your perfect home in our premium towers
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl text-blue-500 mb-4">🏠</div>
            <h3 className="text-xl font-semibold mb-2">Premium Towers</h3>
            <p className="text-gray-600">Explore our collection of luxury towers</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl text-green-500 mb-4">🏢</div>
            <h3 className="text-xl font-semibold mb-2">Modern Floors</h3>
            <p className="text-gray-600">Choose from spacious and modern floors</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl text-yellow-500 mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Luxury Units</h3>
            <p className="text-gray-600">Find your dream home with premium features</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/towers"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Exploring
          </Link>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-100 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
