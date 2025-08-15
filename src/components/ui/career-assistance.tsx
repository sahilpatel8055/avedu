import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import React from 'react';

// Import the image directly
import placementImage from "@/assets/placement.jpg";

const CareerAssistance = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Career Assistance
        </h2>
        <p className="text-center text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Get end-to-end career support including resume building, mock interviews, skill training, and job placement assistance to boost your employability after completing your online UG or PG course.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side with image */}
          <div className="flex justify-center items-center">
            <img 
              src={placementImage} 
              alt="A working professional" 
              className="w-full max-w-sm md:max-w-xs lg:max-w-sm rounded-lg shadow-lg h-auto" 
            />
          </div>

          {/* Right side with cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-6 transition-colors duration-300 hover:bg-red-600 hover:text-white group">
              <CardContent className="flex flex-col gap-4 p-0">
                <div className="flex items-center gap-4">
                    <Star className="text-primary h-6 w-6 group-hover:text-white" />
                    <h3 className="text-xl font-semibold">AI-Powered Resume Builder</h3>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-white">
                    Instantly create professional resumes tailored to your profile using AI.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 transition-colors duration-300 hover:bg-red-600 hover:text-white group">
              <CardContent className="flex flex-col gap-4 p-0">
                <div className="flex items-center gap-4">
                    <Star className="text-primary h-6 w-6 group-hover:text-white" />
                    <h3 className="text-xl font-semibold">Mock Video Interview</h3>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-white">
                    Practice real-time interview scenarios to boost your confidence.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 transition-colors duration-300 hover:bg-red-600 hover:text-white group">
              <CardContent className="flex flex-col gap-4 p-0">
                <div className="flex items-center gap-4">
                    <Star className="text-primary h-6 w-6 group-hover:text-white" />
                    <h3 className="text-xl font-semibold">Personality Test</h3>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-white">
                    Understand your strengths and traits with an insightful personality assessment.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 transition-colors duration-300 hover:bg-red-600 hover:text-white group">
              <CardContent className="flex flex-col gap-4 p-0">
                <div className="flex items-center gap-4">
                    <Star className="text-primary h-6 w-6 group-hover:text-white" />
                    <h3 className="text-xl font-semibold">Aptitude Test Training</h3>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-white">
                    Sharpen your reasoning and problem-solving skills with expert-guided prep.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 transition-colors duration-300 hover:bg-red-600 hover:text-white group">
              <CardContent className="flex flex-col gap-4 p-0">
                <div className="flex items-center gap-4">
                    <Star className="text-primary h-6 w-6 group-hover:text-white" />
                    <h3 className="text-xl font-semibold">Skills Enhancement</h3>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-white">
                    Improve industry-relevant skills through targeted training programs.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 transition-colors duration-300 hover:bg-red-600 hover:text-white group">
              <CardContent className="flex flex-col gap-4 p-0">
                <div className="flex items-center gap-4">
                    <Star className="text-primary h-6 w-6 group-hover:text-white" />
                    <h3 className="text-xl font-semibold">Job Openings</h3>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-white">
                    Explore curated job opportunities across top companies and sectors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerAssistance;
