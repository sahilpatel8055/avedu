import { useCounselingForm } from "@/hooks/use-counseling-form";
import { useIntelligentPopup } from "@/hooks/use-intelligent-popup";
import { Button } from "@/components/ui/button";
const GlobalIntelligentPopup = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();

  // Initialize intelligent popup with default configuration
  useIntelligentPopup(openForm, {
    timeDelay: 15,
    scrollThreshold: 50,
    submissionCooldown: 10,
    closureCooldown: 5
  });

  return (
    <>
      {/* Mobile floating CTA */}
      <div className="md:hidden fixed bottom-4 right-4 z-30">
        <Button className="rounded-full px-4 py-2 shadow-lg" onClick={openForm}>
          Get 100% free counseling session
        </Button>
      </div>
      <CounselingFormComponent />
    </>
  );
};

export default GlobalIntelligentPopup;
