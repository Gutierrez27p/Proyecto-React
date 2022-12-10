import { Link } from "react-router-dom"
import { burgers } from "../../assets/burgers"

export const Item = ({ item }) => {

    const {id, image, name, price, category} = item

    return (
        <div className="col-md-4" >
            <div className="card text-center">
                <img src={image} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <p className="card-text">{name}</p>
                    </div>
            </div>
        </div>
    )
}