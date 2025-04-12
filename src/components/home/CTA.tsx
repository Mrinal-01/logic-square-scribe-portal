
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-gradient-to-r from-primary/90 to-accent/90 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl mx-auto">
          Ready to Share Your Knowledge with the LogicSquare Family?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
          Join our growing community of writers and make your voice heard. Start writing your first blog post today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => navigate('/create-blog')}
          >
            Start Writing
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-white border-white hover:bg-white/10"
            onClick={() => navigate('/blogs')}
          >
            Explore Blogs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
