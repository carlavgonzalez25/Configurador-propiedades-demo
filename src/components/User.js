import React, { Fragment } from "react";
import PropTypes from "prop-types";

const User = ({ name }) => {
  return (
    <Fragment>
      <div className="card-body">
        <h4 className="text-center">{name}</h4>
      </div>
    </Fragment>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired
};

export default User;
