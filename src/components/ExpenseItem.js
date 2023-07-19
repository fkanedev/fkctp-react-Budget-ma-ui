import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { IoMdAddCircle } from 'react-icons/io';
import { IoMdRemoveCircle } from 'react-icons/io';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><IoMdAddCircle size='1.5em' style={{ color: 'green'}} onClick={event=> increaseAllocation(props.name)}></IoMdAddCircle></td>
        <td><IoMdRemoveCircle size='1.5em' style={{ color: '#af2419'}} onClick={event=> decreaseAllocation(props.name)}></IoMdRemoveCircle></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;
