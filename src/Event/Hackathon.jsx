import { Link } from "react-router-dom";
import Carousel2 from "./Carousel2";

const Hackathon = () => {
  return (
    <div>
      {/* Background and header section */}
      <div className="bg-blue-800 text-center h-64 p-6 flex items-center justify-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mt-4 mb-4">Hackathon</h1>
      </div>

      {/* Carousel section */}
      <div className="bg-cover h-80 sm:h-96 lg:h-[400px]">
        <Carousel2 />
      </div>

      {/* Content section */}
      <div className="w-full flex flex-col items-center justify-center px-4 lg:px-10">
        {/* Crack the Code 1.0 section */}
        <div className="mt-20 w-full lg:w-3/4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left">Crack the Code 1.0</h1>
          <hr className="my-4"/>
          <p className="text-gray-500 tracking-wide text-base sm:text-lg lg:text-xl mt-4 lg:mt-10 font-serif text-justify">
            Crack the Code 1.0, organized by the IEEE Student Branch, unfolded as an exhilarating and intellectually stimulating event designed to challenge the minds of participants.
            <br/><br/>
            The event revolved around decoding a series of clues that led participants on a thrilling journey to uncover the final answer. The clues were strategically placed, requiring a combination of logical thinking, analytical skills, and teamwork. Participants faced a variety of challenges, ranging from cryptographic puzzles to riddles, each progressively leading them closer to the ultimate solution.
            <br/><br/>
            Enthusiastic participants, comprising students from various disciplines, formed teams to tackle the cryptic challenges presented at Crack the Code 1.0. The diverse backgrounds of the participants added an extra layer of complexity to the problem-solving dynamics, fostering collaboration and creative thinking.
            <br/><br/>
            After intense competition, the top two teams emerged victorious, showcasing exceptional problem-solving prowess. The winning teams were awarded cash prizes as a token of recognition for their outstanding achievements. The prize distribution ceremony marked the culmination of Crack the Code 1.0, with applause resonating throughout the venue.
          </p>
        </div>

        {/* Web Development Hackathon section */}
        <div className="mt-20 w-full lg:w-3/4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left">Web Development Hackathon</h1>
          <hr className="my-4"/>
          <p className="text-gray-500 tracking-wide text-base sm:text-lg lg:text-xl mt-4 lg:mt-10 font-serif text-justify">
            The IEEE Student Branch at LNMIIT Jaipur successfully organized a three-day web development hackathon, showcasing the prowess of participants in tackling challenging problem statements. The event aimed to provide a platform for students to apply their web development skills and foster a spirit of innovation and collaboration.
            <br/><br/>
            The hackathon spanned three days, during which participants were presented with two intriguing problem statements. These problem statements were carefully curated to challenge the participants and encourage them to think critically and creatively. The event emphasized the importance of problem-solving and collaboration in the field of web development.
            <br/><br/>
            The winning team, distinguished for their outstanding performance and creativity, was duly rewarded. Beyond the competition, the hackathon served as a valuable learning experience for all participants. The event provided a platform for students to apply theoretical knowledge to practical problem-solving, enhancing their understanding of web development concepts. Moreover, collaboration among participants fostered a sense of camaraderie and collective learning.
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

export default Hackathon;
