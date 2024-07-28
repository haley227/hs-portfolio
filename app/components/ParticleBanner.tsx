import Link from "next/link";
import ParticlesBackground from "./ParticleArea/ParticleArea";

export const ParticleBanner = () => {
    return (
        <div className="hero text-center dark:text-white">
            <ParticlesBackground />
            Wanna see some cool stuff? Check out my work!
        </div>
    );
};