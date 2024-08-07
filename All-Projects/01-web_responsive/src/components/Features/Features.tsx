import { dataFeatures } from "@/data/dataFeatures";
import Image from "next/image";
import { MotionTransition } from "../MotionTransition/MotionTransition";

export function Features() {
  return (
    <div
      id="features"
      className="grid grid-cols-2 gap-16 my-20 md:grid-cols-4 md:py-56"
    >
      <div>
        <h2 className="mb-4 text-4xl font-bold">
          Porque somos <br />
          <span className="text-pink-400"> mejores que otros</span>
        </h2>
      </div>
      {dataFeatures.map(({ id, image, text, additionalClass }) => (
        <MotionTransition key={id}>
          <div key={id} className={additionalClass}>
            <div className={`rounded-3xl shadow-lg p-6 shadow-pink-100`}>
              <Image
                src={`/assets/${image}.png`}
                alt={`Image ${text}`}
                width="100"
                height="100"
              />
              <h3 className="mt-3 mr-20 text-lg font-bold">{text}</h3>
            </div>
          </div>
        </MotionTransition>
      ))}
    </div>
  );
}
