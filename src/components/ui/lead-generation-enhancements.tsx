import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  MessageCircle, 
  Phone, 
  Download, 
  Calculator, 
  Star, 
  Clock, 
  DollarSign,
  Users,
  Zap,
  Gift,
  TrendingUp,
  Shield
} from "lucide-react";
import { toast } from "sonner";

interface LeadGenerationEnhancementsProps {
  variant?: "floating" | "inline" | "popup";
  courseName?: string;
  universityName?: string;
}

const LeadGenerationEnhancements: React.FC<LeadGenerationEnhancementsProps> = ({
  variant = "inline",
  courseName,
  universityName
}) => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (variant === "floating") {
      const timer = setTimeout(() => {
        setShowFloatingCTA(true);
      }, 10000); // Show after 10 seconds

      return () => clearTimeout(timer);
    }
  }, [variant]);

  const handleQuickLead = (action: string) => {
    toast.success(`${action} request submitted! We'll contact you shortly.`);
  };

  const handleNewsletterSignup = () => {
    if (email) {
      toast.success("Successfully subscribed to course updates!");
      setEmail("");
    }
  };

  const handleCallbackRequest = () => {
    if (phone) {
      toast.success("Callback request submitted! We'll call you within 30 minutes.");
      setPhone("");
    }
  };

  if (variant === "floating" && showFloatingCTA) {
    return (
      <div className="fixed bottom-4 right-4 z-50 max-w-sm">
        <Card className="shadow-lg border-primary/20 bg-background/95 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Limited Time Offer!
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFloatingCTA(false)}
                className="h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm">
              <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                <Gift className="w-4 h-4" />
                Free Career Consultation
              </div>
              <p className="text-muted-foreground text-xs">
                Get expert guidance on course selection
              </p>
            </div>
            <Button 
              size="sm" 
              className="w-full bg-gradient-primary"
              onClick={() => handleQuickLead("Free Consultation")}
            >
              <Phone className="w-3 h-3 mr-1" />
              Get Free Call
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        {/* Quick Callback */}
        <Card className="text-center p-4 hover:shadow-lg transition-shadow border-primary/20">
          <CardContent className="space-y-3 p-0">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Quick Callback</h3>
              <p className="text-xs text-muted-foreground">Get a call in 30 mins</p>
            </div>
            <div className="space-y-2">
              <Input
                placeholder="Your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="text-xs h-8"
              />
              <Button 
                size="sm" 
                className="w-full h-7 text-xs"
                onClick={handleCallbackRequest}
              >
                Request Call
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Brochure Download */}
        <Card className="text-center p-4 hover:shadow-lg transition-shadow border-primary/20">
          <CardContent className="space-y-3 p-0">
            <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center mx-auto">
              <Download className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Course Brochure</h3>
              <p className="text-xs text-muted-foreground">Detailed program info</p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full h-7 text-xs"
              onClick={() => handleQuickLead("Brochure Download")}
            >
              <Download className="w-3 h-3 mr-1" />
              Download
            </Button>
          </CardContent>
        </Card>

        {/* Fee Calculator */}
        <Card className="text-center p-4 hover:shadow-lg transition-shadow border-primary/20">
          <CardContent className="space-y-3 p-0">
            <div className="w-12 h-12 bg-accent/50 rounded-full flex items-center justify-center mx-auto">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">EMI Calculator</h3>
              <p className="text-xs text-muted-foreground">Calculate monthly fees</p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full h-7 text-xs"
              onClick={() => handleQuickLead("EMI Calculator")}
            >
              <Calculator className="w-3 h-3 mr-1" />
              Calculate
            </Button>
          </CardContent>
        </Card>

        {/* Course Updates */}
        <Card className="text-center p-4 hover:shadow-lg transition-shadow border-primary/20">
          <CardContent className="space-y-3 p-0">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Course Updates</h3>
              <p className="text-xs text-muted-foreground">Get latest info</p>
            </div>
            <div className="space-y-2">
              <Input
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-xs h-8"
              />
              <Button 
                size="sm" 
                className="w-full h-7 text-xs"
                onClick={handleNewsletterSignup}
              >
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
};

// Additional Interactive Elements
export const CourseComparisonWidget = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const handleCompare = () => {
    if (selectedCourses.length >= 2) {
      toast.success("Comparison sent to your email!");
    } else {
      toast.error("Please select at least 2 courses to compare");
    }
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          Compare Courses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Select courses to get a detailed comparison report
        </p>
        <div className="space-y-2 mb-4">
          {["MBA", "BBA", "MCA", "BCA"].map(course => (
            <label key={course} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-gray-300"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedCourses([...selectedCourses, course]);
                  } else {
                    setSelectedCourses(selectedCourses.filter(c => c !== course));
                  }
                }}
              />
              <span className="text-sm">{course}</span>
            </label>
          ))}
        </div>
        <Button onClick={handleCompare} className="w-full">
          Get Comparison Report
        </Button>
      </CardContent>
    </Card>
  );
};

// Social Proof Component
export const SocialProofBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg my-6">
      <div className="flex items-center justify-center gap-8 text-sm">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-primary" />
          <span className="font-semibold">50K+</span>
          <span className="text-muted-foreground">Students Enrolled</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-primary fill-primary" />
          <span className="font-semibold">4.8/5</span>
          <span className="text-muted-foreground">Student Rating</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-primary" />
          <span className="font-semibold">100%</span>
          <span className="text-muted-foreground">Placement Support</span>
        </div>
      </div>
    </div>
  );
};

// Urgency Timer Component
export const UrgencyTimer = ({ deadline = "2024-12-31" }: { deadline?: string }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const deadlineDate = new Date(deadline).getTime();
      const distance = deadlineDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      } else {
        setTimeLeft("Expired");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-200 p-4 rounded-lg text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Clock className="w-5 h-5 text-red-500" />
        <span className="font-semibold text-red-700">Limited Time Offer!</span>
      </div>
      <p className="text-sm text-muted-foreground mb-2">
        Early Bird Discount expires in:
      </p>
      <div className="text-2xl font-bold text-red-600">{timeLeft}</div>
      <Button className="mt-3 bg-red-500 hover:bg-red-600">
        Apply Now & Save ₹10,000
      </Button>
    </div>
  );
};

export default LeadGenerationEnhancements;