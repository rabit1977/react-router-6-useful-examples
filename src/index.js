import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* nested route */}
        <Route path='/' element={<App />}>
          <Route path='expenses' element={<Expenses />} />
          <Route path='invoices' element={<Invoices />} >
          <Route
            index
            element={
              <main className='p-4'>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=':invoiceId' element={<Invoice />} />
        </Route>
        <Route
          path='*' // mathces only when no other routes do match
          element={
            <main className='p-4'>
              <p>There's nothing here</p>
            </main>
          }
        />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
