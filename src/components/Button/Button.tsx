import styles from "./styles.module.css";

export const Button = (props:any) => {
  return <button className={styles.button}>{props.children}</button>;
};
