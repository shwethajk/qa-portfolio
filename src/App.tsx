import React from "react";

type ProjectProps = {
  title: string;
  desc: string;
  link: string;
};

const ProjectCard = ({ title, desc, link }: ProjectProps) => (
  <div style={{
    backgroundColor: "#1f2937",
    padding: 20,
    borderRadius: 16,
    boxShadow: "0 2px 10px rgba(0,0,0,0.4)"
  }}>
    <h3 style={{ color: "#a78bfa", fontSize: 20, fontWeight: 600 }}>{title}</h3>
    <p style={{ color: "#d1d5db", marginBottom: 10 }}>{desc}</p>
    <a href={link} target="_blank" rel="noreferrer" style={{ color: "#8b5cf6", textDecoration: "underline" }}>
      View Code
    </a>
  </div>
);

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#111827",
      color: "#f9fafb",
      fontFamily: "Arial, sans-serif",
      padding: 24
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: 36, fontWeight: "bold", textAlign: "center", marginBottom: 8 }}>
          Shwetha Kulal
        </h1>
        <p style={{ textAlign: "center", fontSize: 18, color: "#9ca3af", marginBottom: 24 }}>
          QA Test Engineer | Python • Selenium • Robot Framework • GTest
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 30, flexWrap: "wrap" }}>
          <a href="mailto:shwethaas123@gmail.com">
            <button style={btnStyle}>Email Me</button>
          </a>
          <a href="https://github.com/shwethajk" target="_blank" rel="noreferrer">
            <button style={btnStyle}>GitHub</button>
          </a>
          <a href="https://onedrive.live.com/download?resumefile=ShwethaKulalQAResume.pdf" target="_blank" rel="noreferrer">
            <button style={btnStyle}>Download Resume</button>
          </a>
        </div>

        <section>
          <h2 style={sectionTitle}>Projects</h2>
          <div style={{ display: "grid", gap: 20 }}>
            <ProjectCard title="Selenium Login Test" desc="Automated login with Python + Selenium WebDriver." link="#" />
            <ProjectCard title="Robot Framework Suite" desc="Keyword-driven automation test suite." link="#" />
            <ProjectCard title="GTest Unit Tests" desc="Unit testing framework used in embedded testing." link="#" />
            <ProjectCard title="Postman API Testing" desc="Basic request validation and test automation." link="#" />
          </div>
        </section>

        <section style={{ marginTop: 40 }}>
          <h2 style={sectionTitle}>About Me</h2>
          <p style={{ color: "#d1d5db", lineHeight: 1.6 }}>
            I’m Shwetha from Udupi, currently working as a QA Engineer at Tata Elxsi with 1.4 years of experience in software testing. 
            My hands-on experience includes unit testing with GTest and automation testing using Python, Selenium, and Robot Framework. 
            This portfolio reflects my personal growth in QA and my dedication to continuous learning.
          </p>
        </section>
      </div>
    </div>
  );
}

const btnStyle = {
  backgroundColor: "#8b5cf6",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: 10,
  fontSize: 14,
  cursor: "pointer",
  boxShadow: "0 2px 6px rgba(0,0,0,0.3)"
};

const sectionTitle = {
  fontSize: 24,
  fontWeight: 600,
  color: "#a78bfa",
  marginBottom: 16
};
