import styles from "./styles.module.css";
import classNames from "classnames";

export const Input = (props: any) => {
  const inputClasses = classNames({
    [styles.input]: true,
    [styles.textarea]: props.isTextarea,
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>{props.label}</div>

      {props.isTextarea ? (
        <textarea placeholder={props.placeholder} className={inputClasses} />
      ) : (
        <input placeholder={props.placeholder} className={inputClasses}
        onChange={(event) => {
          props.hyu(event.target.value)
        }}
        />
      )}
      {props.error && <div className={styles.error}>{props.error}</div>}
    </div>
  );
};
