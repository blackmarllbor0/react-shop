import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchedGoods } from '../reducer';
import { API_KEY, API_URL } from '../config';

import { Preloader } from '../components/Preloader';
import { GoodsList } from '../components/GoodsList';
import { Cart } from '../components/Cart';
import { BasketList } from '../components/BasketList';
import { Alert } from '../components/Alert';

export const Shop = () => {

    const { status, isBasketShow, alertName } = useSelector(state => state.index);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(API_URL, { headers: { Authorization: API_KEY }})
            .then(res => res.json())
            .then(data => dispatch(fetchedGoods((data.shop))))
    }, [dispatch]);

    return (
        <main className="container content">
            <Cart />
            { status === 'loading' ? <Preloader /> : <GoodsList /> }
            { isBasketShow && <BasketList /> }
            { alertName && <Alert /> }
        </main>
    );
};