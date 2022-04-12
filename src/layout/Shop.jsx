import { useEffect, useState } from 'react';

import { API_KEY, API_URL } from '../config';

import { Preloader } from '../components/Preloader';
import { GoodsList } from '../components/GoodsList';
import { Cart } from '../components/Cart';
import { BasketList } from '../components/BasketList';
import { Alert } from '../components/Alert';

export const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isbasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    useEffect(() => {
        fetch(API_URL, { headers: { Authorization: API_KEY }})
            .then(res => res.json())
            .then(data => setGoods(data.shop))
            .finally(setLoading(false))
    }, []);
    
    const addToBascet = item => {
        const itemIndex = order.findIndex(ord => ord.mainId === item.mainId);
        if (itemIndex < 0) {
            const newItem = { ...item, quantity: 1 };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((ord, i) => {
                if (i === itemIndex) 
                return { ...ord, quantity: ord.quantity + 1 }
                else return ord;
            })
            setOrder(newOrder);
        }
        setAlertName(item.displayName);
    };

    const removeFromBasket = id => setOrder(order.filter(item => item.mainId !== id));

    const handleBasketShow = () => {
        setBasketShow(!isbasketShow);
    };
    
    const addQuantity = (id, num) => {
        const newOrder = order.map(el => {
            if (el.mainId === id) return { ...el, quantity: el.quantity < 0 ? 0  : el.quantity + num };
            else return el;
        });
        setOrder(newOrder);
    };

    const closeAlert = () => setAlertName('');
    
    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {
                loading ? <Preloader /> : <GoodsList goods={goods} addToBascket={addToBascet} />
            }
            {
                isbasketShow && <BasketList 
                                    removeFromBasket={removeFromBasket} 
                                    handleBasketShow={handleBasketShow} 
                                    addQuantity={addQuantity}
                                    order={order}
                                />
            }
            {
                alertName && <Alert name={alertName} closeAlert={closeAlert} />
            }
        </main>
    );
};