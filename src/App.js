import "./App.css";

const projects = [
  {
    id: 1,
    name: "Link.Id",
    description: "Pengembangan Website Link.Id",
    image: "img/pro1.png",
  },
  {
    id: 2,
    name: "E-Kesiswaan",
    description: "Pengembangan Website E-Kesiswaan",
    image: "img/pro2.png",
  },
];

const education = [
  {
    id: 1,
    institution: "TK AL-KHADIJAH",
    degree: "TK",
  },
  {
    id: 2,
    institution: "SDN PONDOKDALEM 01",
    degree: "SD",
  },
  {
    id: 1,
    institution: "SMPN 04 TANGGUL",
    degree: "SMP",
  },
  {
    id: 1,
    institution: "SMKN 06 JEMBER",
    degree: "Rekayasa Perangkat Lunak (RPL)",
  },
  {
    id: 1,
    institution: "PT.UNIVERSAL BIG DATA (UBIG)",
    degree: "Magang",
  },
  // Tambahkan pendidikan lainnya sesuai kebutuhan
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="img/pp.jpeg" alt="Profil" className="profile-image" />
        <h1>Yohan</h1>
        <p>Web Developer</p>
      </header>

      <section id="about">
        <h2>Tentang Saya</h2>
        <p>
          Saya seorang web developer dengan pengalaman dalam pengembangan
          website menggunakan framework laravel
        </p>
      </section>

      <section id="education">
        <h2>Pendidikan</h2>
        {education.map((edu) => (
          <div key={edu.id} className="education-item">
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
          </div>
        ))}
      </section>

      <section id="projects">
        <h2>Proyek-Proyek Saya</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div className="project" key={project.id}>
              <img src={project.image} alt={project.name} />
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2>Hubungi Saya</h2>
        <p>Silakan hubungi saya melalui email: example@example.com</p>
      </section>

      <footer>
        <p>&copy; 2024 Yohan</p>
      </footer>
    </div>
  );
}

export default App;
