import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";



const Cart = () => {
    const {cart, cartTotal, removeItem, clear, sumTotal} = useContext(CartContext);

    if(cartTotal() === 0) {
        return (
            <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <div className="alert alert-danger text-center m-2" role="alert">No se encontraron productos.</div>
                </div>
            </div>
        </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <table className="table my-5">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={6} className="text-end"><Link onClick={clear} className="btn btn-success">Vaciar</Link></th>
                            </tr>
                            <tr>
                            <th scope="col">&nbsp;</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.image} alt={item.name} width={100}/></td>
                                        <td className="text-cart">{item.name}</td>
                                        <td className="text-cart px-4">{item.quantity}</td>
                                        <td className="text-cart">${item.price}</td>
                                        <td className="text-cart">${item.quantity * item.price}</td>
                                        <td className="text-cart"><Link onClick={() => {removeItem(item.id)}}><img src={"/img/trash3.svg"} alt={"Eliminar"} width={22}/> </Link></td>
                                    </tr>
                                ))
                            }
                            <tr className="align-middle">
                                <td colSpan={3} className="text-end"><b>Total</b></td>
                                <td><b>${sumTotal()}</b></td>
                                <td><button className="btn btn-success">Finalizar compra</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;