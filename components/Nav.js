//import { HashLink as Link } from "react-router-hash-link";
//import { Link, animateScroll as scroll } from "react-scroll";
import Link from 'next/link'

function Nav() {
	/*
	 *
	 * 
          <Link to="/#home" smooth={true} >
            home
          </Link>
		  */
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
	  		<Link href = "/#home" scroll = {false}>
	  			Home
	  		</Link>
        </li>
        <li className="navoptions">
			
	  		<Link href = "/#resume" scroll = {false}>
	  			resume	
	  		</Link>
        </li>
        <li className="navoptions">
	  		<Link href = "/#testimonials" scroll = {false}>
	  			testimonials	
	  		</Link>
        </li>
        <li className="navoptions">
	  		<Link href = "/#contact" scroll = {false}>
	  			contact	
	  		</Link>
        </li>
        <li className="navoptions">
          <Link href="/portfolio">portfolio</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
