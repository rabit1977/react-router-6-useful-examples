import React from 'react';
import { getInvoices } from '../data';
import { Outlet, useSearchParams } from 'react-router-dom';
import QueryNavLink from '../QueryNavLink';

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });

  return (
    <div className='flex w-2/3 m-auto'>
      <nav className='block  flex-1 border-r-4 border-red-500 '>
        <div className='mt-10'>
          <input
            className='border-2 border-slate-600 rounded-md p-2 outline-none'
            placeholder='search something'
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
          {invoices
            .filter((invoice) => {
              let filter = searchParams.get('filter');
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((invoice) => (
              <QueryNavLink
                key={invoice.number}
                to={`/invoices/${invoice.number}`}
              >
                <button
                  className='flex font-bold mt-4 
            text-lg transition duration-150 hover:bg-slate-200 w-60 mb-1 p-2'
                >
                  {invoice.name}
                </button>
              </QueryNavLink>
            ))}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
