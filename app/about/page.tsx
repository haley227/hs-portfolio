import Image from "next/image";

import { StyledCard } from "../components/StyledCard";
import { Nav } from "../components/Nav";
import { Tooltip } from "@nextui-org/react";

const experience = [
  {
    company: 'Cro Metrics',
    position: '',
    startDate: '03/2022',
    endDate: 'Present',
    description: '',
    technologies: [
      ''
    ],
  }
];

export default function About() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24 flex" style={{gap: '100px'}}>
      <Nav />
      <section className="dark:text-white">
        <h1 className="text-center text-5xl">Experience</h1>
        <div className="mt-8 flex flex-wrap justify-between">
          {experience.map((thisExperience, i) => (
           <div key={i}>
            <h2>{thisExperience.company}</h2>
            <h3>{thisExperience.startDate} - {thisExperience.endDate}</h3>
            <p>{thisExperience.description}</p>
            
           </div>
          ))}
         
        </div>
      </section>
    </main>
  );
}
