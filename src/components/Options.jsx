import React from "react";
import { useState } from "react";
import SetSizeOfCard from "./options/SetSizeOfCard.jsx";
// const
const Options = (props) => {
  //Set size of card
  return (
    <>
      <div className="flex flex-col gap-4 hiddenAtPrint">
        <SetSizeOfCard from_option_set_size_of_card={props.from_app_set_size_of_card}/>
        <div className="border-4 text-center border-solid border-slate-500 rounded-md bg-white">
          test
        </div>
        <div className="border-4 text-center border-solid border-slate-500 rounded-md bg-white">
          test
        </div>
        <div className="border-4 text-center border-solid border-slate-500 rounded-md bg-white">
          test
        </div>
        <button onClick={window.print}>wydrukuj strone</button>
      </div>
    </>
  );
};
export default Options;
