import { useEffect } from "react";
import { useState } from "react";
import { burgers } from "../../assets/burgers";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const customPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res(burgers.find ( item => item.id === 1 ));
            }, 2000);
        });

        customPromise.then((data) => {
            setItem(data);
        })
    });

    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
}