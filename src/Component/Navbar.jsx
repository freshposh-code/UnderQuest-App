import React, { useState } from "react";
import { navlink } from "../constant/data";
import styles from "../Style";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);

  function navbar() {
    if (window.scrollY >= 95) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener("scroll", navbar);

  return (
    <>
      <div
        className={`${
          styles.paddingX
        } flex items-center justify-between p-5 top-0 w-[100%] z-10 fixed ${
          color ? "bgBlack" : "bgNone"
        } `}
      >
        <h1 className="text-white text-[22px]">
          <span className="text-red-500">UNDA</span>.Quest
        </h1>
        <ul className="text-white flex">
          {navlink.map((nav, index) => (
            <li
              className={`${
                index !== navlink.length - 1 ? "mr-10" : "mr-0"
              } cursor-pointer hover:text-red-600 duration-300 sm:flex hidden`}
            >
              <a href={nav.link}>{nav.name}</a>
            </li>
          ))}
          <div
            className="cursor-pointer sm:hidden flex text-2xl"
            onClick={() => setOpen((prev) => !prev)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </ul>
        <ul
          className={`${
            open ? "flex" : "hidden"
          } text-white absolute top-[4rem] right-5 bg-[#2d0101d9] mt-5 p-5 gap-5 flex flex-col rounded-bl-3xl rounded-tr-3xl`}
          >
          {navlink.map((nav) => (
            <li className="cursor-pointer duration-300 md:hidden flex"
              onClick={() =>{setOpen(!open)}}>
              <a href={nav.link}>{nav.name}</a>
            </li>
          ))}
        </ul>
          </div>
    </>
  );
};

export default Navbar;
