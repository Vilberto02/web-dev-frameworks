import Image from "next/image";
import { dataStats } from "./WeBlock.data";
import { dataWeBlock } from "./WeBlock.data";
import { ObjetivesBlock } from "../ObjetivesBlock/ObjetivesBlock";

// Falta definir responsavidad
export function WeBlock() {
  return (
    <div id="nosotros" className="flex flex-col gap-9 py-9 px-36">
      <div className="grid grid-cols-2 items-center justify-items-center gap-9 py-2">
        <div className="flex flex-col gap-4 py-12 px-9 rounded-[4px] border-[#555] border-[1px] w-[336px]">
          <h3 className="font-bold text-2xl">{dataWeBlock.pregunta}</h3>
          <p className="font-normal text-[18px]">{dataWeBlock.respuesta}</p>
        </div>
        <Image
          src="/assets/ilustracion_laptop.svg"
          width="336"
          height="307"
          alt="laptop"
        />
      </div>
      <ObjetivesBlock></ObjetivesBlock>
      <div className="grid grid-cols-4 gap-9 justify-items-center">
        {dataStats.map(({ id, statistics, title, descripcion, important }) => (
          <div
            key={id}
            className="flex flex-col justify-center items-center gap-1 py-3 px-2 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(41,_122,_241,_0.24)_0%,_rgba(0,_0,_0,_0.60)_85%)] backdrop-filter backdrop-blur-[2px]"
          >
            <h3
              className={`font-extrabold text-center ${
                important ? "text-8xl" : "text-[64px]"
              }`}
            >
              {statistics}
            </h3>
            <p className="text-center text-2xl font-semibold">{title}</p>
            <p className="text-center text-[#6E727A] text-[16px] font-normal">
              {descripcion}
            </p>
          </div>
        ))}
      </div>
      {/* <div className="grid grid-cols-2 items-center justify-items-center">
        <Image
          src="/assets/ilustracion_technologis.svg"
          width="477"
          height="512"
          alt="technologis"
        />
        Aquí iba el DIV de arriba XD
      </div> */}
    </div>
  );
}
