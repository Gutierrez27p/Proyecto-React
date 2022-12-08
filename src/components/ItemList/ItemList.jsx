import { burgers } from "../../assets/burgers"
import { Item } from "../Item/Item"


export const ItemList = ({ listBurgers }) => {

    return(
        <div className="list-burgers">
            {listBurgers.map(burgers => <Item key={burgers.id} burgers = {burgers} />)}
        </div>
    )
}
