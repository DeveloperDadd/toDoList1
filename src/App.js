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
      setPage(page);
    }
}

  useEffect (() => {
    if (page === "1") {
      setTasksAll();
    } else if (page === "2") {
      setTasksActive();
    } else {
      setTasksCompleted();
    }
  }, [tasks])

  // Show all tasks in the tasks array
  function setTasksAll(e) {
    setFilteredTasks(tasks);
  }

  // Show all tasks with a status of isActive = true
  function setTasksActive(e) {
    const active = tasks.filter(task=> task.isActive === true)
    setPage("2");
    setFilteredTasks(active);
  }

  // Show all tasks with a status of isActive = false
  function setTasksCompleted(e) {
    const completed = tasks.filter(task=> task.isActive === false);
    setFilteredTasks(completed);
  }

  function markComplete(id) {
    setTasks(currentTasks => {
      return currentTasks.map(task => {
        if (task.id === id && task.isActive === true) {
          task.isActive = false;
        } else if (task.id === id && task.isActive === false) {
          task.isActive = true;
        }
        return task
      })
    })
    setPage(page);
  }

  // return all the tasks that do not equal that task id (i.e. delete the task)
  function deleteTask(id) {
    setTasks(tasks => {
      return tasks.filter(task => task.id !== id);
    })
  }

  // Reset the tasks list to the notCompleted tasks and go back to the 'first' page of the app or 'All'
  function clearCompleted() {
    let notCompleted = tasks.filter(task => task.isActive === true);
    setTasks(notCompleted);
    setPage("1")
    console.log("All completed tasks have been cleared")
  }

  const taskPlaceholder = {
    text : 'Enter a task to be completed'
  }

  return (
    <div className='container-fluid'>
    <Heading title="TODOS"/>
    <div id="main-container">
      <Task placeholder={taskPlaceholder.text} handleKeyDown={handleKeyDown} />
      <Tasklist filteredTasks={filteredTasks} deleteTask={deleteTask} markComplete={markComplete}/>
      <Footer count={`${tasks.length} items left`} setAll={setTasksAll} setActive={setTasksActive} setComplete={setTasksCompleted} clearCompleted={clearCompleted}/>
    </div>
    </div>
  );
}

export default App;
