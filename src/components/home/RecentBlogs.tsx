
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/blogs/BlogCard';
import { Link } from 'react-router-dom';

// Mock data for recent blogs
const recentBlogs = [
  {
    id: '1',
    title: 'The Future of AI Development at LogicSquare',
    excerpt: 'Exploring how artificial intelligence is reshaping our development processes and product offerings.',
    coverImage: 'https://images.unsplash.com/photo-1677442135736-022b788be60c?q=80&w=1932&auto=format&fit=crop',
    author: {
      id: '1',
      name: 'Sarah Chen',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    publishedAt: '2025-04-01',
    tags: ['AI', 'Technology', 'Development'],
    readTime: 8,
    likes: 24,
    comments: 5
  },
  {
    id: '2',
    title: 'Implementing Clean Architecture in React Applications',
    excerpt: 'A deep dive into organizing your React projects with clean architecture principles for better maintainability.',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1770&auto=format&fit=crop',
    author: {
      id: '2',
      name: 'Miguel Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    publishedAt: '2025-03-28',
    tags: ['React', 'Architecture', 'Best Practices'],
    readTime: 12,
    likes: 31,
    comments: 8
  },
  {
    id: '3',
    title: 'Improving Team Communication in Remote Settings',
    excerpt: 'Strategies and tools we use at LogicSquare to maintain effective communication while working remotely.',
    coverImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1770&auto=format&fit=crop',
    author: {
      id: '3',
      name: 'Priya Sharma',
      avatar: 'https://randomuser.me/api/portraits/women/67.jpg'
    },
    publishedAt: '2025-03-25',
    tags: ['Remote Work', 'Communication', 'Team Building'],
    readTime: 6,
    likes: 19,
    comments: 3
  },
  {
    id: '4',
    title: 'Performance Optimization Techniques for Modern Web Applications',
    excerpt: 'Learn about the latest techniques to optimize your web applications for better performance and user experience.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop',
    author: {
      id: '4',
      name: 'Alex Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    publishedAt: '2025-03-20',
    tags: ['Performance', 'Web Development', 'Optimization'],
    readTime: 10,
    likes: 42,
    comments: 7,
    isBookmarked: true
  },
  {
    id: '5',
    title: 'Designing Accessible User Interfaces for All Users',
    excerpt: 'How we approach accessibility at LogicSquare and ensure our products are usable by everyone.',
    coverImage: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1470&auto=format&fit=crop',
    author: {
      id: '5',
      name: 'Emma Wilson',
      avatar: 'https://randomuser.me/api/portraits/women/29.jpg'
    },
    publishedAt: '2025-03-15',
    tags: ['Accessibility', 'UI Design', 'Inclusion'],
    readTime: 9,
    likes: 27,
    comments: 11
  },
  {
    id: '6',
    title: 'Our Journey Adopting Microservices Architecture',
    excerpt: 'The challenges and lessons learned during our transition from monolith to microservices at LogicSquare.',
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop',
    author: {
      id: '6',
      name: 'David Kim',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    publishedAt: '2025-03-10',
    tags: ['Microservices', 'Architecture', 'Backend'],
    readTime: 14,
    likes: 36,
    comments: 9
  }
];

const RecentBlogs = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Recent Blogs</h2>
          <Link to="/blogs">
            <Button variant="outline" className="group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
