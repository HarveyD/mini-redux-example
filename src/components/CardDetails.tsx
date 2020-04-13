import React, { useContext } from "react";
import { store } from "../store/store";

const CardDetails: React.FC = () => {
  const {
    state: { cardDetails }
  } = useContext(store);

  if (!cardDetails) {
    return null;
  }

  return (
    <section>
      <h2>{cardDetails.name}</h2>
      <h3>{cardDetails.manaCost}</h3>
      <div>{cardDetails.text}</div>
    </section>
  );
};

export default CardDetails;
