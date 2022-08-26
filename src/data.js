let invoices = [
  {
    name: 'Santa Monica',
    number: 1995,
    amount: '$10,800',
    condition: '12/05/1995',
  },
  {
    name: 'Stankonia',
    number: 2000,
    amount: '$8,000',
    due: '10/31/2000',
  },
  {
    name: 'Ocean Avenue',
    number: 2003,
    amount: '$9,500',
    due: '07/22/2003',
  },
  {
    name: 'Tubthumper',
    number: 1997,
    amount: '$14,000',
    due: '09/01/1997',
  },
  {
    name: 'Wide Open Spaces',
    number: 1998,
    amount: '$4,600',
    due: '01/27/1998',
  },
];
let expenses = [
  {
    name: 'Food',
    madeIn: 1995,
    amount: '$10',
    condition: 'fresh',
  },
  {
    name: 'Cars',
    madeIn: 2000,
    amount: '$2,000',
    condition: 'used',
  },
  {
    name: 'Books',
    madeIn: 2003,
    amount: '$19,5',
    condition: 'old',
  },
  {
    name: 'Mobile Phone',
    madeIn: 2022,
    amount: '$1,4000',
    condition: 'newes',
  },
  {
    name: 'Laptop',
    madeIn: 2021,
    amount: '$1,600',
    condition: 'Almost new',
  },
];

export function getInvoices() {
  return invoices;
}
export function getExpenses() {
  return expenses;
}
export function getInvoice(number) {
  return invoices.find((invoice) => invoice.number === number);
}
export function deleteInvoice(number) {
  invoices = invoices.filter((invoice) => invoice.number !== number);
}

export function getExpense(number) {
  return expenses.find((expense) => expense.madeIn === number);
}
export function deleteExpense(number) {
  expenses = expenses.filter((expense) => expense.madeIn !== number);
}
