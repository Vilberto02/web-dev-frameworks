import Image from "next/image";
import { MotionTransition } from "../MotionTransition";

export function About() {
  return (
    <div id="about" className="grid items-center py-20 md:grid-cols-2 lg:py-56">
      <MotionTransition>
        <Image
          src="/assets/about.png"
          alt="About image"
          width="600"
          height="400"
        />
      </MotionTransition>
      <div className="md:px-20">
        <h2 className="mb-10 text-4xl font-extrabold">
          Hemos estado <br />
          <span className="text-pink-400">mejorando nuestro producto</span>
          <br />
          durante años
        </h2>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quia qui
        </p>

        <button className="px-8 py-3 bg-pink-400 rounded-xl text-white">
          Empieza ya
        </button>
      </div>
    </div>
  );
}
