import React from "react";
import { Bell, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBellPopup } from "@/hooks/use-bell-popup";

interface BellPopupProps {
  onApplyNow: () => void;
  isCounselingFormOpen?: boolean;
}

const BellPopup = ({ onApplyNow, isCounselingFormOpen = false }: BellPopupProps) => {
  const {
    isPopupVisible,
    handleBellClick,
    handleApplyNow,
    handleClose,
    hideBellPopup
  } = useBellPopup(onApplyNow);

  // Hide popup when counseling form is open
  React.useEffect(() => {
    if (isCounselingFormOpen) {
      hideBellPopup();
    }
  }, [isCounselingFormOpen, hideBellPopup]);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Bell Icon */}
      <div
        onClick={handleBellClick}
        className="relative cursor-pointer p-3 bg-orange-500/70 rounded-full shadow-lg hover:bg-orange-600/70 transition-colors duration-200"
      >
        <Bell className="w-6 h-6 text-white" />
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="absolute bottom-16 right-0 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-4 transform transition-all duration-300 ease-out animate-scale-in">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>

          {/* Content */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold leading-tight" style={{ color: '#000000' }}>
              Admission for july batch is closing Soon
            </h3>
            
            <p className="text-sm font-medium relative">
              <span className="inline-block animate-shimmer bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%]">
                Claim upto 30% scholarship !
              </span>
            </p>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleApplyNow();
              }}
              className="w-full text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm"
              style={{ backgroundColor: '#DC143C' }}
            >
              Apply Now
            </button>
          </div>

          {/* Arrow pointing to bell */}
          <div className="absolute bottom-[-8px] right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      )}
    </div>
  );
};

export default BellPopup;