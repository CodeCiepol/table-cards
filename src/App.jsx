import React from "react";
import { useState } from "react";
import Options from "./components/Options.jsx";
import Previev from "./components/Preview.jsx";
import Header from "./components/Header.jsx";

const App = () => {
  const [size_of_card, set_size_of_card] = useState({ width: 20, height: 10 });

  function set_size_of_card_handler(card_data) {
    set_size_of_card(card_data);
  }
  
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Header />
        <div className="grid mt-6 grid-cols-2 justify-center gap-x-5 w-3/4">
          <Options from_app_set_size_of_card={set_size_of_card_handler} />
          <Previev props_size_of_card={size_of_card}/>
        </div>
      </div>
    </>
  );
};

export default App;
