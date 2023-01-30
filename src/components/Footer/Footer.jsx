import { NavLink } from "react-router-dom"

export const Footer = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-8 d-flex align-items-center bg-black py-2 icons-phone">
                    <a href="https://www.facebook.com/deananddennys/" className="mx-2 icons"><img src={"https://deananddennys.com/img/footer/face.png"} alt="facebook" /></a>
                    <a href="https://www.instagram.com/deandennys/" className="mx-2 icons"><img src={"https://deananddennys.com/img/footer/inst.png"} alt="instagram" /></a>
                    <a href="https://ar.linkedin.com/company/dean-&-dennys/" className="mx-2 icons"><img src={"https://deananddennys.com/img/footer/linkedin.png"} alt="linkedin" /></a>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-end bg-black">
                    <a href="https://www.apple.com/la/app-store/"><img className="col-md-8 redes" src={"https://www.mcdonalds.com.ar/uploads/app_store_3x_d293084ca1.png"} alt="app-store" width="50%" /></a>
                    <a href="https://play.google.com/store/games?hl=es&pli=1"><img className="col-md-8 redes" src={"https://www.mcdonalds.com.ar/uploads/disponible_google_play_3x_c977cae3bc.png"} alt="play-store" width="50%" /></a>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-8 ">
                    <ul className="nav text-footer">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#"><b>Política de privacidad</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#"><b>Defensa al consumidor</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#"><b>Protección de datos personales</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#"><b>Contacto</b></NavLink>
                            </li>
                    </ul>
                </div>
                <div className="col-md-4 text-end text-footer-p">
                    <p><img src={"https://tubular-axolotl-d0cc56.netlify.app/assets/img/logo.png"} alt="carl&lenny" width="40" />© Carl & Lenny's 2022.</p>
                </div>
            </div>
        </div>
    )
}