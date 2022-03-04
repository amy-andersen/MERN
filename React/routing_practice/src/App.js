import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import {useParams} from 'react-router';

const Home = (props) =>{
  return(
    <h1>Welcome</h1>
  )
}

const Entry = (props) =>{
  const {entry} = useParams();
  if (isNaN(entry)) {
    return(
      <h1>The word is: {entry}</h1>
    );
  } else {
    return(
      <h1>The number is: {entry}</h1>
    );
  }
}

const Wordcolor = (props) =>{
  const {word} = useParams();
  const {textColor} = useParams();
  const {backColor} = useParams();
  return(
    <div style={{ color: textColor, backgroundColor: backColor }}>
      <h1>The word is: {word}</h1>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:entry" element={<Entry/>} />
            <Route path="/:word/:textColor/:backColor" element={<Wordcolor/>} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;