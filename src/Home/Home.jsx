import EventCard from "./EventCard"
import Header from "./Header"
import StayInTouch from "./StayTouch"
import { EventData } from "./eventData"

const Home = () => {
  return (
    <div>
      {/* Upcoming Events */}
      <div>
        <Header title="UPCOMING EVENTS" />
        {
          EventData.map(event => {
            return (
              <EventCard
              key={event.id}
              date={event.date}
              eventName={event.eventName}
              eventDescription={event.eventDescription}
              eventVenue={event.eventVenue}
              />
            )
          })
        }
      </div>

      {/* What we love to do */}
      <div>
        <Header title="WHAT WE LOVE TO DO" />
        <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/3 p-3">
          <p className="font-semibold text-xl">WORKSHOPS</p>
          <p className="text-gray-700">IEEE SB organizes informative workshops covering multiple fields.</p>
        </div>
        <div className="w-full sm:w-1/3 p-3">
          <p className="font-semibold text-xl">HACKATHONS</p>
          <p className="text-gray-700">
            Empower your skills with IEEE SB's hackathons, where students compete, innovate, and excel in the world of technology.
          </p>
        </div>
        <div className="w-full sm:w-1/3 p-3">
          <p className="font-semibold text-xl">PODCASTS</p>
          <p className="text-gray-700">
            Explore and gain knowledge through IEEE SB's dynamic podcasts, fostering student success and transferring valuable insights in the realm of technology.
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
              className="aspect-video w-[90%]"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Visit us */}
      <div>
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
            title="Google Maps"
          ></iframe>
        </div>
      </div>

      {/* Contact Us */}
      <StayInTouch />
    </div>
  )
}

export default Home