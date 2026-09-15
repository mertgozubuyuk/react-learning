import React, { useState } from "react";
import "../css/currency.css";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import axios from "axios";

function Currency() {
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  async function CurrencyConversion() {
    const url = `https://api.freecurrencyapi.com/v1/latest?base_currency=${fromCurrency}&currencies=${toCurrency}`;

    const response = await axios.get(url, {
      headers: {
        apikey: import.meta.env.VITE_API_KEY,
      },
    });

    const data = response.data;
    const rate = data.data[toCurrency];

    const calculatedResult = amount * rate;
    setResult(calculatedResult.toFixed(2));
  }

  return (
    <div className="main-card">
      <div className="card">
        <div>
          <h2>Currency conversion</h2>
        </div>
        <div>
          <input
            type="number"
            id="amount"
            value={amount}
            placeholder="Amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <select
            id="fromCurrency"
            value={fromCurrency}
            onChange={(e) => {
              setFromCurrency(e.target.value);
            }}
          >
            <option value="TRY">TRY</option>
            <option value="USD">USD</option>
            <option value="EUR">EURO</option>
          </select>
        </div>

        <div>
          <div>
            <FaArrowAltCircleDown
              className="down-icon"
              onClick={CurrencyConversion}
            />
            <FaArrowAltCircleUp
              className="up-icon"
              onClick={CurrencyConversion}
            />
          </div>
        </div>

        <div>
          <input
            type="number"
            id="result"
            placeholder="Result"
            value={result}
          />

          <select
            id="toCurrency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="TRY">TRY</option>
            <option value="USD">USD</option>
            <option value="EUR">EURO</option>
          </select>
        </div>

        <div>
          <button
            id="translateBtn"
            className="translate-btn"
            onClick={CurrencyConversion}
          >
            currency exchange
          </button>
        </div>
      </div>
    </div>
  );
}

export default Currency;
