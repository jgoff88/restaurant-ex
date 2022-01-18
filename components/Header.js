import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  return (
    <header className=' drop-shadow-md flex flex-row items-center bg-white text-accent text-lg'>
      <nav className='container mx-auto my-auto flex flex-row items-center justify-between p-3 border-b-2 border-gray-100 py-6  md:space-x-10 '>
        <div className=''>
          <a href='#'>
            <span className='sr-only'>Workflow</span>
            <img
              className=' rounded h-8
            '
              src='good2.png'
              alt=''
            />
          </a>
        </div>

        <div className='invisible md:visible lg:visible xl:visible 2xl:visible'>
          <ul className='flex flex-row space-x-4 justify-between justify-items-start '>
            <li>
              {" "}
              <Link href='/'>
                <a
                  href='/'
                  className=' content-center no-underline hover:underline shadow-md'
                >
                  <h3>Home</h3>
                </a>
              </Link>
            </li>
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
        <button className='rounded shadow-md bg-secondary text-gray-100 px-3 py-2 invisible md:visible lg:visible xl:visible 2xl:visible no-underline hover:underline decoration-sky-500'>
          <h3>Order Here!</h3>
        </button>
      </nav>
      <BurgerMenu></BurgerMenu>
    </header>
  );
}
