import React, { useContext, /*useState*/ } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {dispatch, budget } = useContext(AppContext);
    const updateBudget = (newBudget) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(newBudget)
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    step="10"
                    //style={{ marginLeft: '2rem' , size: 10}}
                    style={{size: 10}}
                    onChange={(event) => updateBudget(event.target.value)}>
                    </input>
            </span>    
        </div>
    );
};
export default Budget;
