import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [shownav,setShownav]=useState(false);
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
      <div
				className={
					!shownav
						? "w-screen h-screen bg-black opacity-85 z-50 fixed left-[1800px] transition-all"
						: "w-screen h-screen bg-black opacity-85 z-50 fixed left-0 transition-all"
				}>
				<div className="mt-6 ml-6 " onClick={() => setShownav(!shownav)}>
					<FontAwesomeIcon
						icon={faXmark}
						size="2xl"
						style={{ color: "#fafcff" }}
					/>
				</div>
				<ul className="list-none h-[470px] items-center flex flex-col justify-evenly text-white text-2xl font-medium cursor-pointer">
					<Link className="hover:text-cyan-600" to="/" onClick={() => setShownav(!shownav)}>
						Home
					</Link>
					<Link className="hover:text-cyan-600" to="/about" onClick={() => setShownav(!shownav)}>
						About Us
					</Link>
					<Link className="hover:text-cyan-600" to="/team" onClick={() => setShownav(!shownav)}>
						Team
					</Link>
					<Link className="hover:text-cyan-600" to="/event" onClick={() => setShownav(!shownav)}>
						Events
					</Link>
					<Link className="hover:text-cyan-600" to="/contact" onClick={() => setShownav(!shownav)}>
						Contact Us
					</Link>
				</ul>
			</div>
      <nav role="navigation" className={`z-10 flex justify-between items-center mx-12 font-serif ${isNavbarFixed ? "fixed top-0 left-0 right-0 bg-white z-50 shadow-lg transition-all" : "relative"}`}>
        <img src={logo} className="m-5 w-44 max-sm:w-40 max-sm:ml-[-20px]"></img>
        <ul className="list-none w-2/5 flex justify-evenly text-lg font-medium cursor-pointer max-xl:hidden">
          <Link className="hover:text-cyan-600" to="/" >Home</Link>
          <Link className="hover:text-cyan-600" to="/about">About Us</Link>
          <Link className="hover:text-cyan-600" to="/team">Team</Link>
          <Link className="hover:text-cyan-600" to="/event">Events</Link>
          <Link className="hover:text-cyan-600" to="/contact">Contact Us</Link>
        </ul>
        <div className="xl:hidden mr-5" onClick={() => setShownav(!shownav)}>
					<FontAwesomeIcon icon={faBars} size="2xl" />
				</div>
      </nav>
      <hr />
    </div>
  )
}

export default Navbar