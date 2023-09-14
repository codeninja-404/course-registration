import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [selected, setSelected] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);

  const handleSelect = (card) => {
    const isExiest = selected.find((item) => item.id === card.id);
    let credit = card.credit;
    if (isExiest) {
      return;
    } else {
      if (totalCredit <= 20) {
        selected.forEach((item) => {
          credit = credit + item.credit;
        });
        setTotalCredit(credit);
        const newSelected = [...selected, card];
        setSelected(newSelected);
      } else {
        return;
      }
    }
  };
  return (
    <>
      <Header></Header>
      <Main
        totalCredit={totalCredit}
        selected={selected}
        handleSelect={handleSelect}
      ></Main>
    </>
  );
}

export default App;
