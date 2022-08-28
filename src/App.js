import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='h-screen bg-slate-50'>
      <Link
        to='/'
        className='text-6xl pt-8 pb-10 text-red-600 font-semibold flex justify-center'
      >
        Bookkeeper!
      </Link>
      <nav className='w-2/3 text-3xl font-semibold/80 flex justify-around m-auto'>
        <Link
          className='hover:text-red-700/90  tracking-wide font-semibold px-5 py-2 flex w-max-content justify-center transition duration-150  hover:shadow-sm'
          to='/invoices'
        >
          Invoices
        </Link>
        <Link
          className='hover:text-red-700/90  tracking-wide font-semibold px-5 py-2 flex w-max-content justify-center transition duration-150  hover:shadow-sm'
          to='/expenses'
        >
          Expenses
        </Link>
      </nav>
      <hr className='h-3 bg-red-600 shadow-lg' />
      <Outlet />
    </div>
  );
}

export default App;
