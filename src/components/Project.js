import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Project = ({ name, select }) => {
  return (
    <button
      type="button"
      className="btn btn-outline-secondary "
      onClick={select}
    >
      {name}
    </button>
  );
};

export default Project;
