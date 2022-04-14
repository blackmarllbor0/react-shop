import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

import { closeAlert } from '../reducer';

export const Alert = () => {
    const { alertName } = useSelector(state => state.index);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const timerID = setTimeout(dispatch(closeAlert), 3000);

        return () => clearTimeout(timerID);
    }, []);
    
    return (
        <div id="toast-container">
            <div className="toast"> {alertName} добавлен в корзину </div>
        </div>
    );
};