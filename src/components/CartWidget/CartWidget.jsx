const CartWidget = () =>{

    return (
        <button type="button" className="btn position-relative p-0">
            <img src="https://cdn-icons-png.flaticon.com/512/711/711897.png" alt="cart" width="25" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                0
            </span>
        </button>
    )
}

export default CartWidget;