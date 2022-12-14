import { Link } from "react-router-dom"

export const Item = ({ item }) => {

    return (
        <div className="col-md-4" >
            <Link to={"item/" + item.id} className="text-decoration-none text-black">
                <div className="card text-center">
                    <img src={item.image} className="card-img-top" alt={item.name} />
                        <div className="card-body">
                            <p className="card-text">{item.name}</p>
                        </div>
                </div>
            </Link>
        </div>
    )
}