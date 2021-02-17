import React from 'react';
import Expense  from './components/Expense';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList  from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

const App=()=> {
  return (
    <GlobalProvider>
       <div className="container">
        <Expense />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
