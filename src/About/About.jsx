import { useEffect } from "react";
import ieelogo from "../assets/IEEElogo.png";
import wielogo from "../assets/wielogo.webp";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const About = () => {
  useEffect(() => {
		window.scrollTo(0, 0);
	});
  return (
    <>
      {/* Know More About Us section */}
      <div className="bg-[#283f8f] flex flex-col justify-center items-center py-8 lg:h-32">
        <h1 className="text-white font-bold text-2xl lg:text-4xl w-full mx-auto flex flex-col items-center justify-center p-4">
          Know About Us
        </h1>
      </div>

      {/* About IEEE section */}
      <div className="flex flex-col lg:flex-row justify-between m-6">
        <div className="flex flex-1 m-8 justify-center">
          <img src={ieelogo} alt="IEEE Logo" className="w-full lg:w-auto" />
        </div>
        <div className="flex flex-col flex-1 m-8">
          <p className="text-xl mb-16 font-['Old Standard TT', serif]">
            About IEEE
          </p>
          <p className="text-[#5e5e5e] text-base">
            IEEE is the world’s largest professional association dedicated to
            advancing technological innovation and excellence for the benefit
            of humanity. IEEE and its members inspire a global community
            through its highly cited publications, conferences, technology
            standards, and professional and educational activities. IEEE
            members get access to different technical societies, their
            publications at a discounted rate. IEEE is a leading developer of
            international standards that underpin many of today's
            telecommunications, IT and power generation products and services.
          </p>
        </div>
      </div>

      {/* About WIE section */}
      <div className="flex flex-col lg:flex-row justify-between m-6">
        <div className="flex flex-col flex-1 m-8">
          <p className="text-xl mb-16 font-['Old Standard TT', serif]">
            About WIE
          </p>
          <p className="text-[#5e5e5e] text-base">
          Women in engineering within IEEE play a pivotal role in advancing innovation and diversity in the field. IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers and scientists. Through its global network, WIE fosters collaboration, mentorship, and opportunities for leadership development. The group actively works to increase the number of women in engineering and related fields by offering scholarships, workshops, and networking events. By advocating for gender equity, WIE also helps break down barriers and challenges that women face in traditionally male-dominated industries. Their efforts contribute to creating a more inclusive, innovative, and impactful engineering community.








          </p>
        </div>
        <div className="flex flex-1 m-8 justify-center">
          <img src={wielogo} alt="WIE Logo" className="w-full lg:w-auto" />
        </div>
      </div>

      {/* More About Us Section */}
      <div className="bg-[#283f8f]">
        <div className="mx-4 lg:mx-14 mt-14 mb-5">
          <h3 className="text-white font-bold text-xl pt-8 pb-4">
            More About us
          </h3>
          <hr />
        </div>
        <div className="flex flex-col lg:flex-row  mb-14 pb-8 justify-center w-screen">
          <div className="flex flex-col mb-8 lg:mb-0 lg:mr-24 ">
            <p className="text-white font-semibold mb-8 text-lg">
              Who we are?
            </p>
            <p className="text-[#e0e0e4] font-normal text-base font-['Old Standard TT', serif] ml-5">
              We are a combined association of faculty members along with the
              enthusiastic students of our college, The LNMIIT Jaipur. We strive
              for creating technology for the people and people for technology.
            </p>
          </div>
          <div className="flex flex-col mb-8 lg:mb-0 lg:mr-24">
            <p className="text-white font-semibold mb-8 text-lg">
              What we do?
            </p>
            <p className="text-[#e0e0e4] font-normal text-base font-['Old Standard TT', serif]">
              We at LNMIIT believe in building technology for people and people
              for technology. The branch activities offer numerous educational,
              technical, and professional opportunities through various events.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-white font-semibold mb-8 text-lg ">
              What we have done?
            </p>
            <p className="text-[#e0e0e4] font-normal text-base font-['Old Standard TT', serif] mr-5">
              Workshops in popular areas, distinguished lectures, student
              competitions and challenging developers sprints are few regular
              events which this branch pursues with highest order of energy and
              expected outcomes.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-4 lg:mx-14 mt-14">
        <h3 className="text-black font-semibold text-lg p-2">
          Frequently Asked Questions
        </h3>
        <hr />
        <p className="text-[#a3a3a7] text-base p-2">
          Please reach us at if you cannot find an answer to your question.
        </p>
      </div>

      <div className="mx-4 lg:mx-14 mt-8">
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
            The mission of IEEE is to empower young people to reach their full
            potential through education, leadership development, and community
            service.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className="text-lg"
          >
            What types of educational programmes does IEEE offer?
          </AccordionSummary>
          <AccordionDetails className="text-[#69696b]">
            IEEE offers a range of educational programmes including tutoring,
            college readiness workshops, and career exploration opportunities.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="text-lg"
          >
            How to join us?
          </AccordionSummary>
          <AccordionDetails className="text-[#69696b]">
            There are recruitments every year for various positions and a
            general body is formed every year.
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default About;
