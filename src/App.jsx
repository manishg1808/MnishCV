import "./App.css";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply dark mode to body
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `*Contact Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Message:* ${formData.message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number
    const whatsappNumber = '8986010819';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    
    // Close modal
    setShowContactModal(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className={`resume ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Dark Mode Toggle Button */}
      <button
        className="dark-mode-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label="Toggle dark mode"
        title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06z"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.88-13.12-7.11-8.32-14.96z"/>
          </svg>
        )}
      </button>
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
          <div className="contact-grid">
            <div className="contact-grid-item">
              <span>
                <i className="ri-phone-line"></i>{" "}
                <a href="tel:+918092970688" style={{ color: "#000", textDecoration: "none" }}>
                  +91-8092970688
                </a>
              </span>
            </div>
            <div className="contact-grid-item">
              <span>
                <i className="ri-whatsapp-line"></i>{" "}
                <a 
                  href="https://wa.me/918986010819" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  +91-8986010819
                </a>
              </span>
            </div>
            <div className="contact-grid-item">
              <span>
                <i className="ri-mail-line"></i> Email:{" "}
                <a href="mailto:mnishg49@gmail.com">mnishg49@gmail.com</a>
              </span>
            </div>
            <div className="contact-grid-item">
              <span>
                <i className="ri-map-pin-line"></i> Delhi (NCR)
              </span>
            </div>
            <div className="contact-grid-item portfolio-item" onClick={() => setShowPortfolioModal(true)}>
              <span className="portfolio-text">
                <i className="ri-folder-line"></i> Portfolio
              </span>
            </div>
          </div>
          <div className="contact-row contact-row-no-wrap">
            <span>
              <i className="ri-linkedin-line"></i> LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/er-mnish-kumar-8227572b8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/er-mnish-kumar-8227572b8/
              </a>
            </span>
            <span>
              <i className="ri-github-line"></i> GitHub:{" "}
              <a
                href="https://github.com/manishg1808/MnishCV"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/manishg1808/MnishCV
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
                <strong>Unified Mentor.</strong>{" "}
                <a
                  href="https://rama-overseas-a.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "red", fontWeight: "bold", textDecoration: "none" }}
                >
                  (Live)
                </a>
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
            Knowledge in <strong>WordPress</strong>.{" "}
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
            <p className="details-subheading">➤ Details:- <a href="https://password-generator-alpha-two-91.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'red', fontWeight: 'bold', textDecoration: 'none' }}>(Live)</a></p>
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
            <button className="view-projects-btn" onClick={() => setShowProjectsModal(true)}>View</button>
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
        <hr style={{ marginTop: "10px", border: "1px solid #000" }} />
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid-item">
            <button className="footer-heading-btn" onClick={() => setShowAboutModal(true)}>About Me</button>
          </div>
          <div className="footer-grid-item">
            <button className="footer-heading-btn" onClick={() => setShowServiceModal(true)}>Service</button>
          </div>
          <div className="footer-grid-item">
            <button className="footer-heading-btn" onClick={() => setShowContactModal(true)}>Contact</button>
          </div>
          <div className="footer-grid-item">
            <div className="social-media">
            <a
              href="https://www.linkedin.com/in/er-mnish-kumar-8227572b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/manishg1808/MnishCV"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/918986010819"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="WhatsApp"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            <a
              href="mailto:mnishg49@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Email"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/er.mnish_g_420?igsh=aXhpejdxbjV1Nmdr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/1Af4L3Tg4u/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            </div>
          </div>
        </div>
      </footer>

      {/* About Me Modal */}
      {showAboutModal && (
        <div className="modal-overlay" onClick={() => setShowAboutModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowAboutModal(false)}>
              ×
            </button>
            <h2 className="modal-title">About Me</h2>
            <div className="modal-body">
              <p>Hello,</p>
              <p>My name is Manish Kumar.</p>
              <p>I belong to Ara, Bihar, which is big town.</p>
              <p>But Currently, I am living in Delhi-NCR.</p>
              <p>I have completed my graduation in BCA from Meerut Institute of Technology.</p>
              <p>I completed my 12th from H.D. Jain College and my 10th from STSV International School.</p>
              <p>I have also completed my internships with Mindware technology, Qspider, udemy, Edunet Foundation and Unified Mentor.</p>
              <p>My short-term goal is to learn new skills by working with your organization.</p>
              <p>My long-term goal is to become a successful person and make my parents proud.</p>
              <p>My strength is my honesty,</p>
              <p>and my weakness is that I am sometimes too punctual.</p>
              <p>My hobby is playing Ludo.</p>
              <p>Thank you — that's all about me.</p>
            </div>
          </div>
        </div>
      )}

      {/* Projects Modal */}
      {showProjectsModal && (
        <div className="modal-overlay" onClick={() => setShowProjectsModal(false)}>
          <div className="modal-content projects-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowProjectsModal(false)}>
              ×
            </button>
            <h2 className="modal-title">My Projects</h2>
            <div className="projects-modal-body">
              <div className="projects-grid">
                <div className="projects-category">
                  <h3 className="category-title personal-category">
                    <span className="category-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </span> Personal Projects
                  </h3>
                  <div className="projects-list">
                    <a 
                      href="https://psswrd-p-g.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span className="project-name">Password Generator</span>
                      <span className="project-url">psswrd-p-g.vercel.app</span>
                      <span className="project-arrow">→</span>
                    </a>
                    <a 
                      href="https://tttgme.tiiny.site/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span className="project-name">Tic Tac Toe Game</span>
                      <span className="project-url">tttgme.tiiny.site</span>
                      <span className="project-arrow">→</span>
                    </a>
                    <a 
                      href="https://password-generator-alpha-two-91.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span className="project-name">Password Generator</span>
                      <span className="project-url">password-generator-alpha-two-91.vercel.app</span>
                      <span className="project-arrow">→</span>
                    </a>
                  </div>
                </div>
                
                <div className="projects-category">
                  <h3 className="category-title client-category">
                    <span className="category-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                      </svg>
                    </span> Client Projects
                  </h3>
                  <div className="projects-list">
                    <a 
                      href="https://rama-overseas-a.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span className="project-name">Rama Overseas</span>
                      <span className="project-url">rama-overseas-a.vercel.app</span>
                      <span className="project-arrow">→</span>
                    </a>
                    <a 
                      href="https://godexprinterindia.in/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span className="project-name">Godex Printer India</span>
                      <span className="project-url">godexprinterindia.in</span>
                      <span className="project-arrow">→</span>
                    </a>
                    <a 
                      href="https://zebraprintersindia.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span className="project-name">Zebra Printers India</span>
                      <span className="project-url">zebraprintersindia.com</span>
                      <span className="project-arrow">→</span>
                    </a>
                    <a 
                      href="https://tagsindia.com/user/orders" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span className="project-name">Tags India</span>
                      <span className="project-url">tagsindia.com/user/orders</span>
                      <span className="project-arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Service Modal */}
      {showServiceModal && (
        <div className="modal-overlay" onClick={() => setShowServiceModal(false)}>
          <div className="modal-content service-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowServiceModal(false)}>
              ×
            </button>
            <h2 className="modal-title">SERVICES</h2>
            <div className="service-modal-body">
              <p className="service-intro">Contact us for professional website development services:</p>
              <div className="services-list">
                <div className="service-item">
                  <span className="service-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </span>
                  <span className="service-text">Static Website Development</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                    </svg>
                  </span>
                  <span className="service-text">Dynamic Website Development</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                    </svg>
                  </span>
                  <span className="service-text">Portfolio Development</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5 11 5.67 11 6.5 10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5 16 5.67 16 6.5 15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9 19 9.67 19 10.5 18.33 12 17.5 12z"/>
                    </svg>
                  </span>
                  <span className="service-text">UI/UX Design</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </span>
                  <span className="service-text">Informational Website</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                  </span>
                  <span className="service-text">Admin Panel Development</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </span>
                  <span className="service-text">Custom Website Development</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                  </span>
                  <span className="service-text">Development in Any Programming Language</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z"/>
                      <path d="M9 7h6v2H9zm7 4H9v2h7zm-7 4h4v2H9z"/>
                    </svg>
                  </span>
                  <span className="service-text">WordPress Development</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                    </svg>
                  </span>
                  <span className="service-text">Frontend Development</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6zm0 8c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4z"/>
                      <path d="M8 8h2v2H8zm0 10h2v2H8zm10-10h2v2h-2zm0 10h2v2h-2z"/>
                    </svg>
                  </span>
                  <span className="service-text">Backend Development</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm-2.17-1.5l2.14-1.53 2.14 1.53-.83-2.46 2.15-1.5h-2.62L9.47 6l-.81 2.54H6.04l2.14 1.5-.83 2.46z"/>
                    </svg>
                  </span>
                  <span className="service-text">SEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactModal && (
        <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowContactModal(false)}>
              ×
            </button>
            <h2 className="modal-title">Contact Me</h2>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Portfolio Modal */}
      {showPortfolioModal && (
        <div className="modal-overlay" onClick={() => setShowPortfolioModal(false)}>
          <div className="modal-content portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowPortfolioModal(false)}>
              ×
            </button>
            <h2 className="modal-title">Portfolio</h2>
            <div className="modal-body">
              <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "#2d5016" }}>
              The portfolio development process is currently in progress. It is being built as a dynamic portfolio with an improved UI/UX. Additionally, the complete system is under development along with the admin panel.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
