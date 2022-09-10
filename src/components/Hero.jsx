import React from "react";
import LandingCarousel from "./alt/LandingCarousel";
import { Reveal } from "react-awesome-reveal";
import scrollAnimation from "./scrollAnimation/scrollAnimation";

function Hero() {
  return (
    <main>
      <section id="hero">
        <div className="hero-text">
          <Reveal triggerOnce keyframes={scrollAnimation.fadeInDown}>
            <h1>Soyutma və isitmə sistemləri</h1>
            <p>Italiya və Türkiyə istehsalı yüksək keyfiyyətli </p>
          </Reveal>
          <a className="button-blue button-effect">Order Now</a>
        </div>
        <LandingCarousel />
      </section>
    </main>
  );
}

export default Hero;
