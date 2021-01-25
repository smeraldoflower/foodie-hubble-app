// import './Login.css';
import axios from 'axios'
import { api } from '../utilities/api'

function Login() {

    axios.post(api.login,
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
        <div className="Login">
            <form>
                <label>Username: <input type='text' /> </label><br />
                <label>Password: <input type='text' /> </label><br />
                <input type='submit' value='LOGIN' />
            </form>
        </div >
    );

}

export default Login;