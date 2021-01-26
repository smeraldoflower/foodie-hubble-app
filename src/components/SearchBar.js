import React, { useState } from 'react'
import axios from 'axios'
import { api } from '../utilities/api'

function SearchBar() {

    const [foodtype, setFoodType] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchRequest = (event) => {
        event.preventDefault();
        axios.get(api.searchRestaurant(foodtype))
            .then(function (response) {
                setSearchResults(response.data.data);
                console.log(response.data.data)
                console.log(response.data)
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="Login">
            <form onSubmit={handleSearchRequest}>
                <input type='text' placeholder='Search restaurants...' size='65'
                    value={foodtype} onChange={e => setFoodType(e.target.value)} />
                <input type='submit' value='🔍' />
            </form>
            <br/>
            <ul>
                { searchResults.length!==0 ? searchResults.map((result)=> <li>{result.name}</li>) : null}
            </ul>
        </div >
    );

}

export default SearchBar;