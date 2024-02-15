import React from "react";
import { GoGear } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div
        className="bg-gradient-to-b from-gray-900 via-gray-900 flex justify-between py-1 px-5 z-30"
        style={{
          background:
            "linear-gradient(180deg, #1C1C1C 0%, rgba(28, 28, 28, 0.4) 518.59%)",
        }}
      >
        <div>
          <NavLink to={"/"}>
            <img src={"/logo.svg"} alt="logo" className="h-12" />
          </NavLink>
        </div>
        <div className="flex h-12 gap-3 z-20">
          <NavLink to={"/profile"} className="self-center">
            <CgProfile className="self-center" size={26} color="white" />
          </NavLink>
          <span className="self-center text-white">
            <NavLink to={"/login"}>Hardik</NavLink>
          </span>
        </div>
      </div>
    </>
  );
}
