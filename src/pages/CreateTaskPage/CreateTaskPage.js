import styles from "./styles.module.css";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import axios from "axios";

export const CreateTaskPage = () => {
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();
  const onTaskCreate = async () => {
    const response = await axios.post("/api/tasks", {
      title: title,
      description: description,
    });
  };

  return (
    <div>
      <div className={styles.title}>Create a task</div>
      <div className={styles.form}>
        <div className={styles.inputWrappers}>
          <Input
            label={"Title"}
            placeholder={"My first todo on Workspace"}
            onChange={(value) => {
                setTitle(value);
            }}
          />
          <Input
            label={"Description"}
            placeholder={"Description...."}
            isTextarea={true}
            onChange={(value) => {
              setDescription(value);
            }}
          />
        </div>
        <Button text="Create" onClick={onTaskCreate} />
      </div>
    </div>
  );
};
