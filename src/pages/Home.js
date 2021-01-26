import React from 'react';
import Login from '../components/Login'
import SearchBar from '../components/SearchBar'

function Home() {

    return (
        <div className="Home">
            <Login />
            <br />
            <SearchBar />
        </div>
    )
}

export default Home;
