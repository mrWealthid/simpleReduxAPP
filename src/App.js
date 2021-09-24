import Card from "./Card";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, sign_in } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);

  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  //using payload
  // <button onClick={() => dispatch(increment(5))}>+</button>;

  //action with payload

  // const increment = (num) => {
  //   return {
  //     type: "INCREMENT",
  //     payload: num,
  //   };
  // };

  //The reducer with a payload

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "INCREMENT":
  //       return state + action.payload;

  //     default:
  //       return state;
  //   }
  // };

  return (
    <div className="App">
      <h1>Counter {counter}</h1>

      <button onClick={() => dispatch(increment())}>+</button>

      <buttton onClick={() => dispatch(decrement())}>-</buttton>

      <button onClick={() => dispatch(sign_in())}>Sign up</button>

      {isLogged ? <h3>Valuable information I shouldn't see</h3> : null}
    </div>
  );
}

export default App;
