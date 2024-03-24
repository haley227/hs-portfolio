import Link from "next/link";
import ParticlesBackground from "./ParticleArea/ParticleArea";

export const Hero = () => {
    return (
        <div className="hero text-center dark:text-white">
            <ParticlesBackground />
            <div className="hero-content ">
                <h1 className="text-5xl font-bold my-8 animate-fall">Hey, I&apos;m Haley Smith</h1>
                <div className="text-xl my-8 flex">
                    <p>I&apos;m an Arizona based Frontend Developer specializing in </p>
                    <div className="inline-flex flex-col h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] overflow-hidden">
                        <ul className="block text-sky-500 mx-2 my-px animate-text-slide text-left leading-tight [&_li]:block">
                            <li>React</li>
                            <li>Next.JS</li>
                            <li>Typescript</li>
                            <li aria-hidden="true">React</li>
                        </ul>
                    </div>
                </div>
                <Link href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">About Me</Link>
            </div>
        </div>
    );
};