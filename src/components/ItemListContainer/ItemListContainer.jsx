
import { useEffect, useState } from "react";
import { burgers } from "../../assets/burgers";
import { customPromise } from "../../assets/customPromise";
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = () =>{

    const [listBurgers, setListBurgers] = useState ([])
    const [Loader, setLoader] = useState(true)

    useEffect(() => {
        customPromise(burgers)
            .then(res => {
                setLoader(false)
                setListBurgers(res)
            })
    }, [])

    return(
        <div>
            <ItemList listBurgers = {listBurgers} />
        </div>
    )
}

export { ItemListContainer } 