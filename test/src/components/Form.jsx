import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/userSlice";
import Input from "./Input/Input";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  const submitFunc = () => {
    if (email && password && confirmPass && password === confirmPass) {
      if (
        email === user.email &&
        password === user.password &&
        confirmPass === user.confirm_password
      ) {
        alert("Такой пользователь уже есть");
      } else {
        dispatch(
          registerUser({
            email: email,
            password: password,
            confirm_password: confirmPass,
          })
        );
        alert("Запрос отправлен");
      }
    } else {
      alert("Не правильные данные");
    }
  };

  return (
    <div>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        type="text"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="password"
      />
      <Input
        value={confirmPass}
        onChange={(e) => setConfirmPass(e.target.value)}
        placeholder="confirm_password"
        type="password"
      />
      <button onClick={submitFunc}>отправить</button>
    </div>
  );
};
export default Form;
