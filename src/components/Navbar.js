import React from "react";
import { logoHeader } from "../img";
import Flags from "../components/Flags";

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
      <div>
        <Flags key="SP" name="SP" />
        <Flags key="EN" name="EN" />
      </div>

    </nav>
  );
};

export default Navbar;
