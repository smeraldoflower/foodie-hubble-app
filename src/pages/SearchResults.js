import React from 'react';
import SearchBar from '../components/SearchBar'

function SearchResults() {

    return (
        <div className="SearchResults">
            <SearchBar/>
            <h2>SEARCH RESULTS</h2>

            {/* {
                    searchResults.length !== 0 ?             
                        searchResults.map(
                            (result) =>
                                <Card
                                    key = {`${result._id}`}
                                    id={result._id}
                                    name={result.name}
                                    banner_image={result.banner_image}
                                />
                        ) : null
                } */}

        </div>
    )
}

export default SearchResults;
