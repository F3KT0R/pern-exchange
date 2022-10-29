import React, { Fragment, useState } from "react";

const EditExchange = ({ exchange }) => {
  const [valuteFrom, setValuteFrom] = useState(exchange.valute_from);
  const [valuteTo, setValuteTo] = useState(exchange.valute_to);
  const [exchangeRate, setExchangeRate] = useState(exchange.exchange_rate);

  //edit valute_from function

  const updateValuteFrom = async e => {
    e.preventDefault();
    try {
      const body = { 
        valute_from: valuteFrom
      };
      const response = await fetch(
        `http://localhost:5000/exchanges/${exchange.exchange_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateValuteTo = async e => {
    e.preventDefault();
    try {
      const body = { 
        valute_to: valuteTo
      };
      const response = await fetch(
        `http://localhost:5000/exchanges/${exchange.exchange_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateExchangeRate = async e => {
    e.preventDefault();
    try {
      const body = { 
        exchange_rate: exchangeRate
      };
      const response = await fetch(
        `http://localhost:5000/exchanges/${exchange.exchange_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${exchange.exchange_id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${exchange.exchange_id}`}
        onClick={() => {
          setValuteFrom(exchange.valute_from);
          setValuteTo(exchange.valute_to);
          setExchangeRate(exchange.exchange_rate)
        }}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Exchange</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => {
                  setValuteFrom(exchange.valute_from);
                  setValuteTo(exchange.valute_to);
                  setExchangeRate(exchange.exchange_rate)
                }}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
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
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateValuteFrom(e)}
              >
                Edit Valute From
              </button>
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateValuteTo(e)}
              >
                Edit Valute To
              </button>
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateExchangeRate(e)}
              >
                Edit Exchange Rate
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setValuteFrom(exchange.valute_from);
                  setValuteTo(exchange.valute_to);
                  setExchangeRate(exchange.exchange_rate)
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditExchange;
