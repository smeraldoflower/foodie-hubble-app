import React from 'react';
import Login from '../components/Login'
import SearchBar from '../components/SearchBar'
import RestaurantDetails from '../components/RestaurantDetails'

function Home() {

    return (
        <div className="Home">
            <Login />
            <br />
            <SearchBar />
            <br/>
            <RestaurantDetails/>
        </div>
    )
}

export default Home;
