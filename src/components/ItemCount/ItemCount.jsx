import { useState } from "react"

const ItemCount = ({ stock }) => {   

    const [count, setCount] = useState(1);

    const increase = () => count < stock && setCount(count + 1);
    const decrease = () => count > 1 && setCount(count - 1);

    const onAdd = () => stock > 0 && console.log("Agregaste: " + count + " productos al carrito.");

    return (
        <div className="row">
            <div className="col-md-3">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="itemDetailBtn text-center" onClick={decrease}><b>-</b></button>                            
                    <button type="button" className="itemStock">{count}</button>
                    <button type="button" className="itemDetailBtn text-center" onClick={increase}><b>+</b></button>
                </div>
                <button type="button" className="btnAgregar" onClick={onAdd}><b>Agregar al carrito</b></button>
            </div>
        </div>
    )
}

export default ItemCount;