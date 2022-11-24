import React from "react";

const Banners = () => {
    return (
        <div className="container">
            <div className="row px-1 banners">
                <div className="col-md-5 text-center shadow p-3 bg-body rounded">
                    <p><img className="img-fluid" src="img/banner1.jpg" alt="ingredientes"/></p>
                    <p><a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-success">IR AL MENÚ</a></p>
                </div>
                <div className="col-md-5 text-center shadow p-3 bg-body rounded">
                    <p><img className="img-fluid" src="img/banner2.jpg" alt="rappi-peddidosYa" /></p>
                    <p><a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-success">VER MÁS</a></p>
                </div>
            </div>
        </div>
    )
}

export default Banners;