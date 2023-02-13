import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPen } from '@fortawesome/free-solid-svg-icons';



function Header() {
  return (
    <header className="h-20 bg-pink-300 font-sans text-white text-4xl flex items-center ">
      <span className="font-bold px-3">
        COMPANDER
      </span>
      <ul className="flex items-center">
        <li className="px-3">
          <Link
            to="/"
            className="hover:duration-100 hover:scale-110 hover:bg-pink-400 hover:text-gray-200 block p-4"
          >
            <FontAwesomeIcon
            icon={faHouse}
            />
          </Link>
        </li>
        <li>
          <Link
            to="/form"
            className="hover:duration-100 hover:scale-110 hover:bg-pink-400 hover:text-gray-200 block p-4"
          >
            <FontAwesomeIcon
            icon={faPen}
            />
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;