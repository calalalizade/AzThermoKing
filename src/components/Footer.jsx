import React from "react";
import { Reveal } from "react-awesome-reveal";
import scrollAnimation from "./scrollAnimation/scrollAnimation";

function Footer() {
  return (
    <section id="footer">
      <Reveal triggerOnce keyframes={scrollAnimation.fadeInUp}>
        <div className="footer-wrapper">
          <p>
            © 2022, «AzThermoKing». All rights reserved.{" "}
            <span>
              | Powered by{" "}
              <a href="mailto: celal.alizade.0000@gmail.com">J. A.</a>
            </span>
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export default Footer;
