import Image from "next/image";
import { StyledCard } from "./components/StyledCard";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 flex" style={{justifyContent: 'center', gap: '100px'}}>
      <Nav />
      <Hero />
    </main>
  );
}
