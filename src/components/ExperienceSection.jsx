import nsutLogo from '@/assets/nsutLogo.png';

const experiences = [
  {
    title: "Artificial Intelligence Research Intern",
    organization: "NSUT, CSE Department",
    duration: "Feb 2024 – April 2024",
    logo: nsutLogo,
    description: `Researched Gazelle Herding Optimization algorithms and applied them to real-world optimization problems. Achieved a 30% boost in efficiency and reduced resource usage by 20%. Enhanced exploration and exploitation capabilities using AI, validated on CEC benchmark datasets.`,
    skills: [
      "Python",
      "MATLAB",
      "Gazelle Herding Optimization",
      "AI",
      "CEC 2014/2017",
      "Research"
    ]
  }
];

const ExperienceSection = () => (
  <section
    id="experience"
    className="py-16 md:py-20 px-4 text-white text-center"
  >
    <h2 className="font-bold text-4xl md:text-4xl tracking-wide mb-12">
      Experience
    </h2>
    <div className="mb-8 text-[#b0b0b0] text-lg max-w-2xl mx-auto">
      A collection of my work experience and the roles I have taken in various organizations
    </div>
    <div className="flex justify-center">
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 px-18 py-15 max-w-[500px] mx-3 text-left relative flex flex-col"
        >
          <div className="flex items-center mb-5">
            <img
              src={exp.logo}
              alt="Organization Logo"
              className="w-15 h-13 rounded-xl bg-white mr-4 border-2 border-[#eee]"
            />
            <div>
              <div className="font-bold text-lg md:text-xl text-white">
                {exp.title}
              </div>
              <div className="text-[#b0b0b0] text-base">{exp.organization}</div>
              <div className="text-[#b0b0b0] text-sm">{exp.duration}</div>
            </div>
          </div>
          <div className="text-[#d1d1d1] text-base mb-5">
            {exp.description}
          </div>
          <div>
            <span className="text-[#b0b0b0] font-semibold">Skills:</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-[#7c3aed] text-white rounded-md px-4 py-1 text-sm font-medium tracking-wide"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
