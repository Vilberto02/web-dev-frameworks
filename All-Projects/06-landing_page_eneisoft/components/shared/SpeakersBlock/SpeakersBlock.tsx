import { dataSpeakersBlock } from "./SpeakersBlock.data";

export function SpeakersBlock() {
  return (
    <div id="speakers" className="bg-[#131416] -mx-4 xl:-mx-36 gap-9 py-9">
      <div className="flex flex-col gap-6 items-center">
        <h4 className="text-center font-bold text-5xl mt-9">
          Speakers y Talleristas
        </h4>
        <p className="font-medium text-[18px] text-[#6E727A]">
          We are the new voices
        </p>
      </div>
      <div className="mt-9 grid grid-cols-2 py-4 gap-14 justify-items-center">
        {dataSpeakersBlock.map(({ id, name, description }) => (
          <div
            key={id}
            className={`min-w-[336px] py-6 px-7 gap-9 flex flex-col justify-center items-center bg-[#000] rounded-[8px] backdrop-filter-[2px] ${
              id % 2 == 0 ? "justify-self-start" : "justify-self-end"
            }`}
          >
            <h4 className="font-bold text-[28px] text-[#FAFAFA]">{name}</h4>
            <p className="text-[#6E727A] text-lg font-normal">{description}</p>
            <div className="flex gap-2">Links</div>
          </div>
        ))}
      </div>
    </div>
  );
}
