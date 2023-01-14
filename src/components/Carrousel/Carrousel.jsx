const Carrousel = () => {
    return(
        <div className="container">
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

export default Carrousel;