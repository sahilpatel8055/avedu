import React from 'react';
import { cn } from "@/lib/utils";

// Import all 7 images with the correct paths
import convocation1 from "@/assets/convocation/1.jpg";
import convocation2 from "@/assets/convocation/2.jpg";
import convocation3 from "@/assets/convocation/3.jpg";
import convocation4 from "@/assets/convocation/4.jpg";
import convocation5 from "@/assets/convocation/5.jpg";
import convocation6 from "@/assets/convocation/6.jpg";
import convocation7 from "@/assets/convocation/7.jpg";

const slides = [
  { src: convocation1, alt: "Convocation Ceremony 1" },
  { src: convocation2, alt: "Convocation Ceremony 2" },
  { src: convocation3, alt: "Convocation Ceremony 3" },
  { src: convocation4, alt: "Convocation Ceremony 4" },
  { src: convocation5, alt: "Convocation Ceremony 5" },
  { src: convocation6, alt: "Convocation Ceremony 6" },
  { src: convocation7, alt: "Convocation Ceremony 7" },
];

const ConvocationSlider = () => {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Convocation Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrate graduation during the Convocation event at our campus, interact with fellow graduates, meet faculty, and foster professional connections for career growth.
          </p>
        </div>
        
        {/* Bay Window Style Container */}
        <div className="relative h-80 md:h-96 perspective-1000 overflow-hidden">
          {/* Black background for bay window effect */}
          <div className="absolute inset-0 bg-black rounded-3xl shadow-2xl"></div>
          
          {/* Curved container for images */}
          <div className="absolute inset-8 md:inset-12">
            <div className="bay-window-container h-full overflow-x-auto scrollbar-hide">
              <div className="flex items-center h-full gap-6 px-8" style={{ width: 'max-content' }}>
                {slides.map((slide, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "bay-window-image flex-shrink-0 transition-all duration-500",
                      index === 0 && "transform -rotate-12 scale-90 -translate-x-4",
                      index === 1 && "transform -rotate-6 scale-95 -translate-x-2", 
                      index === 2 && "transform scale-100 z-10",
                      index === 3 && "transform rotate-6 scale-95 translate-x-2",
                      index === 4 && "transform rotate-12 scale-90 translate-x-4",
                      index === 5 && "transform rotate-18 scale-85 translate-x-6",
                      index === 6 && "transform rotate-24 scale-80 translate-x-8"
                    )}
                  >
                    <div className="relative w-48 h-36 md:w-56 md:h-42 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Scroll indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors cursor-pointer"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConvocationSlider;
