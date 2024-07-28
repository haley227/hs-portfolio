import Image from "next/image";

import { StyledCard } from "../components/StyledCard";
import { Nav } from "../components/Nav";
import { Tooltip } from "@nextui-org/react";

const technologies = [
  {
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
    serviceName: 'NextJS',
  },
  {
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    serviceName: 'TypeScript',
  },
  {
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    serviceName: 'React',
  },
  {
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
    serviceName: 'Tailwind CSS',
  },
  {
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
    serviceName: 'Sass',
  },
  {
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    serviceName: 'JavaScript',
  },
  {
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/gatsby/gatsby-original.svg',
    serviceName: 'Gatsby',
  },
  {
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
    serviceName: 'NodeJS',
  },
  {
    image: '',
    serviceName: 'Styled Components',
  },
  {
    image: '',
    serviceName: 'Contentful',
  },
  {
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg',
    serviceName: 'Figma',
  },
  {
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
    serviceName: 'PostgreSQL',
  },
  {
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
    serviceName: 'MySQL',
  },
  {
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg',
    serviceName: 'Vercel',
  }
];

export default function About() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24 flex" style={{gap: '100px'}}>
      <Nav />
      <section className="dark:text-white">
        <h1 className="text-center text-5xl">About Me</h1>
        <div>
          <h2 className="text-2xl">Who Am I?</h2>
          <p>
            I&apos;m a Frontend Developer
          </p>
        </div>
        <div>
          <h2 className="text-2xl">Tools and Technologies</h2>
          <div className="mt-8 flex flex-wrap justify-between">
            {technologies.map((technology) => (
              <Tooltip content={`Click to view projects using ${technology.serviceName}`} key='primary' color='primary' className="dark:bg-sky-500 dark:text-white">
                <div key={technology.serviceName} className="cursor-pointer hover:scale-125 dark:text-gray-800 py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center md:w-48 w-40">
                  <Image alt={`${technology.serviceName} Logo`} width={100} height={100} src={technology.image} className="w-12" />
                  <h4 className="text-md ml-4">{technology.serviceName}</h4>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
