import React, { useState } from 'react'
import axios from 'axios'
import { api } from '../utilities/api'

function RestaurantDetails() {

    const[restaurantName, setRestaurantName] = useState('');
    const[hours, setHours] = useState({});
    const[foodtypes, setFoodTypes] = useState([]);
    const[bannerImg, setBannerImg] = useState(``);


    const getRestaurantDetail = () => {
        axios.get(api.restaurantDetails(`5cc1fd33df245c427cc26655`))
            .then(function (response) {
                setRestaurantName(response.data.data.name);
                setHours(response.data.data.hour);
                setFoodTypes(response.data.data.food_type);
                setBannerImg(response.data.data.banner_image)
                console.log(response.data.data.name);
                console.log(response.data.data.hour);
                console.log(response.data.data.food_type);
                console.log(response.data.data.banner_image);
                console.log(response.data.data);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="Login">
            <input type="submit" value = "RestDet" onClick = {getRestaurantDetail}/>
            <br/>
            <h2>{restaurantName}</h2>
            <img src= {bannerImg}/>
            <p>{`Hours of Operation: ${hours.start} - ${hours.end}`}</p>
            <h3>We Serve: </h3>
            <ul>
            { foodtypes.length!==0 ? foodtypes.map((foodtype)=> <li>{foodtype}</li>) : null}
            </ul>
        </div >
    );

}

export default RestaurantDetails;