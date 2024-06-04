import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={`/users`} style={{ color: "#FFF", textDecoration: "underline" }}>Click Here To Check The Users !</Link >
    </main>
  );
}
