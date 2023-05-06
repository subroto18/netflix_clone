import React from "react";

export const VideoEffect: React.FC = () => {
  return (
    <div>
      <h1 className="font-bold text-white text-1xl h-10 bg-slate-800 w-[50%] rounded"></h1>
      <div className="grid grid-cols-2 sm:grid-cols-3   md:grid-cols-4 lg:grid-cols-6 gap-2 pt-4">
        {Array.apply(null, Array(12)).map((effect, index) => {
          return (
            <div
              key={index}
              className="w-[100%] h-[20rem] rounded bg-slate-800 rounded"
            ></div>
          );
        })}
      </div>
    </div>
  );
};
