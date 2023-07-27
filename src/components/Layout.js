import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const [isActive, setIsActive] = useState("Home");

  const handleClick = (value) => {
    setIsActive(value);
  };
  return (
    <>
      <nav className="d-flex justify-content-between bg-primary px-3 py-2">
        <div className="text-white fw-bold">APP LOGO</div>
        <ul className="d-flex align-items-center mb-0 list-unstyled">
          <li className="px-3">
            <Link
              to="/"
              className={`text-light text-decoration-none ${
                isActive === "Home" ? "text-dark" : ""
              }`}
              onClick={() => handleClick("Home")}
            >
              Home
            </Link>
          </li>
          <li className="px-3">
            <Link
              to="/about"
              className={`text-light text-decoration-none ${
                isActive === "About" ? "text-dark" : ""
              }`}
              onClick={() => handleClick("About")}
            >
              About
            </Link>
          </li>
          <li className="px-3">
            <Link
              to="/contact"
              className={`text-light text-decoration-none ${
                isActive === "Contact" ? "text-dark" : ""
              }`}
              onClick={() => handleClick("Contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* these are the children */}
      <div className="d-flex justify-content-between bg-primary px-3 py-2">
        footer content
      </div>
    </>
  );
};

export default Layout;
