import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar'
import './Home.css'


function Home(props) {

    return (
        <div className="Home">
            <h1> What would you like to eat today? </h1>
            <br />
            <SearchBar history={props.history} />
            <br />
        </div>
    )
}

export default Home;
