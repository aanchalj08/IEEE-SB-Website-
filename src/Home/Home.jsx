import EventCard from "./EventCard";
import Header from "./Header";
import HomeImg from "./HomeImg";
import firstImg from '../assets/first.webp'
import secondImg from '../assets/second.webp'
import thirdImg from '../assets/third.webp'
import fourthImg from '../assets/fourth.webp'
import cross from '../assets/cross.svg'
import prev from '../assets/prev.svg'
import frwd from '../assets/frwd.svg'
import StayInTouch from "./StayTouch";
import { EventData } from "./eventData";
import { useState } from "react";

const Home = () => {
	const [slideNumber, setSlideNumber] = useState(1)
	const [show, setShow] = useState(false)
	const images = [firstImg, secondImg, thirdImg, fourthImg];
	const frwdSlider = () => {
		if (slideNumber < 4) {
			setSlideNumber(slideNumber + 1)
		}	else if(slideNumber == 4){
			setSlideNumber(1)
		}
	}
	const prevSlider = () => {
		if (slideNumber > 1) {
			setSlideNumber(slideNumber - 1)
		}	else if(slideNumber == 1){
			setSlideNumber(4)
		}
	}
	return (
		<div className="w-5/6 mx-auto flex-row space-y-10">
			<HomeImg />
			<h1 className="text-center text-blue-800 text-6xl">IEEE Student Branch, LNMIIT</h1>
			<div className="text-center">
				<Header title="ABOUT" />
				<ul className="list-disc mt-8 m-6 font-normal text-slate-600 text-lg">
					<li className="m-5 ">
						Institute of Electrical and Electronics Engineers is a
						not-for-profit organization recognised globally as IEEE formed in
						1963. We at LNMIIT have our own student branch which is an
						amalgamation of faculty members and enthusiastic students of our
						college to develop technologies for people and for a better future.
					</li>
					<li className="m-5">
						IEEE's core purpose is to foster technological innovation and
						excellence for the benefit of humanity. The Student branch
						activities offer numerous educational, technical, and professional
						opportunities through various events, talks and workshops to enhance
						the skill set of students.
					</li>
				</ul>
				<button className="border-2 w-40 h-14 bg-blue-800 font-serif text-white text-lg font-semibold hover:bg-blue-600">
					Know More
				</button>
			</div>

			<div className="lg:hidden flex justify-center gap-10">
				<button onClick={prevSlider}><img src={prev} className="w-10" /></button>
				<div>
					<img src={images[slideNumber-1]} className="w-[700px]" />
				</div>
				<button onClick={frwdSlider}><img src={frwd} className="w-10" /></button>
			</div>

			<div className={`absolute p-5 z-50 w-full left-0 bg-slate-500 ${!show && "invisible"}`}>
				<div className="flex justify-between">
					<div>
						<p>{slideNumber}/4</p>
					</div>
					<div>
						<img src={cross} onClick={() => setShow(false)} className="w-10" />
					</div>
				</div>
				<div className="flex justify-center gap-10">
					<button onClick={prevSlider}><img src={prev} className="w-10" /></button>
					<div>
						<img src={images[slideNumber-1]} className="w-[700px]" />
					</div>
					<button onClick={frwdSlider}><img src={frwd} className="w-10" /></button>
				</div>
			</div>

			<div className="w-[120%] lg:-ml-[100px]  xl:-ml-[123px] hidden lg:flex">
				<img
					src={firstImg}
					onClick={() => setShow(true)}
					className="w-1/4 z-10 h-80 hover:scale-105 origin-center ease-in duration-300 "></img>
				<img
					src={secondImg}
					onClick={() => setShow(true)}
					className="w-1/4 h-80 hover:scale-105 origin-center ease-in duration-300"></img>
				<img
					src={thirdImg}
					onClick={() => setShow(true)}
					className="w-1/4 h-80 hover:scale-105 origin-center ease-in duration-300"></img>
				<img
					src={fourthImg}
					onClick={() => setShow(true)}
					className="w-1/4 h-80 hover:scale-105 origin-center ease-in duration-300"></img>
			</div>

			{/* Upcoming Events */}
			<div className="text-center">
				<Header title="UPCOMING EVENTS" />
				{EventData.map((event) => {
					return (
						<EventCard
							key={event.id}
							date={event.date}
							eventName={event.eventName}
							eventDescription={event.eventDescription}
							eventVenue={event.eventVenue}
						/>
					);
				})}
			</div>

			{/* What we love to do */}
			<div className="text-center">
				<Header title="WHAT WE LOVE TO DO" />
				<div className="flex flex-wrap justify-center">
					<div className="w-full sm:w-1/3 p-3">
						<p className="font-semibold text-xl">WORKSHOPS</p>
						<p className="text-gray-700">
							IEEE SB organizes informative workshops covering multiple fields.
						</p>
					</div>
					<div className="w-full sm:w-1/3 p-3">
						<p className="font-semibold text-xl">HACKATHONS</p>
						<p className="text-gray-700">
							Empower your skills with IEEE SB's hackathons, where students
							compete, innovate, and excel in the world of technology.
						</p>
					</div>
					<div className="w-full sm:w-1/3 p-3">
						<p className="font-semibold text-xl">PODCASTS</p>
						<p className="text-gray-700">
							Explore and gain knowledge through IEEE SB's dynamic podcasts,
							fostering student success and transferring valuable insights in
							the realm of technology.
						</p>
					</div>
				</div>
				<div>
					<Header title="WATCH US" />
					<div className="flex justify-center p-3">
						<iframe
							src="https://www.youtube.com/embed/JLhvUR8ZB4A"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className="aspect-video w-[90%]"></iframe>
					</div>
				</div>
			</div>

			{/* Visit us */}
			<div className="text-center">
				<Header title="VISIT US" />
				<div>
					<p>LNMIIT, Via, Jamdoli, Jaipur, Rajasthan, India</p>
					<p>Visiting Hours</p>
					<p>Monday to Friday: 09:00 am - 05:00 pm</p>
				</div>
				<div className="flex justify-center p-3">
					<iframe
						className="w-full h-[500px]"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28455.72883926444!2d75.923489!3d26.936289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dba21e8a1d1c9%3A0x5ab565cce4d44c2b!2sThe%20LNM%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sus!4v1716198338491!5m2!1sen!2sus"
						allowFullScreen
						loading="lazy"
						title="Google Maps"></iframe>
				</div>
			</div>

			{/* Contact Us */}
			<StayInTouch />
		</div>
	);
};

export default Home;
