import { Fragment, useState } from "react";
import Modal from "../UI/Modal";

const Cart = ({ count }) => {
 
    const [ Showmodal, setShowModal]= useState(false)
    const handleModal = () => {
        setShowModal(previousState =>!previousState)
    }
    return(
        <Fragment>

        <button onClick={handleModal}>
                <span data-items={count}>Cart</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                    <path d="M15 6h6m-3 -3v6" />
                </svg>
            </button>
            {
                Showmodal&&
                <Modal onClose={handleModal}>
                    <div className="checkout-modal">
                        <h2>checkout Modal</h2>
                        <div className="checkout-modal_list">
                        {
                            count > 0 ?
                            <div className="checkout-modal_list-item">                                                       
                        <div className="img-wrap">
                            <img src={"/assets/placeholder.png"} alt="Placeholder"/>
                        </div>
                        <div className="information">
                            <div>Title of the product</div>
                            <div className="pricing">
                                <span>2000</span>
                                <small>
                                    <strike>2500</strike>
                                </small>
                            </div>
                        </div>
                        <div className="cart-addon cart-addon__modal">
                            <button>-</button>
                            <span className="counter">{0}</span>
                            <button>+</button>
                        </div>
                        </div>:

                        <div className="empty-cart">Please add something in cart    </div>

                        }
                         
                        </div>
                        {
                            count > 0 &&
                            <div className="checkout-modal_footer">
                            <div className="totalAmount">
                                <h4>Total</h4>
                                <h4>2000 INR</h4>
                            </div>
                            <button>Order Now</button>
                            </div>
                        }
                    </div>
                </Modal>
            }
</Fragment>
    )
}

export default Cart;