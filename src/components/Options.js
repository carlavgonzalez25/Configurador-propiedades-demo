import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Options = ({ name, type }) => {
  return (
    <Fragment>
      <p>{name}</p>
      {type === "Premium" && <p className="ctDetalles">{type}</p>}
    </Fragment>
  );
};

Options.propTypes = {
  name: PropTypes.string.isRequired
};

export default Options;
