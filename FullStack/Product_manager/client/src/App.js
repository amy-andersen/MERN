import './App.css';
import Main from './view/Main';
import OneProduct from './components/OneProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/product/:id" element={<OneProduct/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;