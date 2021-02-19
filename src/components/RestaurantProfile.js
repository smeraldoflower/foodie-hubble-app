import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'
import { api } from '../utilities/api'
import ProfileCard from './ProfileCard';

function RestaurantDetails(props) {

    const { id } = useParams();

    const [restaurantName, setRestaurantName] = useState('');
    const [hours, setHours] = useState({});
    const [foodtypes, setFoodTypes] = useState([]);
    const [bannerImg, setBannerImg] = useState(``);
    const [restaurantMenus, setRestaurantMenus] = useState([]);
    const [restaurantSocials, setRestaurantSocials] = useState({});

    const getRestaurantDetail = () => {

        axios.get(api.restaurantDetails(`${id}`))
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

    useEffect(() => {
        getRestaurantDetail();
    }, []);

    return (
        <div className="restaurant-details">
            <ProfileCard
                banner={bannerImg}
                restaurantName={restaurantName}
                hours={hours}
                contact={restaurantSocials.contact}
                facebook={restaurantSocials.facebook}
                instagram={restaurantSocials.instagram}
                menu={restaurantMenus}
                foodTypes={foodtypes}
            />
        </div >
    );

}

export default RestaurantDetails;