import Bgimg from "../assets/collegebg.jpg";

const HomeImg = () => {
	return (
		<div className="hidden md:block mb-10">
			<div
				className="w-full h-screen bg-cover bg-center brightness-75"
				style={{ backgroundImage: `url(${Bgimg})` }}></div>
			<div className="absolute inset-0 flex flex-col justify-center mt-40 items-center text-white px-4">
				<h1 className="font-bold text-5xl border-b-2 border-white pb-5 mb-5 font-serif max-lg:text-4xl max-md:text-3xl max-sm:text-2xl text-center">
					IEEE Student Branch, LNMIIT
				</h1>
				<p className="font-normal text-2xl mb-8 max-lg:text-xl max-md:text-lg max-sm:text-base text-center max-w-xl">
					Creating Technology for people and people for technology
				</p>
				<a href="/contact">
					<button className="border-2 px-8 py-3 font-semibold font-serif text-lg hover:bg-white hover:text-black transition-all">
						Contact Us
					</button>
				</a>
			</div>
		</div>
	);
};

export default HomeImg;
