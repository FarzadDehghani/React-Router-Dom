import { Link } from "react-router-dom";
import Icon from "../assets/images/icon.jpg";
import "../assets/css/header.css";

export const Header = () => {
  return (
    <div>
      <nav className="header-container">
        <div>
          <img src={Icon} className="header__logo" />
        </div>
        <div className="header__list">
          <ul>
            <li>
              <Link to={"/"} className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/menu"} className="link">
                Menu
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="link">
                About
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};