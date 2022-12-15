import ItemCount from "../ItemCount/ItemCount"

export const ItemDetail = ({item}) => {
    
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
                <ItemCount stock={item.stock}/>
            </div>
        </div>
    )
}