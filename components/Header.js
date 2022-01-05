import Link from "next/link";

export default function Header() {
  return (
    <header className=' text-gray-600  border-b-4 '>
      <nav className='container mx-auto my-auto flex flex-row items-center justify-between p-3 '>
        <div className='place-content-center'>
          {" "}
          <Link href='/'>
            <a href='/' className='content-center underline decoration-sky-500'>
              Restaraunt
            </a>
          </Link>
        </div>
        <div className=''>
          <ul className='flex  flex-row space-x-4 justify-between justify-items-start '>
            <li className='justify-around'>
              {" "}
              <Link href='/about'>
                <a className='underline decoration-sky-500 '>About</a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href='/menu'>
                <a className=' underline decoration-sky-500 '>Menu</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='underline decoration-sky-500'>
          <h1>Order Here!</h1>
        </div>
      </nav>
    </header>
  );
}
