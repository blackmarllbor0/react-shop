import { useSelector } from "react-redux";

import { GoodsItem } from "./GoodsItem";

export const GoodsList = () => {
    const {goods} = useSelector(state => state.index);

    if (!goods.length) return <h3> Nothing here </h3>
    
    return (
        <div className="goods">
            { goods.map(item => <GoodsItem key={item.mainId} {...item} />) }
        </div>
    );
};