import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import '../css/Card.css';


function ProfileCard(props) {

    return (
        <div className="Card">
            <header className='bannerImg'>
                <img src={props.banner} alt="Restaurant Banner" />
            </header>
            <h2>{props.restaurantName}</h2>
            <p><b>Connect with us:</b>
                <ul>
                    <li><a href={props.contact}>Contact</a></li>
                    <li><a href={props.facebook}>Facebook</a></li>
                    <li><a href={props.instagram}>Instagram</a></li>
                </ul>
                {props.menu.length !== 0 ? props.menu.map((restaurantMenu) => <li>{restaurantMenu.name}: {restaurantMenu.unit_price}</li>) : null}
            </p>
            <p>{`Hours of Operation: ${props.hours.start} - ${props.hours.end}`}</p>
            <h3>We Serve: </h3>
            <ul>
                {props.foodTypes.length !== 0 ? props.foodTypes.map((foodtype) => <li>{foodtype}</li>) : null}
            </ul>
        </div>
    )
}

export default ProfileCard;