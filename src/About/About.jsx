import React from "react";
import ieelogo from "../assets/IEEElogo.png";
import wielogo from "../assets/wielogo.webp";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const About = () => {
  return (
    <>
      {/* Know More About Us section */}
      <div className="bg-[#283f8f] lg:h-52 flex flex-col justify-center items-center">
        <h1 className="lg:text-[2rem] text-white font-bold leading-4 w-full mx-auto flex flex-col items-center justify-center p-6">Know About Us</h1>
      </div>

      {/* About IEEE section */}
      <div className="flex justify-between m-6">
        <div className="flex flex-1 m-8 justify-center">
          <img src={ieelogo} alt="" className="" />
        </div>
        <div className="flex flex-col flex-1 m-8">
          <p className="text-[1.25rem] mb-[4rem] font-['Old Standard TT', serif] ">About IEEE</p>
          <p className="text-[#5e5e5e] text-base ">IEEE is the world’s largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities. IEEE members get access to different technical societies, their publications at a discounted rate. IEEE is a leading developer of international standards that underpin many of today's telecommunications, IT and power generation products and services.</p>
        </div>
      </div>

      {/* About WIE section */}
      <div className="flex justify-between  m-6">
        <div className="flex flex-col flex-1 m-8">
          <p className="text-[1.25rem] mb-[4rem] font-['Old Standard TT', serif] ">About WIE</p>
          <p className="text-[#5e5e5e] text-base ">IEEE is the world’s largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities. IEEE members get access to different technical societies, their publications at a discounted rate. IEEE is a leading developer of international standards that underpin many of today's telecommunications, IT and power generation products and services.</p>
        </div>
        <div className="flex flex-1 m-8 justify-center">
          <img src={wielogo} alt="" className="" />
        </div>
      </div>

      {/* More About Us Section */}
      <div className="bg-[#283f8f]">
        <div className="mx-14 mt-14 mb-5">
          <h3 className="text-white font-bold text-[1.25rem] pt-8 pb-4 ">More About us</h3>
          <hr></hr>
        </div>
        <div className="flex mx-14 mb-14 pb-8">
          <div className="flex flex-col mr-[6rem]">
            <p className="text-white font-semibold mb-8 text-lg">Who we are?</p>
            <p className="text-[#e0e0e4] font-normal text-base font-['Old Standard TT', serif]">We are a combined association of faculty members along with the enthusiastic students of our college, The LNMIIT Jaipur. We strive for creating technology for the people and people for technology.</p>
          </div>
          <div className="flex flex-col mr-[6rem]">
            <p className="text-white font-semibold mb-8 text-lg">What we do?</p>
            <p className="text-[#e0e0e4] font-normal text-base font-['Old Standard TT', serif]">We at LNMIIT believe in building technology for people and people for technology. The branch activities offer numerous educational, technical, and professional opportunities through various events.</p>
          </div>
          <div className="flex flex-col mr-[6rem]">
            <p className="text-white font-semibold mb-8 text-lg">What we have done?</p>
            <p className="text-[#e0e0e4] font-normal text-base font-['Old Standard TT', serif]">Workshops in popular areas, distinguished lectures, student competitions and challenging developers sprints are few regular events which this branch pursues with highest order of energy and expected outcomes.</p>
          </div>
        </div>
      </div>

      <div className="m-14">
        <h3 className="text-black font-semibold text-lg p-2">Frequently Asked Questions</h3>
        <hr></hr>
        <p className="text-[#a3a3a7] text-base p-2">Please reach us at  if you cannot find an answer to your question.</p>
      </div>

      <div className="m-14 mx-28">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="text-lg"
          >
            What is the mission of IEEE?
          </AccordionSummary>
          <AccordionDetails className="text-[#69696b]">
            The mission of IEEE is to empower young people to reach their full potential through education, leadership development, and community service.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="text-lg"
          >
            What types of educational programmes does IEEE offer?
          </AccordionSummary>
          <AccordionDetails className="text-[#69696b]">
            IEEE offers a range of educational programmes including tutoring, college readiness workshops, and career exploration opportunities.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="text-lg"
          >
            How to join us?
          </AccordionSummary>
          <AccordionDetails className="text-[#69696b]">
            There are recruitments every year for various positions and a general body is formed every year.
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}

export default About