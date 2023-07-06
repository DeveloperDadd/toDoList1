import Heading from './routes/Heading';
import Container from './routes/Container';
import Footer from './routes/Footer';
import { useState } from 'react';

function App() {
  let tasks = [];
  let count = tasks.length;
  const [display, setDisplay] = useState([tasks]);

  

  const footer = [count, ['All', 'Active', 'Completed','Clear Completed']];

  return (
    <>
    <Heading title="TODOS"/>
    <div className='container-sm border border-dark'>
      <Footer count={`${tasks.length} items left`} all={footer[1][0]} active={footer[1][1]} completed={footer[1][2]} clearCompleted={footer[1][3]}/>
    </div>
    </>
  );
}

export default App;
