import React, { useState, useEffect, Fragment } from "react";
import Options from "./Options";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const onClickCat = (selectedCat, alias, selectCat, selectedOpt, selectOpt) => {
  selectedCat === alias ? selectCat("") : selectCat(alias);

  if (typeof selectedOpt == "object") {
    //hay algo seleccionado
    selectOpt(selectedOpt.alias, selectedOpt); // pasarle alias y la opcion. Sacarla del objeto

    // aca hacer que una clase se agregue y modifique el nombre de la opcion
  }
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
  selectOpt,
  selectedOpt
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
    // eslint-disable-next-line
  });

  return (
    <Fragment>
      <span
        className={
          "ftCategories list-group-item list-group-item-action " + classActive
        }
        onClick={() =>
          onClickCat(selectedCat, alias, selectCat, selectedOpt, selectOpt)
        }
      >
        {name}
      </span>
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
