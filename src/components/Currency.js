import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
import '../Currency.css';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    //const [name, setName] = useState("");
    const all_currencies = {
        "$":"$ Dollar",
        "£":"£ Pound",
        "€":"€ Euro",
        "₹":"₹ Ruppee"
    };
    
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
                    <span>Currency ({all_currencies[currency]}) </span>
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" onclick={(event) => updateCurrency(event.target.value)}>
                    <li name="$ Dollar" value="$" >$ Dollar</li>
                    <li name="£ Pound" value="£" >£ Pound</li>
                    <li name="€ Euro" value="€" >€ Euro</li>
                    <li name="₹ Ruppee" value="₹" >₹ Ruppee</li>
                </ul>
            </div>
        </div>
    );
};
export default Currency;
