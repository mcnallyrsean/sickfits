import Link from 'next/link';
const Nav = () => (
  <div>
    <nav>
      <Link href="/">
        <a>Go Home</a>
      </Link>
      <Link href="/sell">
        <a>Sell!</a>
      </Link>
    </nav>
  </div>
);

export default Nav;
