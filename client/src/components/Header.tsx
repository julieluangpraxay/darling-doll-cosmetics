import { Link, Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

export function Header({ onSearch, searchText }) {
  return (
    <div>
      <div className="">
        <Link to="/">
          <div className="flex items-center justify-center">
            <img
              src="/images/logo.png"
              className="w-1/5 pb-8"
              alt="darling doll cosmetics logo"
            ></img>
          </div>
        </Link>
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
          <div className="justify-end">
            <ul>
              <li>
                <SearchBar onSearch={onSearch} searchText={searchText} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
