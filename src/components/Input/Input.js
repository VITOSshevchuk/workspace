import styles from "./styles.module.css";
import classNames from "classnames";
export const Input = (props) => {
  const inputClasses = classNames({
    [styles.input]: true,
    [styles.textarea]: props.isTextarea,
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>{props.label}</div>

      {props.isTextarea ? (
        <textarea
          onChange={function (event) {
            props.onChange(event.target.value);
          }}
          placeholder={props.placeholder}
          className={inputClasses}
        />
      ) : (
        <input
          placeholder={props.placeholder}
          className={inputClasses}
          onChange={function (event) {
            props.onChange(event.target.value);
          }}
        />
      )}
      {props.error && <div className={styles.error}>{props.error}</div>}
    </div>
  );
};
