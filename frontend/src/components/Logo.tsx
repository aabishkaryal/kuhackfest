import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/next.svg" alt="Logo" width={60} height={60} />
    </Link>
  );
}
