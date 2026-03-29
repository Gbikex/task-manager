import { useReducer } from "react";
import styles from "./TaskForm.module.css";

const InitialState = {
  tasks: [],
  titleInput: "",
  descriptionInput: "",
  statusInput: "",
  priorityInput: "",
  dueDateInput: "",
};

console.log(InitialState);

function reducer(state, action) {
  switch (action.type) {
    case "setTitleInput":
      return { ...state, titleInput: action.payLoad };
    case "setDescriptionInput":
      return { ...state, descriptionInput: action.payLoad };
    case "setStatusInput":
      return { ...state, statusInput: action.payLoad };
    case "setPriorityInput":
      return { ...state, priorityInput: action.payLoad };
    case "setDueDateInput":
      return { ...state, dueDateInput: action.payLoad };
    case "setNewTask":
      return { ...state, tasks: action.payLoad };
    default:
      throw new Error("Unknown action");
  }
}

function TaskForm() {
  const [
    {
      tasks,
      titleInput,
      descriptionInput,
      statusInput,
      priorityInput,
      dueDateInput,
    },
    dispatch,
  ] = useReducer(reducer, InitialState);

  // Handle input values in the forms
  const handleTitleInput = function (e) {
    dispatch({ type: "setTitleInput", payLoad: e.target.value });
  };

  const handleDescriptionInput = function (e) {
    dispatch({ type: "setDescriptionInput", payLoad: e.target.value });
  };

  const handleStatusInput = function (e) {
    dispatch({ type: "setStatusInput", payLoad: e.target.value });
  };

  const handlePriorityInput = function (e) {
    dispatch({ type: "setPriorityInput", payLoad: e.target.value });
  };

  const handleDueDateInput = function (e) {
    dispatch({ type: "setDueDateInput", payLoad: e.target.value });
  };

  //Handle list of tasks
  const handleAddTaskToList = function () {
    const newTask = {
      title: titleInput,
      description: descriptionInput,
      status: statusInput,
      priority: priorityInput,
      dueDate: dueDateInput,
    };

    dispatch({
      type: "setNewTask",
      payLoad: [...tasks, newTask],
    });
  };

  function TaskDetails({ task }) {
    return (
      <div>
        <ul>
          <li>Title: {task.titleInput}</li>
          <li>Description: {task.descriptionInput}</li>
          <li>Status: {task.statusInput}</li>
          <li>Priority: {task.priorityInput}</li>
          <li>Due Date: {task.dueDateInput}</li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.divForm}>
        <h1>Task Details</h1>
        <form>
          <p>Title</p>
          <input value={titleInput} onChange={handleTitleInput}></input>
          <p>Description</p>
          <input
            value={descriptionInput}
            onChange={handleDescriptionInput}
          ></input>
          <p>Status</p>
          <input value={statusInput} onChange={handleStatusInput}></input>
          <p>Priority</p>
          <input value={priorityInput} onChange={handlePriorityInput}></input>
          <p>Due Date</p>
          <input value={dueDateInput} onChange={handleDueDateInput}></input>
        </form>
        <>
          <button onClick={handleAddTaskToList}>Add</button>
        </>
      </div>
      <div>
        {tasks.map((task) => (
          <TaskDetails task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskForm;
