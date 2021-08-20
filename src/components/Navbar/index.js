import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="col-md-12 bg-primary py-2">
      <nav class="navbar navbar-expand-lg navbar-light bg-primary py-2">
        <ul class="navbar-nav mr-auto">
          <li class="home">
            <Link class="nav-link" to={"/"}>
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to="/author">
              Author
            </Link>
          </li>
          <li>
            <Link class="nav-link contact" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
