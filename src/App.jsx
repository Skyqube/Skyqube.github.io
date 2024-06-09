import { useState } from "react";
import "./App.css";
import StockInfo from "./components/StockInfo";
import StockInput from "./components/StockInput";
import StockContext from "./contexts/StockContext";

function App() {
  return (
    <div id="container">
      <HeaderSection />
      <MainSection />
    </div>
  );
}

let userName = undefined;

function HeaderSection() {
  if (userName === undefined) {
    userName = prompt("Enter your name here!").toString();
  }

  return (
    <header className="page-title">
      <div className="greetings-text-box">
        <h1 className="greeting">Hi, {userName}!</h1>
        <p>
          Here is a personalised financial dashboard just for you! Start
          tracking your stocks below.
        </p>
      </div>
    </header>
  );
}

function MainSection() {
  const [stockList, setStockList] = useState([]);

  return (
    <div className="finance-dashboard-section">
      <StockContext.Provider value={{ stockList, setStockList }}>
        <div>
          <h1>Finance Dashboard</h1>
          <StockInput />
        </div>
        <StockInfo />
      </StockContext.Provider>
    </div>
  );
}

export default App;
