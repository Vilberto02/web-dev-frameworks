import Link from "next/link";
import Image from "next/image";
import style from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.options}>
        <Link href="#overview" className={style.home}>
          <Image
            src="/assets/logo.svg"
            alt="Code logo"
            width="60"
            height="40"
          />
          Code
        </Link>
        <Link href="#features">Features</Link>
        <Link href="#pricing">Pricing</Link>
        <Link href="#About">About</Link>
      </div>
      <div className={style.app}>
        <Link href="#download">Download</Link>
        <Link href="#login">Log in</Link>
        <Link href="#signup" className={style.sign_up}>
          Sign up
        </Link>
      </div>
    </nav>
  );
}
