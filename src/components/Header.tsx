import Link from "next/link";
import s from "@/sass/layouts/header.module.scss";
import Logo from "./ Logo";

const Header = () => {
  return (
    <header>
      <div className={`${s.container} ${s.container__header} `}>
        <Link href="/">
          <Logo />
        </Link>
        <nav className={`${s.nav}  `}>
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
