import React, { useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { api } from '../utilities/api'
import './Login.css';
import { AuthContext } from '../contexts/AuthContext';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isloggedOn, setLoginStatus] = useState(false);
    // const [loginStatus, setLoginStatus] = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        axios.post(api.login,
            {
                "username": `${username}`,
                "password": `${password}`
            }
        )
            .then(function (response) {
                setLoginStatus(response.data.found);
                console.log(response.data.found);
                console.log(response.data.message);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="Login">
            <h2>LOGIN</h2>
                <input type='text' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                <br />
                <input type='text' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <input type='submit' value='LOGIN' onClick={handleLogin} />

            {isloggedOn ? <p>Login Successful</p> : null}

            <br/>
            <Link to='/SignUp'>Not a member? Click here to Sign Up now!</Link>
        </div >
    );

}

export default Login;