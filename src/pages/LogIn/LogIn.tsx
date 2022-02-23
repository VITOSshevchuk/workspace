import { ReactComponent as Logo } from "../../img/logo.svg";
import styles from "./styles.module.css";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  console.log("password", password);
  console.log("email", email);

  return (
    <div>
      <div className={styles.logInImg}>
        <Logo />
      </div>
      <div className={styles.frame}>
        <div className={styles.title}>
          Log in to my <span>Workspace</span>.
        </div>
        <div className={styles.subtitle}>
          Login to your account or if you don’t have <br /> one{" "}
          <span
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            create
          </span>
        </div>
        <div className={styles.form}>
          <div className={styles.inputWrappers}>
            <Input label={"Email"} placeholder={"Write correct email"} hyu={(value: any) => {
              console.log(value)
            }}/>
            <Input label={"Password"} placeholder={"Write password"} />
          </div>
          <Button>Log In</Button>
        </div>
      </div>
    </div>
  );
};
