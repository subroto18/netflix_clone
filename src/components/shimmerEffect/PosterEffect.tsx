import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const PosterEffect: React.FC = () => {
  return (
    <div className="bg-slate-900 relative">
      <div className="h-[550px] md:h-[600]">
        <div className="bg-blend-overlay absolute bg-black-rgba left-0 right-0 top-0 bottom-0">
          <div className="items-center w-[80%] sm:w-[60%] md:w-[50%]  ml-[3rem] absolute z-50 bottom-20">
            <h1 className="text-5xl font-bold text-white h-8 bg-slate-800 mb-3"></h1>
            <p className="text-lg  text-white h-[5rem] bg-slate-800"></p>
            <div className="sm:flex">
              <button
                className="rounded bg-slate-800 text-black w-[100%] h-[2.5rem] pt-2 md:w-[45%]
                lg:w-[25%]
               text-center justify-center mt-4  font-bold  px-4 rounded flex mr-3"
              >
                <BsFillPlayFill className="font-2xl mt-1 mr-2" />
                Play
              </button>

              <button
                className="rounded bg-slate-800 text-black w-[100%] h-[2.5rem] pt-2 md:w-[35%]
              lg:w-[25%]
                 text-center justify-center mt-4  font-bold p-3 px-4 rounded flex"
              >
                <AiOutlineInfoCircle className="font-2xl mt-1 mr-2" />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
