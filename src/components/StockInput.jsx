import { useCallback, useContext, useState } from "react";
import StockContext from "../contexts/StockContext";
import "./StockInputStyling.css";

function StockInput() {
  // StockInput
  const [stockSymbol, setStockSymbol] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [stockPurchasePrice, setStockPurchasePrice] = useState("");

  // StockContext
  // const {stockList, setStockList} = useContext(StockContext);
  const stockContextValue = useContext(StockContext);

  // HandleChanges
  const handleSymbolChange = useCallback((event) => {
    setStockSymbol(event.target.value);
  }, []);
  const handleQuantityChange = useCallback((event) => {
    setStockQuantity(event.target.value);
  }, []);
  const handlePurchasePriceChange = useCallback((event) => {
    setStockPurchasePrice(event.target.value);
  }, []);

  // HandleClick
  const handleClick = () => {
    fetch(
      "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
        stockSymbol +
        "&apikey=demo"
    )
      .then((res) => res.json())
      .then((data) => {
        if (stockPurchasePrice <= 0 || stockQuantity <= 0) {
          alert("Invalid Stock, Quantity or Purchasing Price!");
        } else {
          const newStockList = stockContextValue.stockList.slice();
          newStockList.push({
            symbol: data["Global Quote"]["01. symbol"],
            quantity: stockQuantity,
            "purchase-price": stockPurchasePrice,
            "current-price": data["Global Quote"]["05. price"],
            "profit/loss":
              (+data["Global Quote"]["05. price"] - +stockPurchasePrice) *
              +stockQuantity,
          });
          stockContextValue.setStockList(newStockList);
        }
      })
      .catch(() => alert("Invalid Stock, Quantity or Purchasing Price!"));
  };

  return (
    <form className="order-form" name="order">
      <div>
        <input
          className="stock-inputs"
          id="stock-symbol"
          value={stockSymbol}
          onChange={handleSymbolChange}
          type="text"
          placeholder="Stock Symbol"
          name="stock-symbol"
          required
        />
      </div>
      <div>
        <input
          className="stock-inputs"
          id="quantity-of-shares"
          value={stockQuantity}
          onChange={handleQuantityChange}
          type="number"
          placeholder="Quantity of Shares"
          name="quantity-of-shares"
          required
        />
      </div>
      <div>
        <input
          className="stock-inputs"
          id="purchase-price"
          value={stockPurchasePrice}
          onChange={handlePurchasePriceChange}
          type="number"
          placeholder="Purchase Price"
          name="purchase-price"
          required
        />
      </div>

      <button type="button" className="btn" onClick={handleClick}>
        Add Stock
      </button>
    </form>
  );
}

export default StockInput;
