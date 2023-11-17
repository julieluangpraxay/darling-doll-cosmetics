import { Link, Outlet } from "react-router-dom";

export function Header() {
  return (
    <div>
      <nav className="bg-pink-200 p-5">
        <div className="navbar-collapse">
          <ul className="flex gap-10">
            <li className="nav-item nav-link title">
              <Link to="/home">HOME</Link>
            </li>
            <li className="nav-item nav-link title">
              <Link to="/">SHOP ALL</Link>
            </li>
            <li className="text-red-600">
              <Link to="/">SALE</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
