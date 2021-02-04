import React from 'react';
import RestaurantDetails from '../components/RestaurantDetails';
import Review from '../components/Review';

function About() {

    return (
        <div className="About">
            <h2>About Us</h2>
            <Review/>
            <RestaurantDetails/>            
        </div>
    )
}

export default About;
