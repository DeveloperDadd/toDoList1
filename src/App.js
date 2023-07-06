import Heading from './routes/Heading';
import Task from './routes/Task';
import Footer from './routes/Footer';
import { useState } from 'react';

function App() {
  
  const [tasks, setTasks] = useState([]);
  const [tempData, setTempData] = useState("");

  const handleKeyDown = (e) => {
    setTempData(e.target.value);
    if (e.key ==='Enter') {
      const task = {
        text : tempData,
        id : Date.now(),
        active : true
      }
      let tempTasks = [...tasks, task];
      setTasks(tempTasks);
      setTempData("");
    }
}

  const taskPlaceholder = {
    text : 'Enter a task to be completed'
  }
  
  const footer = [tasks.length, ['All', 'Active', 'Completed','Clear Completed']];

  return (
    <>
    <Heading title="TODOS"/>
    <div className='container-sm border border-dark'>
      <Task placeholder={tempData} handleKeyDown={handleKeyDown} />
      <Footer count={`${tasks.length} items left`} all={footer[1][0]} active={footer[1][1]} completed={footer[1][2]} clearCompleted={footer[1][3]}/>
    </div>
    </>
  );
}

export default App;
