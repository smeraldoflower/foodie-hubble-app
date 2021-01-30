import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import axios from 'axios'
import { api } from '../utilities/api'
import SearchResults from '../pages/SearchResults';
import Card from './Card';


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
        <Router>
            <div className="Login">
                <form onSubmit={handleSearchRequest}>
                    <input type='text' placeholder='Search restaurants...' size='65'
                        value={foodtype} onChange={e => setFoodType(e.target.value)} />
                    <input type='submit' value='🔍' />
                </form>
                <br />
                {
                    searchResults.length !== 0 ? searchResults.map(
                        (result) =>
                            <Card
                                id={result._id}
                                name={result.name}
                                banner_image={result.banner_image}
                            />
                    ) : null
                }
            </div >
            <Route path={`/SearchResults/${foodtype}`} component={SearchResults} />

        </Router>
    );

}

export default SearchBar;