import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions, {
  divideAction,
  minusAction,
  multiplyAction,
  plusAction,
} from "../../redux/actions";
import calculateReducer from "../../redux/reducers/calculateReducer";

function CalculatePage() {
  const { result } = useSelector((state) => state.calculateReducer);
  const dispatch = useDispatch();

  const [firstInp, setFirstInp] = useState("");
  const [secInp, setSecInp] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (secInp === "" || firstInp === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [firstInp, secInp]);

  const plusFunc = () => {
    dispatch(plusAction(firstInp, secInp));
  };

  const minusFunc = () => {
    dispatch(minusAction(firstInp, secInp));
  };

  const multiplyFunc = () => {
    dispatch(multiplyAction(firstInp, secInp));
  };
  const didvideFunc = () => {
    dispatch(divideAction(firstInp, secInp));
  };

  return (
    <div>
      <input
        value={firstInp}
        onChange={(e) => setFirstInp(e.target.value)}
        type="number"
        placeholder="number"
      />
      <input
        value={secInp}
        onChange={(e) => setSecInp(e.target.value)}
        type="number"
        placeholder="nunber"
      />
      <button disabled={isEmpty} onClick={plusFunc}>
        +
      </button>
      <button disabled={isEmpty} onClick={minusFunc}>
        -
      </button>
      <button disabled={isEmpty} onClick={multiplyFunc}>
        *
      </button>
      <button disabled={isEmpty} onClick={didvideFunc}>
        /
      </button>
      <h1>{isEmpty ? "Поле пустое" : result}</h1>
    </div>
  );
}

export default CalculatePage;
