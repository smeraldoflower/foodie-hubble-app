// import './Login.css';
import React, { useState } from 'react'
import axios from 'axios'
import { api } from '../utilities/api'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isloggedOn, setLoginStatus] = useState(false);

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
            <form onSubmit={handleLogin}>
                <label>Username:&nbsp;
                    <input type='text' value={username} onChange={e => setUsername(e.target.value)} /><br />
                </label>
                <label>Password:&nbsp;
                    <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
                </label><br />
                <input type='submit' value='LOGIN' />
            </form>
            {isloggedOn ? <p>Login Successful</p> : null}
        </div >
    );

}

export default Login;