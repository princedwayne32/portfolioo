import React, { useState, useEffect } from 'react';

// Helper Component para sa Project Cards
const PortalCard = ({ num, title, desc, url }) => (
  <a className="portal-card" href={url} target="_blank" rel="noopener noreferrer">
    <div style={{color: 'var(--accent)', fontSize: '10px', marginBottom: '8px'}}>{num}</div>
    <div style={{fontWeight: '700', color: 'var(--fg)', marginBottom: '6px'}}>{title}</div>
    <div style={{fontSize: '11px', color: 'var(--muted)'}}>{desc}</div>
  </a>
);

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'default');
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const themes = ['default', 'simple', 'terminal', 'sorbet', 'signal', 'editorial'];

  return (
    <>
      <header id="topbar">
        <a className="brand" href="#"><span>//</span> Prince Bautista</a>
        <nav>
          <a href="#portals">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <div id="clock">{time}</div>
      </header>

      <aside id="themes">
        {themes.map(t => (
          <button key={t} className={theme === t ? 'active' : ''} onClick={() => setTheme(t)}>
            {t}
          </button>
        ))}
      </aside>

      <main id="main">
        <div className="status-badges fade-in">
          <span className="badge open">Open to Work</span>
          <span className="badge">📍 Manila</span>
          <span className="badge">🌐 Remote</span>
          <span className="badge">✈️ Relocate OK</span>
        </div>

       {/* HERO SECTION */}
<section id="hero" className="fade-in">
  <p className="greeting">HELLO, I'M</p>
  
  <div className="hero-name-wrapper">
    {/* Profile Image - Now on the left */}
    <div className="profile-image-container">
      <img 
        src="src/assets/2x2.jpg" 
        alt="Prince Dwayne Bautista" 
        className="profile-image" 
      />
    </div>

    <h1 className="hero-title">
      Prince Dwayne <span>Bautista</span>
    </h1>
  </div>
  
  <p className="sub">
    Full-stack engineer with a passion for clean systems, great UX, and building things that matter.
    Currently exploring distributed systems & robotics at TIP.
  </p>
</section>

<section id="portals" className="fade-in">
  <h2 className="section-title">### Portals</h2>
  <div className="portals-grid">
    <PortalCard 
      num="#001" 
      title="Web OS Portfolio" 
      desc="Interactive OS environment." 
      url="https://portfolioo-navy-six.vercel.app" 
    />
    <PortalCard 
      num="#002" 
      title="react-es6-lab" 
      desc="Vite + React live data app." 
      url="https://react-es6-lab-eight.vercel.app" 
    />
    <PortalCard 
      num="#student-portal-umber-delta" 
      title="Project #3" 
      desc="student-portal-umber-delta.vercel.app" 
      url="https://student-portal-umber-delta.vercel.app" 
    />
  </div>
</section>

        <section id="experience" className="fade-in">
          <h2 className="section-title">#### Experience</h2>
          <div className="job">
            <div className="job-title">Computer Engineer</div>
            <div className="job-company">Technological Institute of Manila (2026 - Ongoing)</div>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
            </div>
            <ul style={{listStyle: 'none'}}>
              <li className="job-li" style={{fontSize: '12px', color: 'var(--muted)', paddingLeft: '16px', position: 'relative'}}>
                <span style={{position: 'absolute', left: 0, color: 'var(--accent)'}}>▸</span>
                Developing hardware and software integrations for student logic projects.
              </li>
            </ul>
          </div>
        </section>

        {/* CONTACT SECTION */}
<section id="contact" className="fade-in">
  <h2 className="section-title">#### Contact</h2>
  <p className="contact-cta">Would love to chat!</p>
  
  <div className="social-links">
    {/* Email Box */}
    <a href="mailto:bautistaprincedwayne@gmail.com" className="social-item">
      <span className="social-label">Email</span>
      <span className="social-url underline-blue">bautistaprincedwayne@gmail.com</span>
    </a>

    {/* Phone Box */}
    <div className="social-item">
      <span className="social-label">Mobile</span>
      <span className="social-url">+63 908 759 2829</span>
    </div>

    {/* GitHub Box */}
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-item">
      <span className="social-label">GitHub</span>
      <span className="social-url">github.com/yourusername ↗</span>
    </a>

    {/* LinkedIn Box */}
    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-item">
      <span className="social-label">LinkedIn</span>
      <span className="social-url">linkedin.com/in/yourusername ↗</span>
    </a>
  </div>
</section>
      </main>

      <footer style={{borderTop: '1px solid var(--border)', padding: '32px 28px', textAlign: 'center'}}>
        <span style={{fontSize: '11px', color: 'var(--muted)'}}>© Prince Bautista // 2026</span>
      </footer>
    </>
  );
}

export default App;