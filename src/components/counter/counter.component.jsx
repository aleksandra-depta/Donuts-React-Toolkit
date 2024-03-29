import React from "react";
import { useDispatch } from "react-redux";
import { increase, decrease } from "../../features/cartSlice";

import { CounterContainer, CounterIcon, CounterInput } from "./counter.styles";

const Counter = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <CounterContainer>
      <CounterIcon
        aria-label="Decrement value"
        onClick={() => dispatch(decrease(product._id))}
      >
        <ion-icon size="large" name="remove-outline"></ion-icon>
      </CounterIcon>
      <CounterInput
        type="text"
        placeholder={product.amount}
        value={product.amount}
        readOnly
      />
      <CounterIcon
        aria-label="Increment value"
        onClick={() => dispatch(increase(product._id))}
      >
        <ion-icon size="large" name="add-outline"></ion-icon>
      </CounterIcon>
    </CounterContainer>
  );
};

export default Counter;
