import { Link } from "react-router-dom";
import image1 from "../image1.png";

const Webinar = () => {
  return (
    <div>
      {/* Background and header section */}
      <div className="bg-blue-800 text-center h-64 p-6 flex items-center justify-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mt-4 mb-4">Webinar</h1>
      </div>

      {/* Image section */}
      <div className="flex items-center justify-center mt-10 sm:mt-20 px-4">
        <img src={image1} alt="Webinar" className="w-full max-w-3xl h-auto"/>
      </div>

      {/* Content section */}
      <div className="w-full flex flex-col items-center justify-center px-4 lg:px-10">
        <div className="mt-10 sm:mt-20 w-full lg:w-3/4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left">Webinar on Kretschmann-based Plasmonic Biosensors</h1>
          <hr className="my-4"/>
          <p className="text-gray-500 tracking-wide text-base sm:text-lg lg:text-xl mt-4 lg:mt-10 font-serif text-justify">
            IEEE Women in Engineering (WIE) organized a highly informative webinar on, focusing on the topic of Kretschmann-based Plasmonic Biosensors. The session was conducted by the esteemed Dr. P. Susthitha Menon, providing attendees with valuable insights into this cutting-edge field. The event aimed to enhance students understanding and knowledge of plasmonic biosensors, fostering academic growth and curiosity in the realm of bio-optics.
            <br/><br/>
            The webinar served as a platform for students and enthusiasts to delve into the intricacies of Kretschmann-based plasmonic biosensors, a subject at the forefront of scientific and technological advancements. Dr. P. Susthitha Menon, an expert in the field, guided participants through the principles, applications, and recent developments related to this specialized area of study.
            <br/><br/>
            Enthusiastic participants, comprising students from various disciplines, formed teams to tackle the cryptic challenges presented at Crack the Code 1.0. The diverse backgrounds of the participants added an extra layer of complexity to the problem-solving dynamics, fostering collaboration and creative thinking.
            <br/><br/>
            A lively question-and-answer session followed the presentation, providing attendees with the opportunity to engage directly with Dr. Menon. This interactive segment encouraged a deeper exploration of specific aspects of the topic and facilitated a dynamic exchange of ideas.
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

export default Webinar;
