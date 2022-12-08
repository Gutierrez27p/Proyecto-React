import { useState } from "react"

const ItemCount = ({stock}) => {   

    const [count, setCount] = useState(1);

    const increase = () => count < stock && setCount(count + 1);
    const decrease = () => count > 1 && setCount(count - 1);

    const onAdd = () => stock > 0 && console.log("Agregaste: " + count + " productos al carrito.");

    return (
        <div className="row">
            <div className="col-md-3">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary" onClick={decrease}>-</button>
                    <button type="button" className="btn btn-outline-primary">{count}</button>
                    <button type="button" className="btn btn-outline-primary" onClick={increase}>+</button>
                </div>
                <button type="button" className="btn btn-outline-primary" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;