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
        
        {/* 3D Ring Carousel Container */}
        <div className="relative h-80 md:h-96 perspective-[1000px] overflow-hidden">
          {/* Carousel ring container */}
          <div className="carousel-3d h-full flex items-center justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 transform-style-preserve-3d">
              {slides.map((slide, index) => {
                const angle = (index * 360) / slides.length;
                const rotateY = angle;
                const translateZ = 180; // Distance from center
                
                return (
                  <div 
                    key={index} 
                    className="carousel-item absolute w-40 h-32 md:w-48 md:h-36 left-1/2 top-1/2 -ml-20 -mt-16 md:-ml-24 md:-mt-18 transition-all duration-700 ease-in-out cursor-pointer hover:scale-110"
                    style={{
                      transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
                    }}
                  >
                    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium opacity-0 hover:opacity-100 transition-opacity duration-300">
                        {slide.alt}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            onClick={() => {
              const carousel = document.querySelector('.carousel-3d .relative') as HTMLElement;
              if (carousel) {
                const currentRotation = parseInt(carousel.style.transform.match(/rotateY\((-?\d+)deg\)/)?.[1] || '0');
                carousel.style.transform = `rotateY(${currentRotation - 60}deg)`;
              }
            }}
          >
            &#8249;
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            onClick={() => {
              const carousel = document.querySelector('.carousel-3d .relative') as HTMLElement;
              if (carousel) {
                const currentRotation = parseInt(carousel.style.transform.match(/rotateY\((-?\d+)deg\)/)?.[1] || '0');
                carousel.style.transform = `rotateY(${currentRotation + 60}deg)`;
              }
            }}
          >
            &#8250;
          </button>
          
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl -z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default ConvocationSlider;
