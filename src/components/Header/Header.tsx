import styles from "./styles.module.css";
import { ReactComponent as Logo } from "../../img/logowhite.svg";
import { ReactComponent as Complete } from "../../img/complete.svg";
import { Avatar } from "../Avatar/Avatar";


export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div>
            <Logo className={styles.logowhite} />
          </div>
          <div className={styles.title}>Workspace</div>
          <div className={styles.right}>
            <Complete />
            <div className={styles.counter}>0/6</div>
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};
