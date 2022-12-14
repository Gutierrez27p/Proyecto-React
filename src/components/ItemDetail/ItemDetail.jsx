// import { Link } from 'react-router-dom'

import ItemCount from "../ItemCount/ItemCount"

export const ItemDetail = ({item}) => {

    const {name, description, size, image, price, stock} = item
    return (
        <div className="row">
            <div className="col-md-4">
                <img src={image} alt={name} className="img-fluid m-2" />
            </div>
            <div className="col-md-4">
                <h1>{name}</h1>
                <h5>{size}</h5>
                <p>{description}</p>
                <p><b>${price}</b></p>
                <ItemCount stock={stock}/>
            </div>
        </div>
    )
}