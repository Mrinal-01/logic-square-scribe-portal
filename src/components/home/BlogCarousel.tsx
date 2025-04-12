
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

// Mock data for featured blogs
const featuredBlogs = [
  {
    id: '1',
    title: 'The Future of AI Development at LogicSquare',
    excerpt: 'Exploring how artificial intelligence is reshaping our development processes and product offerings.',
    coverImage: 'https://images.unsplash.com/photo-1677442135736-022b788be60c?q=80&w=1932&auto=format&fit=crop',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    publishedAt: '2025-04-01',
    tags: ['AI', 'Technology', 'Development']
  },
  {
    id: '2',
    title: 'Implementing Clean Architecture in React Applications',
    excerpt: 'A deep dive into organizing your React projects with clean architecture principles for better maintainability.',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1770&auto=format&fit=crop',
    author: {
      name: 'Miguel Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    publishedAt: '2025-03-28',
    tags: ['React', 'Architecture', 'Best Practices']
  },
  {
    id: '3',
    title: 'Improving Team Communication in Remote Settings',
    excerpt: 'Strategies and tools we use at LogicSquare to maintain effective communication while working remotely.',
    coverImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1770&auto=format&fit=crop',
    author: {
      name: 'Priya Sharma',
      avatar: 'https://randomuser.me/api/portraits/women/67.jpg'
    },
    publishedAt: '2025-03-25',
    tags: ['Remote Work', 'Communication', 'Team Building']
  }
];

const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredBlogs.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredBlogs.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(goToNext, 7000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Blogs</h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-500 ease-out h-[500px]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {featuredBlogs.map((blog) => (
              <div 
                key={blog.id}
                className="min-w-full h-full relative rounded-lg overflow-hidden"
              >
                <img 
                  src={blog.coverImage} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/20 hover:bg-primary/30 text-white">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-white/80 mb-6 max-w-3xl">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={blog.author.avatar} 
                        alt={blog.author.name}
                        className="w-10 h-10 rounded-full mr-3 border-2 border-white"
                      />
                      <div>
                        <p className="text-white font-medium">{blog.author.name}</p>
                        <p className="text-white/70 text-sm">{formatDate(blog.publishedAt)}</p>
                      </div>
                    </div>
                    <Link 
                      to={`/blogs/${blog.id}`}
                      className="bg-white text-primary hover:bg-white/90 px-4 py-2 rounded-md font-medium"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {featuredBlogs.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-white' : 'bg-white/40'
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
