import './App.css';
import React, {useState} from 'react'
import Form from './components/Form';
import List from './components/List';

function App() {
  //initialize state and start with empty array for to do list. Pass down to children
  const [toDoList, setToDoList] = useState([])

  return (
    <div className="App">
      <Form
      toDoList={toDoList}
      setToDoList={setToDoList}
      ></Form>
      <List
      toDoList={toDoList}
      setToDoList={setToDoList}
      ></List>
    </div>
  );
}

export default App;
