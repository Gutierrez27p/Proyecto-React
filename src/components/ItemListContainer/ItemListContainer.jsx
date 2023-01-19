import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../Carrousel/Carrousel";
import { ItemList } from "../ItemList/ItemList";
import { Loader } from "../Loader";

export const ItemListContainer = () =>{

    const [items, setItems] = useState ([])
    const [loader, setLoader] = useState(true)
    const {id} = useParams()

    // useEffect(() => {
    //     const customPromise = new Promise((res, rej) => {
    //             setTimeout(() => {
    //                 res( id ? array.filter (item  => item.category === id) : array );
    //             }, 2000);
    //     });
    //     customPromise.then((data) => {
    //         setItems(data);
    //     })
    // }, [id]);

    //Metodo para cargar mi collection 1 sola vez
    // useEffect(() => { 
    //     const db = getFirestore();
    //     const productCollection = collection(db, "Productos")
    //     array.forEach((item) => {
    //         addDoc(productCollection, {name:item.name, description:item.description, image:item.image, price:item.price, stock:item.stock, category:item.category});
    //     })
    // }, []);

    useEffect(() => {
        const db = getFirestore();
        const productCollection = collection(db, "Productos");
        const q = id ? query(productCollection, where("category", "==", id)) : productCollection; //  filtro por id
        //const q = query(productCollection, where("price", "<", 1000), limit (3)); //  consulta de filtrado (precio)
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ));
            setLoader(false);
        });
    }, [id]);
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center">
                            <Carrousel />
                            {loader ? <Loader /> : <ItemList items={items} />}
                    </div>
                </div>
            </div>
        </div>
    )
}