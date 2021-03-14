import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { api } from '../../utilities/api';
import './SearchBar.css'

function SearchBar(props) {

    const [foodtype, setFoodType] = useState('');

    // Passing search criteria props from form to other components

    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.history.push({
            pathname: `/SearchResults/${foodtype}`,
            // state: {
            //     foodType: foodtype
            // }
        })
    }

    return (
        <div className="SearchBar">
            <form className="SearchBarContainer" onSubmit={handleFormSubmit}>
                <input className="SearchBarInput" type='text' placeholder='Search restaurants...' size='65'
                    value={foodtype} onChange={e => setFoodType(e.target.value)} />
                <input className="SearchBarButton" type='submit' value='🔍' />
            </form>
        </div >
    );

}

export default SearchBar;