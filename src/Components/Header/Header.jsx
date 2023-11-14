import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";
const Header = () => {
  return (
    <>
      <div className="border-bottom">
        <div className="container">
          <div className="arabic-lan float-right ml-auto">العربيه</div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} />
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-gray">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  News
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      All News
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Olympia Tournaments
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  E-books
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <a className="nav-link" href="">
            <FaShoppingCart /> cart
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
