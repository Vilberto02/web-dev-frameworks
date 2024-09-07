import style from "./Overview.module.css";
import Image from "next/image";

export function Overview() {
  return (
    <div className={style.overview}>
      <div className={style.container_description}>
        <h2 className={style.title}>
          The best remote pair programming <br /> app on macOS and Windows
        </h2>
        <p className={style.description}>
          Built from the ground up to deliver razor sharp screen sharing, crisp
          audio, and seamless remote control, so you can get into the flow with
          your teammates and do real work.
        </p>
        <button className={style.btn}>Start your free trial</button>
        <span className={style.span}>
          {" "}
          <strong>Free for 14 days</strong>. No credit card
        </span>
        <Image
          src="/assets/overview.png"
          alt="overview"
          width="800"
          height="500"
          priority={true}
        />
      </div>
      <div>
        <p>Trusted by thousands of teams</p>
        <div></div>
      </div>
    </div>
  );
}
