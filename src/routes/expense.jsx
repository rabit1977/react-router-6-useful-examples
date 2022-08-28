import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { deleteInvoice, getExpense } from '../data';

export default function Expense() {
  let navigate = useNavigate();
  let params = useParams();
  let location = useLocation();
  let expense = getExpense(parseInt(params.expenseId, 10));

  return (
    <main className='w-1/4 text-lg mt-8'>
      <ul className='space-y-3 divide-y-2 divide-solid divide-slate-300'>
        <li>Items condition: {expense.amount} </li>
        <li>
          {expense.name}: {expense.madeIn}
        </li>
        <li>Due Date: {expense.condition}</li>
        <li>
          <button
            className='border-2 w-full mt-6 shadow-md text-black/70 font-semibold tracking-wide hover:bg-red-600 hover:text-white text-xl hover:ring-2 ring-black/50 px-4 py-1 transition duration-200 rounded-full'
            onClick={() => {
              deleteInvoice(expense.madeIn);
              navigate('/expenses', +location.search);
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    </main>
  );
}
