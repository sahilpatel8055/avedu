import { useState } from "react";
import { Phone, Download, GraduationCap, Users, Building, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/ui/seo-head";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import { useCounselingForm } from "@/hooks/use-counseling-form";

// Import logo - fallback to placeholder if not available
const jainLogo = "/src/assets/uni_logo/jain.png";

const JainUniversity = () => {
  const { CounselingFormComponent, openForm } = useCounselingForm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    consent: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleEnrollNow = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <SEOHead 
        title="Jain University Online Degree Programs - UGC Approved Online Courses"
        description="Get your online degree from Jain University. Choose from MBA, BBA, MCA, BCA, M.Com, B.Com, and more. NAAC A++ accredited with industry-relevant curriculum."
        keywords="Jain University Online, Online MBA, Online BBA, Online Degree, Distance Learning, UGC Approved, NAAC A++"
        canonical="https://avedu.in/jain-university-online"
      />
      
      <NavigationHeader />
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={jainLogo} 
              alt="Jain University Online" 
              className="h-12 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/src/assets/uni_logo/jain.png';
              }}
            />
            <span className="text-2xl font-bold text-orange-600">Online JAIN</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">+91-7304 000 444</span>
            </div>
            <Button 
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold"
              onClick={openForm}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">NAAC A++ Accredited</span><br />
                <span className="text-white">Online Degrees from</span><br />
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Jain University Online
                </span>
              </h1>
              
              <div className="text-xl lg:text-2xl font-semibold text-gray-200">
                MBA | BBA | MCA | BCA | MCOM | BCOM | MAJMC
              </div>
            </div>

            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download Brochure
            </Button>

            {/* Accreditation Badges */}
            <div className="grid grid-cols-3 gap-6 max-w-md">
              <Card className="bg-white/10 backdrop-blur border-white/20 text-center py-4">
                <CardContent className="p-0">
                  <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">NAAC A++</div>
                  <div className="text-xs text-gray-300">Accredited</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20 text-center py-4">
                <CardContent className="p-0">
                  <Building className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">UGC</div>
                  <div className="text-xs text-gray-300">Entitled</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20 text-center py-4">
                <CardContent className="p-0">
                  <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">Amongst Top 100</div>
                  <div className="text-xs text-gray-300">University in India</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:ml-8">
            <Card className="bg-gray-800/50 backdrop-blur border-gray-700 p-8">
              <CardContent className="p-0 space-y-6">
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold text-white">
                    Join <span className="text-orange-500">50,000+</span> Learners Across India
                  </h2>
                  
                  <div className="flex justify-center gap-8">
                    <div className="flex items-center gap-2 text-white">
                      <GraduationCap className="h-5 w-5 text-orange-500" />
                      <span className="text-sm">Easy financing options</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Award className="h-5 w-5 text-orange-500" />
                      <span className="text-sm">Attractive scholarships</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm">
                    Submit your details and we'll contact you soon!
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Full name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white">Email address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mobile" className="text-white">Mobile number *</Label>
                    <div className="flex">
                      <div className="flex items-center bg-gray-700 border border-gray-600 rounded-l-md px-3">
                        <span className="text-white text-sm">🇮🇳 +91</span>
                      </div>
                      <Input
                        id="mobile"
                        placeholder="Enter your mobile number"
                        value={formData.mobile}
                        onChange={(e) => handleInputChange("mobile", e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 rounded-l-none"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="course" className="text-white">Course *</Label>
                    <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select course applying for*" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="bba" className="text-white">BBA</SelectItem>
                        <SelectItem value="mba" className="text-white">MBA</SelectItem>
                        <SelectItem value="bca" className="text-white">BCA</SelectItem>
                        <SelectItem value="mca" className="text-white">MCA</SelectItem>
                        <SelectItem value="bcom" className="text-white">B.Com</SelectItem>
                        <SelectItem value="mcom" className="text-white">M.Com</SelectItem>
                        <SelectItem value="majmc" className="text-white">MA.JMC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                      className="border-gray-600 data-[state=checked]:bg-orange-600"
                    />
                    <Label htmlFor="consent" className="text-xs text-gray-300 leading-tight">
                      I authorize Online Jain and its associates to contact me with updates notifications via email, SMS, WhatsApp, and voice call. This consent will override any registration for DNC / NDNC.
                    </Label>
                  </div>

                  <Button 
                    onClick={handleEnrollNow}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-full font-semibold text-lg"
                  >
                    Enroll Now
                  </Button>
                </div>

                <div className="flex justify-center gap-8 pt-4">
                  <div className="flex items-center gap-2 text-yellow-500">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm font-semibold">Last Date for Admission: 21 Aug</span>
                  </div>
                  <div className="flex items-center gap-2 text-yellow-500">
                    <Users className="h-4 w-4" />
                    <span className="text-sm font-semibold">Limited Seats</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <GraduationCap className="h-12 w-12 text-orange-600 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900">100% flexible learning</h3>
              <p className="text-gray-600">Study at your own pace with complete flexibility</p>
            </div>
            <div className="text-center space-y-4">
              <Building className="h-12 w-12 text-orange-600 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900">Industry relevant curriculum</h3>
              <p className="text-gray-600">Updated curriculum aligned with industry needs</p>
            </div>
            <div className="text-center space-y-4">
              <Users className="h-12 w-12 text-orange-600 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900">At par with on-campus degrees</h3>
              <p className="text-gray-600">Same quality education as on-campus programs</p>
            </div>
            <div className="text-center space-y-4">
              <Award className="h-12 w-12 text-orange-600 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900">100% placement assistance</h3>
              <p className="text-gray-600">Dedicated support for career placement</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CounselingFormComponent />
    </>
  );
};

export default JainUniversity;