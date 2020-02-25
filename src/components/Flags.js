import React, { useContext } from "react";
import GeneralContext from "../context/general/generalContext";

const Flags = ({ name }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <div
      type="button"
      className="btn btn-secondary"
      onClick={() => generalContext.changeLanguage(name)}
    >
      {name}
    </div>
  );
};

export default Flags;
