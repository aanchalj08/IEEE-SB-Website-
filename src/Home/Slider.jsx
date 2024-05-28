import c1 from '../assets/first.webp'
import c2 from '../assets/second.webp'
import c3 from '../assets/third.webp'
import c4 from '../assets/fourth.webp'

const Slider = () => {
	return (
		<div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
			<h1 className="text-4xl mt-4 text-center text-green-700 font-bold">
				More About Carbon Dioxide Emission:-
			</h1>
			<div className="carousel-indicators flex justify-center mt-4">
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="1"
					aria-label="Slide 2"></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="2"
					aria-label="Slide 3"></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="3"
					aria-label="Slide 4"></button>
			</div>
			<div className="carousel-inner relative w-full h-[50rem] mt-8">
				<div className="carousel-item active">
					<img src={c1} className="block h-[50rem] w-full object-cover" alt="..." />
					<div className="carousel-caption hidden md:block"></div>
				</div>
				<div className="carousel-item">
					<img src={c2} className="block w-full h-[50rem] object-cover" alt="..." />
					<div className="carousel-caption hidden md:block"></div>
				</div>
				<div className="carousel-item">
					<img src={c3} className="block w-full h-[50rem] object-cover" alt="..." />
					<div className="carousel-caption hidden md:block"></div>
				</div>
				<div className="carousel-item">
					<img src={c4} className="block w-full h-[50rem] object-cover" alt="..." />
					<div className="carousel-caption hidden md:block"></div>
				</div>
			</div>
			<button
				className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="prev">
				<span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="next">
				<span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default Slider;
