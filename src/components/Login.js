// import './Login.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { api } from '../utilities/api'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameOnLogin, setUsernameOnLogin] = useState('');
    const [passwordOnLogin, setPasswordOnLogin] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        setUsernameOnLogin(username);
        setPasswordOnLogin(password);
    }

    useEffect(() => {
        axios.post(api.login,
            {
                "username": `${usernameOnLogin}`,
                "password": `${passwordOnLogin}`
            }
        )
            .then(function (response) {
                console.log(response.data.found);
                console.log(response.data.message);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [usernameOnLogin, passwordOnLogin])

    return (
        <div className="Login">
            <form>
                <label>Username: 
                    <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
                </label><br />
                <label>Password: 
                    <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
                </label><br />
                    <input type='submit' value='LOGIN' onClick={handleLogin}/>
            </form>
            <p>{}</p>
        </div >
    );

}

export default Login;