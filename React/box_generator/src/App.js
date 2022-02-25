import './App.css';
import React, {useState} from 'react';
import Form from './components/Form'
import Display from './components/Display'

function App() {
  //use lifted state for a list of boxes to be passed from Form to Display
  const [blockList, setBlockList] = useState([]);

  return (
    <div className="App">
      <h1>Add a block!</h1>
      <Form
      blockList={blockList}
      setBlockList={setBlockList}
      />
      <Display
      blockList={blockList}
      />
    </div>
  );
}

export default App;