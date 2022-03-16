import './App.css';
import ProductForm from './components/ProductForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductForm/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;