import { dataAlliesBlock } from "./AlliesBlock.data";

export function AlliesBlock() {
  return (
    <div id="aliados" className="flex flex-col gap-9 self-stretch">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h4 className="text-[#FAFAFA] text-5xl font-bold">Aliados</h4>
        <p className="text-[#6E727A] text-[18px] font-medium">
          Powered by our sponsors.
        </p>
      </div>
      <div className="flex flex-wrap gap-16 items-center justify-center content-center self-stretch p-4">
        {dataAlliesBlock.map(({ id, name, description }) => (
          <div
            key={id}
            className="flex flex-col gap-4 max-w-[348px] p-2 items-center"
          >
            <p className="text-[#FAFAFA] text-2xl font-semibold">{name}</p>
            <p className="text-[#6E727A] text-center text-[16px] font-medium">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
