import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { api } from '../utilities/api'

function SignUp() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameOnSignUp, setUsernameOnSignUp] = useState('');
    const [passwordOnSignUp, setPasswordOnSignUp] = useState('');
    const [emailOnSignUp, setEmailOnSignUp] = useState('');

    const handleSignUp = (event) => {
        event.preventDefault();
        setUsernameOnSignUp(username);
        setEmailOnSignUp(email);
        setPasswordOnSignUp(password);
    }

    useEffect(() => {
        axios.post(api.signup,
            {
                "username": `${usernameOnSignUp}`,
                "email": `${emailOnSignUp}`,
                "password": `${passwordOnSignUp}`
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

    }, [usernameOnSignUp, emailOnSignUp, passwordOnSignUp])

    return (
        <div className="SignUp">
            <form onSubmit={handleSignUp}>
                <label>Username: 
                    <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
                </label><br />
                <label>Email: 
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                </label><br />
                <label>Password: 
                    <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
                </label><br />
                    <input type='submit' value='SIGNUP'/>
            </form>
            <p>{}</p>
        </div >
    );

}

export default SignUp;