import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import GlobalIntelligentPopup from "@/components/ui/global-intelligent-popup";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Universities from "./pages/Universities";
import IGNOU from "./pages/university/IGNOU";
import Manipal from "./pages/university/Manipal";
import Uttaranchal from "./pages/university/Uttaranchal";
import VGU from "./pages/university/VGU";
import Sikkim from "./pages/university/Sikkim";
import Amity from "./pages/university/Amity";
import LPU from "./pages/university/LPU";
import Mangalyatan from "./pages/university/Mangalyatan";
import DUSOL from "./pages/university/DUSOL";
import JainUniversity from "./pages/university/JainUniversity";
// Old course pages (from your home page) - DO NOT REMOVE
import OnlineMBA from "./pages/courses/OnlineMBA";
import OnlineTech from "./pages/courses/OnlineTech";
import OnlineBBA from "./pages/courses/OnlineBBA";
import OnlineCommerce from "./pages/courses/OnlineCommerce";
import OnlineArts from "./pages/courses/OnlineArts";
import OnlineMCA from "./pages/courses/OnlineMCA";
import OnlineMCOM from "./pages/courses/OnlineMCOM";
import OnlineMA from "./pages/courses/OnlineMA";
// NEW dynamic course page (general)
import CoursePage from "./pages/course/CoursePage";
// NEW Manipal dynamic course page
import ManipalCoursePage from "./pages/course/ManipalCoursePage";
// NEW Uttaranchal dynamic course page
import UttaranchalCoursePage from "./pages/course/UttaranchalCoursePage";
// NEW VGU dynamic course page
import VguCoursePage from "./pages/course/VguCoursePage";
// NEW Sikkim dynamic course page
import SikkimCoursePage from "./pages/course/SikkimCoursePage";
// NEW Amity dynamic course page
import AmityCoursePage from "./pages/course/AmityCoursePage";
// NEW LPU dynamic course page
import LPUCoursePage from "./pages/course/LPUCoursePage";
// NEW Mangalyatan dynamic course page
import MangalayatanCoursePage from "./pages/course/MangalayatanCoursePage";
// NEW DU SOL dynamic course page
import DUSOLCoursePage from "./pages/course/DUSOLCoursePage";
// Legal pages
import Disclaimer from "./pages/legal/Disclaimer";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsConditions from "./pages/legal/TermsConditions";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import UniversityComparison from "./pages/UniversityComparison";

// Component to scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
};

const App = () => {
  const location = useLocation();
  
  return (
    <>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      {!location.pathname.includes('/courses/mba') && <GlobalIntelligentPopup />}
    <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/university/ignou" element={<IGNOU />} />
          <Route path="/university/manipal" element={<Manipal />} />
          <Route path="/university/uttaranchal" element={<Uttaranchal />} />
          <Route path="/university/vgu" element={<VGU />} />
          <Route path="/university/smu" element={<Sikkim />} />
          <Route path="/university/amity" element={<Amity />} />
          <Route path="/university/lpu" element={<LPU />} />
          <Route path="/university/mangalyatan" element={<Mangalyatan />} />
          <Route path="/university/du-sol" element={<DUSOL />} />
          <Route path="/university/jain" element={<JainUniversity />} />
          {/* Your original course routes - these remain unchanged */}
          <Route path="/courses/mba" element={<OnlineMBA />} />
          <Route path="/courses/mca" element={<OnlineMCA />} />
          <Route path="/courses/mcom" element={<OnlineMCOM />} />
          <Route path="/courses/ma" element={<OnlineMA />} />
          <Route path="/courses/bca" element={<OnlineTech />} />
          <Route path="/courses/bba" element={<OnlineBBA />} />
          <Route path="/courses/bcom" element={<OnlineCommerce />} />
          <Route path="/courses/ba" element={<OnlineArts />} />
          {/* The new dynamic route, now correctly pointing to /courses/:courseId */}
          <Route path="/courses/:courseId" element={<CoursePage />} />
          {/* The new route for Manipal's specific course pages */}
          <Route path="/university/manipal/courses/:courseId" element={<ManipalCoursePage />} />
          {/* The new route for Uttaranchal's specific course pages */}
          <Route path="/university/uttaranchal/:courseId" element={<UttaranchalCoursePage />} />
          {/* Add the new dynamic route for VGU courses */}
          <Route path="/university/vgu/:courseId" element={<VguCoursePage />} />
          {/* Add routes for Sikkim, Amity, LPU, and Mangalyatan course pages */}
          <Route path="/university/sikkim/:courseId" element={<SikkimCoursePage />} />
          <Route path="/university/amity/:courseId" element={<AmityCoursePage />} />
          <Route path="/university/lpu/:courseId" element={<LPUCoursePage />} />
<Route path="/university/mangalyatan/:courseId" element={<MangalayatanCoursePage />} />
<Route path="/university/du-sol/:courseId" element={<DUSOLCoursePage />} />
          {/* Legal pages */}
          {/* University Comparison Page */}
          <Route path="/comparison" element={<UniversityComparison />} />
          {/* Legal pages */}
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
};

export default App;
