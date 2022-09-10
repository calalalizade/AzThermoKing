import React from "react";
import Marquee from "react-fast-marquee";
import { Reveal } from "react-awesome-reveal";
import scrollAnimation from "./scrollAnimation/scrollAnimation";

function Clients() {
  return (
    <section id="clients">
      <Reveal triggerOnce keyframes={scrollAnimation.fadeInDown}>
        <div className="sec-title">
          <h2>CLIENTS & PARTNERS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Reveal>

      <Reveal triggerOnce keyframes={scrollAnimation.fadeInUp}>
        <div className="slider">
          <Marquee pauseOnHover speed={15}>
            <img src="https://azthermoking.az/uploads/client1.png" alt="no" />
            <img src="https://azthermoking.az/uploads/client2.png" alt="no" />
            <img src="https://azthermoking.az/uploads/client3.png" alt="no" />
            <img src="https://azthermoking.az/uploads/client4.png" alt="no" />
            <img src="https://azthermoking.az/uploads/client5.png" alt="no" />
            <img src="https://azthermoking.az/uploads/client6.png" alt="no" />
            <img src="https://azthermoking.az/uploads/client7.png" alt="no" />
            <img src="https://azthermoking.az/uploads/client8.png" alt="no" />
            <img src="https://azthermoking.az/uploads/client9.png" alt="no" />
          </Marquee>
          <Marquee pauseOnHover speed={25} direction="right">
            <img src="https://azthermoking.az/uploads/partner1.png" alt="no" />
            <img src="https://azthermoking.az/uploads/partner2.png" alt="no" />
            <img src="https://azthermoking.az/uploads/partner3.png" alt="no" />
            <img src="https://azthermoking.az/uploads/partner4.png" alt="no" />
            <img src="https://azthermoking.az/uploads/partner5.png" alt="no" />
            <img src="https://azthermoking.az/uploads/partner6.png" alt="no" />
            <img src="https://azthermoking.az/uploads/partner7.png" alt="no" />
            <img src="https://azthermoking.az/uploads/partner8.png" alt="no" />
            <img src="https://azthermoking.az/uploads/partner9.png" alt="no" />
            <img src="https://azthermoking.az/uploads/partner10.png" alt="no" />
            <img src="https://azthermoking.az/uploads/partner11.png" alt="no" />
            <img src="https://azthermoking.az/uploads/partner12.png" alt="no" />
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
}

export default Clients;
