import React from "react";
import { useState } from "react";
import { useFetch } from "../Hook/useFetch";
import { Button } from "react-bootstrap";

const Converter = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [value, setValue] = useState(0);
  const val = useFetch(
    `https://blockchain.info/tobtc?currency=${fromCurrency}&value=${value}`
  );
  const [answer, setAnswer] = useState(val);
  const handleConvert = () => {
    setAnswer(val);
  };
  const handleVal = (e) => {
    if (e.target.value) {
      setValue(e.target.value);
    } else {
      setValue("");
    }
  };
  return (
    <div>
      <div className="converter">
        <h1>Converter</h1>
        <div className="inputValue">
          <h3>Enter Value : </h3>
          <input
            type="number"
            placeholder="Enter Value"
            value={value}
            onChange={(e) => handleVal(e)}
            style={{ marginLeft: "1rem" }}
          />
        </div>
        <div className="answer">
          <h3>Answer : </h3>
          <input
            readOnly
            type="number"
            placeholder="Answer"
            value={answer}
            // onChange={(e)=>};
            style={{ marginLeft: "1rem" }}
          />
          {/* <h3>{answer}</h3> */}
        </div>
        <section className="options">
          <div className="select">
            <select>
              <option value="btc">BTC</option>
            </select>
          </div>
          <img
            src="https://cdn-icons.flaticon.com/png/128/1969/premium/1969057.png?token=exp=1647150592~hmac=fd33c2e9a56670711f15faaaed4303e6"
            style={{ width: "6%", height: "6%" }}
          ></img>

          <div className="select">
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="AUD">AUD</option>
              <option value="BRL">BRL</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CLP">CLP</option>
              <option value="CNY">CNY</option>
              <option value="DKK">DKK</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="HKD">HKD</option>
              <option value="INR">INR</option>
              <option value="ISK">ISK</option>
              <option value="JPY">JPY</option>
              <option value="KRW">KRW</option>
              <option value="NZD">NZD</option>
              <option value="PLN">PLN</option>
              <option value="RON">RON</option>
              <option value="RUB">RUB</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="TRY">TRY</option>
              <option value="TWD">TWD</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
            </select>
          </div>
        </section>
        <div className="btnC">
          <Button
            variant="outline-dark"
            onClick={handleConvert}
            style={{ padding: "0.5rem 4rem" }}
          >
            Convert
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Converter;
