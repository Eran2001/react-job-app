import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1><Link to="/">LOGO</Link></h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><button className="btn"><Link to="/contact">Contact</Link></button></li>
      </ul>
    </nav>
  )
}

export default Navbar;