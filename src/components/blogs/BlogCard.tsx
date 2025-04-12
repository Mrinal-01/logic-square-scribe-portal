
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageSquare, Bookmark, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  publishedAt: string;
  tags: string[];
  readTime: number;
  likes: number;
  comments: number;
  isBookmarked?: boolean;
  variant?: 'default' | 'compact';
}

const BlogCard = ({
  id,
  title,
  excerpt,
  coverImage,
  author,
  publishedAt,
  tags,
  readTime,
  likes,
  comments,
  isBookmarked = false,
  variant = 'default'
}: BlogCardProps) => {
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  if (variant === 'compact') {
    return (
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <CardContent className="flex-1 p-4 sm:p-6">
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.slice(0, 2).map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-secondary hover:bg-secondary/80">
                  {tag}
                </Badge>
              ))}
              {tags.length > 2 && (
                <Badge variant="outline">+{tags.length - 2}</Badge>
              )}
            </div>
            
            <Link to={`/blogs/${id}`}>
              <h3 className="text-lg font-semibold line-clamp-2 hover:text-primary transition-colors mb-2">
                {title}
              </h3>
            </Link>
            
            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
              {excerpt}
            </p>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center">
                <Link to={`/profile/${author.id}`}>
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                </Link>
                <div>
                  <Link to={`/profile/${author.id}`} className="text-sm font-medium hover:text-primary transition-colors">
                    {author.name}
                  </Link>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>{formatDate(publishedAt)}</span>
                    <span className="mx-1">•</span>
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{readTime} min read</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      
      <CardContent className="flex-1 flex flex-col p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-secondary hover:bg-secondary/80">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline">+{tags.length - 3}</Badge>
          )}
        </div>
        
        <Link to={`/blogs/${id}`}>
          <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors mb-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground line-clamp-3 mb-4">
          {excerpt}
        </p>
        
        <div className="flex items-center mt-auto">
          <Link to={`/profile/${author.id}`}>
            <img
              src={author.avatar}
              alt={author.name}
              className="w-10 h-10 rounded-full mr-3"
            />
          </Link>
          <div>
            <Link to={`/profile/${author.id}`} className="font-medium hover:text-primary transition-colors">
              {author.name}
            </Link>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>{formatDate(publishedAt)}</span>
              <span className="mx-1">•</span>
              <Clock className="w-3 h-3 mr-1" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="space-x-1 h-8 px-2">
                <Heart className="h-4 w-4" />
                <span>{likes}</span>
              </Button>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="space-x-1 h-8 px-2">
                <MessageSquare className="h-4 w-4" />
                <span>{comments}</span>
              </Button>
            </div>
          </div>
          
          <Button variant="ghost" size="icon" className={`h-8 w-8 ${isBookmarked ? 'text-primary' : ''}`}>
            <Bookmark className="h-4 w-4" filled={isBookmarked} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
