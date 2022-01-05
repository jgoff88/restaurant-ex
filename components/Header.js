import Link from "next/link";

export default function Header() {
  return (
    <header className=''>
      <nav className='flex flex-row justify-between '>
        <Link className='justify-items-start' href='/'>
          <a href=''>Restraunt</a>
        </Link>
        <div className=''>02</div>
        <div className=''>03</div>
      </nav>
    </header>
  );
}
