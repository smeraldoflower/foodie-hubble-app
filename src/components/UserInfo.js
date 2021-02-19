import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import axios from 'axios'
import { api } from '../utilities/api'
import Login from './Login'

function UserInfo() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getOrderHistory = () => {
        axios.get(api.orderHistory(`5cc1fd33df245c427cc26655`))
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="user-info">
            <Menu customBurgerIcon={ false }>
                <ul>
                    <li className="menu-item"> href= '/username'</li>
                </ul>

            </Menu>
        </div >
    );
}

export default UserInfo;