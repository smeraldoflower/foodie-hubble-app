import logo from './logo.svg';
import './App.css';
import Login from './components/Login'

function App() {

  return (
    <div className="App">
      <h2>Foodie Hubble App</h2>
      <img src={logo} className="App-logo" alt="logo" />
      <Login />
    </div>
  );
}

export default App;
