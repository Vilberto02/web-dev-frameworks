import { dataActivitiesBlock } from "./ActivitiesBlock.data";
import { Button } from "@/components/ui/button";

export function ActivitiesBlock() {
  return (
    <div id="actividades" className="py-12">
      <div className="flex flex-col gap-4 px-20 mb-9">
        <h3 className="font-extrabold text-5xl text-center">Actividades</h3>
        <p className="text-[18px] text-[#6E727A] font-medium text-center">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Sed non libero vel tellus mattis aliquet.
          Pellentesque convallis sollicitudin dolor.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-y-16 gap-x-12 justify-items-center">
        {dataActivitiesBlock.map(({ id, title, icon: Icon, description }) => (
          <div key={id} className="flex w-96 gap-4 p-1 items-start">
            <div className="bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(41,_122,_241,_0.80)_30%,_rgba(0,_0,_0,_0.80)_100%)] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] flex p-6 items-center">
              <Icon className="text-7xl" />
            </div>
            <div className="flex flex-col gap-2 items-start">
              <h4 className="font-bold text-xl">{title}</h4>
              <p className="self-stretch text-ellipsis overflow-hidden line-clamp-3 text-[16px]">
                {description}
              </p>
              <Button variant="outline" className="rounded-[4px] mt-2">
                Leer más
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
