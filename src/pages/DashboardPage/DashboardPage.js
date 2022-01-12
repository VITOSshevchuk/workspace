import styles from "./styles.module.css";
import { Header } from "../../components/Header/Header";
import { ReactComponent as Cube } from "../../img/cube.svg";
import {Task} from "../../components/Task/Task";

export const DashboardPage = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.title}>Welcome to your Workspace.</div>
        <div className={styles.subtitle}>
          Here you can find your tasks, see their status, delete and edit them.
          Thanks for using <span>Workspace</span>
        </div>
        <div className={styles.container}>
          <Task/>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <Cube />
        </div>
        <div className={styles.text}>You don’t have any tasks yet</div>
      </div>
    </div>
  );
};
