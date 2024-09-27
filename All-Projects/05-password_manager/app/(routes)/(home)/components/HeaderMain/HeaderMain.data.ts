import { Folder, KeyRound } from "lucide-react";
import { dataHeaderMainItemProps } from "./HeaderMain.types";

export const dataHeaderMain: dataHeaderMainItemProps[] = [
  {
    icon: KeyRound,
    text: "Element",
    typeElement: "password",
  },
  {
    icon: Folder,
    text: "Carpeta",
    typeElement: "folder",
  },
];
