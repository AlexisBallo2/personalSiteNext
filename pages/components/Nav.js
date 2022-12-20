//import { HashLink as Link } from "react-router-hash-link";
import { Link, animateScroll as scroll } from "react-scroll";

function Nav() {
  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#" title="Hide navigation">
        Hide navigation
      </a>
      <ul id="nav" className="nav">
        <li className="navoptions">
          <Link to="home" smooth={true} >
            home
          </Link>
        </li>
        <li className="navoptions">
          <Link to="resume" smooth={true}>
            resume
          </Link>
        </li>
        <li className="navoptions">
          <Link to="testimonials" smooth={true}>
            testimonials
          </Link>
        </li>
        <li className="navoptions">
          <Link to="contact" smooth={true}>
            contact
          </Link>
        </li>
        <li className="navoptions">
          <a href="/portfolio">portfolio</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
