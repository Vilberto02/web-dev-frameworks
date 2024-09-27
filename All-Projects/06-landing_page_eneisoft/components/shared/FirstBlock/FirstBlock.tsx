import { SocialNetwork } from "../SocialNetworks";
import Image from "next/image";
import { dataFirstBlock } from "./FirstBlock.data";
import { dataEvent } from "./FirstBlock.data";

export function FirstBlock() {
  const { title, caption, descripcion } = dataFirstBlock;
  return (
    <div
      id="home"
      className="flex h-screen p-8 md:px-32 flex-col justify-center items-center gap-9 "
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="uppercase text-7xl font-extrabold bg-gradient-to-r from-[#297AF1] via-[#5FB5E7] to-[#297AF1] bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="uppercase text-[rgba(250,250,250,0.80)] text-sm font-semibold">
          {caption}
        </p>
        <p className="max-w-md mt-6 mb-8">{descripcion}</p>
        <SocialNetwork />
      </div>
      <div className="flex gap-16 justify-center items-center mt-16">
        {dataEvent.map(({ label, value }) => (
          <div key={label} className="py-2 px-4">
            <p className="mb-4 text-[#555555] font-semibold text-sm">{label}</p>
            <p className="text-[#FAFAFA] font-semibold text-lg">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
