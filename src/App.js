import React from "react";
import Wrapper from "./pages/Wrapper";
import GeneralState from "./context/general/GeneralState";

const App = () => {
  return (
    <GeneralState>
      <Wrapper />
    </GeneralState>
  );
};

export default App;
