import React from 'react';

const Header = ({ isDarkMode, toggleDarkMode, toggleContact }) => {
  return (
    <header className="header">
      <div>
        <h1>Manish Kumar</h1>
        <h2>A passionate & dedicated developer from India</h2>
      </div>

      <div className="header-controls">
        <button
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          title={isDarkMode ? 'Activate Light Mode' : 'Activate Dark Mode'}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <i className="ri-sun-line"></i>
          ) : (
            <i className="ri-moon-line"></i>
          )}
        </button>

        <button
          className="contact-toggle-btn"
          onClick={toggleContact}
          aria-label="Toggle Contact Information"
        >
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
