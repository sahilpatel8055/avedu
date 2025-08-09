import { useState } from "react";
import CounselingForm from "@/components/ui/counseling-form";

export const useCounselingForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  // Handle form submission to set cooldown
  const handleFormSubmission = () => {
    localStorage.setItem('counseling_last_submission', Date.now().toString());
    localStorage.removeItem('counseling_last_closure'); // Clear closure cooldown
  };

  // Handle form closure to set cooldown
  const handleFormClosure = () => {
    if (!localStorage.getItem('counseling_last_submission')) {
      localStorage.setItem('counseling_last_closure', Date.now().toString());
    }
  };

  const CounselingFormComponent = () => (
    <CounselingForm 
      open={isOpen} 
      onOpenChange={setIsOpen}
      onFormSubmit={handleFormSubmission}
      onFormClose={handleFormClosure}
    />
  );

  return {
    openForm,
    closeForm,
    isOpen,
    CounselingFormComponent
  };
};