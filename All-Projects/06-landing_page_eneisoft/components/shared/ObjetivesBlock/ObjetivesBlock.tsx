import { dataObjetivesBlock, dataObjetivesInfo } from "./ObjetivesBlock.data";

export function ObjetivesBlock() {
  const { title, description } = dataObjetivesInfo;
  return (
    <div className="grid grid-cols-2 gap-4 my-4">
      <div className="place-self-center px-9">
        <h3 className="text-5xl font-extrabold text-[#FAFAFA] mb-4 text-center">
          {title}
        </h3>
        <p className="text-[18px] text-[#6E727A] text-center">{description}</p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-6">
        {dataObjetivesBlock.map(({ id, icon: Icon, text }) => (
          <div key={id} className="flex flex-col gap-4 p-6 items-start">
            <div className="p-4 rounded-[100px] border-2 border-[#FAFAFA] bg-[rgba(250,250,250,0.2)] flex justify-center">
              <Icon className="text-3xl" />
            </div>
            <p className="text-[18px] font-medium self-stretch leading-6">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
