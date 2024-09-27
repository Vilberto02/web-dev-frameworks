"use client";

import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Element } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Copy, MoreHorizontal, User2 } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ColumnsProps = Element;

export const columns: ColumnDef<ColumnsProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "typeElement",
    header: "Type Element",
  },
  {
    accessorKey: "urlWebsite",
    header: "Url Website",
  },
  {
    accessorKey: "directory",
    header: "Directory",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const password = row.original.password;
      const username = row.original.username;

      const onEditElement = () => {
        console.log("Editing element");
      };

      const copyItemClipboard = (item: string, name: string) => {
        navigator.clipboard.writeText(item);
        toast({
          title: `${name} copied ✅`,
        });
      };

      return (
        <div className="flex gap-3 justify-center items-center">
          {password && (
            <Copy
              className="w-4 h-4 cursor-pointer"
              onClick={() => copyItemClipboard(password, "Password")}
            />
          )}
          {username && (
            <User2
              className="w-4 h-4 cursor-pointer"
              onClick={() => copyItemClipboard(username, "Username")}
            />
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={onEditElement}>Edit</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
