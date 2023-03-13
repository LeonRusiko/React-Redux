import { FC } from "react"
import MainTableItem from "../MainTableItem/MainTableItem"
import IShop from "../../types"
import "./MainTable.css"

interface IShopList {
    stores: IShop[]
}

const MainTable:FC<IShopList> = ({stores}) =>{
    return(
        <div>
            <h1>Shops</h1>
            <table>
            <thead>
                <tr>
                    <th>Shop Name</th>
                    <th>Open Time</th>
                    <th>Close Time</th>
                    <th>Delivery Time</th>
                    <th>Special?</th>
                </tr>
            </thead>
            <tbody>
                {stores.map(store => <MainTableItem key={store.id} {...store} />)}
            </tbody>
        </table>
        </div>
    )
}

export default MainTable