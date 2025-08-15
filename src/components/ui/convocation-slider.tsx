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
        
        {/* Grid Layout for Images */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-80 md:w-96 snap-start"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-64 md:h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Fade effects on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default ConvocationSlider;
