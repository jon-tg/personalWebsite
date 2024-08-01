import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = () => {

    const options = useMemo(() => {
    return {
      
      background: {
        color: "#0a205a",
      },

      wobble: {
        enable: true,
        distance: 10,
        speed: 10,
      },

      style:{
        position:'absolute',
      },
      
      interactivity: {
        modes: {
          connect: {
            distance: 40, 
            color: "#ffffff", 
            opacity: 0.6,
          },
        },

          events: {
            onHover: {
              enable: true,
              mode: 'connect', 
            },
          },
      },


      particles: {
        color: {
          value: ["#fff", "#89CFF0", "#0047AB", "#ffff"],
        },

        shape: {
          type: 'edge',
        },


        number: {
          density: {
            enable: true,
            value_area: 500,
          },
          value: 400,
        },

        move: {
          enable: true,
          speed: { min: .2, max: .6},
        },

        size: {
          value: { min: 1, max: 2},
        },

        opacity:
        {
            value: {min:0, max:.4},

        },
          
        
      },
    };
  }, []);

        
  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  

  return <Particles id={'tsparticles'} init={particlesInit} options={options}/>;
};

export default ParticlesComponent;