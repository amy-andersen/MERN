import './App.css';
import AllAuthors from './components/AllAuthors';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<AllAuthors/>}/>
        <Route path="/new" element={<NewAuthor/>}/>
        <Route path="/edit/:id" element={<EditAuthor/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;