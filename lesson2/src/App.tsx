import { AddNewStore, Filter, MainTable } from "./components"

const shops = [
    {
        id: 1,
        name: "Wildberries",
        openTime: 8.00,
        closeTime: 22.00,
        deliveryDistance: 120,
        isSpecial: true,
    },
    {
        id: 2,
        name: "Aliexpress",
        openTime: 9.00,
        closeTime: 23.00,
        deliveryDistance: 150,
        isSpecial: false,
    },
    {
        id: 3,
        name: "Fix Price",
        openTime: 10.00,
        closeTime: 23.00,
        deliveryDistance: 80,
        isSpecial: true,
    },
  ]

const App = () =>{
    return(
        <div>
            <AddNewStore />
            <Filter />
            <MainTable stores={shops}/>
        </div>
    )
}

export default App