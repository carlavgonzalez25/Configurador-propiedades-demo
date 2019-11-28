import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

const Project = ({ name, changeScreen, selectProject }) => {
  return (
    <button
      type="button"
      className={
        "btn btn-outline-secondary " +
        (name !== "new" && "d-flex justify-content-between ")
      }
      onClick={
        name === "new"
          ? () => {
              changeScreen("main");
            }
          : () => {
              selectProject(name);
              changeScreen("main");
            }
      }
    >
      {name !== "new" ? (
        <Fragment>
          <span>{name}</span> <FontAwesomeIcon icon={faTrash} />
        </Fragment>
      ) : (
        <FontAwesomeIcon icon={faPlus} />
      )}
    </button>
  );
};

export default Project;
