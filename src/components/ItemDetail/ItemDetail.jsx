import { useEffect, useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount"

export const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext)
    const [itemStock, SetItemStock] = useState(0);
    
    const onAdd = (quantity) => {
        SetItemStock(itemStock - quantity);
        addItem(item, quantity);
    }

    useEffect(() => {
        SetItemStock(item.stock);
    }, [item]);
    
    return (
        <div className="row">
            <div className="col-md-4">
                <img src={item.image} alt={item.name} className="img-fluid m-2 img-Id" />
            </div>
            <div className="col-md-4">
                <h1>{item.name}</h1>
                <h5>{item.size}</h5>
                <p>{item.description}</p>
                <p><b>$ {item.price}</b></p>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>
        </div>
    )
}