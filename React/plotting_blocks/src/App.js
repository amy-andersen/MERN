import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';

function App() {
  return (
    <div className="App" style={{
      backgroundColor: 'lightgray',
      width: "540px",
      display: 'inline-block'
    }}>
      <Header />
      <Navigation />
      <Main />
    </div>
  );
}

export default App;