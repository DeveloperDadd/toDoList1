import Heading from './routes/Heading';
import Task from './routes/Task';
import Footer from './routes/Footer';
import { useState, useEffect } from 'react';
import Tasklist from './routes/Tasklist';

function App() {
  
  const [tasks, setTasks] = useState([]);
  const [tempData, setTempData] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [page, setPage] = useState("1")

  const handleKeyDown = (e) => {
    setTempData(e.target.value);
    if (e.key ==='Enter') {
      const task = {
        text : tempData,
        id : Date.now(),
        isActive : true
      }
      let tempTasks = [...tasks, task];
      setTasks(tempTasks);
      setTempData("");
      e.target.value = "";
    }
}

  useEffect (() => {
    if (page === "1") {
      setFilteredTasks(tasks);
    } 
  }, [tasks])

  function setTasksAll(e) {
    setFilteredTasks(tasks);
  }

  function setTasksActive(e) {
    const active = tasks.filter(task=> task.isActive === true)
    setPage("2");
    setFilteredTasks(active);
  }

  function setTasksCompleted(e) {
    const completed = tasks.filter(task=> task.isActive === false)
    setPage("3");
    setFilteredTasks(completed);
  }

  const taskPlaceholder = {
    text : 'Enter a task to be completed'
  }

  return (
    <>
    <Heading title="TODOS"/>
    <div className='container-sm border border-dark'>
      <Task placeholder={taskPlaceholder.text} handleKeyDown={handleKeyDown} />
      <Tasklist filteredTasks={filteredTasks} />
      <Footer count={`${tasks.length} items left`} setAll={setTasksAll} setActive={setTasksActive} setComplete={setTasksCompleted} />
    </div>
    </>
  );
}

export default App;
