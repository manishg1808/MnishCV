import "./App.css";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="resume">
      {/* Header Section */}
      <header className="header">
        {/* Toggle Button for Mobile */}
        <button
          className="contact-toggle-btn"
          onClick={() => setShowContact(!showContact)}
          aria-label="Toggle contact information"
        >
          <span className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <h1>MANISH KUMAR</h1>
        <h2>Aspiring Web Developer</h2>

        <div className={`contact-info ${showContact ? "show" : ""}`}>
          <div className="contact-row">
            <span>📞 +91-8092970688</span>
            <span>☎️ +91-8986010819</span>
            <span>
              📧 Email:{" "}
              <a href="mailto:mnishg49@gmail.com">mnishg49@gmail.com</a>
            </span>
            <span>📍 Delhi (NCR)</span>
          </div>
          <div className="contact-row contact-row-no-wrap">
            <span>
              🔗 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/er-mnish-kumar-8227572b8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/er-mnish-kumar-8227572b8/
              </a>
            </span>
            <span>
              🔗 GitHub:{" "}
              <a
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/dashboard
              </a>
            </span>
          </div>
        </div>
      </header>

      {/* Career Objective */}
      <section className="section">
        <h3>Career Objective: -</h3>
        <p>
          To obtain a position that allows me to leverage my strong
          organizational skills, educational background, and ability to
          collaborate effectively with others to contribute to the success of
          the team and organization.
        </p>
      </section>

      {/* Academic Details */}
      <section className="section">
        <h3>Academic Details: -</h3>
        <div className="education">
          <div className="education-item">
            <p className="edu-title">✨ Graduation:</p>
            <div className="edu-row">
              <span className="edu-school">
                Meerut Institute of Technology.
              </span>
              <span className="edu-info-right">(CCSU)-Meerut, up.</span>
            </div>
            <div className="edu-row">
              <span className="edu-degree">
                Bachelor of Computer Application (B.C.A)
              </span>
              <span className="edu-year-right">2025.</span>
            </div>
          </div>
          <div className="education-item">
            <p className="edu-title">✨ Intermediate:</p>
            <div className="edu-row">
              <span className="edu-school">H.D. Jain College.</span>
              <span className="edu-info-right">Ara Bihar.</span>
            </div>
            <div className="edu-row">
              <span className="edu-board">Board: BSEB.</span>
              <span className="edu-year-right">2022.</span>
            </div>
          </div>
          <div className="education-item">
            <p className="edu-title">✨ Matriculation:</p>
            <div className="edu-row">
              <span className="edu-school">S.T.S.V International School.</span>
              <span className="edu-info-right">Ara Bihar.</span>
            </div>
            <div className="edu-row">
              <span className="edu-board">Board: CBSE.</span>
              <span className="edu-year-right">2020.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <h3>Experience: -</h3>
        <div className="experience">
          <div className="experience-item">
            <div className="exp-header">
              <h4>Web Development Intern: –</h4>
              <span className="exp-location">present- on-site.</span>
            </div>
            <div className="exp-company">
              <span>
                <strong>Mindware Technology.</strong>
              </span>
              <span className="exp-date-right">July2025 - ……</span>
            </div>
            <ul>
              <li>
                Collaborated with the team to{" "}
                <strong>
                  <a
                    href="https://www.mindwaretechnologies.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0066cc", textDecoration: "none" }}
                  >
                    🔗fix bugs
                  </a>
                </strong>{" "}
                and improve functionality on the company's main website
              </li>
              <li>
                Developed a{" "}
                <strong>
                  <a
                    href="https://www.linkedin.com/posts/er-mnish-kumar-8227572b8_internship-webdevelopment-reactjs-activity-7372958751978487808-hEaP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExJHNoBgM-5ayC_pEmtkfalTu5r_ac0gE4"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0066cc", textDecoration: "none" }}
                  >
                    🔗user panel{" "}
                  </a>
                </strong>{" "}
                for another project using React.js, Node.js, and PostgreSQL (
                <a
                  href="https://tagsindia.com/user/orders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-text"
                >
                  <strong>Live</strong>
                </a>
                )
              </li>
              <li>
                Contributed to the frontend development of a separate website,
                creating pages like{" "}
                <strong>
                  <a
                    href="https://www.linkedin.com/posts/er-mnish-kumar-8227572b8_internshipexperience-frontenddevelopment-activity-7372967059653115904-J3mf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExJHNoBgM-5ayC_pEmtkfalTu5r_ac0gE4"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0066cc", textDecoration: "none" }}
                  >
                    🔗Certificate, About Us, and Contact Us
                  </a>
                </strong>
                , including designing and implementing their functionality (
                <a
                  href="https://www.linkedin.com/posts/er-mnish-kumar-8227572b8_internshipexperience-frontenddevelopment-activity-7372967059653115904-J3mf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExJHNoBgM-5ayC_pEmtkfalTu5r_ac0gE4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-text"
                >
                  <strong>Link</strong>
                </a>
                )
              </li>
              <li>
                Designed and developed the complete{" "}
                <strong>
                  <a
                    href="https://www.linkedin.com/posts/er-mnish-kumar-8227572b8_frontenddeveloper-fullstackdevelopment-professionalgrowth-activity-7387092006675595264-6aJr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExJHNoBgM-5ayC_pEmtkfalTu5r_ac0gE4"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0066cc", textDecoration: "none" }}
                  >
                    🔗frontend of a new website
                  </a>
                </strong>{" "}
                and also created the <strong>UI</strong> for its{" "}
                <strong>
                  <a
                    href="https://www.linkedin.com/posts/er-mnish-kumar-8227572b8_fullstackdeveloper-adminpanel-frontend-activity-7387103117559005184-ATsY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExJHNoBgM-5ayC_pEmtkfalTu5r_ac0gE4"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0066cc", textDecoration: "none" }}
                  >
                    🔗admin panel
                  </a>
                </strong>{" "}
                (
                <a
                  href="https://zebraprintersindia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-text"
                >
                  <strong>Live</strong>
                </a>
                )
              </li>
              <li>
                Worked on another website handling both{" "}
                <strong>
                  <a
                    href="https://www.linkedin.com/posts/er-mnish-kumar-8227572b8_ecommerce-fullstackdevelopment-reactjs-activity-7387129445314187264-cJgX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExJHNoBgM-5ayC_pEmtkfalTu5r_ac0gE4"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0066cc", textDecoration: "none" }}
                  >
                    🔗frontend, backend & Admin Panel
                  </a>
                </strong>{" "}
                development, including <strong>design</strong>, development, and
                creating and managing all <strong>product data</strong> (
                <a
                  href="https://godexprinterindia.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-text"
                >
                  <strong>Live</strong>
                </a>
                )
              </li>
              <li>
                Analyzed Big Data across all websites and also took on HR
                responsibilities
              </li>
            </ul>
          </div>
          <div className="experience-item">
            <div className="exp-header">
              <h4>Web Development Intern: –</h4>
              <span className="exp-location">Remote.</span>
            </div>
            <div className="exp-company">
              <span>
                <strong>Unified Mentor.</strong>
              </span>
              <span className="exp-date-right">Feb2025 – March-2025.</span>
            </div>
            <ul>
              <li>
                Completed a remote Web Development Internship, working on
                frontend development using HTML, CSS, JavaScript, and React.js
                to build responsive and interactive webpages. Collaborated with
                the mentor on real-time projects, gaining practical experience
                and learning new technical skills.
              </li>
            </ul>
          </div>
          <div className="experience-item">
            <div className="exp-header">
              <h4>MERN Stack Developer Intern: –</h4>
              <span className="exp-location">Remote.</span>
            </div>
            <div className="exp-company">
              <span>
                <strong>EduNet Foundation.</strong>
              </span>
              <span className="exp-date-right">Feb 2025 – March2025.</span>
            </div>
            <ul>
              <li>
                Worked as a MERN Stack Developer Intern at Edu net Foundation,
                building full-stack applications using MongoDB, Express.js,
                React, and Node.js. Gained hands-on experience in
                authentication, CRUD operations, performance optimization,
                deployment, and version control, while also successfully
                developing a Zomato clone project.
              </li>
            </ul>
          </div>
          <div className="experience-item">
            <div className="exp-header">
              <h4>Web Technology Intern: –</h4>
              <span className="exp-location">on-site.</span>
            </div>
            <div className="exp-company">
              <span>
                <strong>QSpider's Training & Testing Center.</strong>
              </span>
              <span className="exp-date-right">
                15-july-2024 – 31-Aug-2024.
              </span>
            </div>
            <ul>
              <li>
                Learned the basics of HTML, CSS, and JavaScript, developed
                responsive websites to practice frontend concepts, and gained
                understanding of website design and responsiveness testing.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="section">
        <h3>Technical Skills: -</h3>
        <ul className="certifications">
          <li>
            Knowledge in writing <strong>SQL</strong> queries using{" "}
            <strong>RDBMS</strong> concepts, with experience in databases like{" "}
            <strong>MySQL</strong> and <strong>PostgreSQL</strong>.
          </li>
          <li>
            Basic knowledge in <strong>C</strong>, <strong>C++</strong>{" "}
            programming
          </li>
          <li>
            Knowledge in <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>Tailwind</strong>, <strong>JavaScript</strong>,{" "}
            <strong>ReactJs</strong>.
          </li>
          <li>
            Knowledge in <strong>Big Data Analysis</strong>,{" "}
            <strong>Data Entry</strong>.
          </li>
          <li>
            Knowledge in <strong>MS word</strong>, <strong>MS excel</strong>,{" "}
            <strong>MS PowerPoint</strong>
          </li>
          <li>
            Operating System: <strong>Windows 10</strong> /{" "}
            <strong>Windows 11</strong>.
          </li>
          <li>
            Tools: <strong>Vs Code</strong>, <strong>Turbo C++</strong>,{" "}
            <strong>Git</strong>, <strong>GitHub</strong>.
          </li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="section">
        <h3>Certifications: -</h3>
        <ul className="certifications">
          <li>
            Certified In <strong>Full Stack Web Development</strong> with{" "}
            <strong>MERN Stack & Genai</strong> – <strong>Udemy</strong>.{" "}
            <a
              href="https://www.linkedin.com/posts/er-mnish-kumar-8227572b8_certificate-in-full-stackdevelopment-with-activity-7303204791814361089-3SkX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExJHNoBgM-5ayC_pEmtkfalTu5r_ac0gE4"
              target="_blank"
              rel="noopener noreferrer"
              className="link-right"
            >
              (Link)
            </a>
          </li>
          <li>
            Certified In <strong>Software Testing</strong> & development center
            intern – <strong>QSpider's</strong>.{" "}
            <a
              href="https://www.linkedin.com/posts/er-mnish-kumar-8227572b8_thrilled-to-have-completed-my-internship-activity-7235991639016505344-8BfX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExJHNoBgM-5ayC_pEmtkfalTu5r_ac0gE4"
              target="_blank"
              rel="noopener noreferrer"
              className="link-right"
            >
              (Link)
            </a>
          </li>
          <li>
            Certified In web development intern –{" "}
            <strong>Unified Mentor</strong>.{" "}
            <a
              href="https://www.linkedin.com/posts/er-mnish-kumar-8227572b8_web-development-certificate-activity-7309067857227669504-1_zy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExJHNoBgM-5ayC_pEmtkfalTu5r_ac0gE4"
              target="_blank"
              rel="noopener noreferrer"
              className="link-right"
            >
              (Link)
            </a>
          </li>
          <li>
            Certified In web application with <strong>MERN stack</strong> intern
            – <strong>Edunet Foundation</strong>.{" "}
            <a
              href="https://www.linkedin.com/posts/er-mnish-kumar-8227572b8_web-development-internship-at-edunet-foundation-activity-7310973953810862081-rpGP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExJHNoBgM-5ayC_pEmtkfalTu5r_ac0gE4"
              target="_blank"
              rel="noopener noreferrer"
              className="link-right"
            >
              (Link)
            </a>
          </li>
          <li>
            Certified in web development intern -{" "}
            <strong>Eduskills foundation</strong>.{" "}
            <a
              href="https://www.linkedin.com/posts/er-mnish-kumar-8227572b8_web-development-for-eduskill-foundation-activity-7340633699631128576-qdok?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExJHNoBgM-5ayC_pEmtkfalTu5r_ac0gE4"
              target="_blank"
              rel="noopener noreferrer"
              className="link-right"
            >
              (Link)
            </a>
          </li>
          <li>
            <strong>K.Y.P.</strong>{" "}
            <a
              href="https://www.linkedin.com/posts/er-mnish-kumar-8227572b8_kushal-yuva-program-bihar-skill-development-activity-7184911765900578816-cMZO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExJHNoBgM-5ayC_pEmtkfalTu5r_ac0gE4"
              target="_blank"
              rel="noopener noreferrer"
              className="link-right"
            >
              (Link)
            </a>
          </li>
        </ul>
      </section>

      {/* Academic Projects */}
      <section className="section">
        <h3>Academic Projects Details: -</h3>
        <div className="projects">
          <div className="project-item">
            <p className="project-name-bullet">
              ✨{" "}
              <strong>Project Name: Food – ONLINE FOOD ORDERING SYSTEM.</strong>{" "}
              <a
                href="https://github.com/manishg1808/edunet-food-ordering"
                target="_blank"
                rel="noopener noreferrer"
                className="link-right"
              >
                (Link GitHub)
              </a>
            </p>
            <p className="details-subheading">➤ Details:-</p>
            <p className="project-details">
              Developed a responsive food ordering system using html and CSS to
              provide a user-friendly interface for browsing and selecting food
              items. Designed an intuitive layout for seamless navigation,
              ensuring a visually appealing and efficient ordering experience.
              This project demonstrates strong Ui/UX design skills and
              proficiency in frontend development for web-based applications.
            </p>
          </div>
          <div className="project-item">
            <p className="project-name-bullet">
              ✨ <strong>Project Name – PASSWORD GENERATOR.</strong>{" "}
              <a
                href="https://github.com/manishg1808/password-generater"
                target="_blank"
                rel="noopener noreferrer"
                className="link-right"
              >
                (Link GitHub)
              </a>
            </p>
            <p className="details-subheading">➤ Details:-</p>
            <p className="project-details">
              This project is a simple password generator built using html, CSS,
              and JavaScript. It allows users to generate secure passwords of a
              desired length, with options to include uppercase letters,
              lowercase letters, numbers, and special characters. The generated
              password can be copied to the clipboard with a single click.
            </p>
          </div>
          <div className="project-item">
            <p className="project-name-bullet">
              ✨{" "}
              <span style={{ color: "red" }}>
                Ongoing Project – <strong>AppLok</strong>.
              </span>
            </p>
            <p className="details-subheading">➤ Details:-</p>
            <p className="project-details">
              This is a self-initiated personal project (<strong>AppLok</strong>
              ) aimed at providing a web-based solution to common issues related
              to mobile applications. The project is being developed through a
              version-controlled, iterative approach (such as v.1, v.2, etc.).
              At present, I am working on Version 1, and after its completion
              and deployment, I will move forward with Version 2. Although this
              is not a very large-scale project, it has been designed with a
              strong focus on real user problems, user experience, and practical
              problem-solving. I prefer not to disclose further details about
              this project at this stage.
            </p>
          </div>
          <p className="projects-completed" style={{ textAlign: "center" }}>
            <strong>Completed more than 10+ projects.</strong>
          </p>
        </div>
      </section>

      {/* Strengths */}
      <section className="section" style={{ marginBottom: "15px" }}>
        <h3 className="inline-heading">Strengths: - </h3>
        <span className="strengths-text">
          Hardworking, Self-Motivated, Positive Thinking, Confidence, Honesty.
        </span>
        <hr style={{ marginTop: "10px", border: "1px solid #000" }} />
      </section>

      {/* Hobby */}
      <section className="section">
        <h3 className="inline-heading">Hobby: - </h3>
        <span>Playing Ludo.</span>
        <hr style={{ marginTop: "10px", border: "1px solid #000" }} />
      </section>

      {/* Self Assessment */}
      <section className="section declaration">
        <h3 className="inline-heading">Self - Assessment: - </h3>
        <span>
          <em>
            I do here by declare that the above statement given by me is true to
            the best of my knowledge and belief and I look for a chance to prove
            my competency.
          </em>
        </span>
        <p className="signature">Manish Kumar.</p>
      </section>
    </main>
  );
}

export default App;
