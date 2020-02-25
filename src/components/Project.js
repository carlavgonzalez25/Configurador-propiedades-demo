import React, { Fragment, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import GeneralContext from "../context/general/generalContext";
import LoginContext from "../context/login/loginContext";
import * as translationEN from "../translations/EN";
import * as translationSP from "../translations/SP";

const Project = ({ name }) => {
  const generalContext = useContext(GeneralContext);
  const loginContext = useContext(LoginContext);
  const [displayModels, setDisplayModels] = useState(false);

  const { changeSteps } = generalContext;
  const { selectProject } = loginContext;

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
                  changeSteps("main");
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
          <label htmlFor="selectModel">
            {generalContext.language === "EN"
              ? translationEN.models.select
              : generalContext.language === "SP" && translationSP.models.select}
          </label>
          <select class="form-control w-100" id="selectModel">
            <option>
              {generalContext.language === "EN"
                ? translationEN.models.parana
                : generalContext.language === "SP" &&
                  translationSP.models.parana}
            </option>
            <option>
              {generalContext.language === "EN"
                ? translationEN.models.capeCoral
                : generalContext.language === "SP" &&
                  translationSP.models.capeCoral}
            </option>
          </select>
          <button
            type="button"
            className="btn btn-outline-secondary w-100"
            onClick={() => {
              changeSteps("main");
              selectProject("new");
            }}
          >
            {generalContext.language === "EN"
              ? translationEN.buttons.create
              : generalContext.language === "SP" &&
                translationSP.buttons.create}
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default Project;
