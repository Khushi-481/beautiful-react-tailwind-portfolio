import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-27 px-5 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-purple-400">ME</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Problem Solver and Developer
            </h3>

            <p className="text-gray-400">
              As a Computer Science and AI undergraduate at NSUT, I’m driven by a passion for applying machine learning to real-world challenges. I’ve worked on quantum cryptanalysis, image enhancement with GANs, and full-stack applications that deliver meaningful impact. With experience in AI research and development using tools like Python, TensorFlow, and React, I aim to innovate at the intersection of intelligence and creativity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1ZXibEg5AHfrrX8fESxc7XUlXlMPrqzLt/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-purple-400 text-purple-400 hover:bg-purple-900/30 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover bg-gray-900 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-900/30">
                  <Code className="h-6 w-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Developer</h4>
                  <p className="text-gray-400">
                    Developing clean, scalable software with a focus on functionality, performance, and user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover bg-gray-900 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-900/30">
                  <User className="h-6 w-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Fullstack Developer</h4>
                  <p className="text-gray-400">
                    Crafting end-to-end web applications with scalable backends, responsive frontends, and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover bg-gray-900 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-900/30">
                  <Briefcase className="h-6 w-6 text-purple-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Scientist</h4>
                  <p className="text-gray-400">
                    Applying machine learning and analytics to uncover insights and build data-driven solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
