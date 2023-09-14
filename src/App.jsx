import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [selected, setSelected] = useState([]);
  const handleSelect = (card) => {
    const newSelected = [...selected, card];
    setSelected(newSelected);
    
  };
  return (
    <>
      <Header></Header>
      <Main selected={selected} handleSelect={handleSelect}></Main>
    </>
  );
}

export default App;
