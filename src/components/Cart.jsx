import Modal from "./UI/Modal.jsx";
import {useContext} from "react";
import {currenyFormatter} from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";
import userProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart() {
    const cartContext = useContext(CartContext);
    const userProgressCtx = useContext(userProgressContext);

    function handleClose() {
        userProgressCtx.hideCart();
    }

    const cartTotal = cartContext.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price,0);
    return <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
        <h2>Your Cart</h2>
        <ul>
            {cartContext.items.map(item => <CartItem
                item={item} key={item.id}
                onDecrease={() => cartContext.removeItem(item.id)}
                onIncrease={() => cartContext.addItem(item)}
            >

            </CartItem>)}
        </ul>
        <p className="cart-total">{currenyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={handleClose}>Close</Button>
            {cartContext.items.length > 0 && <Button>Go to Checkout</Button>}
        </p>
    </Modal>
}