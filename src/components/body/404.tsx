import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound404: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-red-700 text-3xl mb-2">404</h1>
        <p className="text-red-700 mb-3">Page Not Found</p>
        <button
          onClick={() => navigate("/")}
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded text-sm mt-3"
        >
          Go back to Home
        </button>
      </div>
    </div>
  );
};
