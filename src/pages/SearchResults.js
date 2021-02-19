import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'
import { api } from '../utilities/api'
import SearchBar from '../components/SearchBar/SearchBar'
import Card from '../components/Card/Card';

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
            <p>{foodType === '' ? 'There were no results for your search. Here is a list of all available restaurants.' : ''}</p>
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
