import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./NavLink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with fod on it" priority />
          McDonald&apos;s
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink href="/store">Store</NavLink>
            </li>
            <li>
              <NavLink href="/news">What&apos;s New</NavLink>
            </li>
            <li>
              <NavLink href="/story">Story</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
