import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Selected from "../Selected/Selected";

const Main = ({ handleSelect, selected, totalCredit,remaining }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="container mx-auto px-2 lg:px-6  lg:flex gap-6 ">
      <div className="lg:w-3/4">
        <Cards handleSelect={handleSelect} cards={cards}></Cards>
      </div>
      <div className="bg-green-500 lg:w-1/4">
        <div className="bg-base-100">
          <Selected remaining={remaining} totalCredit={totalCredit} selected={selected}></Selected>
        </div>
      </div>
    </div>
  );
};

export default Main;
