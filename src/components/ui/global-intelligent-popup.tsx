import { useCounselingForm } from "@/hooks/use-counseling-form";
import { useIntelligentPopup } from "@/hooks/use-intelligent-popup";

const GlobalIntelligentPopup = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();

  // Initialize intelligent popup with default configuration
  useIntelligentPopup(openForm, {
    timeDelay: 25,
    scrollThreshold: 50,
    submissionCooldown: 10,
    closureCooldown: 5
  });

  return <CounselingFormComponent />;
};

export default GlobalIntelligentPopup;