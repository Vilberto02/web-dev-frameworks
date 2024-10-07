import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/assets/logo/MeshFlow-Light.png"
        alt="Logo de MeshFlow"
        width="500"
        height="500"
      ></Image>
      <p className="capitalize font-medium">lesson plan diagram generator</p>
    </div>
  );
}
