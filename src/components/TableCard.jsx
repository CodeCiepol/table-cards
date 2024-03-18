import React from "react";

const TableCard = (props) => {
  return (
    <div  className="h-full">
      <div
        className="bg-gray-500"
        style={{
          width: `${props.size_of_card.width}mm`,
          height: `${props.size_of_card.height}mm`,
        }}
      ></div>
      <div
        className="bg-sky-500/75 grid items-center justify-center"
        style={{
          width: `${props.size_of_card.width}mm`,
          height: `${props.size_of_card.height}mm`,
        }}
      >
        <span>{props.quest.name}</span>
      </div>
    </div>
  );
};

export default TableCard;
