import React from "react";
import { Logo } from "@/components/shared/Logo";
import { Sidebar } from "@/components/shared/Sidebar";
import { SidebarMobile } from "@/components/shared/SidebarMobile";

export default function LayouyRoutes({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="h-full">
      {/* Contenedor del Sidebar en Mobile */}
      <div className="flex justify-between lg:hidden px-6 py-3 items-center bg-blue-800">
        <div className="py-1 text-white">
          <Logo />
        </div>
        <SidebarMobile></SidebarMobile>
      </div>
      {/* Contenedor del Sidebar */}
      <div className="flex h-full">
        <div className="max-w-lg hidden lg:flex h-full w-72 flex-col fixed bg-blue-800 px-4 text-white">
          <Sidebar></Sidebar>
        </div>
        <div className="w-full lg:pl-72">
          <div className="p-6">{children}</div>
        </div>
      </div>
    </main>
  );
}
