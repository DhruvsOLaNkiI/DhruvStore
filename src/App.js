import Products from "./components/Products/Products";
import Header from "./components/Layout/Header";
import Subheader from "./components/Layout/Subheader";
import { useState } from "react";
const App = () => {
  const [cartitems,setCArtItems]=useState(0)

  const handleAddItem = () => {
    setCArtItems(cartitems + 1)
  }
  const handleRemoveItem = () => {
    setCArtItems(cartitems - 1)
  }

  return (
   <div>
   <Header count={cartitems}/>
   <Subheader/>
   <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem}/>
   </div>
  );
  // return React.createElement('div',{},React.createElement('h1',{},'hellooooo world'))
}

export default App;
