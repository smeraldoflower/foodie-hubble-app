import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar'

function Home(props) {

    return (
        <div className="Home">
            <br />
            <SearchBar history={props.history} />
            <br/>
            
        </div>
    )
}

export default Home;
