import { Item } from "../Item/Item";


export const ItemList = ({items}) => {

    console.log("Items");
    console.log(items);

    return(
        <div className="row">
            {
                items.map(item => <Item key={item.id} item={item} />)
            }
        </div>
    )
}
