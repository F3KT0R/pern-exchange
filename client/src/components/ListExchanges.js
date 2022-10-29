import React, { Fragment, useEffect, useState } from "react";

import EditExchange from "./EditExchange";

const ListExchanges = () => {
  const [exchanges, setExchanges] = useState([]);

  //delete exchange function

  const deleteExchange = async id => {
    try {
      const deleteExchange = await fetch(`http://localhost:5000/exchanges/${id}`, {
        method: "DELETE"
      });

      setExchanges(exchanges.filter(exchange => exchange.exchange_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  //get exchange function

  const getExchanges = async () => {
    try {
      const response = await fetch("http://localhost:5000/excahnges");
      const jsonData = await response.json();

      setExchanges(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getExchanges();
  }, []);

  console.log(exchanges);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {exchanges.map(exchange => (
            <tr key={exchange.exchange_id}>
              <td>{exchange.valute_from}</td>
              <td>{exchange.valute_to}</td>
              <td>{exchange.exchange_rate}</td>
              <td>
                <EditExchange exchange={exchange} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteExchange(exchange.exchange_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListExchanges;
