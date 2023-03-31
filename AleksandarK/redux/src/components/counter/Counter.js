import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSelector } from "../../store/counter/selectors";
import {
  increment,
  decrement,
  addAmmount,
  preformCounterReset,
} from "../../store/counter/slice";

export const Counter = () => {
  const [ammount, setAmmount] = useState(0);
  const value = useSelector(counterSelector);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleAddAmmount = () => {
    dispatch(addAmmount(ammount));
    setAmmount(0);
  };

  const handleReset = () => {
    dispatch(preformCounterReset());
  };

  return (
    <div>
      <h1>Counter:</h1>
      <h1>{value}</h1>
      <button
        onClick={() => {
          handleIncrement();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          handleDecrement();
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          handleReset();
        }}
      >
        Reset
      </button>
      <div>
        <label>Add Ammount</label>
        <input
          value={ammount}
          onChange={(e) => setAmmount(e.target.value)}
        ></input>
        <button
          onClick={() => {
            handleAddAmmount();
          }}
        >
          Add Ammount
        </button>
      </div>
    </div>
  );
};
