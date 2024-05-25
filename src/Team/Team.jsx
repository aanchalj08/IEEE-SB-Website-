import Card from "./Card";
import { fac_arr,ieee_sb,webdevs,wie } from "./Data.js";
//will use DaisyUI for carousel

const Team = () => {
  return (
    <div>
      <div className="bg-[#3548a5] p-6">
        <h1 className="font-semibold text-center text-4xl text-white my-2">
          LNMIIT IEEE Team
        </h1>
        <h4 className="text-xl text-white font-medium text-center my-2">Meet Our Team</h4>
      </div>
      {/* Faculty section */}
      <div className="p-2 my-4">
        <h4 className="text-xl text-center my-2 font-medium text-slate-800">Faculty Mentors</h4>  
        <hr className="my-4 w-11/12 mx-auto bg-gray-300 h-px" />
        <div className="grid md:grid-cols-3 sm:grid-cols-2 content-center my-2">
          {
            fac_arr.map((f)=>(
              <Card Facultyname={f.Name} photo={f.photo} description={f.description} position={f.position}></Card>
            ))
          }
        </div>
      </div>
      {/* Students section */}
      <div className="p-2 my-4">
        <h4 className="text-xl text-center my-2 font-medium text-slate-800">IEEE Student Branch</h4>  
        <hr className="my-4 w-11/12 mx-auto bg-gray-300 h-px" />
        <div className="grid md:grid-cols-4 sm:grid-cols-2 content-center my-2">
          {
            ieee_sb.map((f)=>(
              <Card Facultyname={f.Name} photo={f.photo} description={f.description} position={f.position}></Card>
            ))
          }
        </div>
      </div>
      <div className="p-2 my-4">
        <h4 className="text-xl text-center my-2 font-medium text-slate-800">Women in Engineering</h4>  
        <hr className="my-4 w-11/12 mx-auto bg-gray-300 h-px" />
        <div className="grid md:grid-cols-4 sm:grid-cols-2 content-center my-2">
          {
            wie.map((f)=>(
              <Card Facultyname={f.Name} photo={f.photo} description={f.description} position={f.position}></Card>
            ))
          }
        </div>
      </div>
      <div className="p-2 my-4">
        <h4 className="text-xl text-center my-2 font-medium text-slate-800">Web Development Team</h4>  
        <hr className="my-4 w-11/12 mx-auto bg-gray-300 h-px" />
        <div className="grid md:grid-cols-4 sm:grid-cols-2 content-center my-2">
          {
            webdevs.map((f)=>(
              <Card Facultyname={f.Name} photo={f.photo} description={f.description} position={f.position}></Card>
            ))
          }
        </div>
      </div>



    </div>
  );
};

export default Team;
