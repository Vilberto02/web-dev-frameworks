import { ActivitiesBlock } from "@/components/shared/ActivitiesBlock";
import { FirstBlock } from "@/components/shared/FirstBlock/FirstBlock";
import { Header } from "@/components/shared/Header";
import { SpeakersBlock } from "@/components/shared/SpeakersBlock";
import { WeBlock } from "@/components/shared/WeBlock";

/*
- Revisar la responsividad de la pagina.
- El primer bloque tiene un comportamiento extraño cuando la dimensión de la pantalla va disminuyendo.
- Colocar la imagen de fondo_peru.svg como fondo detrás del primer bloque.
*/
export default function Home() {
  return (
    <div className="px-4 py-4 xl:px-36 flex flex-col gap-9">
      <Header></Header>
      <FirstBlock></FirstBlock>
      <WeBlock></WeBlock>
      <ActivitiesBlock></ActivitiesBlock>
      <SpeakersBlock></SpeakersBlock>
    </div>
  );
}
