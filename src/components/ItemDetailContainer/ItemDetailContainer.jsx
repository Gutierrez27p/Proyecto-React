import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const [loader, setLoader] = useState(true);
    const { id } = useParams();

    // useEffect(() => {
    //     const customPromise = new Promise((res, rej) => {
    //         setTimeout(() => {
    //             res(array.find ( item => item.id === parseInt(id)));
    //         }, 2000);
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
                setLoader(false);
            }else{
                console.log("El producto no existe.")
            }
        });
    }, [id]);
    
    return (
        <div className="container">
            {loader ? <Loader/> : <ItemDetail item={item} /> }
        </div>
    )
}
