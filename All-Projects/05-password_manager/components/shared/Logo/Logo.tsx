import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <h1 className="text-xl font-bold">Password Manager</h1>
    </Link>
  );
}
