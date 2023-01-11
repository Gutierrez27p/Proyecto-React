import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd }) => {

    const [count, setCount] = useState(1);
    const [itemStock, SetItemStock] = useState(stock);
    const [sold, setSold] = useState(false);

    const increase = () => count < stock && setCount(count + 1);
    const decrease = () => count > 1 && setCount(count - 1);

    const addToCart = (quantity) => {
        if (count <= itemStock){
            setCount(1);
            SetItemStock(itemStock - quantity);
            setSold(true);
            onAdd(quantity);
        }
    }
    useEffect(() => {
        SetItemStock(stock);
    }, [stock])
    
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="itemDetailBtn text-center" onClick={decrease}><b>-</b></button>                            
                    <button type="button" className="itemStock">{count}</button>
                    <button type="button" className="itemDetailBtn text-center" onClick={increase}><b>+</b></button>
                </div>
                {sold ? <Link to={"/cart"} className="btn-group btnAgregar btnAgregar-comprar">Comprar</Link> : <button type="button" className="btnAgregar" onClick={() => { addToCart (count) }}><b>Agregar al carrito</b></button>}
            </div>
        </div>
    )
}

export default ItemCount;