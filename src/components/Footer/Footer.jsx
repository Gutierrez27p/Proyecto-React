export const Footer = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center bg-black py-2">
                    <a href="" className="mx-2 icons"><img src="img/face.png" alt="facebook" /></a>
                    <a href="" className="mx-2 icons"><img src="img/inst.png" alt="instagram" /></a>
                    <a href="" className="mx-2 icons"><img src="img/linkedin.png" alt="linkedin" /></a>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end bg-black">
                    <a href="" target="_blank"><img src="img/app_store_badge.png" alt="app-store" width="50%" /></a>
                    <a href="" target="_blank"><img src="https://www.pngall.com/wp-content/uploads/10/Google-Play-Logo-PNG-Cutout.png" alt="play-store" width="50%" /></a>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-8 ">
                    <ul className="nav ">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Política de privacidad</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Defensa al consumidor</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Protección de datos personales</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                    </ul>
                </div>
                <div className="col-md-4 text-end">
                    <p><img src="img/logo.png" alt="carl&lenny" width="40" />© Carl & Lenny's 2022.</p>
                </div>
            </div>
        </div>
    )
}