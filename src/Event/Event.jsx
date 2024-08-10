import workshop from "../assets/workshop.webp";
import hackathon from "../assets/hackathon.webp";
import podcast from "../assets/podcast.webp";
import informativeTours from "../assets/Informative_Tours.webp";
import first from "../assets/first.webp";
import second from "../assets/second.webp";
import webinar from "../assets/webinar.jpg";
import { Link } from "react-router-dom";
import test_Img from "../assets/Caro3.jpg"
import { EventCardContent } from "./EventData.js";

const Event = () => {
  return (
    <>
      <div className="bg-[#3548a5] p-6">
        <h1 className="font-semibold text-center text-4xl text-white my-2">
          Events
        </h1>
      </div>
      <div className="text-2xl sm:text-3xl lg:text-4xl m-10 text-center lg:text-left lg:ml-40 text-gray-700 font-semibold pt-2">
        WHAT WE LOVE TO DO
      </div>
      <hr className="mx-6 lg:ml-20 lg:mr-20" />
      <div className="flex flex-col lg:flex-row items-center text-xl lg:ml-20 text-center font-serif space-y-10 lg:space-y-0 lg:space-x-10 py-10">
        <div className="w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[20vw] mt-[-80px]">
          <img
            src={workshop}
            className="w-full h-auto mx-auto"
            alt="Workshop"
          />
          <p className="text-3xl ">Workshops</p>
          <p className="text-gray-500 pt-4">
            IEEE SB organizes informative workshops covering multiple fields.
          </p>
        </div>
        <div className="w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[20vw] ">
          <img
            src={hackathon}
            className="w-full h-auto mx-auto mt-[-44px]"
            alt="Hackathon"
          />
          <p className="text-3xl ">Hackathons</p>
          <p className="text-gray-500 pt-4">
            IEEE SB conducts various hackathons to create a healthy competition
            and increase knowledge sharing culture.
          </p>
        </div>
        <div className="w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[20vw]">
          <img src={podcast} className="w-full h-auto mx-auto" alt="Podcast" />
          <p className="text-3xl">Podcasts</p>
          <p className="text-gray-500 pt-4">
            Explore and gain knowledge through IEEE SBs dynamic podcasts,
            fostering student success and transferring valuable insights in the
            realm of technology.
          </p>
        </div>
        <div className="w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[20vw]">
          <img
            src={informativeTours}
            className="w-full h-auto mx-auto"
            alt="Informative Tours"
          />
          <p className="text-3xl">Informative Tours</p>
          <p className="text-gray-500 pt-4">
            The IEEE SB often travel to informative centers and to places full
            of new technologies in order to update students about it and help
            them learn in process.
          </p>
        </div>
      </div>
      <div className="text-2xl sm:text-3xl lg:text-4xl m-10 text-center lg:text-left lg:ml-20 text-gray-700 font-semibold pt-2">
        SOME OF OUR FEATURE WORK
      </div>
      <hr className="mx-6 lg:ml-20 lg:mr-20" />
      <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 gap-x-10 items-center lg:justify-between mx-6 lg:mx-20 my-10">
        <div
          className="w-full lg:w-[25vw] text-center font-bold text-2xl sm:text-3xl lg:text-5xl text-white bg-cover bg-center brightness-[85%] rounded-lg shadow-md py-20 lg:py-60 mt-10 lg:mt-20 mb-10 lg:mb-20 hover:scale-105 transition-transform duration-300 ease-in cursor-pointer"
          style={{ backgroundImage: `url(${first})` }}
        >
          <Link to="/event/workshop">Workshops</Link>
        </div>
        <div
          className="w-full lg:w-[25vw] text-center font-bold text-2xl sm:text-3xl lg:text-5xl text-white bg-cover bg-center brightness-[85%] rounded-lg shadow-md py-20 lg:py-60 mt-10 lg:mt-20 mb-10 lg:mb-20 hover:scale-105 transition-transform duration-300 ease-in cursor-pointer"
          style={{ backgroundImage: `url(${second})` }}
        >
          <Link to="/event/hackathon">Hackathon</Link>
        </div>
        <div
          className="w-full lg:w-[25vw] text-center font-bold text-2xl sm:text-3xl lg:text-5xl text-white bg-cover bg-center brightness-[85%] rounded-lg shadow-md py-20 lg:py-60 mt-10 lg:mt-20 mb-10 lg:mb-20 hover:scale-105 transition-transform duration-300 ease-in cursor-pointer"
          style={{ backgroundImage: `url(${webinar})` }}
        >
          <Link to="/event/webinar">Webinar</Link>
        </div>
      </div>

      <div className="m-4 flex flex-col justify-center">

        {EventCardContent.map((Event, index)=>(
        <div key={index} className="flex flex-col my-2 mx-auto items-center max-w-2xl bg-white rounded-lg shadow md:flex-row">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-72 md:rounded-none md:rounded-s-lg"
            src={Event.photo}
            alt
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {Event.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              {Event.content}
            </p>
          </div>
        </div>))}
      </div>
    </>
  );
};
export default Event;
