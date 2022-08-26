import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='h-screen w-full mx-4 '>
      <Link
        to='/'
        className='text-6xl pt-8 pb-10  font-semibold w-screen flex justify-center'
      >
        Bookkeeper!
      </Link>
      <nav className='border-b-4 border-red-500 pb-4 text-2xl font-semibold  flex justify-around'>
        <Link
          className='hover:bg-slate-100 px-2 transition duration-75'
          to='/invoices'
        >
          Invoices
        </Link>
        <Link
          className='hover:bg-slate-100 px-2 transition duration-75'
          to='/expenses'
        >
          Expenses
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
