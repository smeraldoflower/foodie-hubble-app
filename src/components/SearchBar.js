import React, { useState } from 'react';
import '../css/SearchBar.css';

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
        <div className="SearchBar">
            <div className="SearchBarContainer">
                <input className="SearchBarInput" type='text' placeholder='Search restaurants...'
                    value={foodtype} onChange={e => setFoodType(e.target.value)} />
                <input className="SearchBarButton" type='submit' value='🔍' onClick={handleFormSubmit} />
            </div>
        </div >
    );

}

export default SearchBar;