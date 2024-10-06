import { RiTimerFill } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";
import { dataAgendaBlock } from "./AgendaBlock.data";
import { Button } from "@/components/ui/button";

export function AgendaBlock() {
  return (
    <div
      id="agenda"
      className="mt-24 flex flex-col justify-center items-center gap-16"
    >
      <div className="flex flex-col gap-6 justify-center items-center">
        <h4
          className="text-[#FAFAFA] text-5xl font-bold
        "
        >
          Agenda
        </h4>
        <div className="inline-flex gap-4 py-2 px-3 bg-[rgb(34,58,89,0.5)] items-center justify-center rounded-[6px]">
          <RiTimerFill className="text-[#297AF1] w-[30px] h-[30px]"></RiTimerFill>
          <p className="text-[16px] text-[#FAFAFA]">
            Zona horario: <span className="font-medium">America/Latina</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        {dataAgendaBlock.map(({ id, day, month, events }) => (
          <div
            key={id}
            className="flex py-6 px-9 border-[1px] border-[#CCC] rounded-[8px] gap-11"
          >
            <div className="flex flex-col gap-3 justify-center items-center min-w-[124px] max-w-[164px] flex-1">
              <h5 className="text-6xl text-[#FAFAFA] font-extrabold">{day}</h5>
              <p className="font-semibold text-xl text-[#CCCCCC] ">{month}</p>
            </div>
            <div className="border-l-2 border-[#6E727A] pl-12 gap-6 flex flex-col items-start flex-1">
              {events.map(({ horario, speaker, tema }) => (
                <div
                  id={horario}
                  className="flex items-start gap-5 self-stretch"
                >
                  <div className="flex gap-4 items-start">
                    <RiTimerFill className="w-6 h-6"></RiTimerFill>
                    <p className="text-xl font-semibold text-[#FAFAFA]">
                      {horario}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2 flex-1">
                    <p className="font-medium text-xl text-[#FAFAFA]">
                      {speaker}
                    </p>
                    <p className="text-[#6E727A] text-[16px] font-normal">
                      {tema}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Button className="bg-[#5FB5E7] rounded-[4px] text-[#000] py-3 px-6 flex gap-4 items-center justify-center hover:bg-[rgba(95,181,231,0.6)]">
        Ver Agenda Completa
        <FaCalendar className="text-[#000] w-5 h-5"></FaCalendar>
      </Button>
    </div>
  );
}
