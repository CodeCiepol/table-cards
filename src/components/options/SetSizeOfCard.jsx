import React from "react";
import { useState } from "react";

export default function SetSizeOfCard(props){
    const [size_of_card, set_size_of_card] = useState({ width: 20, height: 10 });
  
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
    }
  
    function submitHandler(event) {
      event.preventDefault();
      props.from_option_set_size_of_card(size_of_card);
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/5 p-2.5"
                placeholder="width"
                onChange={widthChangeHandler}
                required
              />
  
              <input
                type="number"
                id="height-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5"
                placeholder="height"
                onChange={heightChangeHandler}
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