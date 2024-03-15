import { useDispatch, useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const plusFunc = () => {
    dispatch({
      type: "PLUS",
    });
  };
  const minusFunc = () => {
    dispatch({
      type: "MINUS",
    });
  };
  const resetFunc = () => {
    dispatch({
      type: "RESET",
    });
  };
  const plusTenFunc = () => {
    dispatch({
      type: "PLUS_TEN",
    });
  };
  const minusTenFunc = () => {
    dispatch({
      type: "MINUS_TEN",
    });
  };

  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={plusFunc}>+</button>
      <button onClick={minusFunc}>-</button>
      <button onClick={resetFunc}>reset</button>
      <button onClick={plusTenFunc}>+10</button>
      <button onClick={minusTenFunc}>-10</button>
    </div>
  );
}

export default App;
