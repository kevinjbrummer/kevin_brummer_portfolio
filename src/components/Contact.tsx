"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons/faMobileScreenButton";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Contact() {
  return (
    <address className="contact">
      <a
        className="contact__link outside-link"
        href="mailto:kevinjbrummer@gmail.com"
      >
        <FontAwesomeIcon className="contact__icon" icon={faEnvelope} />
        kevinjbrummer@gmail.com
      </a>
      <a className="contact__link outside-link" href="tel:+8107040725974">
        <FontAwesomeIcon
          className="contact__icon"
          icon={faMobileScreenButton}
        />
        +81 070-4072-5974
      </a>
      <a
        className="contact__link outside-link"
        href="https://github.com/kevinjbrummer"
        target="_blank"
      >
        <FontAwesomeIcon className="contact__icon" icon={faGithub} />
        github.com/kevinjbrummer
      </a>
      <a
        className="contact__link outside-link"
        href="https://www.linkedin.com/in/kevinbrummer/"
        target="_blank"
      >
        <FontAwesomeIcon className="contact__icon" icon={faLinkedin} />
        linkedin.com/in/kevinbrummer/
      </a>
    </address>
  );
}
