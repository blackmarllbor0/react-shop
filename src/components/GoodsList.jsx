import { GoodsItem } from "./GoodsItem";

export const GoodsList = ({ goods = [], addToBascket = Function.prototype }) => {
    if (!goods.length) {
        return <h3> Nothing here </h3>
    }
    return (
        <div className="goods">
            {
                goods.map(item => (
                    <GoodsItem 
                        key={item.mainId} 
                        addToBascket={addToBascket} 
                        {...item} 
                    />
                ))
            }
        </div>
    );
};