import { FC } from "react"
import IShop from "../../types"

const MainTableItem:FC<IShop> = (props) =>{
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.openTime}</td>
            <td>{props.closeTime}</td>
            <td>{props.deliveryDistance}</td>
            <td>{props.isSpecial? "yes" : "no"}</td>
        </tr>
    )
}

export default MainTableItem