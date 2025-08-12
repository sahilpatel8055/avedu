import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EmbeddedCounselingForm from "@/components/ui/embedded-counseling-form";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import {
  Star,
  MapPin,
  Users,
  GraduationCap,
  Award,
  DollarSign,
  BookOpen,
  Clock,
  Check,
} from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import UniversitySlideshow from "@/components/ui/university-slideshow";
import duSolLogo from "@/assets/uni_logo/DU_SOL.png";
import ignouDegreeImg from "@/assets/ignou-degree.png";

import { Link } from 'react-router-dom';
import courseData from '../../data/courseData.json';

import ugcIcon from "@/assets/icons/ugc-icon.png";
import aicteIcon from "@/assets/icons/aicte-icon.png";
import wesIcon from "@/assets/icons/wes-icon.png";
import naacIcon from "@/assets/icons/naac-icon.png";
import nirfIcon from "@/assets/icons/nirf-icon.png";
import aiuIcon from "@/assets/icons/aiu-icon.png";

import mbaImg from "@/assets/course/mba.jpg";
import bbaImg from "@/assets/course/bba.jpg";
import mcaImg from "@/assets/course/mca.jpg";
import bcaImg from "@/assets/course/bca.jpg";
import baImg from "@/assets/course/ba.jpg";
import bcomImg from "@/assets/course/bcom.jpg";

const DUSOL = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();

  const features = [
    "Flexible online and distance programs",
    "Affordable fees with quality education",
    "Strong alumni network and support",
    "Recognized degrees with UGC approval",
  ];

  const approvals = [
    { name: "UGC-DEB", description: "University Grants Commission - Distance Education Bureau", icon: ugcIcon },
    { name: "AICTE", description: "All India Council for Technical Education", icon: aicteIcon },
    { name: "WES", description: "World Education Services", icon: wesIcon },
    { name: "AIU", description: "Association of Indian Universities", icon: aiuIcon },
    { name: "NAAC A+", description: "National Assessment and Accreditation Council", icon: naacIcon },
    { name: "NIRF", description: "Ranked in University Category", icon: nirfIcon },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-6" id="top">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <UniversitySlideshow />
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <img src={duSolLogo} alt="DU SOL Logo" className="w-20 h-20 rounded-lg" />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">DU SOL</h1>
                  <p className="text-lg text-muted-foreground">School of Open Learning, University of Delhi</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 mb-8 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>New Delhi, India</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-primary" />
                  <span>500K+ Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>UG & PG Programs</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg" onClick={openForm}>
                  Apply Now
                </Button>
                <Button variant="outline" className="px-8 py-3 text-lg" onClick={openForm}>
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="flex-1 lg:max-w-md">
              <EmbeddedCounselingForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Approvals & Accreditations</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {approvals.map((approval, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center mb-4">
                    <img src={approval.icon} alt={`${approval.name} Icon`} className="w-24 h-24 object-contain" />
                  </div>
                  <CardTitle className="text-lg text-primary">{approval.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{approval.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {Object.entries(courseData).map(([courseId, course]) => {
              let courseImage = baImg;
              if (courseId.includes('mba')) courseImage = mbaImg;
              else if (courseId.includes('bba')) courseImage = bbaImg;
              else if (courseId.includes('mca')) courseImage = mcaImg;
              else if (courseId.includes('bca')) courseImage = bcaImg;
              else if (courseId.includes('bcom')) courseImage = bcomImg;
              else if (courseId.includes('ba') || courseId.includes('ma')) courseImage = baImg;

              return (
                <Card key={courseId} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-center mb-4">
                      <img src={courseImage} alt={course.name} className="w-16 h-16 object-cover rounded-lg" />
                    </div>
                    <CardTitle className="text-lg text-center">{course.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span className="font-semibold">{course.fees}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <Link to={`/university/du-sol/${courseId}`}>
                      <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" variant="outline">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <CounselingFormComponent />
    </div>
  );
};

export default DUSOL;
