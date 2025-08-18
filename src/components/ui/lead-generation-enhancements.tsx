import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, Download, Phone, Clock, Users, Star, Gift, Timer } from "lucide-react";
import { useCounselingForm } from "@/hooks/use-counseling-form";

interface LeadGenerationEnhancementsProps {
  courseType?: string;
  universityName?: string;
}

const LeadGenerationEnhancements = ({ courseType = "MBA", universityName = "Top Universities" }: LeadGenerationEnhancementsProps) => {
  const { openForm } = useCounselingForm();
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour countdown
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  // Countdown timer for urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 3600);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Show floating CTA on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Interactive Lead Magnets */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get Instant Support & Resources</h2>
            <p className="text-lg text-muted-foreground">Access exclusive tools and personalized guidance for your education journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* EMI Calculator */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-primary/20">
              <CardHeader className="text-center">
                <Calculator className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg">EMI Calculator</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Calculate your monthly payments and plan your budget easily
                </p>
                <Button onClick={openForm} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Calculate EMI
                </Button>
              </CardContent>
            </Card>

            {/* Quick Callback */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-secondary/20">
              <CardHeader className="text-center">
                <Phone className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg">Quick Callback</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Get a callback from our counselors within 15 minutes
                </p>
                <Button onClick={openForm} variant="secondary" className="w-full">
                  <Clock className="w-4 h-4 mr-2" />
                  Request Callback
                </Button>
              </CardContent>
            </Card>

            {/* Brochure Download */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-accent/20">
              <CardHeader className="text-center">
                <Download className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg">Download Brochure</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Get detailed course information, fees, and admission process
                </p>
                <Button onClick={openForm} variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Get Brochure
                </Button>
              </CardContent>
            </Card>

            {/* Course Updates */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-muted/20">
              <CardHeader className="text-center">
                <Gift className="w-12 h-12 text-foreground mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg">Course Updates</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Get notified about new admissions, scholarships & offers
                </p>
                <Button onClick={openForm} variant="outline" className="w-full">
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof & Urgency */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">15,000+</div>
              <div className="text-muted-foreground">Students Enrolled This Year</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-secondary/10 p-4 rounded-full mb-4">
                <Star className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground">4.8/5</div>
              <div className="text-muted-foreground">Average Student Rating</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-accent/10 p-4 rounded-full mb-4">
                <Timer className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground">{formatTime(timeLeft)}</div>
              <div className="text-muted-foreground">Limited Time Offer Ends In</div>
              <Badge className="mt-2 bg-red-500 text-white animate-pulse">
                Save ₹10,000 Today!
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      {showFloatingCTA && (
        <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-4">
          <Card className="bg-primary text-primary-foreground shadow-2xl border-primary">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <div>
                  <div className="font-semibold text-sm">Need Help?</div>
                  <div className="text-xs opacity-90">Free Counseling Available</div>
                </div>
                <Button 
                  size="sm" 
                  variant="secondary"
                  onClick={openForm}
                  className="ml-2"
                >
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default LeadGenerationEnhancements;