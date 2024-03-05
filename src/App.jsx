import React from "react";
import Options from "./components/options";
import Previev from "./components/preview";
import Heading from "./components/heading";

const App = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Heading/>
        <div className="grid mt-6 grid-cols-2 justify-center gap-x-5 w-3/4">
          <Options />
          <Previev />
        </div>
      </div>
    </>
  );
};

export default App;
