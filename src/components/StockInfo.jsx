import "./StockInfoStyling.css";
import StockContext from "../contexts/StockContext";
import { useContext } from "react";

function StockInfo() {
  const stockContextValue = useContext(StockContext);

  const handleDelete = (event) => {
    const newStockList = stockContextValue.stockList.slice();

    newStockList.splice(event.target.dataset["index"], 1);

    stockContextValue.setStockList(newStockList);
  };

  if (stockContextValue.stockList.length > 0) {
    return (
      <div className="stock-list-section">
        <h2>Stock List</h2>
        <div className="stock-list">
          {stockContextValue.stockList.map((stockItem, index) => {
            return (
              <ul className="stock-list-item" key={index}>
                <button
                  data-index={index}
                  className="delete-btn"
                  onClick={handleDelete}
                >
                  X
                </button>
                <li className="stock-list-item-header">
                  <span className="symbol">{stockItem["symbol"]}</span>
                  <span className="quantity">
                    <span>Quantity: </span>
                    {stockItem["quantity"]}
                  </span>
                </li>
                <li>
                  Price Purchased:
                  <span className="prices">
                    {" "}
                    ${stockItem["purchase-price"]}
                  </span>
                </li>
                <li>
                  Current Price:
                  <span className="prices"> ${stockItem["current-price"]}</span>
                </li>
                <li>
                  Profit/Loss:{" "}
                  <span
                    className={
                      stockItem["profit/loss"] >= 0
                        ? "positive prices"
                        : "negative prices"
                    }
                  >
                    ${stockItem["profit/loss"]}
                  </span>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="stock-list-section">
        <h2>Stock List</h2>
        <div className="stock-info">
          <span className="no-stock-message">
            No stocks added, enter stock above.
          </span>
        </div>
      </div>
    );
  }
}

export default StockInfo;
