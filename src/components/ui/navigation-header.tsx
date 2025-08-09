
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import aveduLogo from "@/assets/avedu-logo.png";
import CounselingForm from "@/components/ui/counseling-form";
import { Link } from "react-router-dom";

const NavigationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCounselingFormOpen, setIsCounselingFormOpen] = useState(false);

  const scrollToPrograms = () => {
    if (window.location.pathname === '/') {
      const element = document.getElementById('programs');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#programs';
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/universities" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src={aveduLogo} 
              alt="AVEDU Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-lg sm:text-xl font-bold text-primary">AVEDU</div>
              <div className="text-xs text-muted-foreground">Your Education Partner</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              className="btn-3d px-6 py-2 rounded-lg text-sm font-semibold transition-all"
              onClick={scrollToPrograms}
            >
              Explore Programs
            </button>
            <button 
              className="btn-3d px-6 py-2 rounded-lg text-sm font-semibold transition-all"
              onClick={() => {
                if (window.location.pathname === '/') {
                  document.getElementById('universities')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#universities';
                }
              }}
            >
              Top Universities
            </button>
            <a href="#counselling" className="text-foreground hover:text-primary transition-colors font-medium">
              Counselling
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Search className="h-4 w-4" />
              Search Courses
            </Button>
            <Button 
              className="gap-2 bg-gradient-primary hover:opacity-90"
              onClick={() => setIsCounselingFormOpen(true)}
            >
              <Phone className="h-4 w-4" />
              Get Counselling
            </Button>
          </div>

          {/* Mobile Navigation Buttons & Menu */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              className="btn-3d px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
              onClick={scrollToPrograms}
            >
              Explore Programs
            </button>
            <button 
              className="btn-3d px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
              onClick={() => {
                if (window.location.pathname === '/') {
                  document.getElementById('universities')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#universities';
                }
              }}
            >
              Top Universities
            </button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
        )}>
          <nav className="flex flex-col space-y-4 pt-4">
            <button 
              onClick={scrollToPrograms}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Explore Programs
            </button>
            <a href="#universities" className="text-foreground hover:text-primary transition-colors">
              Top Universities
            </a>
            <a href="#counselling" className="text-foreground hover:text-primary transition-colors">
              Counselling
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" size="sm" className="gap-2 justify-start">
                <Search className="h-4 w-4" />
                Search Courses
              </Button>
              <Button 
                className="gap-2 bg-gradient-primary hover:opacity-90 justify-start"
                onClick={() => setIsCounselingFormOpen(true)}
              >
                <Phone className="h-4 w-4" />
                Get Counselling
              </Button>
            </div>
          </nav>
        </div>
      </div>
      
      <CounselingForm 
        open={isCounselingFormOpen} 
        onOpenChange={setIsCounselingFormOpen} 
      />
    </header>
  );
};

export default NavigationHeader;
