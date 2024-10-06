import { dataSponsorsPremium, dataSponsorsGold } from "./SponsorsBlock.data";

export function SponsorsBlock() {
  return (
    <div
      id="sponsors"
      className=" mt-7 flex flex-col gap-9 justify-center items-center"
    >
      <div className="flex flex-col gap-4">
        <h4 className="text-5xl font-bold text-[FAFAFA] text-center">
          Sponsors
        </h4>
        <p className="text-[18px] text-[#6e727A] font-medium text-[center]">
          Powered by our sponsors.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center items-center content-center gap-16">
        {dataSponsorsPremium.map(({ id, name, description }) => (
          <div
            key={id}
            className="max-w-[280px] flex flex-col gap-4 items-center"
          >
            <p className="font-bold text-3xl text-[#FAFAFA] text-center">
              {name}
            </p>
            <p className="self-stretch text-[16px] text-[#6E727A] text-center">
              {description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap justify-center items-end content-center">
        {dataSponsorsGold.map(({ id, name, description }) => (
          <div
            key={id}
            className="max-w-[280px] flex flex-col gap-4 items-center"
          >
            <p className="font-bold text-xl text-[#FAFAFA] text-center">
              {name}
            </p>
            <p className="self-stretch text-[16px] text-[#6E727A] text-center">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
