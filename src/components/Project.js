import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Project = ({ name, newProject }) => {
  return (
    <button
      type="button"
      className="btn btn-outline-secondary "
      onClick={
        name == "Create new project"
          ? () => {
              newProject("main");
            }
          : null
      }
    >
      {name}
    </button>
  );
};

export default Project;
