import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPaw, faPen } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div>
      <header className="h-16 bg-gradient-to-b from-cyan-500 to-blue-500 font-sans text-white md:text-4xl text-2xl flex items-center shadow-xl">
        <span className="font-bold px-3 border-r-4 border-white select-none">
          HomeFurrYou
        </span>
        <ul className="flex items-center w-full">
          <li className="px-3">
            <Link
              to="/"
              className="hover:duration-100 hover:scale-105 block p-4"
            >
              <FontAwesomeIcon
              icon={faHouse}
              />
            </Link>
          </li>
          <li className="px-3">
            <Link
              to="/match"
              className="hover:duration-100 hover:scale-105 block p-4"
            >
              <FontAwesomeIcon
              icon={faPaw}
              />
            </Link>
          </li>
          <li className="px-3 font-bold w-full flex justify-end">
            <Link
              to="/login"
              className="hover:duration-100 hover:scale-105 block p-4 md:text-2xl text-base"
            >
              <FontAwesomeIcon
              icon={faPen}
              /> Sign In
            </Link>
          </li>
        </ul>
      </header>
      <div className="bg-white h-2" />
    </div>
  )
}

export default Header;