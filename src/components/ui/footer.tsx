import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="bg-gradient-primary rounded-lg p-2 text-white font-bold text-xl w-fit">
              AVEDU
            </div>
            <p className="text-muted-foreground">
              Your trusted partner for online education in India. 
              Connecting students with the best universities and courses.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>admin@avedu.in</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <a href="#programs" className="block text-muted-foreground hover:text-primary transition-colors">
                Explore Programs
              </a>
              <a href="#universities" className="block text-muted-foreground hover:text-primary transition-colors">
                Top Universities
              </a>
              <a href="#counselling" className="block text-muted-foreground hover:text-primary transition-colors">
                Free Counselling
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Popular Courses */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Popular Courses</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Online MBA
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                B.Tech Computer Science
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                M.Com Finance
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                BA Psychology
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Data Science Masters
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Get the latest updates on admissions, new courses, and career opportunities.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border border-input rounded-md text-sm"
                />
                <Button size="sm">Subscribe</Button>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Visit avedu.in
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Legal Section */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg mb-4">Legal Information</h3>
          <div className="bg-card-hover p-4 rounded-lg">
            <p className="text-foreground text-sm leading-relaxed mb-3">
              Avadu.in is an independent online counseling and information platform. We are not officially 
              affiliated with, endorsed by, or partnered with any of the universities, educational institutions, 
              or their brands mentioned on this website. Our sole purpose is to serve as an informational guide 
              to help users explore online courses and universities in one centralized location.
            </p>
            <a 
              href="/disclaimer" 
              className="text-primary hover:text-primary-dark font-medium text-sm transition-colors"
            >
              See more →
            </a>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 AVEDU Education Services. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            {/* Social Links */}
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
            
            <Separator orientation="vertical" className="h-6" />
            
            <div className="flex gap-4 text-sm">
              <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-conditions" className="text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </a>
              <a href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;