import logoImg from '../assets/logo.jpg'
import Button from "./UI/Button.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import userProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
    const cartCtx = useContext(CartContext);
    const totalItems = cartCtx.items.reduce(
        (totalNumberOfItems, item) => {
            return totalNumberOfItems + item.quantity;
        }, 0);

    const userProgressCtx = useContext(userProgressContext);

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return <header id="main-header">
        <div id="title">
            <img src={logoImg}/>
            <h1>ReactFood</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({totalItems})</Button>
        </nav>
    </header>
}