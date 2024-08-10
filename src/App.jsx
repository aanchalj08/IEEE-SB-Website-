import './App.css'
import Footer from './HeaderFooter/Footer'
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from './HeaderFooter/Navbar'
import Home from './Home/Home';
import Event from './Event/Event';
import Contact from './Contact/Contact';
import Team from './Team/Team';
import About from './About/About';
import HomeImg from './Home/HomeImg';
import Hackathon from './Event/Hackathon';
import Webinar from './Event/Webinar';
import Workshop from './Event/Workshop';

function App() {
    const location = useLocation();
    return (
		<div className="w-full source-sans">
			<Navbar />
			{location.pathname === "/" && <HomeImg />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/event" element={<Event />} />
				<Route path="/event/workshop" element={<Workshop />} />
				<Route path="/event/hackathon" element={<Hackathon />} />
				<Route path="/event/webinar" element={<Webinar />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/team" element={<Team />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App
