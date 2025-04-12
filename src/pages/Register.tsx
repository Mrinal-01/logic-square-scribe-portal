
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Google, Facebook, Moon, Sun, ArrowLeft, Check, Info } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { useToast } from '@/components/ui/use-toast';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Register = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration successful",
        description: "Welcome to LogicSquare Blog Portal! A welcome email has been sent to your inbox.",
      });
      navigate('/');
    }, 1500);
  };
  
  const handleGoogleSignup = () => {
    setIsLoading(true);
    
    // Simulating OAuth flow
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Google signup successful",
        description: "Welcome to LogicSquare Blog Portal!",
      });
      navigate('/');
    }, 1500);
  };
  
  const handleFacebookSignup = () => {
    setIsLoading(true);
    
    // Simulating OAuth flow
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Facebook signup successful",
        description: "Welcome to LogicSquare Blog Portal!",
      });
      navigate('/');
    }, 1500);
  };
  
  // Password validation
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
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
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>
              Join the LogicSquare Blog community
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" onClick={handleGoogleSignup} disabled={isLoading}>
                  <Google className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" onClick={handleFacebookSignup} disabled={isLoading}>
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
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.name@logic-square.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isLoading}
                      />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>You must use your Logic Square email address</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                    
                    <div className="grid grid-cols-2 gap-2 mt-1 text-xs">
                      <div className="flex items-center gap-1">
                        <div className={`w-3 h-3 rounded-full ${hasMinLength ? 'bg-green-500' : 'bg-gray-300'}`}>
                          {hasMinLength && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span>Min. 8 characters</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className={`w-3 h-3 rounded-full ${hasUpperCase ? 'bg-green-500' : 'bg-gray-300'}`}>
                          {hasUpperCase && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span>Uppercase letter</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className={`w-3 h-3 rounded-full ${hasLowerCase ? 'bg-green-500' : 'bg-gray-300'}`}>
                          {hasLowerCase && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span>Lowercase letter</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className={`w-3 h-3 rounded-full ${hasNumber ? 'bg-green-500' : 'bg-gray-300'}`}>
                          {hasNumber && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span>Number</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className={`w-3 h-3 rounded-full ${hasSpecialChar ? 'bg-green-500' : 'bg-gray-300'}`}>
                          {hasSpecialChar && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span>Special character</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                    
                    {confirmPassword && (
                      <div className="flex items-center gap-1 mt-1 text-xs">
                        <div className={`w-3 h-3 rounded-full ${password === confirmPassword ? 'bg-green-500' : 'bg-red-500'}`}>
                          {password === confirmPassword && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span>{password === confirmPassword ? 'Passwords match' : 'Passwords do not match'}</span>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading || password !== confirmPassword}
                  >
                    {isLoading ? 'Creating account...' : 'Create account'}
                  </Button>
                </div>
              </form>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              <span>Already have an account? </span>
              <Link 
                to="/login" 
                className="text-primary hover:underline"
              >
                Sign in
              </Link>
            </div>
            
            <div className="text-center text-xs text-muted-foreground">
              By signing up, you agree to our{' '}
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

export default Register;
