import { useReducer } from "react";
import styles from "./TaskForm.module.css";

const InitialState = {
  task: [],
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
    default:
      throw new Error("Unknown action");
  }
}

function TaskForm() {
  const [
    { titleInput, descriptionInput, statusInput, priorityInput, dueDateInput },
    dispatch,
  ] = useReducer(reducer, InitialState);

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
          <button>Add</button>
        </>
      </div>
    </div>
  );
}

export default TaskForm;
