import { dataSocialNetwork } from "./SocialNetwork.data";
import Link from "next/link";

export function SocialNetwork() {
  return (
    <div className="flex gap-2 p-2 items-center">
      {dataSocialNetwork.map(({ id, name, icon: Icon, idLink }) => (
        <Link
          key={id}
          href={idLink}
          className="p-2 bg-white rounded-full"
          target="_blank"
        >
          <Icon className="text-2xl" color="black" title={name} />
        </Link>
      ))}
    </div>
  );
}
