import React from "react";

const Card = ({ Facultyname, photo,description="",position="" }) => {
  return (
    <div className="">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-52 h-52 object-fill mb-4 mt-2 rounded-full shadow-lg"
          src={photo}
          alt="image"
        />
        <h5 className="text-xl font-medium text-gray-900">{Facultyname}</h5>
        <h6 className="text-lg font-normal text-gray-900">{position}</h6>
        <p className="text-center px-10">{description}</p>
      </div>
    </div>
  );
};

export default Card;
