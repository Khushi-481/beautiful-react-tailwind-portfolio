import React from "react";
import nsutLogo from '@/assets/nsutLogo.png';
import cbseLogo from '@/assets/cbseLogo.png';

const educationData = [
  {
    degree: "Bachelor of Technology - B.Tech (CSAI)",
    institution: "Netaji Subhas University of Technology (NSUT), New Delhi",
    duration: "Nov 2022 - Aug 2026",
    grade: "7.69 CGPA",
    description:
      "Currently pursuing B.Tech in Computer Science with specialization in Artificial Intelligence. Gained strong foundation in Data Structures, Algorithms, Operating Systems, OOPs, DBMS, and AI-focused courses. Actively involved in technical and research projects, along with society-level responsibilities.",
    logo: nsutLogo,
  },
  {
    degree: "CBSE (Class XII) - PCM with Computer Science",
    institution: "Apeejay School Pitampura,Sainik Vihar,New Delhi",
    duration: "Apr 2020 - Mar 2021",
    grade: "92.3%",
    description:
      "Completed Class XII under CBSE Board with Physics, Chemistry, Mathematics, and Computer Science. Demonstrated consistent academic excellence and strong conceptual understanding.",
    logo: cbseLogo,
  },
  {
    degree: "CBSE (Class X) - Science with Computer Application",
    institution: "Apeejay School Pitampura,Sainik Vihar,New Delhi",
    duration: "Apr 2018 - Mar 2019",
    grade: "94%",
    description:
      "Completed Class X under CBSE Board with Science and Computer Applications.",
    logo: cbseLogo,
  },
];

const sectionStyles = {
  minHeight: "80vh",
  padding: "64px 0 48px 0",
};

const containerStyles = {
  maxWidth: "px",
  margin: "0 auto",
  padding: "0 20px",
  color:"bg-card",
};

const titleStyles = {
  textAlign: "center",
  color: "bg-card",
  fontSize: "2rem",
  fontWeight: 700,
  letterSpacing: "1.5px",
  marginBottom: "12px",
};

const subtitleStyles = {
  textAlign: "center",
  color: "#bdbdf7",
  marginBottom: "36px",
  fontSize: "1.08rem",
};

const timelineStyles = {
  position: "relative",
  marginLeft: "24px",
  paddingLeft: "20px",
  borderLeft: "3px solid #a78bfa",
};

const timelineItemBase = {
  position: "relative",
  marginBottom: "48px",
  display: "flex",
  alignItems: "flex-start",
  transition: "transform 0.25s cubic-bezier(.2,1.5,.5,1)",
  zIndex: 1,
};

const timelineDotStyles = {
  position: "absolute",
  left: "-32px",
  top: "16px",
  width: "18px",
  height: "18px",
  background: "#a78bfa",
  borderRadius: "50%",
  border: "3px solid #fff",
  boxShadow: "0 0 0 4px #181834",
  zIndex: 2,
};

const timelineContentBase = {
  background: "oklch(0.21 0.034 264.665)",
  borderRadius: "12px",
  padding: "28px 28px 20px 28px",
  boxShadow: "0 4px 24px 0 rgba(80, 80, 120, 0.13)",
  color: "#fff",
  width: "100%",
  display: "flex",
  gap: "24px",
  alignItems: "flex-start",
  transition: "transform 0.25s cubic-bezier(.2,1.5,.5,1), box-shadow 0.25s",
  cursor: "pointer",
};

const logoStyles = {
  width: "58px",
  height: "58px",
  objectFit: "contain",
  marginRight: "12px",
  borderRadius: "8px",
  background: "#fff",
  boxShadow: "0 2px 8px 0 rgba(167, 139, 250, 0.18)",
};

const degreeStyles = {
  fontSize: "1.25rem",
  fontWeight: 600,
  marginBottom: "2px",
  color: "#fff",
};

const institutionStyles = {
  color: "#a78bfa",
  fontWeight: 500,
  marginBottom: "2px",
};

const durationStyles = {
  color: "#bdbdf7",
  fontSize: "0.96rem",
  marginBottom: "6px",
};

const gradeStyles = {
  color: "#fff",
  fontWeight: 500,
  marginBottom: "4px",
};

const descriptionStyles = {
  color: "#e2e2f7",
  fontSize: "0.98rem",
  marginTop: "6px",
};

const getTimelineItemStyles = (idx) => {
  // Custom: Only the middle box (idx === 1) on the left, others on right
  if (idx === 1) {
    return { ...timelineItemBase, justifyContent: "flex-start" };
  } else {
    return { ...timelineItemBase, justifyContent: "flex-end" };
  }
};

const getTimelineContentStyles = (idx, isHovered) => {
  // Custom: Only the middle box (idx === 1) on the left, others on right
  let base = { ...timelineContentBase };
  if (idx === 1) {
    base.marginRight = "40px";
    base.boxShadow = "-4px 8px 24px 0 rgba(167,139,250,0.10)";
  } else {
    base.marginLeft = "40px";
    base.boxShadow = "4px 8px 24px 0 rgba(167,139,250,0.10)";
  }
  if (isHovered) {
    base.transform = "scale(1.06) translateY(-8px)";
    base.boxShadow = "0 12px 32px 0 rgba(167,139,250,0.25)";
    base.zIndex = 10;
  }
  return base;
};

const EducationSection = () => {
  const [hoveredIdx, setHoveredIdx] = React.useState(null);

  return (
    <section id="education" style={sectionStyles}>
      <div style={containerStyles}>
        <h2 style={titleStyles}>Education</h2>
        <p style={subtitleStyles}>
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
        <div style={timelineStyles}>
          {educationData.map((edu, idx) => (
            <div style={getTimelineItemStyles(idx)} key={idx}>
              <div style={timelineDotStyles} />
              <div
                style={getTimelineContentStyles(idx, hoveredIdx === idx)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {edu.logo && (
                  <img
                    src={edu.logo}
                    alt="Institution Logo"
                    style={logoStyles}
                  />
                )}
                <div>
                  <h3 style={degreeStyles}>{edu.degree}</h3>
                  <p style={institutionStyles}>{edu.institution}</p>
                  <p style={durationStyles}>{edu.duration}</p>
                  <p style={gradeStyles}>Grade: {edu.grade}</p>
                  <p style={descriptionStyles}>{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @media (max-width: 700px) {
            h2[style] {
              font-size: 2rem !important;
            }
            div[style*="display: flex"][style*="gap: 24px"] {
              flex-direction: column !important;
              gap: 10px !important;
              padding: 18px 12px !important;
            }
            img[style] {
              width: 40px !important;
              height: 40px !important;
              margin: 0 0 6px 0 !important;
            }
            .timeline-content {
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default EducationSection;
