import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import array  from '../../assets/array.json'
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () =>{

    const [items, setItems] = useState ([])
    // const [Loader, setLoader] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const customPromise = new Promise((res, rej) => {
                setTimeout(() => {
                    res( id ? array.filter (item  => item.category === id) : array );
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
                            <ItemList items={items} />
                    </div>
                </div>
            </div>
        </div>
    )
}