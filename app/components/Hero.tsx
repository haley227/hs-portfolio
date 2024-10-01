import Image from 'next/image';
import Link from 'next/link';
import ParticlesBackground from './ParticleArea/ParticleArea';
import { GithubSVG } from './icons/GithubIcon';
import { EmailSVG } from './icons/EmailIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import * as motion from "framer-motion/client"

export const Hero = () => {
  return (
    <div className="hero max-w-4xl w-full text-center dark:text-white">
      <div className="hero-content flex flex-col sm:flex-row justify-between">
        <div>
          <div className="text-xl text-left">
            <motion.h1 initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-8xl">
              Haley <span>Smith</span>
            </motion.h1>
            <h3 className="text-3xl">Frontend Engineer</h3>
            <div className="flex gap-2">
              <a href="https://github.com/haley227" className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                <GithubSVG />
              </a>
              <a href="mailto:haleysmith227@gmail.com">
                <EmailSVG />
              </a>
              <a href="https://www.linkedin.com/in/haley-smith-7b996913a/">
                <LinkedinIcon />
              </a>
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