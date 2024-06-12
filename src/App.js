import React, { useState } from 'react';
import './App.css';

function App() {
  const [expense,setExpense]=useState('');
  const [amount,setAmount]=useState(0);
  const [expenseslist,setExpensesList]=useState([]);
  const handleClick=()=>{
      if(!expense || !amount)return;
      else {
        const newExpense={
          id:Date.now(),
          title:expense,
          amount:amount,
        }
        setExpensesList([...expenseslist,newExpense]);
        setExpense('');
        setAmount(0);
      }
  }

  const handleDelete=(id)=>{
    setExpensesList(expenseslist.filter((item)=>item.id!==id))
  }
  return (
    <div className='container'>
      <h2>Expensse Tracker</h2>
      <div>
        <input type="text" placeholder='Expense' value={expense} onChange={(e)=>setExpense(e.target.value)}/>
        <input type="number" placeholder='Amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <button className='add-expense' onClick={handleClick}>Add Expense</button>
      </div>
      <div>
        <ul  className="expenses-list">
          {
            expenseslist.map((item)=>(
              <li key={item.id}>
                <span>{item.title}</span>
                <span>     </span>
                <span>{item.amount}</span>
                <button className='delete' onClick={()=>handleDelete(item.id)}>delete</button>
              </li>
              
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
