import mujImage from "@/assets/muj.png";

const UniversitySlideshow = () => {
  return (
    <div className="relative w-full h-48 sm:h-56 lg:h-64 mb-6 sm:mb-8 overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-background to-primary/5 shadow-lg border border-border/50">
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      {/* Main image */}
      <div className="relative w-full h-full p-4 flex items-center justify-center">
        <img
          src={mujImage}
          alt="Manipal University Jaipur"
          className="max-w-full max-h-full object-contain drop-shadow-lg"
        />
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background/20 to-transparent"></div>
    </div>
  );
};

export default UniversitySlideshow;