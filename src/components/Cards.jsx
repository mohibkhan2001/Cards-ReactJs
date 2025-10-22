import React from "react";
import { Bookmark } from "lucide-react";

const Cards = (props) => {
  console.log(props)
  return (
    <div className="card w-80 rounded-lg bg-amber-50 h-[450px] m-8 flex flex-col justify-around">
      <div className="top flex justify-between p-4">
        <div>
          <img
            className="w-12"
            src= {props.companyLogo}
          />
        </div>

          <button className="flex items-center gap-2 bg-blue-950 text-white p-2 rounded">Save <Bookmark size={20} /></button>
          
      </div>

      <div className="middle flex flex-col justify-between p-4 gap-4">
        <div className="flex items-baseline gap-2 w-3/4 p-2">
          <h1 className="font-bold text-blue-950 text-2xl">{props.company}</h1>
          <p className="text-gray-400 text-sm">{props.posted}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="job-role text-lg p-2 bg-blue-950 rounded-md text-white font-semibold">
            {props.jobPosition}
          </p>

          <div className="flex gap-2">
            <p className="tag-1 text-sm bg-blue-100 inline px-4 py-2 rounded text-blue-950 font-semibold">
              {props.jobType}
            </p>
            <p className="tag-1 text-sm bg-blue-100 inline px-4 py-2 rounded text-blue-950 font-semibold">
              {props.pay}
            </p>
          </div>
        </div>
      </div>


      <div className="bottom flex justify-between p-4 ">
          <button className="bg-blue-950 text-white font-semibold px-4 py-2 rounded active:bg-blue-100 transition-colors active:text-blue-950">Apply Now</button>
      </div>
    </div>
  );
};

export default Cards;
