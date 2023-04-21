import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incByValueAction,
  incrementAction,
} from "../redux/actions/counterAction";

function Counter() {
  const [counter, setCounter] = useState(0);
  const countState = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handelIncrement = () => {
    dispatch(incrementAction());
  };
  const handelDecrement = () => {
    dispatch(decrementAction());
  };
  const handelIncByValue = (v1) => {
    dispatch(incByValueAction(v1));
  };

  return (
    <div>
      {countState}
      <br />
      <button onClick={handelIncrement}>INCREMENT</button>
      <button onClick={handelDecrement}>DECREMENT</button>
      <button onClick={() => handelIncByValue(3)}>DECREMENT BY 10</button>
    </div>
  );
}

export default Counter;
