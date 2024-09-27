import { dataSpeakersBlock } from "./SpeakersBlock.data";

export function SpeakersBlock() {
  return (
    <div id="speakers" className="bg-[#131416] -mx-4 xl:-mx-36">
      <h4 className="text-center font-bold text-5xl mt-9">
        Speakers y Talleristas
      </h4>
      <div className="grid grid-cols-2 py-4 gap-14 justify-items-center content-center">
        {dataSpeakersBlock.map(({ id, name, links }) => (
          <div key={id} className="min-w-[336px] py-6 px-7 gap-9 flex flex-col">
            <h4>{name}</h4>
            <div className="flex gap-2">
              <div>{links.github?.link}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
