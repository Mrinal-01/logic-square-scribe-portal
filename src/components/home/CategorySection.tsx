
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Layers, 
  LineChart, 
  Users, 
  Lightbulb, 
  Database, 
  Shield, 
  Terminal,
  Server,
  Smartphone,
  PenTool,
  Compass
} from 'lucide-react';

const categories = [
  { name: 'Development', icon: Code, color: 'bg-blue-100 dark:bg-blue-900/30', textColor: 'text-blue-600 dark:text-blue-400', count: 42 },
  { name: 'Design', icon: PenTool, color: 'bg-pink-100 dark:bg-pink-900/30', textColor: 'text-pink-600 dark:text-pink-400', count: 27 },
  { name: 'Data Science', icon: LineChart, color: 'bg-green-100 dark:bg-green-900/30', textColor: 'text-green-600 dark:text-green-400', count: 19 },
  { name: 'DevOps', icon: Server, color: 'bg-purple-100 dark:bg-purple-900/30', textColor: 'text-purple-600 dark:text-purple-400', count: 15 },
  { name: 'Architecture', icon: Layers, color: 'bg-yellow-100 dark:bg-yellow-900/30', textColor: 'text-yellow-600 dark:text-yellow-400', count: 23 },
  { name: 'Team Building', icon: Users, color: 'bg-orange-100 dark:bg-orange-900/30', textColor: 'text-orange-600 dark:text-orange-400', count: 18 },
  { name: 'Innovation', icon: Lightbulb, color: 'bg-teal-100 dark:bg-teal-900/30', textColor: 'text-teal-600 dark:text-teal-400', count: 31 },
  { name: 'Databases', icon: Database, color: 'bg-cyan-100 dark:bg-cyan-900/30', textColor: 'text-cyan-600 dark:text-cyan-400', count: 14 },
  { name: 'Security', icon: Shield, color: 'bg-red-100 dark:bg-red-900/30', textColor: 'text-red-600 dark:text-red-400', count: 12 },
  { name: 'CLI Tools', icon: Terminal, color: 'bg-gray-100 dark:bg-gray-800', textColor: 'text-gray-600 dark:text-gray-400', count: 8 },
  { name: 'Mobile Dev', icon: Smartphone, color: 'bg-indigo-100 dark:bg-indigo-900/30', textColor: 'text-indigo-600 dark:text-indigo-400', count: 16 },
  { name: 'Product', icon: Compass, color: 'bg-rose-100 dark:bg-rose-900/30', textColor: 'text-rose-600 dark:text-rose-400', count: 21 },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Explore Categories
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/blogs/category/${category.name.toLowerCase().replace(' ', '-')}`}
              className="flex flex-col items-center p-4 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className={`w-16 h-16 ${category.color} ${category.textColor} rounded-full flex items-center justify-center mb-3`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="font-medium text-center">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} blogs</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
