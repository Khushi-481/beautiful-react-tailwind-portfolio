import { ArrowDown } from "lucide-react";
import khushiImage from "@/assets/dp.jpeg"; // Adjust path as needed

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 text-white overflow-hidden pt-24" // Added pt-24 for top padding
    >
      <div className="container mx-auto z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-8xl">
        {/* Left: Text Content */}
        <div className="md:w-1/2 flex flex-col items-start md:pl-8 space-y-6">
          {/* Welcome Banner */}
          <div className="mb-4">
            <span
              className="inline-block px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-rcosmic-button mx-auto border border-white/40 shadow-md text-lg md:text-xl"
              style={{
                fontFamily: "inherit",
                letterSpacing: "0.01em",
                boxShadow: "0 2px 24px 0 rgba(80,80,120,0.10)",
              }}
            >
              Welcome to my Portfolio
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-purple-400 opacity-0 animate-fade-in-delay-1 ml-2">
              Khushi
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Verma
            </span>
          </h1>

          <p className="text-lg md:text-0.1xl text-gray-400 max-w-1xl opacity-0 animate-fade-in-delay-3">
            a Computer Science and Artificial Intelligence student at NSUT, New Delhi.
            Enthusiastic learner with hands-on experience in programming, data analysis, and collaborative software projects.
          </p>

          <div className="text-1xl pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center w-full">
            <a href="#projects" className="cosmic-button mx-auto">
              View My Work
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="mb-10 md:mb-0 md:w-1/2 flex justify-center items-center">
          <img
            src={khushiImage}
            alt="Khushi Verma"
            className="w-[30rem] h-[30rem] rounded-full border-4 shadow-lg object-cover transition-transform duration-300 ease-in-out hover:animate-wiggle brightness-75"
            style={{ minWidth: "280px", minHeight: "280px" }} // Decreased size
          />
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-purple-400" />
      </div>

      {/* Wiggle animation */}
      <style>
        {`
          @keyframes wiggle {
            0% { transform: scale(1) rotate(0deg);}
            15% { transform: scale(1.06) rotate(-5deg);}
            30% { transform: scale(1.08) rotate(4deg);}
            45% { transform: scale(1.06) rotate(-3deg);}
            60% { transform: scale(1.04) rotate(2deg);}
            75% { transform: scale(1.02) rotate(-1deg);}
            100% { transform: scale(1) rotate(0deg);}
          }
          .hover\\:animate-wiggle:hover {
            animation: wiggle 0.7s cubic-bezier(.36,.07,.19,.97) both;
          }
        `}
      </style>
    </section>
  );
};
