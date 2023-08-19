import React from "react";
import "./footer.css";
import { Icon } from '@iconify/react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Varun Poojary</h1>
        <ul className="footer__list">
        <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>

        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/varun-poojary7/"
            className="footer__social-link"
            target="_blank"
          >
            <i class='bx bxl-linkedin' ></i>
          </a>

          <a
            href="https://leetcode.com/VarunPoojary/"
            className="footer__social-link"
            target="_blank"
          >
            <Icon icon="simple-icons:leetcode" />
          </a>

          <a
            href="https://github.com/VarunPoojary"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
            &#169; Varun Poojary. All rights reserved

        </span>
      </div>
    </footer>
  );
};

export default Footer;
