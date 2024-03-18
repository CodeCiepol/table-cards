import React from "react";
import { useState } from "react";
import Options from "./components/Options.jsx";
import Previev from "./components/Preview.jsx";
import Header from "./components/Header.jsx";
import printdiv from "./util/printPages.js";
import { list_of_quests } from "./util/ListOfGuests.js";

const App = () => {
  const [size_of_card, set_size_of_card] = useState({ width: 90, height: 30 });

  function set_size_of_card_handler(card_data) {
    set_size_of_card(card_data);
  }


  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <Header />
        <div className="flex flex-wrap gap-4">
          <Options from_app_set_size_of_card={set_size_of_card_handler} />
          <Previev
            props_size_of_card={size_of_card}
            props_list_of_quests={list_of_quests}
          />
        </div>
      </div>
    </>
  );
};

export default App;
