import React from "react";
import { Reveal } from "react-awesome-reveal";
import scrollAnimation from "./scrollAnimation/scrollAnimation";

function FollowUs() {
  return (
    <section id="social" className="parallax">
      <div className="image-overlay">
        <Reveal triggerOnce keyframes={scrollAnimation.fadeInDown}>
          <div className="sec-title">
            <h2>FOLLOW US</h2>
            <p>
              Beautifully simple follow buttons to help you get followers on
            </p>
          </div>
        </Reveal>

        <ul className="social-buttons">
          <Reveal cascade triggerOnce keyframes={scrollAnimation.zoomIn}>
            <li className="item">
              <a
                href="https://www.facebook.com/azthermoking/?_rdc=1&_rdr"
                target="_blank"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li className="item">
              <a
                href="https://www.linkedin.com/in/azthermoking/?originalSubdomain=az"
                target="_blank"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="item">
              <a
                href="https://www.facebook.com/azthermoking/?_rdc=1&_rdr"
                target="_blank"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}

export default FollowUs;
