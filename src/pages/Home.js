import React from 'react';
import Login from '../components/Login'
import SearchBar from '../components/SearchBar'

function Home(props) {

    return (
        <div className="Home">
            <Login />
            <br />
            <SearchBar history={props.history} />
            <br/>
            
        </div>
    )
}

export default Home;
