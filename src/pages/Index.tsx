
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import BlogCarousel from '@/components/home/BlogCarousel';
import RecentBlogs from '@/components/home/RecentBlogs';
import CategorySection from '@/components/home/CategorySection';
import StatsSection from '@/components/home/StatsSection';
import CTA from '@/components/home/CTA';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <BlogCarousel />
      <RecentBlogs />
      <CategorySection />
      <StatsSection />
      <CTA />
    </MainLayout>
  );
};

export default Index;
