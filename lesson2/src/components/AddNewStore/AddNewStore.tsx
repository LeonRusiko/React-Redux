const AddNewStore = () =>{
    const showData: any = (data: Object, e: any) => {
        e.target.preventDefault()
    }
    return(
        <div>
            <h1>Add new store</h1>
            <form action="" onClick={showData}>
                <label>Name: <input type="text"/></label> <br />
                <label>Open Time: <input type="time"/></label> <br />
                <label>Close Time </label>
                <input type="time"/> <br />
                <label>Delivery distance</label>
                <input type="number"/> <br />
                <label>Special</label>
                <input type="checkbox"/> <br />
                <input type="submit" value="create" />
            </form>
        </div>
    )
}

export default AddNewStore