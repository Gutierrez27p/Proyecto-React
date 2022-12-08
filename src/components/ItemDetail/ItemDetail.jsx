import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

export const ItemDetail = ({ listBurger }) => {

const { image, name, description, size, price, stock } = listBurger

return (
    <div className="cardDetail">
        <img className="cardDetail-img" src={image} alt={name} />
        <div className="cardDetail-container">
            <div className="cardDetail-body">
                <div className="cardDetail-top">
                <h2>{name}</h2>
                <i class="bi bi-box-arrow-left btn"></i>
                </div>
                <p>{description}</p>
                <p>{size}</p>
                <p>{stock}</p>
                <h5>${price}</h5>
            </div>
            <div className="cardDetail-btn">
                <ItemCount center />
            </div>
        </div>
    </div>
    )
}