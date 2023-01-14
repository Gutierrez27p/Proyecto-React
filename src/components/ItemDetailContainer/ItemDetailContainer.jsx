import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import array from '../../assets/array.json'
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { id } = useParams();

    // useEffect(() => {
    //     const customPromise = new Promise((res, rej) => {
    //         setTimeout(() => {
    //             res(array.find ( item => item.id === parseInt(id)));
    //         }, 1000);
    //     });
    //     customPromise.then((data) => {
    //         setItem(data);
    //     })
    // }, [id])

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "Productos", id);
        getDoc(item).then((snapShot) => {
            if(snapShot.exists()){
                setItem({id:snapShot.id, ...snapShot.data()});
            }else{
                console.log("El producto no existe.")
            }
        });
    }, []);
    
    return (
        <div className="container">
            <ItemDetail item={item} /> 
        </div>
    )
}
