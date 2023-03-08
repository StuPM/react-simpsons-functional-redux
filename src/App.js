import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const count = useSelector((state) => state.count);
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{name}</h1>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESUT" })}>Reset</button>
    </>
  );
};

export default App;
