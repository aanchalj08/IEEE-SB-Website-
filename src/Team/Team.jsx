import Card from "./Card";
import {
  map_cont_ctr,
  map_event_mng,
  map_fac_arr,
  map_ieee_sb,
  map_wie,
  map_webdevs,
  slides,
  years,
} from "./Data.js";
import Carousel from "./Carousel";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";

const Team = () => {
  const [year, setYear] = useState("2024-2025");

  const handleChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <div>
      <div className="bg-[#3548a5] p-6">
        <h1 className="font-semibold text-center text-4xl text-white my-2">
          LNMIIT IEEE Team
        </h1>
        <h4 className="text-xl text-white font-medium text-center my-2">
          Meet Our Team
        </h4>
      </div>
      <div className="relative mt-4 w-full">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
          <InputLabel id="year-label">Year</InputLabel>
          <Select
            labelId="year-label"
            id="year"
            value={year}
            label="year"
            onChange={handleChange}
            defaultValue={"2024-2025"}
          >
            {years.map((value, idx) => (
              <MenuItem key={idx} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Faculty section */}
      <div className="p-2 my-4">
        <h4 className="text-3xl text-center my-2 font-medium text-slate-800">
          Faculty Mentors
        </h4>
        <hr className="my-4 w-11/12 mx-auto bg-gray-300 h-px" />
        <div className="grid md:grid-cols-3 sm:grid-cols-2 content-center my-2">
          {map_fac_arr[year].map((f, idx) => (
            <Card
              key={idx}
              Facultyname={f.Name}
              photo={f.photo}
              description={f.description}
              position={f.position}
            ></Card>
          ))}
        </div>
      </div>
      {/* Students section */}
      <div className="p-2 my-4">
        <h4 className="text-3xl text-center my-2 font-medium text-slate-800">
          IEEE Student Branch
        </h4>
        <hr className="my-4 w-11/12 mx-auto bg-gray-300 h-px" />
        <div className="grid md:grid-cols-4 sm:grid-cols-2 content-center my-2">
          {map_ieee_sb[year].map((f, idx) => (
            <Card
              key={idx}
              Facultyname={f.Name}
              photo={f.photo}
              description={f.description}
              position={f.position}
            ></Card>
          ))}
        </div>
      </div>
      <div className="p-2 my-4">
        <h4 className="text-3xl text-center my-2 font-medium text-slate-800">
          Women in Engineering
        </h4>
        <hr className="my-4 w-11/12 mx-auto bg-gray-300 h-px" />
        <div className="grid md:grid-cols-4 sm:grid-cols-2 content-center my-2">
          {map_wie[year].map((f, idx) => (
            <Card
              key={idx}
              Facultyname={f.Name}
              photo={f.photo}
              description={f.description}
              position={f.position}
            ></Card>
          ))}
        </div>
      </div>
      <div className="p-2 my-4">
        <h4 className="text-3xl text-center my-2 font-medium text-slate-800">
          Web Development Team
        </h4>
        <hr className="my-4 w-11/12 mx-auto bg-gray-300 h-px" />
        <div className="grid md:grid-cols-4 sm:grid-cols-2 content-center my-2">
          {map_webdevs[year].map((f, idx) => (
            <Card
              key={idx}
              Facultyname={f.Name}
              photo={f.photo}
              description={f.description}
              position={f.position}
            ></Card>
          ))}
        </div>
      </div>
      <div className="p-2 my-4">
        <h4 className="text-3xl text-center my-2 font-medium text-slate-800">
          Content Creator Team
        </h4>
        <hr className="my-4 w-11/12 mx-auto bg-gray-300 h-px" />
        <div className="grid md:grid-cols-3 sm:grid-cols-2 content-center my-2">
          {map_cont_ctr[year].map((f, idx) => (
            <Card
              key={idx}
              Facultyname={f.Name}
              photo={f.photo}
              description={f.description}
              position={f.position}
            ></Card>
          ))}
        </div>
      </div>

      {map_event_mng[year].length > 0 && (
        <div className="p-2 my-4">
          <h4 className="text-3xl text-center my-2 font-medium text-slate-800">
            Event Management Team
          </h4>
          <hr className="my-4 w-11/12 mx-auto bg-gray-300 h-px" />
          <div className="grid md:grid-cols-4 sm:grid-cols-2 content-center my-2">
            {map_event_mng[year].map((f, idx) => (
              <Card
                key={idx}
                Facultyname={f.Name}
                photo={f.photo}
                description={f.description}
                position={f.position}
              ></Card>
            ))}
          </div>
        </div>
      )}

      <hr className="my-4 w-11/12 mx-auto bg-gray-300 h-px" />
      <div>
        <div className="flex justify-center items-center h-full">
          <div className="max-w-5xl">
            <Carousel autoSlide={true}>
              {[...slides.map((s, idx) => <img key={idx} src={s} />)]}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
