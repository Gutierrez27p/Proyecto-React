import { useParams, Link } from "react-router-dom";

const ThankYou = () => {
    const {id} = useParams();

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div className="alert alert-success w-80" role="alert">
                        <h1>Gracias por tu pedido!</h1>
                        <p>Tu Número de Orden es: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn btn-success">Volver a la Página Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default ThankYou;