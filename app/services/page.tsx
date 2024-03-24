import Image from "next/image";
import { StyledCard } from "../components/StyledCard";
import { Nav } from "../components/Nav";

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ display: 'flex', justifyContent: 'center', gap: '100px'}}>
      <Nav />
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <StyledCard title="Github" subtitle="@haley227" link="https://github.com/haley227"/>
        <StyledCard title="Email" subtitle="haxey227@gmail.com" link="mailto:haxey227@gmail.com"/>
      </div>
    </main>
  );
}
