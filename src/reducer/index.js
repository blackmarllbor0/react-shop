import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'loading',
    goods: [],
    order: [],
    isBasketShow: false,
    alertName: ''
};

const slice = createSlice({
    name: 'index',
    initialState,
    reducers: {
        fetchedGoods: (state, action) => {
            state.goods = action.payload;
            state.status = 'loaded';
        },
        addToBasket: (state, action) => {
            const itemIndex = state.order.findIndex(item => item.mainId === action.payload.mainId);
            if (itemIndex < 0) {
                state.order = [...state.order, { ...action.payload, quantity: 1 }];
            } else {
                const newOrder = state.order.map((item, i) => {
                    if (i === itemIndex) 
                    return { ...item, quantity: item.quantity + 1 }
                    else return item;
                })
                state.order = newOrder
            }
            state.alertName = action.payload.displayName
        },
        removeFromBasket: (state, action) => {
            state.order = state.order.filter(item => item.mainId !== action.payload)
        },
        handleBasketShow: state => {
            state.isBasketShow = !state.isBasketShow;
        },
        closeAlert: state => {
            state.alertName = '';
        },
        incQuantity: (state, action) => {
            state.order = state.order.map(item => {
                if (item.mainId === action.payload) 
                return {
                    ...item, 
                    quantity: item.quantity + 1
                };
                else return item;
            });
        },
        decQuantity: (state, action) => {
            const newItem = state.order.map(item => {
                if (item.mainId === action.payload) return {
                    ...item, 
                    quantity: item.quantity <= 0 ? 0  : item.quantity - 1
                };
                else return item;
            });
            state.order = newItem;
        }
    }
});

const { actions, reducer } = slice;

export default reducer;
export const { 
    fetchedGoods,
    addToBasket,
    removeFromBasket,
    handleBasketShow,
    closeAlert,
    incQuantity,
    decQuantity
} = actions;