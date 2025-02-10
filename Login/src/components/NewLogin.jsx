import { useState } from "react";
import Input from "./Input.jsx";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation.js";

export default function Login() {
  // const [enterEmail, setEnterEmail] = useState("");
  // const [enterPassword, setEnterPassword] = useState("");

  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValue.email) &&
    !isNotEmpty(enteredValue.email);
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValue.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValue);
  }

  function handleInputChange(identifier, value) {
    setEnteredValue((prev) => ({
      ...prev,
      [identifier]: value,
    }));
    setDidEdit((prev) => ({
      ...prev,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          type="email"
          name="email"
          label="Email"
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredValue.email}
          onBlur={() => handleInputBlur("email")}
          error={emailIsInvalid && "Pleas enter a valid email!"}
        />

        <Input
          id="password"
          type="password"
          name="password"
          label="Password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          onBlur={() => handleInputBlur("password")}
          value={enteredValue.password}
          error={passwordIsInvalid && "Pleas enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
