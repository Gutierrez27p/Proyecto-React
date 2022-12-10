import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { burgers } from "../../assets/burgers";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        const customPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res(burgers.find ( item => item.id === id ));
            }, 2000);
        });

        customPromise.then((data) => {
            setItem(data);
        })
    }, [id])

    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
}