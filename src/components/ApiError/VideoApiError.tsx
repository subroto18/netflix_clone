import React from "react";

export const VideoApiError: React.FC = () => {
  return (
    <div className="bg-slate-900">
      <div
        style={{
          height: "600px",
          paddingTop: "20rem",
        }}
      >
        <div className="flex  justify-center">
          <p className="text-2xl text-red-700"> Something went wrong!</p>
        </div>
      </div>
    </div>
  );
};
