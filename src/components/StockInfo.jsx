import "./StockInfoStyling.css";
import StockContext from "../contexts/StockContext";
import { useContext } from "react";

function StockInfo() {
  const stockContextValue = useContext(StockContext);

  return (
    <div className="stock-info">
      <h2>Stock List</h2>
      {stockContextValue.stockList.map((stockItem, index) => {
        return (
          <ul key={index}>
            <li>{stockItem["symbol"]}</li>
            <li>{stockItem["quantity"]}</li>
            <li>{stockItem["purchase-price"]}</li>
            <li>{stockItem["current-price"]}</li>
            <li>{stockItem["profit/loss"]}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default StockInfo;
