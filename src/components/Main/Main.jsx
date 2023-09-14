import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";

const Main = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="container mx-auto px-2 lg:px-6  lg:flex ">
      <div className="lg:w-3/4">
        <Cards cards={cards}></Cards>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Main;
