import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import array from '../../assets/array.json'
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        const customPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res(array.find ( item => item.id === parseInt(id)));
            }, 2000);
        });
        customPromise.then((data) => {
            setItem(data);
        })
    }, [id])
    
    console.log(item)

    return (
        <div className="container">
            <ItemDetail item={item} /> 
        </div>
    )
}