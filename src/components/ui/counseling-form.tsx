import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Star, Users, GraduationCap, Award, Clock, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CounselingFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onFormSubmit?: () => void;
  onFormClose?: () => void;
}

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh"
];

const courses = [
  { value: "online-mba", label: "Online MBA (Master of Business Administration)" },
  { value: "online-mca", label: "Online MCA (Master of Computer Applications)" },
  { value: "online-mcom", label: "Online M.Com (Master of Commerce)" },
  { value: "online-bcom", label: "Online B.Com (Bachelor of Commerce)" },
  { value: "online-bba", label: "Online BBA (Bachelor of Business Administration)" },
  { value: "online-ba", label: "Online BA (Bachelor of Arts)" },
  { value: "online-ma", label: "Online MA (Master of Arts)" },
  { value: "online-bca", label: "Online BCA (Bachelor of Computer Applications)" },
  { value: "online-bsc", label: "Online B.Sc (Bachelor of Science)" },
  { value: "online-msc", label: "Online M.Sc (Master of Science)" }
];

const CounselingForm: React.FC<CounselingFormProps> = ({ open, onOpenChange, onFormSubmit, onFormClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    state: "",
    city: "",
    course: "",
    consent: true,
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to our privacy policy and terms & conditions.",
        variant: "destructive",
      });
      return;
    }

    // Handle form submission here
    console.log("Form submitted:", formData);
    toast({
      title: "Form Submitted Successfully!",
      description: "Our counselor will contact you within 24 hours.",
    });
    onFormSubmit?.();
    onOpenChange(false);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[90%] max-w-4xl max-h-[95vh] p-0 bg-white mx-auto my-2 sm:my-4 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full max-h-[95vh]">
          {/* Left Side - Form */}
          <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto">
            <DialogHeader className="mb-3 sm:mb-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg sm:text-xl font-bold text-blue-600">
                  Get 100% free counseling session
                </h2>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => {
                    onFormClose?.();
                    onOpenChange(false);
                  }}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-bold text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="mt-1 h-11 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="contactNumber" className="text-sm font-bold text-gray-700">
                    Mobile Number *
                  </Label>
                  <div className="relative mt-1">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-sm text-gray-600">
                      🇮🇳 +91
                    </div>
                    <Input
                      id="contactNumber"
                      type="tel"
                      value={formData.contactNumber}
                      onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                      placeholder="Enter your mobile number"
                      required
                      className="pl-16 h-11 text-base"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-bold text-gray-700">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="mt-1 h-11 text-base"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="state" className="text-sm font-bold text-gray-700">
                    State *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("state", value)}>
                    <SelectTrigger className="mt-1 h-11 text-base">
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="city" className="text-sm font-bold text-gray-700">
                    City *
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="Enter your city"
                    required
                    className="mt-1 h-11 text-base"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="course" className="text-sm font-bold text-gray-700">
                  Course Interested In *
                </Label>
                <Select onValueChange={(value) => handleInputChange("course", value)}>
                  <SelectTrigger className="mt-1 h-11 text-base">
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course.value} value={course.value}>
                        {course.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                />
                <Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                  I agree to receive communications at the mobile number provided, even if registered under DND & 
                  accept our{" "}
                  <button 
                    type="button"
                    className="text-blue-600 underline hover:text-blue-800"
                    onClick={() => window.open("/privacy-policy", "_blank")}
                  >
                    Privacy Policy
                  </button>
                  {" "}and{" "}
                  <button 
                    type="button"
                    className="text-blue-600 underline hover:text-blue-800"
                    onClick={() => window.open("/terms-conditions", "_blank")}
                  >
                    Terms & Conditions
                  </button>
                </Label>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base font-medium">
                Find Best University in 2 Mins
              </Button>
            </form>

            <div className="mt-3 sm:mt-4 text-center">
              <p className="text-xs text-gray-500">
                🔒 Your personal information is secure with us
              </p>
            </div>
          </div>

          {/* Right Side - Image & Benefits */}
          <div className="hidden lg:flex lg:flex-col bg-gradient-to-br from-blue-50 to-indigo-100 p-3 lg:p-4 relative overflow-hidden">
            <div className="relative flex-1 flex items-center justify-center">
              <img 
                src="/lovable-uploads/4e819542-d4de-47e5-a745-52662caced1a.png"
                alt="Graduate student"
                className="w-56 h-56 xl:w-64 xl:h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content below image */}
            <div className="mt-3 xl:mt-4 text-center">
              <div className="bg-blue-100 text-blue-800 px-2 xl:px-3 py-1 rounded-full text-xs xl:text-sm font-medium mb-2 xl:mb-3 inline-block">
                🎯 Compare & Apply from 100+ Online Universities
              </div>
              <h3 className="text-sm xl:text-lg font-bold text-gray-900 mb-2 xl:mb-3">
                Get Free Counseling & Find Your Perfect Course
              </h3>
              
              {/* Key Benefits */}
              <div className="space-y-1.5 xl:space-y-2 text-left">
                <div className="flex items-center gap-2 text-gray-700">
                  <Star className="h-3 w-3 xl:h-4 xl:w-4 text-blue-600" />
                  <span className="text-xs xl:text-sm">100+ Universities</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-3 w-3 xl:h-4 xl:w-4 text-blue-600" />
                  <span className="text-xs xl:text-sm">30X comparison factors</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <GraduationCap className="h-3 w-3 xl:h-4 xl:w-4 text-blue-600" />
                  <span className="text-xs xl:text-sm">Free expert consultation</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Award className="h-3 w-3 xl:h-4 xl:w-4 text-blue-600" />
                  <span className="text-xs xl:text-sm">Quick Loan facility</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-3 w-3 xl:h-4 xl:w-4 text-blue-600" />
                  <span className="text-xs xl:text-sm">Celebrating 1 lac admissions</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone className="h-3 w-3 xl:h-4 xl:w-4 text-blue-600" />
                  <span className="text-xs xl:text-sm">Post Admission Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CounselingForm;
