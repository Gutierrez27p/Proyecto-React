import React from "react";

const Promocion = () => {
    return (
        <div className="container-fluid">
            <div className="container py-5">
                <div className="row d-flex align-items-center bg-black ">
                    <div className="col-md-2">
                        <img src="img/logo.png" alt="Carl&Lenny" width="95" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center text-white">
                        <div>
                            <h2>Enterate de nuestras promociones a través de la app.</h2>
                            <p className="fw-bold">Descárgate nuestra app</p>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex align-items-center text-end">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="btn bg-white ">Descargar ahora</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promocion;