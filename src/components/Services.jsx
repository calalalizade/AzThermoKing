import React from "react";
import { Reveal } from "react-awesome-reveal";
import scrollAnimation from "./scrollAnimation/scrollAnimation";

function Services() {
  return (
    <section id="service">
      <div className="sec-title">
        <Reveal triggerOnce keyframes={scrollAnimation.bounceInLeft}>
          <h2>SERVICE</h2>
        </Reveal>
        <Reveal triggerOnce keyframes={scrollAnimation.bounceInRight}>
          <p>The Key Features of our Job</p>
        </Reveal>
      </div>

      <div className="service-items">
        <Reveal cascade triggerOnce keyframes={scrollAnimation.zoomIn}>
          <div className="item">
            <div className="service-icon">
              <i
                className="bi bi-house-door"
                style={{
                  fontSize: "3.5rem",

                  transform: "rotate(-48deg)",
                }}
              ></i>
            </div>
            <h3>SUPPORT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="item">
            <div className="service-icon">
              <i
                className="bi bi-book"
                style={{
                  fontSize: "3.5rem",

                  transform: "rotate(-48deg)",
                }}
              ></i>
            </div>
            <h3>WELL DOCUMENTED</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="item">
            <div className="service-icon">
              <i
                className="bi bi-bank"
                style={{
                  fontSize: "3.5rem",

                  transform: "rotate(-48deg)",
                }}
              ></i>
            </div>
            <h3>DESIGN UI/UX</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="item">
            <div className="service-icon">
              <i
                className="bi bi-globe2"
                style={{
                  fontSize: "3.5rem",

                  transform: "rotate(-48deg)",
                }}
              ></i>
            </div>
            <h3>WEB SECURITY</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Services;
