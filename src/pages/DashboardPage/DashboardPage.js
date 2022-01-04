import styles from "./styles.module.css";
import { Header } from "../../components/Header/Header";
import { ReactComponent as Cube } from "../../img/cube.svg";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export const DashboardPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/tasks");
      console.log(response.data);
    })();
  }, []);
  return (
    <div>
      <Header />
      <div className={styles.caption}>
        <div className={styles.title}>
          Welcome to your <span>Workspace</span>.
        </div>
        <div className={styles.subtitle}>
          Here you can find your tasks, see their status, delete and edit them.
          Thanks for using <span>Workspace</span>
        </div>
      </div>
      <div className={styles.content}>
        <Cube />
        <div className={styles.cubeText}>
          You don’t have any tasks, press button to create your first task.
        </div>
        <Button
          text="Create"
          onClick={() => {
            navigate("/create-task");
          }}
        />
      </div>
    </div>
  );
};
