import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  axios.get('https://foodhub-api.herokuapp.com/restaurant/details/5cc1f333df245c427cc2664b')
    .then(function (response) {
      console.log('GET REQUEST HERE:')
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  axios.post('https://foodhub-api.herokuapp.com/auth/login',
    {
      "username": "Ahmed Sadman",
      "password": "123456"
    }
  )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Foodie Hubble App
        </p>
        <form>
          <label> Username: <input type='text' /> </label><br />
          <label> Password: <input type='text' /> </label><br />
          <input type='submit' value='LOGIN' />
        </form>
      </header>
    </div>
  );
}

export default App;
