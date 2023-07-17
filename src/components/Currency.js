import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Currency = () => {
    const { expenses, currency } = useContext(AppContext);
    const [name, setName] = useState("");
    
    const updateCurrency = (newCurrency) => {
        
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    }

    return (
        <div className='alert alert-secondary'>
            <div class="dropdown">
            <button  class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
                <span id="curr" >Currency({currency}) </span>
            <span class="caret"></span></button>
            <ul class="dropdown-menu" onclick={(event) => updateCurrency(event.target.value)}>
                <li name="$ Dollar" value="$" >header</li>
                <li name="£ Pound" value="£" >header</li>
                <li name="€ Euro" value="€" >header</li>
                <li name="₹ Ruppee" value="₹" >header</li>
            </ul>
            </div>
        </div>
    );
};
export default Currency;
