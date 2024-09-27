import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export function Login() {
  return (
    <div className="w-[1200px] h-[800px] grid grid-cols-2 justify-items-center justify-between rounded-[24px] bg-[#F5EDED] shadow-lg overflow-hidden">
      <div className="flex py-12 px-0 gap-[64px] self-stretch items-center justify-center flex-col flex-[1_0_0]">
        <div className="flex flex-col justify-center items-center gap-[48px]">
          <div className="flex py-[8px] px-[4px] flex-col gap-4 justify-center items-center">
            <div className="flex gap-2 justify-center items-center">
              <Image
                src="/assets/Logo-MiStock.png"
                alt="Logo"
                width="104"
                height="114"
              ></Image>
              <p className="font-black text-[#002D51] text-[40px]">MiStock</p>
            </div>
            <p className="font-bold text-[16px] text-[#284F76]">
              Inicia sesión con tu cuenta
            </p>
          </div>
          <div className="flex flex-col min-w-[410px] py-2 px-0 gap-9 justify-center">
            <div className="flex flex-col">
              <Label
                htmlFor="email"
                className="font-medium text-[16px] mb-[6px]"
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                className="bg-[#E2DAD6] rounded-[8px] pt-[10px] pr-[14px] pb-[10] pl-[12px] border-none text-[16px] text-[#555555] placeholder:text-[#555]"
                placeholder="Correo electrónico"
                type="email"
              ></Input>
            </div>
            <div className="flex flex-col">
              <Label
                htmlFor="password"
                className="font-medium text-[16px] mb-[6px]"
              >
                Contraseña
              </Label>
              <Input
                id="password"
                name="password"
                className="bg-[#E2DAD6] rounded-[8px] pt-[10px] pr-[14px] pb-[10] pl-[12px] border-none text-[16px] text-[#555555] placeholder:text-[#555]"
                placeholder="Correo electrónico"
                type="password"
              ></Input>
            </div>
          </div>
        </div>
        <Button className="py-[10px] px-4 min-w-[240px] max-w-[300px] rounded-[4px] bg-[#002D51] text-white">
          Iniciar sesión
        </Button>
      </div>
      <div className="w-[580px] h-[800px] bg-[#002D51] rounded-tl-[4px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[4px] relative right-[-9px]">
        <div className="absolute top-[240px] right-[48px] flex flex-col gap-[48px] justify-center items-center">
          <h3 className="font-extrabold text-[64px] text-[#F5EDED]">¡Hola!</h3>
          <p className="text-[24px] font-normal text-[#F5EDED] w-[480px]">
            Regístrese con sus datos personales para utilizar las funciones del
            sitio.
          </p>
          <Button className="rounded-[8px] shadow-lg py-[10px] px-[16px] w-[330px] bg-[#F5EDED] text-[#284F76] text-[18px] font-bold">
            Registrate ahora
          </Button>
        </div>
      </div>
    </div>
  );
}
