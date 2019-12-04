import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

const Project = ({ name, changeScreen, selectProject }) => {
  const [displayModels, setDisplayModels] = useState(false);

  const showModels = state => {
    setDisplayModels(state);
  };

  return (
    <Fragment>
      {!displayModels && (
        <button
          type="button"
          className={
            "btn btn-outline-secondary " +
            (name !== "new" && "d-flex justify-content-between ")
          }
          onClick={
            name === "new"
              ? () => showModels(true)
              : () => {
                  selectProject(name);
                  changeScreen("main");
                }
          }
        >
          {name !== "new" ? (
            <Fragment>
              <span>{name}</span> {/*<FontAwesomeIcon icon={faTrash} />*/}
            </Fragment>
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </button>
      )}
      {displayModels && (
        <div class="form-group w-100">
          <label htmlFor="selectModel">Select Model</label>
          <select class="form-control w-100" id="selectModel">
            <option>Modelo Parana</option>
            <option>Modelo Cape Coral</option>
          </select>
          <button
            type="button"
            className="btn btn-outline-secondary w-100"
            onClick={() => {
              changeScreen("main");
              selectProject("new");
            }}
          >
            Create
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default Project;
