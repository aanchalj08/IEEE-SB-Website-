import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center mx-12 font-serif">
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