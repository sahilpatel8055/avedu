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

const approvals = [
  { name: 'UGC', icon: 'src/assets/icons/ugc-icon.png' },
  { name: 'NAAC', icon: 'src/assets/icons/naac-icon.png' },
  { name: 'NIRF', icon: 'src/assets/icons/nirf-icon.png' },
  { name: 'AICTE', icon: 'src/assets/icons/aicte-icon.png' },
  { name: 'AIU', icon: 'src/assets/icons/aiu-icon.png' },
  { name: 'WES', icon: 'src/assets/icons/wes-icon.png' },
  { name: 'QS Ranking', icon: 'src/assets/icons/qs-icon.png' },
  { name: 'BCI', icon: 'src/assets/icons/bci-icon.png' },
];

const JainUniversity = () => {
  const { CounselingFormComponent, openForm } = useCounselingForm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    consent: false
  });

  const handleInputChange = (field, value) => {
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
                const target = e.target;
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
                      onCheckedChange={(checked) => handleInputChange("consent", checked)}
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

      {/* Approvals & Recognitions Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6">Approvals & Recognitions</h2>
          <div className="flex flex-nowrap overflow-x-auto gap-12 py-4 justify-center items-center">
            {approvals.map((approval, index) => (
              <div key={index} className="flex-none p-2">
                <img
                  src={approval.icon}
                  alt={approval.name}
                  className="h-20 w-auto object-contain"
                />
              </div>
            ))}
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

      {/* Rankings & Accreditations */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Rankings & Accreditations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-10 w-10 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">NAAC A++</div>
                  <div className="text-gray-600">Accredited University</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Building className="h-10 w-10 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">UGC</div>
                  <div className="text-gray-600">Entitled Online Degrees</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-10 w-10 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">Top 100</div>
                  <div className="text-gray-600">University in India</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Explore Our Top Online Degree Courses */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Explore Our Top Online Degree Courses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MBA Course */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <Badge className="bg-orange-100 text-orange-800 mb-2">Most Popular</Badge>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">Master of Business Administration</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full mr-1"></div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.9</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>24 months</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>💰</span>
                      <span>INR 1,75,000</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🎓</span>
                      <span>No experience required</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Enroll Now</Button>
              </CardContent>
            </Card>

            {/* BBA Course */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <Badge className="bg-green-100 text-green-800 mb-2">Limited Seats</Badge>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">Bachelor of Business Administration</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full mr-1"></div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.7</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>36 months</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>💰</span>
                      <span>INR 1,35,000</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🎓</span>
                      <span>45% marks in 10+2</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Enroll Now</Button>
              </CardContent>
            </Card>

            {/* MCA Course */}
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <Badge className="bg-blue-100 text-blue-800 mb-2">Trending</Badge>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">Master of Computer Applications</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full mr-1"></div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.8</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>24 months</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>💰</span>
                      <span>INR 1,58,000</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🎓</span>
                      <span>No experience required</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Enroll Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Unlock The 360° Advantage */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Unlock The 360° Advantage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Globally recognized Prestigious Degree</h3>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Industry relevant curriculum</h3>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">100% placement assistance</h3>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Easy Financing Options</h3>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-800 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">💳</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Avail easy financing options</h4>
                    <p className="text-gray-300 text-sm">With our no-cost EMIs, we let your learning take the spotlight without the stress of financing.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🎓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Get attractive scholarships</h4>
                    <p className="text-gray-300 text-sm">Exclusive scholarships designed for defense personnel, government employees, differently-abled people & meritorious students.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">Request call back</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Online Jain advantages */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Online Jain advantages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Flexible & convenient schedule</h3>
              <p className="text-gray-600 text-sm">Balance your academic pursuits with personal and professional commitments by learning anywhere and at any time, as per your convenience.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">At par with on-campus degrees</h3>
              <p className="text-gray-600 text-sm">Access UGC-entitled online degrees that are at par with on-campus degrees and accepted for govt. or corporate jobs and higher education.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Experienced faculty & mentors</h3>
              <p className="text-gray-600 text-sm">Acquire quality education and guidance from esteemed faculty and mentors who share their expertise and practical knowledge.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Building className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Prestigious Jain alumni network</h3>
              <p className="text-gray-600 text-sm">Be a part of the prestigious Jain alumni network to build connections and to gain easy access to a wide range of career opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real stories, Real impact */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Real stories, Real impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
                    <p className="text-sm text-gray-600">MBA • Jain University</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">I always wanted to pursue my higher education dream without quitting my job, and Jain University has made it possible for me through their online degrees. My online MBA degree has given me wings to fly and chase my career aspirations.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Rahul Kumar</h4>
                    <p className="text-sm text-gray-600">BCA • Jain University</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">Funding my undergraduate degree has been possible because of Jain University's affordable online BCA degree. Thanks to Online Jain, I'm able to manage my work and academics. I believe this online degree will help me become personally and financially independent.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Anita Singh</h4>
                    <p className="text-sm text-gray-600">M.Com • Jain University</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">As a working professional, I wanted to enhance my domain knowledge. I found Jain University's online M.Com program as the right opportunity to climb up my career ladder. The program has helped me build new skills required to thrive in the industry.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <CounselingFormComponent />
    </>
  );
};

export default JainUniversity;
