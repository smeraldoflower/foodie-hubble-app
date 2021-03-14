import React from 'react'
import './ProfileCard.css'

function ProfileCard(props) {

    return (
        <div className="ProfileCard">

            <header className='bannerImg'>
                <img src={props.banner} alt="Restaurant Banner" />
                <h1 className="RestaurantName">{props.restaurantName}</h1>
            </header>

            <div className="RestaurantHours">
                <h3>Hours of Operation</h3>
                <p>{`${props.hours.start} - ${props.hours.end}`}</p>
            </div>

            <div className='FoodTypes'>
                <h3>Food Types</h3>
                <p>{props.foodTypes.length !== 0 ? props.foodTypes.map((foodtype) => `${foodtype} / `) : null}</p>
            </div>

            <div className="RestaurantMenu">
                <h3>We Serve: </h3>
                {props.menu.length !== 0 ? props.menu.map((restaurantMenu) => <li>{restaurantMenu.name}: {restaurantMenu.unit_price}</li>) : null}

            </div>

            <p className="Socials">
                <b>Connect with us:</b>
                <ul>
                    <li><a href={props.contact}>Contact</a></li>
                    <li><a href={props.facebook}>Facebook</a></li>
                    <li><a href={props.instagram}>Instagram</a></li>
                </ul>
            </p>

        </div>
    )
}

export default ProfileCard;