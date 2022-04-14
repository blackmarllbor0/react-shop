import { useDispatch } from 'react-redux';

import { removeFromBasket, incQuantity, decQuantity } from '../reducer/index';

export const BasketItem = ({ mainId, displayName, price,  quantity }) => {
    const dispatch = useDispatch();
    return (
        <ul className="collection">
            <li className="collection-item"> 
                {displayName} x 
                <i 
                    className="material-icons  basket-quan" 
                    onClick={() => dispatch(decQuantity(mainId))}
                >
                remove
                </i> 
                {quantity}
                <i 
                    className="material-icons basket-quan" 
                    onClick={() => dispatch(incQuantity(mainId))}
                >
                add
                </i> = {price.finalPrice} руб.
                <span 
                    className="scondary-content" 
                    onClick={() => dispatch(removeFromBasket(mainId))}
                >
                    <i className="material-icons basket-delete"> close </i>
                </span>
            </li>
        </ul>
    );
};