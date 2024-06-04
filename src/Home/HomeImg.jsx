import Bgimg from "../assets/collegebg.jpg";

const HomeImg = () => {
  return (
    <div className="">
      <div
        className="w-screen h-screen bg-cover bg-center brightness-[55%] ml-[-135px] max-lg:w-full"
        style={{ backgroundImage: `url(${Bgimg})` }}>
      </div>
      <div className="relative bottom-[490px] left-[300px] text-white flex-col flex justify-center items-center w-[850px] md:max-xl:w-[350px] md:max-lg:left-[250px] max-sm:left-[130px] lg:max-xl:left-[360px] sm:max-md:w-[400px] sm:max-md:left-[350px] max-sm:w-[200px]">
        <h1 className="font-bold text-5xl  border-white border-b-2 flex justify-center w-[850px] pb-5 mb-5 font-serif max-lg:text-4xl max-lg:w-[700px]  md:max-xl:mr-[50px] max-sm:text-xl max-sm:w-[340px] max-sm:font-extrabold relative max-sm:left-[-10px]">IEEE Student Branch, LNMIIT</h1>
        <p className="font-normal text-2xl mb-8 relative left-[40px] w-[700px] md:max-xl:text-xl md:max-xl:w-[600px]  max-sm:text-xl max-sm:w-[300px] max-sm:left-0">Creating Technology for people and people for technology</p>
        <button className="border-2 w-40 h-14 font-semibold font-serif text-lg hover:bg-white hover:text-black max-xl:mr-[70px] max-sm:ml-[40px] ">Contact Us</button>
      </div>
    </div>
  )
}

export default HomeImg