import './App.css'
import Footer from './HeaderFooter/Footer'
import { Route, Routes } from "react-router-dom";
import Navbar from './HeaderFooter/Navbar'
import Home from './Home/Home';
import Event from './Event/Event';
import Contact from './Contact/Contact';
import Team from './Team/Team';
import About from './About/About';

function App() {
  return (
    <div className='w-full'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
