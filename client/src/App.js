import React, { Fragment } from "react";
import "./App.css";

//components

import InputExchange from "./components/InputExchange";
import ListExchanges from "./components/ListExchanges";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputExchange />
        <ListExchanges />
      </div>
    </Fragment>
  );
}

export default App;
