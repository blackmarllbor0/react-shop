export const Cart = ({ quantity = 0, handleBasketShow = Function.prototype }) => {
    return (
        <div 
            className="cart blue darken-1 white-text"
            onClick={handleBasketShow}
        >
            <i className="material-icons"> shopping_cart </i>
            <span className="cart-quantity"> {quantity} </span>
        </div>
    );
};