
import React from 'react';
import StatCard from '@/components/common/StatCard';
import { Users, BookOpen, Heart, MessageSquare } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Our Community in Numbers
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Active Authors"
            value="120+"
            icon={Users}
            description="Contributors this month"
            change={{ value: 12, isPositive: true }}
            iconColor="text-blue-600"
            iconBgColor="bg-blue-100 dark:bg-blue-900/30"
          />
          
          <StatCard
            title="Published Blogs"
            value="850+"
            icon={BookOpen}
            description="And growing every day"
            change={{ value: 8, isPositive: true }}
            iconColor="text-purple-600"
            iconBgColor="bg-purple-100 dark:bg-purple-900/30"
          />
          
          <StatCard
            title="Engaged Readers"
            value="2.5k+"
            icon={Heart}
            description="Total likes received"
            change={{ value: 15, isPositive: true }}
            iconColor="text-red-600"
            iconBgColor="bg-red-100 dark:bg-red-900/30"
          />
          
          <StatCard
            title="Community Discussions"
            value="980+"
            icon={MessageSquare}
            description="Comments across blogs"
            change={{ value: 5, isPositive: true }}
            iconColor="text-green-600"
            iconBgColor="bg-green-100 dark:bg-green-900/30"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
