import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { getExpenses } from '../data';
import QueryNavLink from '../QueryNavLink';

export default function Expenses() {
  let expenses = getExpenses();
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });
  return (
    <div className='flex w-2/3 m-auto'>
      <nav className='  '>
        <div className='mt-10 flex flex-col flex-1'>
          <input
            className='border-2 border-slate-600 w-60 rounded-md p-2 outline-none'
            placeholder='search some expenses'
            value={searchParams.get('filter') || ''}
            onChange={(event) => {
              let filter = event.target.value;

              if (filter) {
                setSearchParams({ filter }, { replace: true });
              } else {
                setSearchParams({}, { replace: true });
              }
            }}
          />
          {expenses
            .filter((expense) => {
              let filter = searchParams.get('filter');
              if (!filter) return true;
              let name = expense.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((expense) => (
              <QueryNavLink
                style={({ isActive }) => {
                  return {
                    display: 'block',
                    margin: '.3rem 0',
                    color: isActive ? 'red' : '',
                  };
                }}
                className='flex  font-bold mt-4 
          text-lg transition duration-150 hover:bg-slate-200 rounded-md w-60 mb-1 p-2'
                key={expense.madeIn}
                to={`/expenses/${expense.madeIn}`}
              >
                {expense.name}
              </QueryNavLink>
            ))}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
