
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Bell, BookMarked, LogOut, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/hooks/use-theme';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // This would come from auth context

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    // Handle logout logic here
    setIsAuthenticated(false);
    navigate('/login');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo & Desktop Nav */}
          <div className="flex items-center space-x-10">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white font-bold">LS</div>
              <span className="font-bold text-xl">LogicSquare</span>
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
              <Link to="/blogs" className="font-medium hover:text-primary transition-colors">Blogs</Link>
              {isAuthenticated && (
                <>
                  <Link to="/dashboard" className="font-medium hover:text-primary transition-colors">Dashboard</Link>
                  <Link to="/create-blog" className="font-medium hover:text-primary transition-colors">Write</Link>
                </>
              )}
            </div>
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <div className="relative">
                  <Input
                    placeholder="Search..."
                    className="w-44 lg:w-60 pl-8"
                  />
                  <Search className="absolute left-2 top-2.5 w-4 h-4 text-muted-foreground" />
                </div>
                
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                
                <Button variant="ghost" size="icon">
                  <BookMarked className="h-5 w-5" />
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger className="focus:outline-none">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>LS</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/profile')}>
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/settings')}>
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                <Button variant="outline" onClick={() => navigate('/login')}>Sign In</Button>
                <Button onClick={() => navigate('/register')}>Sign Up</Button>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium py-2 hover:text-primary" onClick={toggleMobileMenu}>Home</Link>
              <Link to="/blogs" className="font-medium py-2 hover:text-primary" onClick={toggleMobileMenu}>Blogs</Link>
              {isAuthenticated && (
                <>
                  <Link to="/dashboard" className="font-medium py-2 hover:text-primary" onClick={toggleMobileMenu}>Dashboard</Link>
                  <Link to="/create-blog" className="font-medium py-2 hover:text-primary" onClick={toggleMobileMenu}>Write</Link>
                </>
              )}
              
              <div className="relative mt-4">
                <Input
                  placeholder="Search..."
                  className="w-full pl-8"
                />
                <Search className="absolute left-2 top-2.5 w-4 h-4 text-muted-foreground" />
              </div>
              
              <div className="pt-4 flex justify-between items-center">
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                
                {isAuthenticated ? (
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Bell className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <BookMarked className="h-5 w-5" />
                    </Button>
                    <Button variant="destructive" size="sm" onClick={handleLogout}>
                      Log out
                    </Button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => {
                      navigate('/login');
                      toggleMobileMenu();
                    }}>Sign In</Button>
                    <Button size="sm" onClick={() => {
                      navigate('/register');
                      toggleMobileMenu();
                    }}>Sign Up</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
