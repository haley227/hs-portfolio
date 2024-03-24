import Image from "next/image";
import { StyledCard } from "../components/StyledCard";
import { Nav } from "../components/Nav";

export default function pageNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ gap: '100px'}}>
      <Nav />
      <div className="w-full mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left dark:text-white">
        <h2>404 Page Not Found</h2>
      </div>
    </main>
  );
}
