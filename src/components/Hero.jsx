import React from "react";
import LandingCarousel from "./alt/LandingCarousel";
import { Reveal } from "react-awesome-reveal";
import scrollAnimation from "./scrollAnimation/scrollAnimation";
import { Link } from "react-scroll";

function Hero() {
  return (
    <main>
      <section id="hero">
        <div className="hero-text">
          <Reveal triggerOnce keyframes={scrollAnimation.fadeInDown}>
            <h1>Soyutma və isitmə sistemləri</h1>
            <p>Italiya və Türkiyə istehsalı yüksək keyfiyyətli </p>
          </Reveal>
          <Link
            className="button-blue button-effect"
            to="contact"
            smooth="true"
            spy={true}
            duration={300}
            offset={-60}
          >
            Order Now
          </Link>
        </div>
        <LandingCarousel />
      </section>
    </main>
  );
}

export default Hero;
