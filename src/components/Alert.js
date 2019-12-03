import React from "react";

const Alert = ({ alert, closeAlert }) => {
  return (
    alert !== null && (
      <div class={"ctAlert alert alert-dismissible alert-" + alert.type}>
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          onClick={closeAlert}
        >
          &times;
        </button>
        <strong>{alert.msg}</strong>
      </div>
    )
  );
};

export default Alert;
