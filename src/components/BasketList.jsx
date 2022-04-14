import { useDispatch, useSelector } from "react-redux";

import { handleBasketShow } from '../reducer/index';
import { BasketItem } from "./BasketItem";

export const BasketList = () => {
    const { order } = useSelector(state => state.index)
    const dispatch = useDispatch();
    
    const totalPrice = order.reduce((sum, el) => sum + el.price * el.quantity, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active cyan darken-2"> Корзина </li>
            {
                order.length ? order.map(item => <BasketItem key={item.mainId} {...item} />) 
                : <li className="collection-item"> Корзина пуста </li>
            }
            <li className="collection-item active cyan darken-2"> Общая стоимость: {totalPrice} руб. </li>
            <li className="collection-item active cyan darken-2">
                <button className="btn btn-small cyan"> Оформить </button>
            </li>
            <i className="material-icons basket-close" onClick={() => dispatch(handleBasketShow())}> close </i>
        </ul>
    );
};