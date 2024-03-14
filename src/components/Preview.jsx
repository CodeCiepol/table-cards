import React from "react";

const Preview = ({props_size_of_card}) => {
  return (
    <>
      <div className="basis-1/4 border-4 text-center border-solid border-slate-500 rounded-lg bg-white  h-96">
        Podgląd kartki A4
        <div className="w-a4 h-4">test</div>
        <div>width: {props_size_of_card.width}</div>
        <div>height: {props_size_of_card.height}</div>
      </div>
    </>
  );
};

export default Preview;
