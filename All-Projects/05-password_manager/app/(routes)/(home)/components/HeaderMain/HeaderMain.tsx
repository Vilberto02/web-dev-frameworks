"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dataHeaderMain } from "./HeaderMain.data";
import { useState } from "react";
import { FormAddElement } from "../FormAddElement";
import { HeaderMainProps } from "./HeaderMain.types";

export function HeaderMain(props: HeaderMainProps) {
  const { userId } = props;
  const [typeElement, setTypeElement] = useState<"password" | "folder" | "">();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);

  function closedDialogAndDropdown() {
    setOpenDialog(false);
    setOpenDropdownMenu(false);
  }

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xs md:text-2xl font-semibold">
        Todas las cajas fuertes
      </h1>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DropdownMenu
          open={openDropdownMenu}
          onOpenChange={setOpenDropdownMenu}
        >
          <DropdownMenuTrigger asChild>
            <Button className="text-xs">
              Nuevo <ChevronDown className="ml-1" size={20}></ChevronDown>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-0">
            <DropdownMenuLabel>
              <DialogTrigger asChild>
                <div className="flex flex-col">
                  {dataHeaderMain.map(({ icon: Icon, typeElement, text }) => (
                    <Button
                      key={typeElement}
                      variant={"ghost"}
                      className="justify-start"
                      onClick={() => setTypeElement(typeElement)}
                    >
                      <Icon className="w-4 h-4 mr-2"></Icon>
                      {text}
                    </Button>
                  ))}
                </div>
              </DialogTrigger>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent className="sm:max-w-[825px]">
          <DialogHeader>
            <DialogTitle>Nuevo Elemento</DialogTitle>
          </DialogHeader>
          {typeElement === "password" && (
            <FormAddElement
              userId={userId}
              closeDialog={closedDialogAndDropdown}
            ></FormAddElement>
          )}
          {typeElement === "folder" && <p>Nueva carpeta</p>}
        </DialogContent>
      </Dialog>
    </div>
  );
}
