import { useDispatch, useSelector } from "react-redux";

import { handleBasketShow } from "../reducer/index";

export const Cart = () => {
    const { order } = useSelector(state => state.index);
    const dispatch = useDispatch();
    return (
        <div 
            className="cart blue darken-1 white-text"
            onClick={() => dispatch(handleBasketShow())}
        >
            <i className="material-icons"> shopping_cart </i>
            <span className="cart-quantity"> {order.length} </span>
        </div>
    );
};