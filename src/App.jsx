import React from "react";
import Options from "./components/options";
import Previev from "./components/preview";

const App = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl text-center border-4 border-solid border-slate-500 rounded-lg bg-white w-96">
          Create your own table cards
        </div>
        <div className="grid mt-6 grid-cols-2 justify-center gap-x-5 w-3/4">
          <Options />
          <Previev />
        </div>
      </div>
    </>
  );
};

export default App;
