import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { deleteInvoice, getInvoice } from '../data';

export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let location = useLocation();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <main className='flex flex-1 flex-col items-end text-lg mt-8 '>
      <div className='space-y-3 '>
        <h2>Total Due: {invoice.amount} </h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.condition}</p>
        <p>
          <button
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
