'use client'
import React, { useCallback } from 'react'
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "./particles-config";
import { Engine } from 'tsparticles-engine';

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesConfig}
        />
    )
}

export default ParticlesBackground;