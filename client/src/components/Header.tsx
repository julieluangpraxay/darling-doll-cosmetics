import { Link, Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export function Header({ onSearch, searchText }) {
  return (
    <div>
      <div className="flex basis-full flex-nowrap items-center justify-center">
        <div className="basis-1/2"></div>
        <img
          src="/images/logo.png"
          className="w-64 pb-4 pt-4"
          alt="darling doll cosmetics logo"
        />

        <div className="mr-3 flex basis-1/2 flex-nowrap justify-end gap-5 text-pink-500">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} size="2xl" />
          </Link>
          <FontAwesomeIcon icon={faStar} size="2xl" />
        </div>
      </div>

      <nav className=" bg-pink-200 p-5">
        <div className="flex basis-1/2 justify-between">
          <ul className="flex gap-10">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/catalog">SHOP ALL</Link>
            </li>
          </ul>
          <div>
            <SearchBar onSearch={onSearch} searchText={searchText} />
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
