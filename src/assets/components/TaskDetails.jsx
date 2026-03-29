import styles from "./TaskDetails.module.css";

function TaskDetails({ task }) {
  return (
    <div>
      <p>Test</p>
      <ul>
        <li>Title: {task.title}</li>
        <li>Description: {task.description}</li>
        <li>Status: {task.status}</li>
        <li>Priority: {task.priority}</li>
        <li>Due Date: {task.dueDate}</li>
      </ul>
    </div>
  );
}

export default TaskDetails;
