import styles from "./styles.module.css";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const SignUp = () => {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  console.log("password", password);
  console.log("confirm pass", confirmPassword);
  console.log("email", email);

  const onCreateAccount = async () => {
    await axios.post("/api/auth/sign-up", {
      email: email,
      password: password,
    });

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
      <div className={styles.signUpImg}>
        <Logo />
      </div>
      <div className={styles.title}>
        Log in to my <span>Workspace.</span>{" "}
      </div>
      <div className={styles.subtitle}>
        {" "}
        Create an account if you want to <br />
        continue or <span onClick={()=>{
          navigate("/log-in")
      }}>login</span> if you already have one.
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
            error={password !== confirmPassword && "Password is incorrect"}
            label={"Password"}
            placeholder={"Write password"}
            onChange={(value) => {
              setPassword(value);
            }}
          />
          <Input
            label={"Confirm Password"}
            placeholder={"Confirm Password"}
            onChange={(value) => {
              setConfirmPassword(value);
            }}
            error={password !== confirmPassword && "Password is incorrect"}
          />
        </div>
        <Button onClick={onCreateAccount} text="Create Account" />
      </div>
    </div>
  );
};
