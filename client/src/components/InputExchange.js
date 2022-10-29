import React, { Fragment, useState } from "react";

const InputExchange = () => {
  const [valuteFrom, setValuteFrom] = useState("");
  const [valuteTo, setValuteTo] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { 
        valute_from: valuteFrom,
        valute_to: valuteTo,
        exchange_rate: exchangeRate
      };
      const response = await fetch("http://localhost:5000/exchanges", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Exchange List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={valuteFrom}
          onChange={e => setValuteFrom(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={valuteTo}
          onChange={e => setValuteTo(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={exchangeRate}
          onChange={e => setExchangeRate(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputExchange;
