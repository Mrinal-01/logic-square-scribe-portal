
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-background to-secondary/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            LogicSquare <span className="text-primary">Blog</span> Portal
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Share knowledge, insights, and experiences with your colleagues. Build a stronger community through the power of words.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              onClick={() => navigate('/blogs')}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Explore Blogs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/create-blog')}
            >
              Start Writing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
