import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPaw, faDog, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="h-20 bg-pink-300 font-sans text-white text-4xl flex items-center shadow-xl">
      <span className="font-bold px-3 border-r-4 border-white">
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
        <li className="px-3">
          <Link
            to="/match"
            className="hover:duration-100 hover:scale-110 hover:bg-pink-400 hover:text-gray-200 block p-4"
          >
            <FontAwesomeIcon
            icon={faPaw}
            />
          </Link>
        </li>
        <li>
          <Link
            to="/petForm"
            className="hover:duration-100 hover:scale-110 hover:bg-pink-400 hover:text-gray-200 block p-4"
          >
            <FontAwesomeIcon
            icon={faDog}
            />
          </Link>
        </li>
        <li>
          <Link
            to="/ownerForm"
            className="hover:duration-100 hover:scale-110 hover:bg-pink-400 hover:text-gray-200 block p-4"
          >
            <FontAwesomeIcon
            icon={faUser}
            />
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;