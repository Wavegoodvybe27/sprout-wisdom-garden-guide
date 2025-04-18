
import React, { useState } from 'react';
import { Leaf, Sun, Droplet, Thermometer } from 'lucide-react';

const PlantLibrary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const plantCategories = [
    {
      name: 'Vegetables',
      description: 'Grow your own nutritious vegetables',
      plants: [
        { name: 'Tomato', sunlight: 'Full Sun', water: 'Regular', temperature: 'Warm' },
        { name: 'Lettuce', sunlight: 'Partial Shade', water: 'Consistent', temperature: 'Cool' }
      ]
    },
    {
      name: 'Herbs',
      description: 'Cultivate fresh herbs for cooking',
      plants: [
        { name: 'Basil', sunlight: 'Full Sun', water: 'Moderate', temperature: 'Warm' },
        { name: 'Mint', sunlight: 'Partial Shade', water: 'Regular', temperature: 'Cool to Moderate' }
      ]
    },
    {
      name: 'Flowers',
      description: 'Beautiful blooms for your garden',
      plants: [
        { name: 'Sunflower', sunlight: 'Full Sun', water: 'Moderate', temperature: 'Warm' },
        { name: 'Lavender', sunlight: 'Full Sun', water: 'Low', temperature: 'Moderate' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2FCE2] p-6">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Leaf className="mr-4 text-green-600" />
            Plant Library
          </h1>
          <p className="text-xl text-gray-600">
            Discover and learn about various plants
          </p>
        </header>

        <div className="mb-8 text-center">
          <label className="block mb-4 text-lg">Select Plant Category</label>
          <div className="flex justify-center space-x-4">
            {plantCategories.map(category => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded transition ${
                  selectedCategory === category.name 
                    ? 'bg-green-600 text-white' 
                    : 'bg-white text-green-600 border border-green-600 hover:bg-green-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {selectedCategory && (
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">
              {selectedCategory} Guide
            </h2>
            {plantCategories
              .find(cat => cat.name === selectedCategory)
              ?.plants.map(plant => (
                <div 
                  key={plant.name} 
                  className="mb-6 p-4 bg-green-50 rounded-lg"
                >
                  <h3 className="text-xl font-bold mb-3">{plant.name}</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <Sun className="mr-2 text-yellow-500" />
                      <span>Sunlight: {plant.sunlight}</span>
                    </div>
                    <div className="flex items-center">
                      <Droplet className="mr-2 text-blue-500" />
                      <span>Watering: {plant.water}</span>
                    </div>
                    <div className="flex items-center">
                      <Thermometer className="mr-2 text-red-500" />
                      <span>Temperature: {plant.temperature}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantLibrary;
