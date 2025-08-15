import { useState } from "react";
import { Check, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FlippableDegreeSectionProps {
  universityName: string;
  frontImagePath: string;
  backImagePath: string;
  title?: string;
}

const FlippableDegreeSection = ({ 
  universityName, 
  frontImagePath,
  backImagePath,
  title = "Sample Degree" 
}: FlippableDegreeSectionProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="py-16" id="degree">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side: Description */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-prose">
              The degrees offered by {universityName} are valid and recognized by various government bodies, making them suitable for all career opportunities.
            </p>
            <ul className="space-y-4 text-left mx-auto md:mx-0 max-w-sm">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">UGC-DEB & AICTE Approved</p>
                  <p className="text-sm text-muted-foreground">The degrees are fully valid for government, private, and overseas jobs or higher studies.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Digital Verification</p>
                  <p className="text-sm text-muted-foreground">Supports online QR-code-based verification for authenticity.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Officially Stamped</p>
                  <p className="text-sm text-muted-foreground">Authenticated with the official university seal.</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Right side: Flippable Image */}
          <div className="flex-1 max-w-lg mx-auto md:max-w-none">
            <div className="relative">
              <div className="relative p-4 rounded-xl shadow-2xl bg-white transition-transform duration-500 hover:scale-105 perspective-1000">
                <div 
                  className={`relative transition-transform duration-700 transform-style-preserve-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front of degree */}
                  <div className="backface-hidden">
                    <img
                      src={frontImagePath}
                      alt={`${universityName} Sample Degree - Front`}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                  {/* Back of degree */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <img
                      src={backImagePath}
                      alt={`${universityName} Sample Degree - Back`}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <Button
                  onClick={() => setIsFlipped(!isFlipped)}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  {isFlipped ? "Show Front" : "Show Back"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlippableDegreeSection;