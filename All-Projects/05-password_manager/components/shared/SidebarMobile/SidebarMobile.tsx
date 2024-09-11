"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SidebarRoutes } from "../SidebarRoutes";
import { Button } from "@/components/ui/button";

export function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {
          <Button className="px-3 bg-blue-100/10 hover:bg-blue-100/20">
            <Menu></Menu>
          </Button>
        }
      </SheetTrigger>
      <SheetContent side="left" className="bg-blue-800 text-white">
        <SheetHeader className="text-left mb-6">
          <SheetTitle className="text-white">Password Generator</SheetTitle>
          <SheetDescription className="text-slate-100">
            Create and manage all of your password
          </SheetDescription>
        </SheetHeader>
        <SidebarRoutes></SidebarRoutes>
      </SheetContent>
    </Sheet>
  );
}
