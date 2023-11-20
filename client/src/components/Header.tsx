import { Link, Outlet } from "react-router-dom";

export function Header() {
  return (
    <div>
      <div>
        <input type="search" />

        <div className="flex items-center justify-center">
          <img
            src="/images/logo.png"
            className="w-1/5 pb-8"
            alt="darling doll cosmetics logo"
          ></img>
        </div>
      </div>
      <nav className="bg-pink-200 p-5">
        <div className="">
          <ul className="flex gap-10">
            <li className="">
              <Link to="/">HOME</Link>
            </li>
            <li className="">
              <Link to="/catalog">SHOP ALL</Link>
            </li>
            {/* <li className="text-red-600">
              <Link to="/sale">SALE</Link>
            </li> */}
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
