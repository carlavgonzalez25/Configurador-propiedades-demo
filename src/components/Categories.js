import React, { useState, useEffect, Fragment } from "react";
import Options from "./Options";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import smoothscroll from "smoothscroll-polyfill";

const Categories = ({
  name,
  alias,
  options,
  selectCat,
  selectedCat,
  showImage,
  selectOpt,
  selectedOpt,
  hasSelectedOpt,
  subOptions
}) => {
  const [active, setActive] = useState(false);
  const [classActive, setClass] = useState("");
  const [animate, setAnimate] = useState("open");
  const [grilla, setGrilla] = useState("");
  const [selectedSubOp, setSelectedSubOp] = useState("");
  const [localOption, setLocalOption] = useState([]);

  const onClickCat = (
    selectedCat,
    alias,
    selectCat,
    selectedOpt,
    showImage,
    e
  ) => {
    selectedCat === alias ? selectCat("") : selectCat(alias);

    console.log(typeof selectedOpt);
    if (typeof selectedOpt === "object" && selectedOpt !== null) {
      //si hay algo seleccionado, mostrar la iamgen asociada
      showImage(selectedOpt);
    }
    e.target.scrollIntoView({ behavior: "smooth" });
  };

  const onClickOpt = (alias, option, selectOpt) => {
    if (subOptions !== null && selectedSubOp === "") {
      // si tiene subOpt pero no hay ninguna seleccionada
      setSelectedSubOp(subOptions[0]);
      selectTexture(subOptions[0].image_url, subOptions[0]);
      option.subOption = subOptions[0];
    }

    // si la categoria tiene subOpt, sumar el obj seleccionado al obj option
    if (subOptions !== null && selectedSubOp !== "") {
      for (let item of subOptions) {
        if (item.alias === selectedSubOp.alias) {
          option.subOption = item;
        }
      }
      setLocalOption(option);
      selectOpt(alias, option);
    } else {
      setLocalOption(option);
      selectOpt(alias, option);
    }
  };

  const selectTexture = (url, subOp) => {
    document.getElementById("ctImagen").style.backgroundImage =
      "url(" + url + ")";
    setSelectedSubOp(subOp);
    for (let item of subOptions) {
      if (item.alias === subOp.alias) {
        let auxOpt = localOption;
        auxOpt.subOption = item;
        selectOpt(alias, auxOpt);
        console.dir(auxOpt);
      }
    }
  };

  useEffect(() => {
    if (selectedCat === alias) {
      setActive(true);
      setClass("active");
      setAnimate("open");
    } else {
      setActive(false);
      setClass("");
      setAnimate("closed");
    }

    // eslint-disable-next-line
  });

  useEffect(() => {
    options.length > 10 && setGrilla("grilla");
    smoothscroll.polyfill(); // iniciar smoothscroll
    //
  }, []);

  if (selectedSubOp === "" && selectedOpt.hasOwnProperty("subOption")) {
    setLocalOption(selectedOpt);
    setSelectedSubOp(selectedOpt.subOption);
    document.getElementById("ctImagen").style.backgroundImage =
      "url(" + selectedOpt.subOption.image_url + ")";
  }

  return (
    <Fragment>
      <div>
        <div className="d-flex">
          <div
            className={
              "ftCategories list-group-item list-group-item-action " +
              classActive
            }
            onClick={e =>
              onClickCat(
                selectedCat,
                alias,
                selectCat,
                selectedOpt,
                showImage,
                e
              )
            }
          >
            <p> {name} </p>
          </div>
          <span
            className={
              "progreso " + (hasSelectedOpt === "empty" ? "missing" : "done")
            }
          ></span>
        </div>
        {active &&
        subOptions !== null && ( //Si esta seleccionado y tiene sub opciones, mostrarlas
            <div className="d-flex w-100 justify-content-center pr-1">
              {subOptions.map(option => (
                <span
                  className={
                    "justify-content-center btn btn-outline-primary flex-grow-1 " +
                    (option.alias === selectedSubOp.alias && "btnSelected")
                  }
                  key={option.alias}
                  onClick={() => selectTexture(option.image_url, option)}
                >
                  {option.name}
                </span>
              ))}
            </div>
          )}

        <div className={"ctGralOptions " + animate + " " + grilla}>
          {active && ( // si la categoria seleccionada es esta, entonces mostrar opciones
            <Fragment>
              <Fragment>
                {options.map(option => (
                  <Fragment>
                    <span
                      className={"ctOptionText " + grilla}
                      key={option.alias}
                      onClick={() => onClickOpt(alias, option, selectOpt)}
                    >
                      {selectedOpt !== undefined &&
                        selectedOpt.alias === option.alias && (
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="selected"
                          />
                        )}
                      <Options {...option} key={option.name} />
                    </span>
                  </Fragment>
                ))}
              </Fragment>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;

Categories.propTypes = {
  name: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectCat: PropTypes.func.isRequired,
  selectedCat: PropTypes.string.isRequired,
  selectOpt: PropTypes.func.isRequired
};
