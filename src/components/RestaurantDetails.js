import React, { useState } from 'react'
import {slide as Menu} from 'react-burger-menu'
import axios from 'axios'
import { api } from '../utilities/api'

function RestaurantDetails() {


    const[restaurantName, setRestaurantName] = useState('');
    const[hours, setHours] = useState({});
    const[foodtypes, setFoodTypes] = useState([]);
    const[bannerImg, setBannerImg] = useState(``);
    const[restaurantMenus, setRestaurantMenus] = useState([]);
    const[restaurantSocials, setRestaurantSocials] = useState({});

    const getRestaurantDetail = () => {
        
        axios.get(api.restaurantDetails(`5cc1fd33df245c427cc26655`))
            .then(function (response) {
                const baseObject = response.data.data;
                setRestaurantName(baseObject.name);
                setHours(baseObject.hour);
                setFoodTypes(baseObject.food_type);
                setBannerImg(baseObject.banner_image);
                setRestaurantMenus(baseObject.menu);
                setRestaurantSocials(baseObject.social);
                console.log(baseObject.name);
                console.log(baseObject.hour);
                console.log(baseObject.food_type);
                console.log(baseObject.banner_image);
                console.log(baseObject.menu.name);
                console.log(baseObject.social.title)
                console.log(baseObject);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="restaurant-details">
            <input type="submit" value = "RestDet" onClick = {getRestaurantDetail}/>
            <br/>
            <h2>{restaurantName}</h2>
            <p><b>Connect with us:</b>
            <ul>
            <li><a href = {restaurantSocials.contact}>Contact</a></li>
            <li><a href = {restaurantSocials.facebook}>Facebook</a></li>
            <li><a href = {restaurantSocials.instagram}>Instagram</a></li>
            </ul>
            </p>
            <img src= {bannerImg} alt="Restaurant Banner"/>
            <p>{`Hours of Operation: ${hours.start} - ${hours.end}`}</p>
            { restaurantMenus.length!==0 ? restaurantMenus.map((restaurantMenu)=> <menu>{restaurantMenu.name}: {restaurantMenu.unit_price}</menu>) : null}
            <h3>We Serve: </h3>
            <ul>
            { foodtypes.length!==0 ? foodtypes.map((foodtype)=> <li>{foodtype}</li>) : null}
            </ul>
        </div >
    );

}

export default RestaurantDetails;