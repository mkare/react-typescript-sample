import React, { useReducer, useRef, useEffect } from "react";
import Button from "./Button";
import Box from "./Box";

type State = number;
type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset"; payload: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return action.payload;
    default:
      return state;
  }
}

const Counter: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }

    buttonRef.current?.addEventListener(
      "click",
      () => {
        console.log("Button clicked");
      },
      false
    );

    return () => {
      buttonRef.current?.removeEventListener(
        "click",
        () => {
          console.log("Button clicked");
        },
        false
      );
    };
  }, []);

  return (
    <Box className="counter">
      <Box as="p">Count: {count}</Box>
      <Box>
        <Button ref={buttonRef} onClick={() => dispatch({ type: "decrement" })}>
          -
        </Button>
        <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
        <Button onClick={() => dispatch({ type: "reset", payload: 0 })}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
