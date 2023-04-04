import { useState } from "react";
import { CreateTask } from "./components/CreateTask";
import { ListTasks } from "./components/ListTasks";
import { MainContainer } from "./components/MainContainer";


function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <div className="first-container">
      <MainContainer>
        <div className="card-elements">
        <CreateTask tasks={tasks} stateChanger={setTasks} />
        <ListTasks tasks={tasks} stateChanger={setTasks} />
        </div>
      </MainContainer>
    </div>
  );
}

export default App;
