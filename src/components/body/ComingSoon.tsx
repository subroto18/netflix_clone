import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
export const ComingSoon = () => {
  const location = useLocation(); // get the relative path and when it changes re-render will happen
  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);
  return (
    <div className="bg-slate-900 bg-blend-multiply">
      <div className="h-[550px] md:h-[600] flex justify-center items-center">
        <h1 className="text-3xl text-white font-bold">
          Content Coming soon...
        </h1>
      </div>
    </div>
  );
};
