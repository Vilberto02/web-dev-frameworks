import Link from "next/link";
import Image from "next/image";
import { dataFooter } from "@/data/dataFooter";

export function Footer() {
  return (
    <footer className="p-5 mt-10 text-white bg-blue-950 md:px-20 md:py-10">
      <div className="grid md:grid-cols-[350px_1fr_1fr_1fr] md:gap-10">
        <div>
          <Image
            src="/assets/logo.svg"
            alt="Logo Website"
            width="80"
            height="80"
            className="w-20 md:w-36"
          />
          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod!
          </p>
        </div>
        {/*
        <div className="my-3">
          <h4 className="text-xl font-bold text-white">Plataforma</h4>
          <div className="flex flex-col gap-5 mt-2">
            <Link href="#overview">Overview</Link>
            <Link href="#features">Features</Link>
            <Link href="#about">About</Link>
            <Link href="#pricing">Pricing</Link>
          </div>
        </div>
        <div className="my-3">
          <h4 className="text-xl font-bold text-white">Help</h4>
          <div className="flex flex-col gap-5 mt-2">
            <Link href="#">How we work?</Link>
            <Link href="#">Where are the questions?</Link>
            <Link href="#">How to pay?</Link>
            <Link href="#">What we need for this?</Link>
          </div>
        </div>
        <div className="my-3">
          <h4 className="text-xl font-bold text-white">Contacts</h4>
          <div className="flex flex-col gap-5 mt-2">
            <Link href="#">(+51) 962 562 692</Link>
            <Link href="#">118 Lorem ipsum</Link>
            <Link href="#">Lorem, ipsum. (46900)</Link>
          </div>
        </div>*/}
        {dataFooter.map(({ id, title, links }) => (
          <div key={id} className="my-3">
            <h4 className="text-xl font-bold text-white">{title}</h4>
            {links.map(({ id, title, path }) => (
              <div key={id} className="flex flex-col gap-5 mt-2">
                <Link href={path}>{title}</Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
