import { ItemList } from "../ItemList/ItemList"

export const Item = ({ item }) => {

    return (
        <div className="col-md-4" >
            <div className="card text-center">
                <img src={item.image} className="card-img-top" alt={item.name} />
                    <div className="card-body">
                        <p className="card-text">{item.name}</p>
                    </div>
            </div>
        </div>
    )
}