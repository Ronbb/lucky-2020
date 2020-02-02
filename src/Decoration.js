import React from "react";
import Particles from "react-particles-js";

class Decoration extends React.Component {
  particle = {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true
        }
      },
      color: {
        value: "#ffd781"
      },
      size: {
        value: 9,
        random: true,
        anim: {
          enable: false,
          speed: 80,
          size_min: 0.1,
          sync: false
        }
      },
      move: {
        direction: "none",
        out_mode: "out"
      },
      line_linked: {
        enable: false
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      }
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "remove"
        }
      },
      modes: {
        remove: {
          particles_nb: 10
        }
      }
    }
  };

  render() {
    return <Particles params={this.particle} className="particles" />;
  }
}

export default Decoration;