import Link from "next/link";

import logoImg from "@/assets/logo.png";
import cls from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={cls.header}>
      <Link className={cls.logo} href="/">
        <img src={logoImg.src} alt="A plate with food on it" />
        NextLevel Food
      </Link>

      <nav className={cls.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
