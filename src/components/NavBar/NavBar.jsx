import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to={'/'} ><img src="../img/logo.jpg" alt="Carl & Lenny" width= "108" /></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="page" to={"/category/hamburguesas"}>HAMBURGUESAS</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="page" to={"/category/papas"}>PAPAS</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="page" to={"/category/panchos"}>PANCHOS</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="page" to={"/category/ensaladas"}>ENSALADAS</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/postres"}>POSTRES</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div>
                <img src="https://deananddennys.com/contenidos/1666624500.jpg" alt="Logo" width= "100%" />
            </div>
        </div>
    )
}