import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  
  const [selected, setSelected] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [toast, setToast] = useState(0);
  const handleSelect = (card) => {
    const isExiest = selected.find((item) => item.id === card.id);
    let credit = card.credit;
    if (isExiest) {
      return;
    } else {
      selected.forEach((item) => {
        credit = credit + item.credit;
      });
      const newRemaining = 20 - credit;

      if (credit > 20) {
        setToast(1);
        return;
      } else {
        setToast(0);
        setRemaining(newRemaining);
        setTotalCredit(credit);
        const newSelected = [...selected, card];
        setSelected(newSelected);
      }
    }
  };
  return (
    <> 
      <Header></Header>
      <Main
        toast={toast}
        remaining={remaining}
        totalCredit={totalCredit}
        selected={selected}
        handleSelect={handleSelect}
      ></Main>
    </>
  );
}

export default App;
