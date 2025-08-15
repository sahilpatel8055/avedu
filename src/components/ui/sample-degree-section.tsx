import { Check } from "lucide-react";

interface SampleDegreeSectionProps {
  universityName: string;
  degreeImagePath: string;
  title?: string;
}

const SampleDegreeSection = ({ 
  universityName, 
  degreeImagePath,
  title = "Sample Degree" 
}: SampleDegreeSectionProps) => {
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
          {/* Right side: Image */}
          <div className="flex-1 max-w-lg mx-auto md:max-w-none">
            <div className="relative p-4 rounded-xl shadow-2xl bg-white transition-transform duration-300 hover:scale-105">
              <img
                src={degreeImagePath}
                alt={`${universityName} Sample Degree`}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleDegreeSection;