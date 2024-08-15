import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className="text-center py-3">
      <h6>&copy; 2024 My Portfolio</h6>
      <h2>Don't forget to follow me on LinkedIn.</h2>
      <a
        href="https://www.linkedin.com/in/adnan-shaikh-91724b320/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        <i className="fab fa-linkedin mx-2"></i>
      </a>
    </footer>
  );
}

export default Footer;
