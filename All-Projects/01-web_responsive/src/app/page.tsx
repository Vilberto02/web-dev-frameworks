import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Overview } from "@/components/Overview";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <main className="px-3 lg:px-10">
      <Navbar />
      <Overview />
      <Features />
    </main>
  );
}
