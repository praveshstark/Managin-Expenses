import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  //deletetransection
  const deleteTransaction=(id)=> {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

   //addtransection
  const addTransaction=(transaction)=> {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
  <GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}> 
    {children}
  </GlobalContext.Provider>);
}