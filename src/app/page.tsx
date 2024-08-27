import Image from "next/image";
import About from "./about/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <About/>
    </main>
  );
}