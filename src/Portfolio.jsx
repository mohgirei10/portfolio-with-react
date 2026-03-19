import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  // 1. Theme Persistence Logic
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  // 2. Mobile Menu Logic
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMenu = () => setShowMobileMenu(!showMobileMenu);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Dynamic Styles
  const themeClass = isDarkMode ? "w3-black" : "w3-white";
  const textClass = isDarkMode ? "w3-text-grey" : "w3-text-dark-grey";
  const headingClass = isDarkMode ? "w3-text-light-grey" : "w3-text-black";
  const sidebarBg = isDarkMode ? "#222" : "#f1f1f1";

  return (
    <div className={themeClass} style={{ transition: 'background-color 0.4s ease', minHeight: '100vh' }}>
      
      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme}
        className="w3-button w3-xlarge w3-display-topright theme-btn" 
        style={{ zIndex: 99, marginTop: '20px', marginRight: '20px', borderRadius: '50%' }}
      >
        {isDarkMode ? <i className="fa fa-moon-o w3-text-amber"></i> : <i className="fa fa-moon-o"></i>}
      </button>

      {/* Sidebar - Desktop (Hidden on small screens) */}
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center" 
           style={{ width: '120px', background: sidebarBg, color: isDarkMode ? '#fff' : '#000' }}>
        <img src="assets/avatar.png" style={{ width: '100%' }} alt="Avatar" />

        <a href="#home"
        onClick={(e) => {
    e.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  }} className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-home w3-xxlarge"></i>
          <p>HOME</p>
        </a>
        <a href="#about"
        onClick={(e) => {
    e.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }} className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-user w3-xxlarge"></i>
          <p>ABOUT</p>
        </a>
        <a href="#tools"
        onClick={(e) => {
    e.preventDefault();
    document.getElementById('tools').scrollIntoView({ behavior: 'smooth' });
  }} className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-wrench w3-xxlarge"></i>
          <p>TOOLS</p>
        </a>
        <a href="#contact" 
        onClick={(e) => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }}className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-envelope w3-xxlarge"></i>
          <p>CONTACT</p>
        </a>
  
      </nav>

      {/* Navbar - Mobile (Hidden on large screens) */}
      <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <a href="#home" className="w3-bar-item w3-button" style={{ width: '25%' }}>HOME</a>
          <a href="#about" className="w3-bar-item w3-button" style={{ width: '25%' }}>ABOUT</a>
          <a href="#tools" className="w3-bar-item w3-button" style={{ width: '25%' }}>TOOLS</a>
          <a href="#contact" className="w3-bar-item w3-button" style={{ width: '25%' }}>CONTACT</a>
        </div>
      </div>

      <div className="w3-padding-large" id="main">
        {/* Header Section */}
        <header className="w3-container w3-padding-32 w3-center" id="home">
          <h1 className={`w3-jumbo ${headingClass}`}><span className="w3-hide-small">AMG-TECH </span>SOLUTIONS</h1>
          <p className={textClass}>A SOFTWARE ENGINEER.</p>
          <img src="assets/image.png" alt="Adamu" className="w3-image" width="992" height="1108" />
        </header>

        {/* About Section */}
        <section className={`w3-content w3-justify w3-padding-64 ${textClass}`} id="about">
          <h2 className={headingClass}>ADAMU MOHAMMED GIREI</h2>
          <hr style={{ width: '380px' }} className="w3-opacity" />
 <p>A Web and Mobile Developer dedicated to creating seamless digital
experiences. 
Detail-oriented Full-Stack Developer with a background in
Computer Science and hands-on experience building scalable
applications using the MERN stack. Proficient in developing
modular backend architectures with Node.js and crafting
responsive, type-safe frontends with React and TypeScript.
Passionate about clean code, API security, and collaborative
problem-solving in Agile environment</p>
          
          <h3 className={`w3-padding-16 ${headingClass}`}>SKILLS</h3>
          <p className="w3-wide">FRONTEND DEVELOPMENT</p>
          <div className="w3-white">
            <div className="w3-dark-grey" style={{ height: '28px', width: '95%' }}></div>
          </div>
          <p className="w3-wide">BACKEND DEVELOPMENT</p>
          <div className="w3-white">
            <div className="w3-dark-grey" style={{ height: '28px', width: '85%' }}></div>
          </div>
          
          {/* Stats Grid */}
          <div className={`w3-row w3-center w3-padding-16 w3-section ${isDarkMode ? 'w3-light-grey w3-text-black' : 'w3-grey w3-text-white'}`}>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">11+</span><br />Partners
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">55+</span><br />Projects Done
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">89+</span><br />Happy Clients
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">150+</span><br />Meetings
            </div>
          </div>

          <div className="w3-container w3-padding-16">
            <a href="assets/resume.pdf" className="w3-button w3-amber w3-round-small w3-hover-light-grey w3-padding-large" target="_blank" download="resume.pdf">
              DOWNLOAD RESUME <i className="fa fa-arrow-down"></i>
            </a>
          </div>

<h3 className={`w3-padding-16 ${headingClass}`}>SERVICES</h3>
          <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
            <div className="w3-half w3-margin-bottom">
              <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
                <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
                <li className="w3-padding-16">Web Design</li>
                <li className="w3-padding-16">Database Management</li>
                <li className="w3-padding-16">
                  <h2>$ 10</h2>
                  <span className="w3-opacity">per month</span>
                </li>
                <li className="w3-light-grey w3-padding-24">
                  <button className="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
                </li>
              </ul>
            </div>
            <div className="w3-half">
              <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
                <li className="w3-dark-grey w3-xlarge w3-padding-32">Pro</li>
                <li className="w3-padding-16">Cloud Management</li>
                <li className="w3-padding-16">Endless Support</li>
                <li className="w3-padding-16">
                  <h2>$ 25</h2>
                  <span className="w3-opacity">per month</span>
                </li>
                <li className="w3-light-grey w3-padding-24">
                  <button className="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="w3-padding-64 w3-content" id="tools">
          <h2 className={headingClass}>TECH STACK</h2>
          <hr style={{ width: '170px' }} className="w3-opacity" />
          <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
            <div className="w3-half">
              <img src="assets/js.png" className="tool-icon w3-hover-opacity" alt="JS" />
              <img src="assets/node.png" className="tool-icon  w3-hover-opacity" alt="Node" />
              <img src="assets/tailwind.png" className="tool-icon  w3-hover-opacity" alt="Tailwind" />
            </div>
            <div className="w3-half ">
              <img src="assets/ts.png" className="tool-icon w3-hover-opacity" alt="TS" />
              <img src="assets/react.png" className="tool-icon  w3-hover-opacity" alt="React" />
              <img src="assets/aws.png" className="tool-icon  w3-hover-opacity" alt="Aws" />
            </div>
          </div>
               <h3 className={`w3-padding-24 ${headingClass}`}>MY REPUTATION</h3>  
          <div className="w3-section">
            <img src="assets/testimonial-1.jpg" alt="Avatar" className="w3-left  w3-hover-opacity w3-circle w3-margin-right" style={{ width: '80px' }} />
            <p><span className="w3-large  w3-margin-right">Chris Fox</span><i className="fa fa-twitter"></i></p>
            <p className='w3-text-grey'>Moha saved us from a web disaster fr.</p><br />
          </div>
          <div className="w3-section">
            <img src="assets/avatar_g2.jpg" alt="Avatar" className="w3-left w3-circle  w3-hover-opacity w3-margin-right" style={{ width: '80px' }} />
            <p><span className="w3-large w3-margin-right">Regina Tom</span><i className="fa fa-twitter"></i></p>
            <p className='w3-text-grey'>No one is better than Moh Girei.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className={`w3-padding-64 w3-content ${textClass}`} id="contact">
          <h2 className={headingClass}>CONTACT ME</h2>
          <hr style={{ width: '185px' }} className="w3-opacity" />
          <form action="https://formspree.io/f/mojkkbpk" method="POST">
            <input type="hidden" name="_next" value="http://localhost:5173/#/thanks" />
            
            <input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="name" />
            <input className="w3-input w3-padding-16" type="email" placeholder="Email" required name="email" />
            <textarea className="w3-input w3-padding-16 w3-height-64" placeholder="Type your Message here." required name="message"></textarea>
            
            <button className="w3-button w3-light-grey w3-padding-large w3-section" type="submit">
              SEND MESSAGE <i className="fa fa-paper-plane"></i>
            </button>
          </form>
        </section>

<div className="w3-center" style={{ margin: '0 -16px' }}>
            <i className="icon fa fa-instagram w3-hover-opacity w3-xxlarge w3-margin-right"></i>
            <i className="icon fa fa-snapchat w3-hover-opacity w3-xxlarge w3-margin-right"></i>
            <i className="icon fa fa-github w3-hover-opacity w3-xxlarge w3-margin-right"></i>
            <i className="icon fa fa-linkedin w3-hover-opacity w3-xxlarge w3-margin-right"></i>
            <i className="icon fa fa-twitter w3-hover-opacity w3-xxlarge w3-margin-right"></i>
            <i className="icon fa fa-facebook w3-hover-opacity w3-xxlarge w3-margin-right"></i>           
            <i className="icon fa fa-whatsapp w3-hover-opacity w3-xxlarge w3-margin-right"></i>
          </div>
               <hr style={{ width: 'full' }} className="w3-opacity"/>

        <footer className={`w3-content w3-padding-6 ${textClass} w3-center`}>
          <p className="w3-medium w3-text-bold w3-text-italic">Powered by AMG-TECH Solutions 2026 ©</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;