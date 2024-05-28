import Bgimg from "../assets/collegebg.jpg";

const HomeImg = () => {
  return (
    <div className="hidden md:block">
      <div
        className="w-[120%] -ml-[123px] h-screen bg-cover bg-center brightness-[55%]"
        style={{ backgroundImage: `url(${Bgimg})` }}>
      </div>
      <div className="relative bottom-[490px] left-[350px] text-white flex-col flex justify-center items-center w-[850px]">
        <h1 className="font-bold text-5xl hidden lg:visible border-white border-b-2 text-center w-[850px] pb-5 mb-5 font-serif">IEEE Student Branch, LNMIIT</h1>
        <p className="font-normal text-2xl mb-8 hidden lg:visible">Creating Technology for people and people for technology</p>
        <button className="border-2 w-40 h-14 font-semibold font-serif text-lg hover:bg-white hover:text-black hidden lg:visible">Contact Us</button>
      </div>
    </div>
  )
}

export default HomeImg