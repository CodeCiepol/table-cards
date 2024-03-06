import React from "react";
import { useState } from "react";

// const
const SetSizeOfCard = () => {
  const [size_of_card, set_size_of_card] = useState({ width: 20, height: 10 });

  function submitHandler(event) {
    event.preventDefault();
    console.log(size_of_card);
  }

  function widthChangeHandler(event) {
    set_size_of_card((size_of_card) => ({
      ...size_of_card,
      width: parseInt(event.target.value),
    }));
  }
  
  function heightChangeHandler(event) {
    set_size_of_card((size_of_card) => ({
      ...size_of_card,
      height: parseInt(event.target.value),
    }));
    console.log("zmieniam!")
  }
  return (
    <>
      <div className=" border-4 border-solid border-slate-500 rounded-md bg-white">
        <form onSubmit={submitHandler}>
          <p className="my-1 text-center">Size of table card:</p>
          <div className="flex justify-center">
            <input
              type="number"
              id="width-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/3 p-2.5"
              placeholder="x"
              onChange={widthChangeHandler}
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
            <button className="button">Set size</button>
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
