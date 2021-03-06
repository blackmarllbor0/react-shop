import { useDispatch } from 'react-redux';
import { addToBasket } from '../reducer';

export const GoodsItem = ({ mainId, displayName, displayDescription,  price, displayAssets }) => {
    const dispatch = useDispatch();
    return (
        <div className="card">
            <div className="card-image">
                <img src={displayAssets[0].full_background} alt={displayName} />
            </div>

            <div className="card-content">
                <span className="card-title"> {displayName} </span>
                <p> {displayDescription} </p>
            </div>

            <div className="card-action">
                <button 
                    className="btn cyan lighten-1" 
                    onClick={() => dispatch(addToBasket({
                        mainId,
                        displayName,
                        price: price.finalPrice
                    }))}
                > 
                        Купить
                </button>
                <span className="right" style={{fontSize: '1.8rem'}}> {price.finalPrice} руб. </span>
            </div>
      </div>
    );
};