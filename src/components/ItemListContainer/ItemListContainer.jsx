
import { useEffect, useState } from "react";
import { burgers } from "../../assets/burgers";
import ItemCount from "../ItemCount/ItemCount";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () =>{

    const [items, setItems] = useState ([])
    const [Loader, setLoader] = useState(true)

    useEffect(() => {
        const customPromise = new Promise((res, rej) => {
                setTimeout(() => {
                    res(burgers);
                }, 2000);
        });

        customPromise.then((data) => {
            setItems(data);
        })
    }, []);

    return(
        <div className="container">
            {/* <ItemList items = {items} /> */}
            <ItemDetailContainer />
            <ItemCount stock={10}/>
        </div>
    )
}