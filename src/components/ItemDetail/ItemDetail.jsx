import { burgers } from "../../assets/burgers";

export const ItemDetail = ({ item }) => {

    return (
        <div className="cardDetail row">
            <div className="col-md-4">
                <img src={item.image} alt={item.name} className="img-fluid" />
            </div>
            <div className="col-md-12">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p>{item.size}</p>
                <p><b>${item.price}</b></p>
            </div>
        </div>
    )
}