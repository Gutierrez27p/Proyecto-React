import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CartWidget = () =>{
    const {cartList} = useContext(CartContext);

    return (
        <Link to={"/cart"} className="btn position-relative p-0">
            <img src={"https://cdn-icons-png.flaticon.com/512/711/711897.png"} alt={"cart"} width={25} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                {cartList()}
            </span>
        </Link>
    )
}

export default CartWidget;