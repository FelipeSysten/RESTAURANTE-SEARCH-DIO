import React from "react";
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from "./styles";

const RestaurantCard = ( { restaurant } ) => (
     <Restaurant>
    <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c" />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurant.photo[0].getUrl()} alt="Foto Restaurante" />
    </Restaurant>
);

export default RestaurantCard;