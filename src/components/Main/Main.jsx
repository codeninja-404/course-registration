import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";

const Main = () => {
    const [cards,setCards] =useState([])
    useEffect(()=>{
        fetch("/public/data.json")
        .then(res => res.json())
        .then(data =>setCards(data))
    },[])
  return (
    <div className="container mx-auto">
      <Cards></Cards>
    </div>
  );
};

export default Main;
