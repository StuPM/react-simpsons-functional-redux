import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Components/Header";
import SimpsonsQuoteController from "./Components/SimpsonsQuoteController";

const App = () => {
  const count = useSelector((state) => state.count);
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();

  return (
    <>
      <h2>{name}</h2>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESUT" })}>Reset</button>

      <Header />
      <SimpsonsQuoteController />
    </>
  );
};

export default App;
