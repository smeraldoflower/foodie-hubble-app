import React, { useState } from 'react'
import { FaBorderStyle } from 'react-icons/fa';
import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";
import { api } from '../utilities/api'

function SearchBar(props) {

    const [foodtype, setFoodType] = useState('');

    // Passing search criteria props from form to other components

    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.history.push({
            pathname: `/SearchResults/${foodtype}`,
            state: {
                foodType: foodtype
            }
        })
    }

    return (
        <div className="Login"
            style={
                {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '5%',
                    margin: '10px',
                    borderStyle: 'groove'
                }
            }
        >
            <form onSubmit={handleFormSubmit}>
                <input type='text' placeholder='Search restaurants...' size='100'
                    value={foodtype} onChange={e => setFoodType(e.target.value)} />
                <input type='submit' value='🔍' />
            </form>
            <br />
        </div >
    );

}

export default SearchBar;