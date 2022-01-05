import Link from "next/link";

export default function Header() {
  return (
    <header className=''>
      <nav className='flex flex-row justify-between space-y-4 '>
        <div>
          {" "}
          <Link href='/' className=''>
            <a href='/'>Restraunt</a>
          </Link>
        </div>
        <div className=''>
          <ul className='flex  flex-row space-x-4 justify-between justify-items-start'>
            <li className='justify-around'>
              {" "}
              <Link href='/about' className='justify-items-start'>
                <a>About</a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href='/menu' className='justify-items-start'>
                <a>Menu</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className=''>
          <h1>Order Here!</h1>
        </div>
      </nav>
    </header>
  );
}
