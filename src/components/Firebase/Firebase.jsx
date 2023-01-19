import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

const Firebase = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "Productos", "zsI0Ld2sJwHDg1izRxDx");
        getDoc(item).then((snapShot) => {
            if(snapShot.exists()){
                console.log(snapShot.data());
            }else{
                console.log("El producto no existe.")
            }
        });
    }, []);

    return (
        <h1>Firebase</h1>
    )
}

export default Firebase;