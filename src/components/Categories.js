import React, { useState, useEffect, Fragment } from "react";
import Options from "./Options";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import smoothscroll from "smoothscroll-polyfill";

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
  selectOpt(alias, option);
};

const Categories = ({
  name,
  alias,
  options,
  selectCat,
  selectedCat,
  showImage,
  selectOpt,
  selectedOpt,
  hasSelectedOpt
}) => {
  const [active, setActive] = useState(false);
  const [classActive, setClass] = useState("");
  const [animate, setAnimate] = useState("open");
  const [grilla, setGrilla] = useState("");

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
    options.length > 10 && setGrilla("grilla");

    smoothscroll.polyfill(); // iniciar smootscroll

    // eslint-disable-next-line
  });

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

        <div className={"ctGralOptions " + animate + " " + grilla}>
          {active && // si la categoria seleccionada es esta, entonces mostrar opciones
            options.map(option => (
              <Fragment>
                <span
                  className={"ctOptionText " + grilla}
                  key={option.alias}
                  onClick={() => onClickOpt(alias, option, selectOpt)}
                >
                  {selectedOpt !== undefined &&
                    selectedOpt.alias === option.alias && (
                      <FontAwesomeIcon icon={faCheck} className="selected" />
                    )}
                  <Options {...option} key={option.name} />
                </span>
              </Fragment>
            ))}
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
