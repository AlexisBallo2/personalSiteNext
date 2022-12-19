import { HashLink as Link } from "react-router-hash-link";

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
          <Link to="/#home">home</Link>
        </li>
        <li className="navoptions">
          <Link to="/#resume">resume</Link>
        </li>
        <li className="navoptions">
          <Link to="/#testimonials">testimonials</Link>
        </li>
        <li className="navoptions">
          <Link to="/#contact">contact</Link>
        </li>
        <li className="navoptions">
          <Link to="/?page=portfolio">portfolio</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
