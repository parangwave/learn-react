import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(null);
  const [coinPrice, setCoinPrice] = useState(null);
  const [dollarToCoin, setDollarToCoin] = useState(null);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((resp) => resp.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const handleSelect = (e) => {
    const price = e.target.value;
    setCoinPrice(price);
  };

  const handleCalculate = () => {
    if (dollar && coinPrice) {
      const calculatedValue = Math.floor(dollar / coinPrice);
      setDollarToCoin(calculatedValue);
    }
  };

  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          $<input type="number" onChange={(e) => setDollar(e.target.value)} />
          &nbsp;
          <select onChange={handleSelect}>
            <option value={null}>Select a coin</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
          &nbsp;
          <button onClick={handleCalculate}>Calculate</button>
          <br />
          <span>
            {coinPrice !== null && dollar !== null && dollarToCoin !== null
              ? `You can buy ${dollarToCoin} coins`
              : ""}
          </span>
        </>
      )}
    </div>
  );
}

export default App;
