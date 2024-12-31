// script.js
tsParticles.load("particles-container", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 100, // Number of particles
      density: {
        enable: true,
        value_area: 800, // Particle density
      },
    },
    color: {
      value: "#ffffff", // Particle color
    },
    shape: {
      type: "circle", // Shape of particles
    },
    opacity: {
      value: 0.5, // Opacity of particles
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4, // Size of particles
      random: true,
    },
    line_linked: {
      enable: true, // Connect particles with lines
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2, // Speed of particles
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
      attract: {
        enable: false,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab", // Interactive mode: hover creates lines
      },
      onclick: {
        enable: true,
        mode: "repulse", // Particles move away on click
      },
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
      repulse: {
        distance: 200,
      },
    },
  },
  retina_detect: true, // High-resolution support
});
