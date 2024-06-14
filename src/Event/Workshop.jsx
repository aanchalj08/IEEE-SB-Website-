import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const Workshop = () => {
  return (
    <div>
      {/* Background and header section */}
      <div className="bg-blue-800 text-center h-64 p-6 flex items-center justify-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mt-4 mb-4">Workshop</h1>
      </div>
      
      {/* Carousel section */}
      <div className="bg-cover h-80 sm:h-96 lg:h-[400px]">
        <Carousel />
      </div>
      
      {/* Content section */}
      <div className="w-full flex flex-col items-center justify-center px-4 lg:px-10">
        {/* IEEE Introductory Workshop section */}
        <div className="mt-20 w-full lg:w-3/4">
          <h1 className=" text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left">IEEE Introductory Workshop</h1>
          <hr className="my-4"/>
          <p className="text-gray-500 tracking-wide text-base sm:text-lg lg:text-xl mt-4 lg:mt-10 font-serif text-justify">
            The IEEE Student Branch organized a crucial event with the primary objective of relaunching and reinvigorating the IEEE SB branch. The IEEE SB Introductory Workshop served as a platform to reintroduce the branch to the student body, providing essential information on its offerings and rekindling interest in its activities.
            <br/><br/>
            The workshop aimed to familiarize students with the IEEE Student Branch, its mission, and the myriad opportunities it provides to those interested in the field of technology and engineering. The event played a pivotal role in re-establishing the IEEE SB presence on campus and fostering a sense of community among students passionate about advancements in technology.
          </p>
        </div>
        
        {/* Web Development Workshop section */}
        <div className="mt-20 w-full lg:w-3/4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left">Web Development Workshop</h1>
          <hr className="my-4"/>
          <p className="text-gray-500 tracking-wide text-base sm:text-lg lg:text-xl mt-4 lg:mt-10 font-serif text-justify">
            The IEEE Student Branch successfully organized a comprehensive three-day Web Development Workshop. This workshop aimed to equip participants with essential skills and knowledge needed to embark on their journey in web development. Conducted as a hands-on code-along session, the event provided a practical overview and step-by-step guidance for beginners in the field.
            <br/><br/>
            The Web Development Workshop hosted by IEEE SB was strategically designed to cater to individuals interested in learning the fundamentals of web development. The three-day format allowed for an in-depth exploration of key concepts, ensuring participants gained a solid foundation and practical insights into the world of web development.
          </p>
        </div>
        
        {/* Go Back button */}
        <div className="flex item-center justify-center mt-20 mb-20">
            <Link to="/event"><button className="w-[50vw] bg-gray-200 hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded h-15">
                Go Back
            </button></Link>
            </div>
      </div>
    </div>
  );
};

export default Workshop;
