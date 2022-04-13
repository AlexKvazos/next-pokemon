import Link from "next/link";

export default function Header() {
  return (
    <div>
      <h1>My Website</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
