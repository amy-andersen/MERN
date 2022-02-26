import './App.css';
import React, {useState} from 'react';
import Tab from './components/Tab';

function App() {

  //create an array to store the different tabs
  const tabs = [
    {label: "Tab 1", content: "Tab 1 content is showing here."},
    {label: "Tab 2", content: "Tab 2 content is showing here."},
    {label: "Tab 3", content: "Tab 3 content is showing here."}
  ];

  //create state to keep track of the current tab index
  const [ currentTabIndex, setCurrentTabIndex ] = useState(0)

  return (
    <div className="App">
      <Tab 
      tabs={tabs}
      currentTabIndex = {currentTabIndex}
      setCurrentTabIndex = {setCurrentTabIndex}
      />
    </div>
  );
}

export default App;