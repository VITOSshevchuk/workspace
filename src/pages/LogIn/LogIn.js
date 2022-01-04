import { ReactComponent as Logo } from "../../img/logo.svg";
import styles from "./styles.module.css";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  console.log("password", password);
  console.log("email", email);

  const onLogIn = async () => {
    const response = await axios.post("/api/auth/log-in", {
      email: email,
      password: password,
    });
    localStorage.setItem("token", response.data);
    navigate("/dashboard");
    console.log(response);
  };

  return (
    <div>
      <div className={styles.logInImg}>
        <Logo />
      </div>
      <div className={styles.title}>
        Log in to my <span>Workspace</span>.
      </div>
      <div className={styles.subtitle}>
        Login to your account or if you don’t have <br /> one{" "}
        <span onClick={() => {
          navigate("/sign-up")
        }}>create</span>
      </div>
      <div className={styles.form}>
        <div className={styles.inputWrappers}>
          <Input
            label={"Email"}
            placeholder={"Write correct email"}
            onChange={(value) => {
              setEmail(value);
            }}
          />
          <Input
            label={"Password"}
            placeholder={"Write password"}
            onChange={(value) => {
              setPassword(value);
            }}
          />
        </div>
        <Button text="Log In" onClick={onLogIn} />
      </div>
    </div>
  );
};
