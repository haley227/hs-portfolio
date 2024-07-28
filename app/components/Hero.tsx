import Image from 'next/image';
import Link from 'next/link';
import ParticlesBackground from './ParticleArea/ParticleArea';

export const Hero = () => {
  return (
    <div className="hero max-w-4xl w-full text-center dark:text-white">
      <div className="hero-content flex flex-col sm:flex-row justify-between">
        <div className="flex justify-center">
          <Image
            className="hidden dark:block"
            src="/images/hs_logo_light.png"
            alt="My image"
            width={300}
            height={300}
          />
          <Image
            className="block dark:hidden"
            src="/images/hs_logo.png"
            alt="My image"
            width={300}
            height={300}
          />
        </div>
        <div>
          <div className="text-xl my-8">
            <p>Hello!</p>
            <p>I&apos;m an Arizona based Sr. Frontend Developer</p>
            <div>I specialize in
              <div className="inline-flex flex-col h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block text-sky-500 mx-2 my-px animate-text-slide text-left leading-tight [&_li]:block relative z-[-1]">
                <li>React</li>
                <li>Next.JS</li>
                <li>Typescript</li>
                <li aria-hidden="true">React</li>
              </ul>
            </div>
            </div>
          </div>
          <Link
            href="/about"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
};