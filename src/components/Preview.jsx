import React from "react";
import TableCard from "./TableCard.jsx";

function checkWidth(
  margin,
  width_of_card,
  width_of_paper,
  width_of_line_to_cut
) {
  let zmienna = Math.floor((width_of_paper - 2 * margin) / width_of_card);
  console.log("na szerokosc zmiesci sie " + zmienna);
  return zmienna;
}

function checkHeight(
  margin,
  height_of_card,
  height_of_paper,
  width_of_line_to_cut
) {
  let zmienna = Math.floor((height_of_paper - 2 * margin) / height_of_card);
  console.log("na wysokość zmiesci sie " + zmienna);
  return zmienna;
}

const GenerateCards = (props) => {
  return (
    <>
      {props.list_of_quests.map((quest) => (
       <TableCard key={quest.id} quest={quest} size_of_card={props.size_of_card}/>
      ))}
    </>
  );
};

const Preview = ({ props_size_of_card, props_list_of_quests }) => {
  const margin = 10;
  const width_of_paper = 210;
  const height_of_paper = 297;
  const width_of_line_to_cut = 1;

  checkWidth(
    margin,
    props_size_of_card.width,
    width_of_paper,
    width_of_line_to_cut
  );
  checkHeight(
    margin,
    props_size_of_card.height,
    height_of_paper,
    width_of_line_to_cut
  );

  return (
    <>
      <div
        className="overflow-hidden paperToPrint"
        style={{
          width: `${width_of_paper}mm`,
          height: `${height_of_paper}mm`,
          backgroundColor: "white",
          borderRadius: 0,
        }}
      >
        <div style={{ margin: `${margin}mm` }}>
          <div className="flex flex-wrap">
            <GenerateCards
              list_of_quests={props_list_of_quests}
              size_of_card={props_size_of_card}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
