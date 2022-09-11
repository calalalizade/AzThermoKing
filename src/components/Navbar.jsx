import { React, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import LogoOnly from "../assets/AzthermokingOnlyLogo.png";
import LogoText from "../assets/AzthermokingText.png";

function Navbar() {
  const [navbarHeight, setNavbarHeight] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [icon, setIcon] = useState("nav-toggler");

  const changeHeight = () => {
    if (window.scrollY >= 500) {
      setNavbarHeight(true);
    } else {
      setNavbarHeight(false);
    }
  };

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);

    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else setIcon("nav-toggler");
  };

  window.addEventListener("scroll", changeHeight);

  return (
    <nav className={navbarHeight ? "header header__shrink" : "header"}>
      <div
        className="logo-holder"
        onClick={() =>
          scroll.scrollToTop({
            smooth: true,
            delay: 0,
            duration: 100,
          })
        }
      >
        <img className="logo" src={LogoOnly} alt="azthermoking_logo"></img>
        <img
          className={navbarHeight ? "hide-text text" : "text"}
          src={LogoText}
          alt="azthermoking_logo"
        ></img>
      </div>

      <ul className={isCollapsed ? "nav-menu" : "nav-menu nav-collapsed"}>
        <li>
          <Link
            // activeClassName="active"
            to="about-us"
            smooth="true"
            spy={true}
            duration={300}
            offset={-60}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            // activeClassName="active"
            to="service"
            smooth="true"
            spy={true}
            duration={300}
            offset={-60}
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            // activeClassName="active"
            to="projects"
            smooth="true"
            spy={true}
            duration={300}
            offset={-60}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            // activeClassName="active"
            to="clients"
            smooth="true"
            spy={true}
            duration={300}
            offset={-60}
          >
            Partners
          </Link>
        </li>
        <li>
          <Link
            // activeClassName="active"
            to="contact"
            smooth="true"
            spy={true}
            duration={300}
            offset={-60}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className={icon} onClick={handleCollapse}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
