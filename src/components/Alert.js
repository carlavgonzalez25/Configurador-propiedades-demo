import React from "react";

export const Alert = (type, message) => {
  return (
    <div class={"alert alert-dismissible alert-" + type}>
      <button type="button" class="close" data-dismiss="alert">
        &times;
      </button>
      <strong>{message}</strong>
    </div>
  );
};
