import React from "react";

const Summary = options => {
  //console.dir(names);
  return (
    <div className="d-flex flex-column justify-content-center align-items-start w-100">
      {Object.keys(options.options).map(
        key =>
          options.options[key] !== null &&
          options.options[key].hasOwnProperty("name") && (
            <div className="d-flex w-100">
              <div
                className={
                  "ftCategories list-group-item list-group-item-action "
                }
              >
                <span key={key}>
                  {(options.options[key].hasOwnProperty("parent") &&
                    options.options[key].parent) +
                    " : " +
                    options.options[key].name}
                </span>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Summary;
