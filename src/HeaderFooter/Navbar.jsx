import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isNavbarFixed, setNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav role="navigation" className={`flex justify-between items-center mx-12 font-serif ${isNavbarFixed ? "fixed top-0 left-0 right-0 bg-white z-50 shadow-lg transition-all" : "relative"}`}>
        <img src={logo} className="m-5 w-44"></img>
        <ul className="list-none w-2/5 flex justify-evenly text-lg font-medium cursor-pointer">
          <Link className="hover:text-cyan-600" to="/" >Home</Link>
          <Link className="hover:text-cyan-600" to="/about">About Us</Link>
          <Link className="hover:text-cyan-600" to="/team">Team</Link>
          <Link className="hover:text-cyan-600" to="/event">Events</Link>
          <Link className="hover:text-cyan-600" to="/contact">Contact Us</Link>
        </ul>
      </nav>
      <hr />
    </div>
  )
}

export default Navbar