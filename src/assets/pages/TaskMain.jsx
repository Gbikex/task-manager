import TaskForm from "../components/TaskForm";

import styles from "./TaskMain.module.css";

function TaskMain() {
  return (
    <div className={styles.divMain}>
      <TaskForm />
    </div>
  );
}

export default TaskMain;
