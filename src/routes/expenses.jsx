import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { getExpenses } from '../data';
import QueryNavLink from '../QueryNavLink';

export default function Expenses() {
  let expenses = getExpenses();
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });
  return (
    <div className='flex w-2/3 justify-around m-auto'>
      <nav className='flex-col w-1/4'>
        <input
          className='border-2 border-slate-600 mt-10 w-full rounded-md p-2 outline-none hover:shadow-md'
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
        <div className='divide-y-2 divide-slate-300'>
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
                className='flex font-semibold mt-4 
                text-xl rounded-md mb-1 p-2'
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
