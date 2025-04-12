
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Facebook, Moon, Sun, ArrowLeft } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { useToast } from '@/components/ui/use-toast';

const Login = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  const validateEmail = (email: string) => {
    return email.endsWith('@logic-square.com');
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please use your @logic-square.com email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login successful",
        description: "Welcome back to LogicSquare Blog Portal!",
      });
      navigate('/');
    }, 1500);
  };
  
  const handleGoogleLogin = () => {
    setIsLoading(true);
    
    // Simulating OAuth flow
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Google login successful",
        description: "Welcome back to LogicSquare Blog Portal!",
      });
      navigate('/');
    }, 1500);
  };
  
  const handleFacebookLogin = () => {
    setIsLoading(true);
    
    // Simulating OAuth flow
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Facebook login successful",
        description: "Welcome back to LogicSquare Blog Portal!",
      });
      navigate('/');
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="absolute top-4 left-4 flex space-x-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
        
        <Card className="w-full max-w-md shadow-lg animate-fade-in">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-2">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold">LS</div>
            </div>
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>
              Sign in to your LogicSquare Blog account
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" onClick={handleGoogleLogin} disabled={isLoading}>
                  <Mail className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" onClick={handleFacebookLogin} disabled={isLoading}>
                  <Facebook className="mr-2 h-4 w-4" />
                  Facebook
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.name@logic-square.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link 
                        to="/forgot-password" 
                        className="text-sm text-primary hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </div>
              </form>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              <span>Don't have an account? </span>
              <Link 
                to="/register" 
                className="text-primary hover:underline"
              >
                Sign up
              </Link>
            </div>
            
            <div className="text-center text-xs text-muted-foreground">
              By signing in, you agree to our{' '}
              <Link to="/terms" className="hover:underline">Terms of Service</Link>
              {' '}and{' '}
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>.
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
