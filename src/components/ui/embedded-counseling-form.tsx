import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh"
];

const courses = [
  { value: "online-mba", label: "Online MBA" },
  { value: "online-mca", label: "Online MCA" },
  { value: "online-mcom", label: "Online M.Com" },
  { value: "online-bcom", label: "Online B.Com" },
  { value: "online-bba", label: "Online BBA" },
  { value: "online-ba", label: "Online BA" },
  { value: "online-ma", label: "Online MA" },
  { value: "online-bca", label: "Online BCA" },
  { value: "online-bsc", label: "Online B.Sc" },
  { value: "online-msc", label: "Online M.Sc" }
];

const EmbeddedCounselingForm: React.FC = () => {
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

    console.log("Form submitted:", formData);
    toast({
      title: "Form Submitted Successfully!",
      description: "Our counselor will contact you within 24 hours.",
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full bg-card/50 backdrop-blur-sm border-primary/20">
      <CardHeader className="pb-4">
        <CardTitle className="text-center text-primary">Get Free Counseling</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="fullName" className="text-sm font-medium">
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
            <Label htmlFor="contactNumber" className="text-sm font-medium">
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
                placeholder="Enter mobile number"
                required
                className="pl-16"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="state" className="text-sm font-medium">
              State *
            </Label>
            <Select onValueChange={(value) => handleInputChange("state", value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select state" />
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
            <Label htmlFor="city" className="text-sm font-medium">
              City *
            </Label>
            <Input
              id="city"
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="Enter your city"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="course" className="text-sm font-medium">
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

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
            />
            <Label htmlFor="consent" className="text-xs text-gray-600 leading-relaxed">
              I agree to receive communications & accept our Privacy Policy and Terms & Conditions
            </Label>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            <Phone className="h-4 w-4 mr-2" />
            Get Free Counseling
          </Button>
        </form>

        <div className="mt-3 text-center">
          <p className="text-xs text-gray-500">
            🔒 Your information is secure with us
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmbeddedCounselingForm;