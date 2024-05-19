import     { Fragment } from "react"
import ReactDom from "react-dom"
import { Backdrop } from "./loader"
const Modal = ({onClose, children}) =>{
    return(
        <Fragment> 
 {
    ReactDom.createPortal(
     
    <Fragment>

            <Backdrop  onClose={onClose}/>
            <div className="modal">
                       {children}
               <button type="close" onClick={onClose}>X</button>
            </div>

    </Fragment>

        ,document.getElementById("modal-root")
    )
 }
         </Fragment>
    )
}
export default Modal