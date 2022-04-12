export const BasketItem = ({
    
    mainId,
    displayName,
    price, 
    quantity, 
    removeFromBasket = Function.prototype,
    addQuantity = Function.prototype
}) => {
    return (
        <ul className="collection">
            <li className="collection-item"> 
            {displayName} x <i className="material-icons  basket-quan"  onClick={() => addQuantity(mainId, -1)}>remove</i> {quantity} <i className="material-icons basket-quan" onClick={() => addQuantity(mainId, 1)}>add</i> = {price.finalPrice} руб.
            <span className="scondary-content" onClick={() => removeFromBasket(mainId)}>
                <i className="material-icons basket-delete"> close </i>
            </span>
            </li>
        </ul>
    );
};