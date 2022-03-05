import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Form/>
        <Routes>
          <Route path="/people/:id" element={<People/>}/>
          <Route path="/planets/:id" element={<Planets/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
};

export default App;