import { Link, useLocation } from "react-router-dom";
import "./header.scss";

export default function Header() {
  const location = useLocation();
  return (
    <header className="wrapper header__wrapper">
      <Link to={"/"}>
        <button
          className="btn header__btn"
          style={
            location.pathname === "/"
              ? { boxShadow: "0px 0px 17px 5px white" }
              : {}
          }
        >
          Photos
        </button>
      </Link>

      <Link to={"/favorites"}>
        <button
          className="btn header__btn"
          style={
            location.pathname === "/favorites" ||
            location.pathname.includes("/photos")
              ? { boxShadow: "0px 0px 17px 5px white" }
              : {}
          }
        >
          Favorites
        </button>
      </Link>
    </header>
  );
}
