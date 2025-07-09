import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Quantum CryptAnalysis",
    description: "Developed a quantum cryptanalysis framework leveraging Grover’s and BV algorithms to attack Simon’s Problem and QKD protocols, achieving a 50% reduction in quantum query complexity and exposing vulnerabilities in quantum cryptographic systems.",
    image: "/projects/quantumLogo.jpeg",
    tags: ["Quantum Computing", "QKD", "Grover’s", "Simon’s", "Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/Khushi-481/Quantum-Cryptanalysis",
  },
  {
    id: 2,
    title: "Hybrid GAN‑PSO Framework for Image Enhancement",
    description:
      "Designed a hybrid framework combining GANs and Particle Swarm Optimization for low‑light image enhancement. Results showed a 2 dB average improvement in PSNR over standard GAN models.",
    image: "/projects/ganPsoLogo.jpg",
    tags: ["GAN", "PSO", "Deep Learning", "Python", "PyTorch"],
    demoUrl: "#",
    githubUrl: "https://github.com/Khushi-481/Hybrid-GAN-PSO-Framework-for-Image-Enhancement",
  },
  {
    id: 3,
    title: "Modified Gazelle Optimization Algorithm",
    description:
      "Enhanced the Gazelle Herding Optimization meta‑heuristic and tested it on real‑world and mathematical functions. Observed up to 30% efficiency gains and reduced resource usage by 20%.",
    image: "/projects/gazelleLogo.png",
    tags: ["Optimization", "GA", "Python", "Benchmarking"],
    demoUrl: "#",
    githubUrl: "https://github.com/Khushi-481/Advanced-Gazelle-Optimisation-Algorithm",
  },
   {
    id: 4,
    title: "Driver Drowsiness Detection & Alert System",
    description: "Implemented a real‑time driver drowsiness detection system using face landmarks and Eye Aspect Ratio (EAR). The model achieved 94% accuracy and triggered alerts upon detecting prolonged eye closure.",
    image: "/projects/drowsinessLogo.jpg",
    tags: ["Computer Vision", "OpenCV", "Python", "Real‑Time"],
    demoUrl: "#",
    githubUrl: "https://github.com/Khushi-481/Driver-Drowsiness-Detection-and-Alert-System",
  },
   {
    id: 5,
    title: "Talkify: Smart Real-Time Communication",
    description: "Built a real-time chat app with instant messaging and <100ms delivery latency, enhancing user experience. Used Socket.io for real-time communication and MongoDB for scalable user and message storage.",
    image: "/projects/talkifyLogo.png",
    tags: ["React", "Node.js", "Socket.io"," MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/Khushi-481/TalkiFy-Smart-RealTime-Communication-App",
  },
   {
    id: 6,
    title: "VitalsWeb ",
    description: "Developed a custom web app to streamline hospital operations and improve patient care. Automated routine workflows to reduce manual errors, focusing on scalability and modularity for future enhancements.",
    image: "/projects/vitalsLogo.jpeg",
    tags: ["PHP", "HTML", "CSS", "JavaScript" ,"AJAX"],
    demoUrl: "#",
    githubUrl: "https://github.com/Khushi-481/Health-Sphere-System",
  },
   
    {
    id: 7,
    title: "YouTube‑Clone",
    description:"A YouTube‑style video streaming platform built with React, leveraging the YouTube Data API. Features include search, video playback, comments, and subscription functionality.",
    image: "/projects/youtubeCloneLogo.png",
    tags: ["React JS", "YouTube API", "Video Streaming", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Khushi-481/Youtube-Clone",
  },
   
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> PROJECTS </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
         A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-1"
            target="_blank"
            href="https://github.com/Khushi-481"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
