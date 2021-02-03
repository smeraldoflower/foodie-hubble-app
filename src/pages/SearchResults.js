import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";
import axios from 'axios'
import { api } from '../utilities/api'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card';

function SearchResults(props) {
    const foodType =
        props.location.state === undefined || props.location.state.foodType === undefined ?
            '' : props.location.state.foodType;

    const [searchResults, setSearchResults] = useState([]);

    const sendSearchRequest = () => {
        axios.get(api.searchRestaurant(foodType))
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

    useEffect(() => {
        sendSearchRequest();
    }, []);

    return (
        <div className="SearchResults">
            <h2>SEARCH RESULTS : {foodType} </h2>
            {
                searchResults.length !== 0 ?
                    searchResults.map(
                        (result) =>
                            <Card
                                key={`${result._id}`}
                                id={result._id}
                                name={result.name}
                                banner_image={result.banner_image}
                            />
                    ) : null
            }

        </div>
    )
}

export default SearchResults;
