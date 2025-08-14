import GlobalIntelligentPopup from "./global-intelligent-popup";
import BellPopup from "./bell-popup";
import { useCounselingForm } from "@/hooks/use-counseling-form";

const GlobalComponents = () => {
  const { openForm, isOpen } = useCounselingForm();

  return (
    <>
      <GlobalIntelligentPopup />
      <BellPopup onApplyNow={openForm} isCounselingFormOpen={isOpen} />
    </>
  );
};

export default GlobalComponents;