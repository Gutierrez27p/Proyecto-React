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
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://tubular-axolotl-d0cc56.netlify.app/assets/img/banner1.jpg" alt="Banner" width= "100%" height="300px"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://tubular-axolotl-d0cc56.netlify.app/assets/img/banner2.jpg" alt="Banner" width= "100%" height="300px"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://tubular-axolotl-d0cc56.netlify.app/assets/img/banner3.jpg" alt="Banner" width= "100%" height="300px"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://tubular-axolotl-d0cc56.netlify.app/assets/img/banner4.jpg" alt="Banner" width= "100%" height="300px"/>
                    </div>
                </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control" aria-hidden="true"></span>
                        <span className="visually-hidden"><img src="" alt="" /></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control" aria-hidden="true"></span>
                        <span className="visually-hidden"></span>
                    </button>
            </div>
        </div>
    )
}