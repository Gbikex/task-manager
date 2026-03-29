import { useState } from "react";
import "./App.css";
import TaskMain from "./assets/pages/TaskMain";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TaskMain />
    </>
  );
}

export default App;
