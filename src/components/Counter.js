import { useDispatch, useSelector } from "react-redux";

import { decrement, increment, incrementByAmount } from "../redux/counterSlice";

function Counter() {
  const {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handelIncrement = () => {
    dispatch(increment())
  };
  const handelDecrement = () => {
    dispatch(decrement())
  
  };
  const handelIncByValue = (v1) => {
    dispatch(incrementByAmount(v1));
  };

  return (
    <div>
      {count}
      <br />
      <button onClick={handelIncrement}>INCREMENT</button>
      <button onClick={handelDecrement}>DECREMENT</button>
      <button onClick={() => handelIncByValue(3)}>DECREMENT BY 10</button>
    </div>
  );
}

export default Counter;
