import { Link } from 'react-router-dom'

export const ItemDetail = ({ item }) => {

    const { image, size, name, price, description} = item

    return (
        <div className="cardDetail row">
            <div className="col-md-4">
                <img src={image} alt={name} className="img-fluid" />
            </div>
            <div className="col-md-12">
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{size}</p>
                <p><b>${price}</b></p>
            </div>
        </div>
    )
}