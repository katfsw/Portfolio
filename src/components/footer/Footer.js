import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer-holder">
      <div className="socials">
        <div className="socialMedia">
          <i class="fab fa-github q" />
          <p>Github</p>
        </div>
        <div className="socialMedia">
          <i class="fab fa-linkedin q" />
          <p>LinkedIn</p>
        </div>
        <div className="socialMedia">
          <i class="fab fa-twitter-square q" />
          <p>Twitter</p>
        </div>
      </div>
      <div className="copy">
        <copyright>
          <i class="far fa-copyright qq" />
          <a href="https://github.com/brandybecker" alt="Brandy's Github">
            BrandyBeckerFSW
          </a>
        </copyright>
      </div>
    </div>
  );
};

export default Footer;
