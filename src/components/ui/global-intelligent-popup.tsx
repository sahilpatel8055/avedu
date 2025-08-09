import { useCounselingForm } from "@/hooks/use-counseling-form";
import { useIntelligentPopup } from "@/hooks/use-intelligent-popup";
import { useEffect } from "react";

const GlobalIntelligentPopup = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();

  // Wire global event so any component can open the counseling form
  useEffect(() => {
    const handler = (_e: Event) => openForm();
    document.addEventListener("open-counseling", handler);
    return () => {
      document.removeEventListener("open-counseling", handler);
    };
  }, [openForm]);

  // Initialize intelligent popup with default configuration
  useIntelligentPopup(openForm, {
    timeDelay: 20,
    scrollThreshold: 35,
    submissionCooldown: 10,
    closureCooldown: 5
  });

  return <CounselingFormComponent />;
};

export default GlobalIntelligentPopup;