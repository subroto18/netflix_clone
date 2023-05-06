import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const PosterEffect: React.FC = () => {
  return (
    <div className="bg-slate-900">
      <div
        style={{
          height: "600px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          paddingTop: "20rem",
        }}
      >
        <div className="items-center   w-[50%] ml-[3rem]">
          <h1 className="text-5xl font-bold text-white h-8 bg-slate-800 mb-3"></h1>
          <p className="text-lg  text-white h-[5rem] bg-slate-800"></p>
          <div className="flex">
            <button className="rounded bg-white text-black w-[40%] h-[2.5rem] pt-2 md:w-[35%] lg:w-[20%] text-center justify-center mt-4  font-bold  px-4 rounded flex mr-3">
              <BsFillPlayFill className="font-2xl mt-1 mr-2" />
              Play
            </button>

            <button
              className="rounded bg-slate-50 text-black w-[40%] h-[2.5rem] pt-2 md:w-[35%]
              lg:w-[20%]
                 text-center justify-center mt-4  font-bold p-3 px-4 rounded flex"
            >
              <AiOutlineInfoCircle className="font-2xl mt-1 mr-2" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
