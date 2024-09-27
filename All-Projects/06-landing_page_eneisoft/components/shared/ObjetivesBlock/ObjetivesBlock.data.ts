import { IoFemale, IoTerminal, IoPeople, IoBulb } from "react-icons/io5";
import { typeObjetivesBlock } from "./ObjetivesBlock.type";

export const dataObjetivesBlock: typeObjetivesBlock[] = [
  {
    id: 1,
    icon: IoPeople,
    text: "Integrar a los estudiantes de Ing. de software y carreras afines de todo el Perú (Universidades, institutos y bootcamps).",
  },
  {
    id: 2,
    icon: IoFemale,
    text: "Promover la participación de mujeres en tecnología tanto como asistentes y speakers, mentores y jurados (Women in Tech Perú, Women in STEM - Perú, R-Ladies, PyLadies Lima, etc.).",
  },
  {
    id: 3,
    icon: IoTerminal,
    text: "Promover el aprendizaje sobre tecnologías básicas (Git y GitHub, Python, Data Science, Web, Movile, Cloud) y emergentes (IoT, IA y ML, NLP, Blockchain, Ciberseguridad).",
  },
  {
    id: 4,
    icon: IoBulb,
    text: "Promover el trabajo en equipo y la aplicación de tecnología en la solución de problemas reales a nivel nacional, regional y mundial.",
  },
];

export const dataObjetivesInfo = {
  title: "Objetivos",
  description:
    "Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
};
