import Image from "next/image";
import Link from "next/link";
import style from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Overview } from "@/components/Overview";

export default function Home() {
  return (
    <main className={style.main}>
      <Navbar></Navbar>
      <Overview></Overview>
    </main>
  );
}
