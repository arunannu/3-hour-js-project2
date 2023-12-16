import React, { useRef , useState } from "react";
import Inputs from "./Input";
import "./Form.css";

const Form = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <div>
      <form className="form1" onSubmit={submitHandler}>
        <Inputs
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }} 
        />
        <button className="btn">+ Add</button>
        {!amountIsValid && <p>please enter a valid number (1to5)</p>}
      </form>
    </div>
  );
};

export default Form;
