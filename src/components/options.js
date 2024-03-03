import React from "react";

const SetSizeCard = () => {
  return (
    <>
      <div className=" border-4 text-center border-solid border-slate-500 rounded-md bg-white">
        <p className="my-1">Size of table card:</p>
        <p className="my-1">siema</p>
      </div>
    </>
  );
};
const Options = (props) => {
  //Set size of card
  return (
    <>
      <div className="flex flex-col gap-4">
        <SetSizeCard/>
        <div className="border-4 text-center border-solid border-slate-500 rounded-md bg-white">
          test
        </div>
        <div className="border-4 text-center border-solid border-slate-500 rounded-md bg-white">
          test
        </div>
        <div className="border-4 text-center border-solid border-slate-500 rounded-md bg-white">
          test
        </div>
      </div>
    </>
  );
};
export default Options;
