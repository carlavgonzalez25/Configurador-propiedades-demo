import React from "react";
import { logoHeader } from "../img";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">
        <img
          src={logoHeader}
          width="200"
          class="d-inline-block align-top"
          alt=""
        />
      </a>
    </nav>
  );
};

export default Navbar;
