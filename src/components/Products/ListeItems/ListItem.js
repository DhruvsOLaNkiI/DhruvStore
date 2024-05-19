import { Fragment, useState } from "react"
import Modal from "../../UI/Modal"

const ListItem = ({data, onAdd, onRemove}) =>{

const [message, setMessage] = useState("not at cart")
 const [counter, setCounter] = useState(0)
 const [Showmodal,setShowModal]=useState(false)

    const increaseCounterByOne = event => {
        event.stopPropagation()
        onAdd(data.id)
        // Add increasing logic
        setCounter(counter + 1);
    }

    const descreaseCounterByOne = event => {
        event.stopPropagation()
        // Add descreasing logic
        if(counter <= 0) {
            return;
        }
        if(counter == 1){
            onRemove(data.id);
        }
        setCounter(counter - 1);
    }

// const handleClick = () =>{
//         setMessage("Added to cart")
//             console.log("clicked",message)
//     }
// const data is means that it make the seprate area to fill detail about the product 
// advantage it not filled with html code  it only connect with this in html code by typing this = {data.discountedPrice} they creact a chanel connected to this detail in data have type price so theyshow 
// data->price->:250

const handleModal=()=>{
    setShowModal(previousState=>!previousState)
}

    return (
    <Fragment>
    <div onClick={handleModal} classname={"item cart"}> 

<img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title} />

    {/* <img className={"img-fluid"} src={"/assets/" + data.thumbnail} alt="1some title" /> */}


 {/* This is block which contain price and Deetails  */ }
    <div className="item-card_iformation">
        <div className="pricing">
            <span>${data.discountedPrice}</span>
        <small>
            <strike>${data.Price}</strike>
        </small>
        </div>
        <div className="title">
            <h3>{data.title}</h3>
        </div>
    </div>
    {/* <button onClick={() => updateItemTitle(data.id)}>Update the title</button>
        <small>{message}</small> */}
    {
        
        counter <1 ?
         
        <button className="cart-add" onClick={increaseCounterByOne}>
 
    <span>Add To cart   </span>   
    </button> 
    :
    <div className={"cart-addon"}>
                <button onClick={descreaseCounterByOne}><span>-</span></button>  
                <span className={"counter"}>{counter}</span>
                <button onClick={increaseCounterByOne}><span>+</span></button>
            </div>
    }
    {/* <button className="cart-add" onClick={handleClick}>
 
    <span>Add To cart   </span>   
    </button> */}
    
    </div>
   {
    Showmodal && <Modal onClose={handleModal}>
       <div className="item-card_modal">
        <div className="img-wrap">
        <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title} />
        </div>
        <div className="meta">
            <h3>{data.title}</h3>
                <div className="pricing">
                <span>${data.discountedPrice}</span>
                <small>
                <strike>${data.Price}</strike>
                </small>
                </div>
             <p>{data.description}</p>   
        </div>

        {
        
        counter <1 ?
         
        <button className="cart-add card-add__modal" onClick={increaseCounterByOne}>
 
    <span>Add To cart   </span>   
    </button> 
    :
    <div className={"cart-addon card-addon__modal"}>
                <button onClick={descreaseCounterByOne}><span>-</span></button>  
                <span className={"counter"}>{counter}</span>
                <button onClick={increaseCounterByOne}><span>+</span></button>
            </div>
    }
       </div>
   </Modal>
   }
    </Fragment>
)
}

export default ListItem;

   {/* hum bus point kr rhay h handleclick event ko  */}