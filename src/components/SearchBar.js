import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { api } from '../utilities/api';


function SearchBar(props) {

    const [foodtype, setFoodType] = useState('');

    // Passing search criteria props from form to other components

    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.history.push({
            pathname: '/SearchResults',
            state: {
                foodType: foodtype
            }
        })
    }

    return (
        <div className="Login">
            <form onSubmit={handleFormSubmit}>
                <input type='text' placeholder='Search restaurants...' size='65'
                    value= {foodtype} onChange={e => setFoodType(e.target.value)} />
                <input type='submit' value='🔍' />
            </form>
            <br />
        </div >
    );

}

export default SearchBar;