import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPaw, faDog, faUser, faPen } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="h-20 bg-cyan-500 font-sans text-white text-4xl flex items-center shadow-xl">
      <span className="font-bold px-3 border-r-4 border-white select-none">
        Pet Find-inator
      </span>
      <ul className="flex items-center">
        <li className="px-3">
          <Link
            to="/"
            className="hover:duration-100 hover:scale-110 hover:bg-cyan-400 block p-4"
          >
            <FontAwesomeIcon
            icon={faHouse}
            />
          </Link>
        </li>
        <li className="px-3 font-bold">
          <Link
            to="/login"
            className="hover:duration-100 hover:scale-110 hover:bg-cyan-400 block p-4"
          >
            <FontAwesomeIcon
            icon={faPen}
            /> Sign In
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;