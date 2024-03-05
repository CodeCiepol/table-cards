import React from "react";

// const
const SetSizeOfCard = () => {
  return (
    <>
      <div className=" border-4 border-solid border-slate-500 rounded-md bg-white">
        <form>
          <p className="my-1 text-center">Size of table card:</p>
          <div className="flex justify-center">
            <input
              type="number"
              id="width-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/3 p-2.5"
              placeholder="x"
              required
            />
            <input
              type="number"
              id="height-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5"
              placeholder="y"
              required
            />
          </div>
          <div className="flex justify-center">
          <button className="button ">Set size</button>
          </div>
        </form>
      </div>
    </>
  );
};

const Options = (props) => {
  //Set size of card
  return (
    <>
      <div className="flex flex-col gap-4">
        <SetSizeOfCard />
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
