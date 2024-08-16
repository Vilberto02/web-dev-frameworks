import { MotionTransition } from "../MotionTransition";
import Image from "next/image";

export function Practice() {
  return (
    <MotionTransition>
      <div
        id="practice"
        className="grid items-center py-20 md:grid-cols-2 md:py-56"
      >
        <div className="md:pr-20">
          <h2 className="font-extrabold text-4xl mb-10">
            Puedes practicar a cualquier hora <br />
            <span className="text-pink-400"> que se adapte a ti</span>
          </h2>

          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            facilis.
          </p>

          <button className="px-8 py-3 bg-pink-400 rounded-xl text-white">
            Empieza ya
          </button>
        </div>
        <video width="750" height="500" autoPlay muted loop>
          <source src="/assets/business.mp4" type="video/mp4" />
        </video>
      </div>
    </MotionTransition>
  );
}
