import React from "react";
import { NavLink } from "react-router-dom";
export const NavBar: React.FC = () => {
  return (
    <>
      <li className="text-sm mx-2 py-1 cursor-pointer hover:font-bold">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "font-bold" : "text-sm")}
        >
          Home
        </NavLink>
      </li>
      <li className="text-sm mx-2 py-1 hover:font-bold">
        <NavLink
          to="/tv-shows"
          className={({ isActive }) => (isActive ? "font-bold" : "text-sm")}
        >
          TV Shows
        </NavLink>
      </li>
      <li className="text-sm mx-2 py-1 hover:font-bold">
        <NavLink
          to="/genre"
          className={({ isActive }) => (isActive ? "font-bold" : "text-sm")}
        >
          Movies
        </NavLink>
      </li>
      <li className="text-sm mx-2 py-1 hover:font-bold">
        <NavLink
          to="/latest"
          className={({ isActive }) => (isActive ? "font-bold" : "text-sm")}
        >
          News & Popular
        </NavLink>
      </li>
      <li className="text-sm mx-2 py-1 hover:font-bold">
        <NavLink
          to="/my-list"
          className={({ isActive }) => (isActive ? "font-bold" : "text-sm")}
        >
          My List
        </NavLink>
      </li>
      <li className="text-sm mx-2 py-1 hover:font-bold">
        <NavLink
          to="/lannguage"
          className={({ isActive }) => (isActive ? "font-bold" : "text-sm")}
        >
          Browse by Langauges
        </NavLink>
      </li>
    </>
  );
};
