import { Link, Outlet } from "react-router-dom";

export function Header({ onSearch }) {
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
      <nav className="bg-pink-200 p-5">
        <div className="">
          <ul className="flex gap-10">
            <li className="">
              <Link to="/">HOME</Link>
            </li>
            <li className="">
              <Link to="/catalog">SHOP ALL</Link>
            </li>
            <li>
              <Link to="/catalog">
                <input
                  type="search"
                  onChange={(e) => onSearch(e.currentTarget.value)}
                  placeholder="search"
                  className="rounded border-2 border-solid border-black"
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
