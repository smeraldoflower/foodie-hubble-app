import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { api } from '../utilities/api'
import './Login.css';


// Not working, returning HTTP/1.1 400 BAD REQUEST

function SignUp() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedUp, setSignUpStatus] = useState(false);


    const handleSignUp = (event) => {
        event.preventDefault();
        axios.post(api.signup,
            {
                "username": `${username}`,
                "email": `${email}`,
                "password": `${password}`
            }
        )
            .then(function (response) {
                // setSignUpStatus(response.data.found);
                // console.log(response.data.found);
                // console.log(response.data.message);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="SignUp">
            <h2>NEW MEMBER? SIGN UP HERE</h2>
                <input type='text' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                <br />
                <input type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                <br />
                <input type='text' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <input type='submit' value='SIGNUP' onClick={handleSignUp}/>
        </div >
    );

}

export default SignUp;