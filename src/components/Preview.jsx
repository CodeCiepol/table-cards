import React from "react";

function checkWidth(margin, width_of_card, width_of_paper) {
  let zmienna = Math.floor((width_of_paper - 2 * margin) / width_of_card);
  console.log("na szerokosc zmiesci sie " + zmienna);
  return (zmienna);
}

function checkHeight(margin, height_of_card, height_of_paper) {
  let zmienna = Math.floor((height_of_paper - 2 * margin) / height_of_card);
  console.log("na wysokość zmiesci sie " + zmienna);
  return (zmienna);
}
const GenerateCards =(props)=>{
  return (<>
  </>)
}

const Preview = ({ props_size_of_card }) => {
  const margin = 10;
  const width_of_paper = 210;
  const height_of_paper = 297;
  checkWidth(margin, props_size_of_card.width, width_of_paper);
  checkHeight(margin,props_size_of_card.height, height_of_paper);

  return (
    <>
      <div
        className="paperToPrint"
        style={{width:`${width_of_paper}mm`, height:`${height_of_paper}mm`, backgroundColor: "white"}} 
      >
        <div style={{ margin: `${margin}mm` }}>
          {/* <p className="left-0">test</p> */}
          <div>width: {props_size_of_card.width}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
          <div>height: {props_size_of_card.height}</div>
        </div>
      </div>
    </>
  );
};

export default Preview;
