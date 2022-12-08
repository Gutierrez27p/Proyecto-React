
export const Item = ({ burgers }) => {

    const {image, name, price} = burgers

    return(
        <div className="burgers card">
            <img src={image} alt={name} width = "280px" />
            <div>
                <h3 className="titulo">{name}</h3>
                <h4 className="precio">${price}</h4>
                <h4 className="precio"><button className="btn btn-success">Ver detalles</button></h4>
            </div>
        </div>
    )
}