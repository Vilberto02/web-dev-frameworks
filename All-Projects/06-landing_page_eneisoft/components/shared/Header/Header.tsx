"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { dataHeader } from "./Header.data";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <nav className="flex justify-between items-center pt-3">
      <Link href="#home" className="flex items-center">
        <Image
          src="/assets/logo.svg"
          width="183"
          height="29"
          alt="Logo ENEISOFT"
        />
      </Link>

      {/* Menú para dimensiones menores a 1280px */}
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="block text-3xl xl:hidden cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="border-[#27272A] bg-[#09090B]">
          <SheetHeader>
            <SheetTitle className="font-bold">Menú</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 mt-2 py-4 px-2">
            {dataHeader.map(({ id, name, idLink }) => (
              <Link
                key={id}
                href={idLink}
                className="text-lg pb-1 border-b-2 border-transparent hover:border-[#297AF1] transition-all duration-300 ease-in"
              >
                {name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Dimensiones mayorese a 1280px */}
      <div className="hidden xl:flex gap-9 items-center">
        {dataHeader.map(({ id, name, idLink }) => (
          <div key={id} className="flex">
            <Link
              href={idLink}
              className="text-[16px] font-medium px-3 py-2 border-b-2 border-transparent hover:border-[#297AF1] transition-all duration-300 ease-in"
            >
              {name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
