import { useState } from "react";
import styles from "./Input.module.css";

const Input = ({ type, ...props }) => {
  const [typeInp, setTypeInp] = useState(type);

  const handleToggleType = () => {
    setTypeInp((prevType) => (prevType === "text" ? "password" : "text"));
  };

  return (
    <div>
      <input type={typeInp} {...props} />
      {type !== "text" && (
        <button onClick={handleToggleType}>show</button>
      )}
    </div>
  );
};

export default Input;
