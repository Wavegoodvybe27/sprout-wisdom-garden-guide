
import React, { useState } from 'react';
import { Calculator, Droplet, Beaker } from 'lucide-react';

const SoilCalculator: React.FC = () => {
  const [soilType, setSoilType] = useState('');
  const [pH, setPH] = useState('');
  const [nitrogenLevel, setNitrogenLevel] = useState('');
  const [phosphorusLevel, setPhosphorusLevel] = useState('');
  const [potassiumLevel, setPotassiumLevel] = useState('');

  const soilTypes = [
    'Clay', 'Sandy', 'Loamy', 'Silty', 'Peaty', 'Chalky'
  ];

  const calculateSoilHealth = () => {
    // Basic soil health calculation logic
    let score = 0;
    const phNum = parseFloat(pH || '0');

    if (phNum >= 6.0 && phNum <= 7.5) score += 3;
    if (nitrogenLevel === 'High') score += 2;
    if (phosphorusLevel === 'Medium') score += 2;
    if (potassiumLevel === 'Good') score += 2;

    return score;
  };

  const getSoilpHDescription = () => {
    const phNum = parseFloat(pH || '0');
    
    if (phNum < 6.0) return 'acidic';
    if (phNum > 7.5) return 'alkaline';
    return 'neutral';
  };

  return (
    <div className="min-h-screen bg-[#F2FCE2] p-6">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
            <Calculator className="mr-4 text-blue-600" />
            Soil Science Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Understand your soil's health and composition
          </p>
        </header>

        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Soil Type</label>
              <select 
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Soil Type</option>
                {soilTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2">Soil pH</label>
              <input 
                type="number" 
                value={pH}
                onChange={(e) => setPH(e.target.value)}
                placeholder="Enter pH Level (6.0-7.5)"
                className="w-full p-2 border rounded"
                min={0}
                max={14}
                step={0.1}
              />
            </div>

            <div>
              <label className="block mb-2">Nitrogen Level</label>
              <select 
                value={nitrogenLevel}
                onChange={(e) => setNitrogenLevel(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Nitrogen Level</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div>
              <label className="block mb-2">Phosphorus Level</label>
              <select 
                value={phosphorusLevel}
                onChange={(e) => setPhosphorusLevel(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Phosphorus Level</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div>
              <label className="block mb-2">Potassium Level</label>
              <select 
                value={potassiumLevel}
                onChange={(e) => setPotassiumLevel(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Potassium Level</option>
                <option value="Poor">Poor</option>
                <option value="Good">Good</option>
              </select>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={() => alert(`Soil Health Score: ${calculateSoilHealth()}/9`)}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Calculate Soil Health
            </button>
          </div>
        </div>

        {pH && soilType && (
          <div className="mt-8 bg-green-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Droplet className="mr-3 text-blue-500" />
              Soil Insights
            </h3>
            <p>
              Your {soilType} soil with pH {pH} suggests {getSoilpHDescription()} conditions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SoilCalculator;
