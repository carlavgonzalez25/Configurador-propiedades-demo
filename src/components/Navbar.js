import React from "react";
import { logoHeader } from "../img";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        <img
          src={logoHeader}
          width="200"
          className="d-inline-block align-top"
          alt=""
        />
      </a>
    </nav>
  );
};

export default Navbar;
