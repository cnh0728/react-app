import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [dollar, setDollar] = useState(0);
  const [coins, setCoins] = useState([]);
  const [currentCoin, setCurrentCoin] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {setCoins(json);
    setLoading(false)
    // console.log("coins", json);
  });
  }, []);
  const onDollarChange = (event) =>{
    // console.log(event);
    if (!loading){
      setDollar(event.target.value);
    }
  };
  const onSelectChange = (event) => {
    if (!loading){
      setCurrentCoin(event.target.value);
    }
  };

  // useEffect(onDollarChange, [dollar]);
  return (
    <div>
      <h1>The Coins! ({loading ? "" : `(${coins.length})`})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select onChange={onSelectChange} hidden={loading}>
        {coins.map((coin) => <option value={coin.rank - 1}>{coin.name} ({coin.symbol} : {coin.quotes.USD.price} USD)</option>)}
      </select>
      {loading ? null :
      <div>
        <input value={dollar} type="number" onChange={onDollarChange} placeholder="input your dollar"></input>
        <br/>
        <label>you can get {(1 / coins[currentCoin].quotes.USD.price) * dollar} {coins[currentCoin].symbol}</label>
      </div>
      }
    </div>
  );
}

export default App;
