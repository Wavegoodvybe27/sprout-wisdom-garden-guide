
import React from 'react';
import { 
  Sprout, 
  Leaf, 
  Beaker, 
  Calculator, 
  Book 
} from 'lucide-react';

const GardenWisdomHome: React.FC = () => {
  const sections = [
    {
      title: "Gardening Techniques",
      description: "Learn proven methods for successful gardening",
      icon: <Sprout className="w-12 h-12 text-green-600" />,
      link: "/techniques"
    },
    {
      title: "Soil Science",
      description: "Understand the science behind healthy soil",
      icon: <Beaker className="w-12 h-12 text-brown-600" />,
      link: "/soil-science"
    },
    {
      title: "Soil Calculator",
      description: "Calculate pH, nutrients, and soil amendments",
      icon: <Calculator className="w-12 h-12 text-blue-600" />,
      link: "/soil-calculator"
    },
    {
      title: "Plant Library",
      description: "Explore detailed plant guides and care instructions",
      icon: <Leaf className="w-12 h-12 text-emerald-600" />,
      link: "/plant-library"
    },
    {
      title: "Learning Resources",
      description: "Expand your gardening knowledge",
      icon: <Book className="w-12 h-12 text-purple-600" />,
      link: "/resources"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2FCE2] text-gray-800 p-6">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-green-800">
            Sprout Wisdom Garden Guide
          </h1>
          <p className="text-xl text-gray-600">
            Your comprehensive resource for gardening knowledge and insights
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div 
              key={section.title}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="ml-4 text-xl font-semibold">{section.title}</h2>
              </div>
              <p className="text-gray-600">{section.description}</p>
              <a 
                href={section.link} 
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors"
              >
                Explore →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 italic">
            "Gardening is a journey of continuous learning and growth"
          </p>
        </div>
      </div>
    </div>
  );
};

export default GardenWisdomHome;
