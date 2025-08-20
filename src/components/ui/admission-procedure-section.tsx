import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  FileText, 
  CreditCard, 
  Phone,
  Users,
  Award,
  MessageSquare,
  Globe
} from "lucide-react";
import { useCounselingForm } from "@/hooks/use-counseling-form";

interface AdmissionProcedureSectionProps {
  courseName?: string;
  universityName?: string;
  type?: 'course' | 'university';
}

const AdmissionProcedureSection: React.FC<AdmissionProcedureSectionProps> = ({ 
  courseName = "Online MBA", 
  universityName = "University",
  type = 'course'
}) => {
  const { openForm } = useCounselingForm();

  const steps = [
    {
      step: "Sign Up",
      title: "Application Form",
      description: "Open the University's/ college/ institute webpage, Log in with the account",
      icon: <Globe className="h-8 w-8 text-white" />
    },
    {
      step: "Documents",
      title: "Documents",
      description: "And, choose the program and add the credentials which are required",
      icon: <FileText className="h-8 w-8 text-white" />
    },
    {
      step: "Fees Submission",
      title: "Fees Submission", 
      description: "Register yourself there and move to the payment section.",
      icon: <CreditCard className="h-8 w-8 text-white" />
    },
    {
      step: "Verification",
      title: "Verification",
      description: "Pay the reliable charges and obtain the confirmation on your phone or email.",
      icon: <CheckCircle className="h-8 w-8 text-white" />
    },
    {
      step: "Confirmation",
      title: "Confirmation",
      description: "Complete your admission process and start your learning journey.",
      icon: <Award className="h-8 w-8 text-white" />
    }
  ];

  const benefits = [
    {
      title: "Trusted Information",
      description: "We provide only authentic information from verified universities to save you from fraud.",
      icon: <CheckCircle className="h-10 w-10 text-blue-600" />
    },
    {
      title: "Hassle-Free Admission Process",
      description: "Enroll in your program via a simplified process guided by our expert counselors.",
      icon: <FileText className="h-10 w-10 text-blue-600" />
    },
    {
      title: "Pay Directly to the University",
      description: "The guidance & support offered by us is completely free, so you can trust us & pay directly to the university.",
      icon: <CreditCard className="h-10 w-10 text-blue-600" />
    },
    {
      title: "CV Community at the Center",
      description: "Join our telegram community to share your thoughts with other learners & alumni.",
      icon: <MessageSquare className="h-10 w-10 text-blue-600" />
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#1e3a8a' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {type === 'course' ? `${courseName} Admission Procedure` : `${universityName} Online Admission Procedure`}
          </h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-6">
            Learn the online {type === 'course' ? `${courseName} course` : `${universityName}`} admission process for enrolling in the online {type === 'course' ? `${courseName} course` : 'programs'} at any university, get through the down steps;
          </p>
        </div>

        {/* Step Details */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.slice(0, 4).map((step, index) => (
              <Card key={index} className="bg-white/10 border-blue-400 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-4 mx-auto">
                    {React.cloneElement(step.icon, { className: "h-6 w-6 text-white" })}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/10 border-blue-400 backdrop-blur-sm h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed flex-grow">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-blue-400">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-blue-100 mb-6">
              Get personalized guidance from our expert counselors for free
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-800 hover:bg-blue-50"
                onClick={openForm}
              >
                <Phone className="h-5 w-5 mr-2" />
                Get Free Counselling
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-800"
                onClick={openForm}
              >
                <FileText className="h-5 w-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcedureSection;