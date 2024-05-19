import {useEffect , useState } from "react";
import ListItem from "./ListeItems/ListItem"
import axios from "axios";
import Loader from "../UI/loader";

const Products = ({ onAddItem, onRemoveItem }) => {

    const [items , setItems] = useState([])
    const [loader,setloader]=useState(true)
    const [presentItem, setPresentItems] = useState([])

      useEffect(()=>{
    //  fetch('https://react-guide-2024-8d6c3-default-rtdb.firebaseio.com/items')
    //  .then(response => response.json())
    //  .then(data =>{
    //     console.log(data)})
    //     .catch(error =>{
    //         console.log(error)
    //     })
    async function fetchItems(){

    try{
        const response = await axios.get('https://react-guide-2024-8d6c3-default-rtdb.firebaseio.com/items.json')
        const data = response.data
        const transformData = data.map((item, index) => {
            return{
                ...item,
                id: index
            }
        })
        setItems(transformData)
        console.log(transformData)
    }
    catch (error){
       console.log("error:",error)
       alert("some error accurred")
    }
     finally{
        setloader(false)
    } 
    }
      fetchItems();
     },[])

     const updateItemTitle =async (itemId) =>{
        console.log(`Item with ID: ${itemId}`)
        try{
            let title = `update Title #item-${itemId}` 
            await axios.patch(`https://react-guide-2024-8d6c3-default-rtdb.firebaseio.com/items/${itemId}.json`,{
            title: title
        })
        let data = [...items]
        let index = data.findIndex(e => e.id === itemId)
        data[index][`title`]= title
    
        setItems(data)
    }
     catch(error){
        console.log("Error Updating the data! ");
     }  
     }

     const handleAddItem = id => {
        if(presentItem.indexOf(id) > -1){
            return;
        }
        setPresentItems([...presentItem, id])
        onAddItem();
     }

     const handleRemoveItem = id => {
        let index = presentItem.indexOf(id)
        if(index > -1){
            let items = [...presentItem]
            items.splice(index, 1)
            setPresentItems([...items]);
            onRemoveItem();
        }
     }
 return (
    <>
    <div className="Products-list">
         <div className="Products-list--wrapper">
            {/* <ListItem  data={items[0]}></ListItem>
            <ListItem  data ={items[1]}></ListItem> */}
            {
                items.map(item => {
                    console.log(item)
                    return(<ListItem onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item} updateItemTitle={updateItemTitle}/>)
                })
            } 
            {/* <ListItem data={item[0]}/> */}
        </div>
    </div>
{loader && <Loader/>}
</>
 )
}
export default Products;