import { BasketItem } from "./BasketItem";

export const BasketList = ({ 
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    addQuantity = Function.prototype
}) => {
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0)

    return (
        <ul className="collection basket-list">
            <li className="collection-item active cyan darken-2"> Корзина </li>
            {
                order.length ? order.map(item => (
                    <BasketItem 
                        handleBasketShow={handleBasketShow}
                        removeFromBasket={removeFromBasket}
                        addQuantity={addQuantity}
                        key={item.mainId} 
                        {...item} 
                    />
                )) : <li className="collection-item"> Корзина пуста </li>
            }
            <li className="collection-item active cyan darken-2">
                Общая стоимость: {totalPrice} руб.
            </li>
            <li className="collection-item active cyan darken-2">
                <button className="btn btn-small cyan"> Оформить </button>
            </li>
            <i className="material-icons basket-close" onClick={handleBasketShow}> close </i>
        </ul>
    );
};