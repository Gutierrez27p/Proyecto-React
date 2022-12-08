import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { burgers } from "../../assets/burgers"
import { ItemDetail } from "../ItemDetail/ItemDetail"



export const ItemDetailContainer = () => {

    const [listBurgers, setBookList] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const info = new Promise((resolve) => {
        setTimeout(() => {
            resolve(burgers.find(burger => burger.id ===id))
        }, 1000)
    }) 

    info.then((info) => {
        setBookList(info)
    })
    }, [id])

    return (
        <div>
            <ItemDetail listBurger={listBurgers} />
        </div>
    )

}
