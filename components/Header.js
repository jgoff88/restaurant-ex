import Link from "next/link";

export default function Header() {
  return (
    <header className=' drop-shadow-md bg-white text-gray-600 text-lg'>
      <nav className='container mx-auto my-auto flex flex-row items-center justify-between p-3 text-secondary '>
        <div className='place-content-center'>
          {" "}
          <Link href='/'>
            <a
              href='/'
              className='content-center no-underline hover:underline shadow-md'
            >
              <h3>Restaraunt</h3>
            </a>
          </Link>
        </div>
        <div className=''>
          <ul className='flex flex-row space-x-4 justify-between justify-items-start '>
            <li className='justify-around'>
              {" "}
              <Link href='/about'>
                <a className='no-underline hover:underline  '>
                  <h3>About</h3>
                </a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href='/menu'>
                <a className='no-underline hover:underline '>
                  <h3>Menu</h3>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='no-underline hover:underline decoration-sky-500'>
          <h3>Order Here!</h3>
        </div>
      </nav>
    </header>
  );
}
