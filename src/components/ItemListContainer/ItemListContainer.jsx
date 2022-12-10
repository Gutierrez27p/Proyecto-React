import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { burgers } from "../../assets/burgers";
import ItemCount from "../ItemCount/ItemCount";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () =>{

    const [items, setItems] = useState ([])
    // const [Loader, setLoader] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const customPromise = new Promise((res, rej) => {
                setTimeout(() => {
                    res(id ? burgers.filter ( item => item.id === id ) : burgers);
                }, 2000);
        });

        customPromise.then((data) => {
            setItems(data);
        })
    }, [id]);

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center">
                        <ItemList items = {items} />
                    </div>
                </div>
            </div>
            <ItemDetailContainer />
            <ItemCount stock={10} />
        </div>
    )
}