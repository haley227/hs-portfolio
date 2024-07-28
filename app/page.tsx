import Image from "next/image";
import { StyledCard } from "./components/StyledCard";

import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 sm:p-24" style={{justifyContent: 'center', gap: '100px'}}>
      <Nav />
      <Hero />
    </main>
  );
}
