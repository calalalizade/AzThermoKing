import React from "react";
import { Reveal } from "react-awesome-reveal";
import CountUp from "./alt/CountUp";
import scrollAnimation from "./scrollAnimation/scrollAnimation";

function AboutUs() {
  return (
    <section id="about-us">
      <div className="sec-title">
        <Reveal triggerOnce keyframes={scrollAnimation.fadeInDown}>
          <h2>About us & Our work</h2>
        </Reveal>
        <Reveal triggerOnce keyframes={scrollAnimation.fadeInUp}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="...">Read More</a>
        </Reveal>
      </div>

      <div className="bottom-shape">
        <div className="counter-container">
          <Reveal
            duration={500}
            triggerOnce
            keyframes={scrollAnimation.fadeInUp}
          >
            <div className="counter-item right-border">
              <i
                className="bi bi-calendar-check"
                style={{ fontSize: "3rem" }}
              ></i>
              <h3> 
                <CountUp number={14} duration={150} />+
              </h3>
              <p>Years in Business</p>
            </div>

            <div className="counter-item right-border">
              <i className="bi bi-people-fill" style={{ fontSize: "3rem" }}></i>
              <h3>
                <CountUp number={40} duration={60} />
              </h3>
              <p>Specialized Staff</p>
            </div>

            <div className="counter-item right-border">
              <i className="bi bi-emoji-smile" style={{ fontSize: "3rem" }}></i>
              <h3>
                <CountUp number={25} duration={100} />+
              </h3>
              <p>Happy Clients</p>
            </div>

            <div className="counter-item">
              <i className="bi bi-tools" style={{ fontSize: "3rem" }}></i>
              <h3>
                <CountUp number={50} duration={40} />+
              </h3>
              <p>Succesful Projects</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
