import styles from "./TaskForm.module.css";

function TaskForm() {
  return (
    <div>
      <div className={styles.divForm}>
        <p>Task Details</p>
        <form>
          <p>Title</p>
          <input></input>
          <p>Description</p>
          <input></input>
          <p>Status</p>
          <input></input>
          <p>Priority</p>
          <input></input>
          <p>Due Date</p>
          <input></input>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
