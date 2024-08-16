import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Overview } from "@/components/Overview";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Practice } from "@/components/Practice";
import { Plans } from "@/components/Plans";

export default function Home() {
  return (
    <main className="px-3 lg:px-10">
      <Navbar />
      <Overview />
      <Features />
      <div className="max-m-6xl mx-auto">
        <About />
        <Practice />
        <Plans />
      </div>
    </main>
  );
}
