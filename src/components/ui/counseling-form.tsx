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
      <DialogContent className="w-[min(92vw,420px)] max-w-none rounded-2xl p-4 sm:p-5 bg-white mx-2 sm:mx-4 my-4 sm:my-8 overflow-hidden">
        <div className="h-full">
          {/* Left Side - Form */}
          <div className="p-3 sm:p-4">
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

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
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
                    className="mt-1"
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
                      className="pl-16"
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
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label htmlFor="state" className="text-sm font-bold text-gray-700">
                    State *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("state", value)}>
                    <SelectTrigger className="mt-1">
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
                  <Label htmlFor="course" className="text-sm font-bold text-gray-700">
                    Course *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("course", value)}>
                    <SelectTrigger className="mt-1">
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

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 sm:py-3">
                Find Best University in 2 Mins
              </Button>
            </form>

            <div className="mt-3 sm:mt-4 text-center">
              <p className="text-xs text-gray-500">
                🔒 Your personal information is secure with us
              </p>
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CounselingForm;
