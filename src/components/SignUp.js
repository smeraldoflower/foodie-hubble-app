import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { api } from '../utilities/api'

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