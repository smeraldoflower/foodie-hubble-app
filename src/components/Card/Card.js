import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import './Card.css';

function Card(props) {

    return (
        <div className="Card">
            <Link to={`/restaurant/details/${props.id}`}><h3>{props.name}</h3></Link>
            <img className="banner" alt="Restaurant Banner" width="200" height="150" src={`${props.banner_image}`} />
            <p>I am a restaurant card.</p>
        </div>
    )
}

export default Card;