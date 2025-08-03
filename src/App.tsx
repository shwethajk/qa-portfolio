type ProjectProps = {
  title: string;
  desc: string;
  link: string;
};

const ProjectCard = ({ title, desc, link }: ProjectProps) => (
  <div style={{ backgroundColor: "#fff", padding: 16, borderRadius: 10, boxShadow: "0 2px 6px #ccc" }}>
    <h3 style={{ fontSize: 20, fontWeight: 600 }}>{title}</h3>
    <p style={{ color: "#555", marginBottom: 10 }}>{desc}</p>
    <a href={link} target="_blank" rel="noreferrer" style={{ color: "#0070f3" }}>
      View Code
    </a>
  </div>
);

export default function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9f9f9", padding: 20 }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ fontSize: 36, fontWeight: "bold", textAlign: "center", marginBottom: 10 }}>
          Shwetha Kulal
        </h1>
        <p style={{ textAlign: "center", fontSize: 18, color: "#444", marginBottom: 20 }}>
          QA Test Engineer | Python | Selenium | Robot Framework | GTest
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 30 }}>
          <a href="mailto:shwethaas123@gmail.com"><button>Email</button></a>
          <a href="https://github.com/shwethajk" target="_blank" rel="noreferrer"><button>GitHub</button></a>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 10 }}>Projects</h2>
        <div style={{ display: "grid", gap: 20 }}>
          <ProjectCard title="Selenium Login Test" desc="Automated login using Selenium in Python." link="#" />
          <ProjectCard title="Robot Framework Suite" desc="Keyword-driven automation test suite." link="#" />
          <ProjectCard title="GTest Unit Testing" desc="Embedded testing using Google Test." link="#" />
          <ProjectCard title="Postman API Testing" desc="Collection for basic API testing flows." link="#" />
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40 }}>About Me</h2>
        <p style={{ color: "#555" }}>
          I’m Shwetha from Udupi, currently working at Tata Elxsi with 1.4 years of experience in software QA testing.
          Skilled in manual and automated testing, including Python + Selenium and Robot Framework.
        </p>
      </div>
    </div>
  );
}
