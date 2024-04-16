import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">Logo</Link>
        <nav>
          <Link href="/">Головна</Link>
          <Link href="/about">Про нас</Link>
          <Link href="/service">Послуги</Link>
          <Link href="/projects">Портфоліо</Link>

          <Link href="/contacts">Контакти</Link>
        </nav>
        <Link href="tel:+380502003309">+380502003309</Link>
      </div>
    </header>
  );
};

export default Header;
