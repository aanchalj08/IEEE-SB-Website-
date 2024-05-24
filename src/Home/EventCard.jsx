import { useState } from "react";

// eslint-disable-next-line react/prop-types
const EventCard = ({date, eventName, eventDescription, eventVenue}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="p-3">
      <div className="flex flex-col lg:flex-row gap-10 mx-auto justify-between items-start lg:items-center">
        <div className="w-full lg:w-1/4 mt-4 lg:mt-0">
          <h2 className="text-blue-800 text-3xl">{date}</h2>
        </div>
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
          <h3 className="text-lg font-semibold">{eventName}</h3>
          <p className="text-gray-700">
            {isExpanded ? eventDescription : `${eventDescription.substring(0, 150)}...`}
          </p>
          <button
            className="text-blue-500 mt-2"
            onClick={toggleExpand}
          >
            {isExpanded ? "Show Less" : "Event Details"}
          </button>
        </div>
        <div className="w-full lg:w-1/4 mt-4 lg:p-2 lg:text-end lg:mt-0">
          <p className="text-2xl">{eventVenue}</p>
        </div>
      </div>
      <hr className="mt-4" />
    </div>
  )
}

export default EventCard