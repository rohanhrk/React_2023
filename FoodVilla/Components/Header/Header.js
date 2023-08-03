import { IMG_CDN_URL } from "../../Constant/Constant";
import { Link } from "react-router-dom";
const logoUrl = IMG_CDN_URL;
const Logo = () => {
  return (
    <a href="/">
      <img className="logo" src={logoUrl} alt="Food Villa Logo" />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
