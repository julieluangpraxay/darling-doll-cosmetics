import { Link, Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileSearchBar from "./MobileSearchBar";
import { useState } from "react";

export function Header({ onSearch, searchText, cartQuantity }) {
  const [isFavoriteHovered, setIsFavoriteHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);

  return (
    <div>
      <div className="bg-customBlue text-center">
        ✨ FREE SHIPPING ON ORDERS OVER $50 ✨
      </div>
      <div className="flex items-center justify-center lg:basis-full lg:flex-nowrap">
        <div className="basis-1/2">
          <div>
            <SearchBar onSearch={onSearch} searchText={searchText} />
          </div>
        </div>
        <img
          src="/images/logo.png"
          className="w-44 pb-4 pt-4"
          alt="darling doll cosmetics logo"
        />

        <div className="mr-4 flex basis-1/2 flex-nowrap justify-end gap-3 text-black">
          <Link to="/favorites">
            <svg
              className={`transform-glow w-8 cursor-pointer fill-current text-black transition-transform ${
                isFavoriteHovered ? "hover:scale-110" : ""
              }`}
              viewBox="0 0 64 64"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              onMouseOver={() => setIsFavoriteHovered(true)}
              onMouseOut={() => setIsFavoriteHovered(false)}
            >
              <path d="M32.012,59.616c-1.119-.521-2.365-1.141-3.707-1.859a79.264,79.264,0,0,1-11.694-7.614C6.316,42,.266,32.6.254,22.076,0.244,12.358,7.871,4.506,17.232,4.5a16.661,16.661,0,0,1,11.891,4.99l2.837,2.889,2.827-2.9a16.639,16.639,0,0,1,11.874-5.02h0c9.368-.01,17.008,7.815,17.021,17.539,0.015,10.533-6.022,19.96-16.312,28.128a79.314,79.314,0,0,1-11.661,7.63C34.369,58.472,33.127,59.094,32.012,59.616Z"></path>
            </svg>
          </Link>
          <Link to="/cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="2xl"
              className={`transform-glow cursor-pointer transition-transform ${
                isCartHovered ? "hover:scale-110" : ""
              }`}
              onMouseOver={() => setIsCartHovered(true)}
              onMouseOut={() => setIsCartHovered(false)}
            />
          </Link>
          {/* circle to show cart quantity*/}
          <div className="absolute right-2 top-14 h-6 w-6 rounded-full bg-black text-center text-white">
            {cartQuantity}
          </div>
        </div>
      </div>

      <nav className="bg-customPink p-5 font-bold">
        <div className="flex justify-between">
          <ul className=" flex gap-10 ">
            <li>
              <Link
                to="/"
                className="transform-glow transition-color duration-300 hover:text-blue-500"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/catalog"
                className="transform-glow transition-color duration-300 hover:text-blue-500"
              >
                SHOP ALL
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <MobileSearchBar onSearch={onSearch} searchText={searchText} />
      </div>
      <Outlet />
    </div>
  );
}
