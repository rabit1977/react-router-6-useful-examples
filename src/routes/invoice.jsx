import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { deleteInvoice, getInvoice } from '../data';

export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let location = useLocation();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <main className='w-1/4 text-lg mt-8'>
      <div className='space-y-3 divide-y-2 divide-solid divide-slate-300'>
        <h2>Total Due: {invoice.amount} </h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.condition}</p>
        <p>
          <button
            className='border-2 w-full mt-6 shadow-md text-black/70 font-semibold tracking-wide hover:bg-red-600 hover:text-white text-xl hover:ring-2 ring-black/50 px-4 py-1 transition duration-200 rounded-full'
            onClick={() => {
              deleteInvoice(invoice.number);
              navigate('/invoices', +location.search);
            }}
          >
            Delete
          </button>
        </p>
      </div>
    </main>
  );
}
