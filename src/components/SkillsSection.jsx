// SkillsSection.jsx

import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import jsLogo from "../assets/tech_logo/javascript.png";
import reactLogo from "../assets/tech_logo/reactjs.png";
import nextjsLogo from "../assets/tech_logo/nextjs.png";
import sassLogo from "../assets/tech_logo/sass.png";
import tailwindLogo from "../assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "../assets/tech_logo/bootstrap.png";
import nodejsLogo from "../assets/tech_logo/nodejs.png";
import expressLogo from "../assets/tech_logo/express.png";
import mysqlLogo from "../assets/tech_logo/mysql.png";
import mongodbLogo from "../assets/tech_logo/mongodb.png";
import firebaseLogo from "../assets/tech_logo/firebase.png";
import cLogo from "../assets/tech_logo/c.png";
import cppLogo from "../assets/tech_logo/cpp.png";
import pythonLogo from "../assets/tech_logo/python.png";
import gitLogo from "../assets/tech_logo/git.png";
import githubLogo from "../assets/tech_logo/github.png";
import vscodeLogo from "../assets/tech_logo/vscode.png";
import vercelLogo from "../assets/tech_logo/vercel.png";
import netlifyLogo from "../assets/tech_logo/netlify.png";
import figmaLogo from "../assets/tech_logo/figma.png";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "React JS", logo: reactLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: jsLogo },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const SkillsSection = () => (
  <section id="skills" className="py-20 px-4 text-white min-h-screen">
    <div className="max-w-5xl mx-auto">
       <h2 className="text-4xl md:text-4xl font-bold mb-12 text-center">
          Technical<span className="text-purple-400"> SKILLS </span>
        </h2>
      <p className="text-center text-[#bdbdf7] mb-12 max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((group) => (
          <div
            key={group.category}
            className=" bg-card rounded-2xl px-8 py-2 min-h-[200px] shadow-lg flex flex-col items-center transition-transform duration-200 cursor-pointer hover:-translate-y-2 hover:shadow-2xl"
          >
            <h3 className="text-white text-xl font-semibold mb-8 tracking-wide">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center  p-2 rounded-xl transition-transform duration-200 hover:scale-110"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name + " logo"}
                    className="w-14 h-14 object-contain mb-2 bg-white rounded-lg shadow"
                  />
                  <span className="text-white text-sm font-medium mt-1">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
