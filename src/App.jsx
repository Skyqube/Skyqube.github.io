import { useState } from "react";
import "./App.css";
import StockInfo from "./components/StockInfo";
import StockInput from "./components/StockInput";
import StockContext from "./contexts/StockContext";

function App() {
  return (
    <div>
      <HeaderSection />
      <MainSection />
    </div>
  );
}

function HeaderSection() {
  return (
    <header className="page-title">
      <div className="greetings-text-box">
        <p className="greeting">Hi, ####!</p>
        <span>
          Here is a personalised financial dashboard just for you! Start
          tracking your stocks below.
        </span>
      </div>
    </header>
  );
}

function MainSection() {
  const [stockList, setStockList] = useState([]);

  return (
    <div>
      <h1>Finance Dashboard</h1>
      <StockContext.Provider value={{ stockList, setStockList }}>
        <StockInput />
        <StockInfo />
      </StockContext.Provider>
    </div>
  );
}

export default App;
