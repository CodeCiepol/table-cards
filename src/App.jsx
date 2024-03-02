import React from "react";

const App = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="text-3xl text-center border-4 border-solid border-fuchsia-300 rounded-lg bg-white w-96">
          Create your own table cards
        </div>
      </div>
      <div className="flex mt-6 flex-row justify-center gap-x-5">
        {/* <div className="grid grid-cols-4 gap-4"> */}
        <div className="basis-1/4 border-4 border-solid border-fuchsia-300 rounded-lg bg-white h-96">
          Opcje:
        </div>
        <div className="basis-1/4 border-4 border-solid border-fuchsia-300 rounded-md bg-white">
          Podgląd kartki A4
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default App;
