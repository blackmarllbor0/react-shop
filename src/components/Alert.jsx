import { useEffect } from "react";

export const Alert = ({name = '', closeAlert = Function.prototype}) => {
    useEffect(() => {
        const timerID = setTimeout(closeAlert, 3000);

        return () => clearTimeout(timerID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);
    
    return (
        <div id="toast-container">
            <div className="toast">
                {name} добавлен в корзину
            </div>
        </div>
    );
};