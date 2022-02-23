import styles from "./styles.module.css";
import { ReactComponent as Plus } from "../../img/addtask.svg";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState } from "react";
import axios from "axios";

export const Task = (props: any) => {
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [edit, setEdit] = useState<boolean>(false);

  if (!edit) {
    return (
      <div className={styles.content}>
        <Plus
          onClick={(event) => {
            setEdit(true);
            props.onEditOpen();
          }}
        />
        <div className={styles.task}>Add task</div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className={styles.todo}>
          <input
            className={styles.input}
            type=""
            placeholder={"e.g., Read every day p3 @goals #Learning"}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <textarea
            placeholder={"Description"}
            className={styles.textarea}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
        <div className={styles.buttons}>
          <div>
            <button
              className={styles.add}
              onClick={(event) => {
                console.log(title, description);
                axios.post("/api/tasks", {
                  title: title,
                  description: description,
                });
              }}
            >
              Add
            </button>
            {/*axios.post(url[, data[, config]])*/}
          </div>
          <div>
            <button
              className={styles.cancel}
              onClick={(event) => {
                setEdit(false);
                props.onEditClose()
              }}

            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
