import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"} ><img src="https://tubular-axolotl-d0cc56.netlify.app/assets/img/logo.png" alt="Carl & Lenny" width= "108" /></Link>
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
        </div>
    )
}