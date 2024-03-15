const initialState = {
  counter: 0,
};

export default function reducer(state = initialState, action) {
  if (action.type === "PLUS") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "MINUS") {
    if (state.counter > 0) {
      return { counter: state.counter - 1 };
    }
    return state;
  }
  if (action.type === "RESET") {
    return { counter: 0 };
  }
  if (action.type === "PLUS_TEN") {
    return { counter: state.counter + 10 };
  }
  if (action.type === "MINUS_TEN") {
    if (state.counter >= 10) {
      return { counter: state.counter - 10 };
    }
    return state;
  }
  return state;
}
