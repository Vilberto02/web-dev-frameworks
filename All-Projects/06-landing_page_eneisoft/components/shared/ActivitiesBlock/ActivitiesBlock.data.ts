import { BsFillPeopleFill } from "react-icons/bs";
import { typeActivitiesBlock } from "./ActivitiesBlock.type";
import { IoLaptop, IoTrophy } from "react-icons/io5";
import { LuPresentation } from "react-icons/lu";

export const dataActivitiesBlock: typeActivitiesBlock[] = [
  {
    id: 1,
    title: "Talleres",
    icon: BsFillPeopleFill,
    description:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo",
  },
  {
    id: 2,
    icon: IoLaptop,
    title: "Hackathon",
    description:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo",
  },
  {
    id: 3,
    title: "Prog. competitiva",
    icon: IoTrophy,
    description:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo",
  },
  {
    id: 4,
    title: "Conferencias",
    icon: LuPresentation,
    description:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo",
  },
];
