import React, { useContext, useCallback } from "react";
import { store } from "../store/store";
import {
  IncrementId,
  DecrementId,
  SetChangeValue
} from "../store/store.actions";

const CardInput = () => {
  const {
    state: { id, changeValue },
    dispatch
  } = useContext(store);

  const decrementEvent = useCallback(() => dispatch(DecrementId()), [dispatch]);
  const incrementEvent = useCallback(() => dispatch(IncrementId()), [dispatch]);
  const changeValueEvent = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) =>
      dispatch(SetChangeValue(Number(event.currentTarget.value))),
    [dispatch]
  );

  return (
    <section>
      <button type="button" onClick={decrementEvent}>
        -
      </button>
      Current ID: {id}
      <button type="button" onClick={incrementEvent}>
        +
      </button>
      <label htmlFor="change-select"></label>
      <select
        id="change-select"
        value={changeValue}
        onChange={changeValueEvent}
      >
        {[1, 2, 3, 4, 5].map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
    </section>
  );
};

export default CardInput;
