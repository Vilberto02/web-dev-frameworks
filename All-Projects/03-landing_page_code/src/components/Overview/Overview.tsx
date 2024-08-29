import style from "./Overview.module.css";
import Image from "next/image";

export function Overview() {
  return (
    <div className={style.overview}>
      <div>
        <h2>
          The best remote pair programming <br /> app on macOS and Windows
        </h2>
        <p>
          Built from the ground up to deliver razor sharp screen sharing, crisp
          audio, and seamless remote control, so you can get into the flow with
          your teammates and do real work.
        </p>
        <button>Start your free trial</button>
        <span>
          {" "}
          <strong>Free for 14 days</strong>. No credit card
        </span>
        <Image
          src="/assets/overview.png"
          alt="overview"
          width="800"
          height="500"
        />
      </div>
      <div>
        <p>Trusted by thousands of teams</p>
        <div></div>
      </div>
    </div>
  );
}
