export type ImageId =
  | 'power-schematic'
  | 'power-graph'
  | 'power-front'
  | 'power-top'
  | 'power-test'
  | 'synth-astable'
  | 'synth-envelope'
  | 'robot-car'
  | 'robot-simulation'
  | 'traffic-schematic'
  | 'traffic-board'
  | 'rc-open'
  | 'rc-detail'
  | 'emp-coil'

export type ProjectBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'images'; images: readonly ImageId[]; layout?: 'stack' | 'pair' | 'power-gallery' }

export type Project = {
  slug: string
  title: string
  cover: ImageId
  coverFit?: 'cover' | 'contain'
  coverPosition?: string
  blocks: readonly ProjectBlock[]
}

export const projects: readonly Project[] = [
  {
    slug: 'high-voltage-power-supply',
    title: '7000V DC power supply using microwave transformer and half wave doubler.',
    cover: 'power-front',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Over the summer of 2026 I and a fellow engineer and close friend designed, assembled, and tested a 7kV DC power supply. We did a large amount of research and simulations with things like LTspice simulations pictured below,',
      },
      { kind: 'images', images: ['power-schematic'] },
      {
        kind: 'paragraph',
        text: 'Along with real world testing of Primary and Secondary windings of the Transformer, accounting for Core and Wire resistance, and doing our overall best to make an accurate model of the circuit we would build to understand expected outputs based on load resistance, shown here.',
      },
      { kind: 'images', images: ['power-graph'] },
      {
        kind: 'paragraph',
        text: 'I hand soldered all connections of components for the high voltage diodes and capacitors. 3D printed custom parts holders to make a more robust design, and used a VARIAC or high voltage testing apparatus to see input and output voltages comparatively on an oscilloscope.',
      },
      {
        kind: 'paragraph',
        text: 'The ability to apply my Electrical Engineering knowledge practically with a peer in Materials Engineering was a rewarding collaborative experience that I look forward to continuing in the future. Below are more images of the completed design',
      },
      {
        kind: 'images',
        images: ['power-front', 'power-top', 'power-test'],
        layout: 'power-gallery',
      },
    ],
  },
  {
    slug: 'analog-synthesizer',
    title: 'Analog synthesizer built on breadboards.',
    cover: 'synth-envelope',
    coverFit: 'contain',
    blocks: [
      {
        kind: 'paragraph',
        text: 'I designed and constructed an Analog Synthesizer using only basic components of Resistors, Capacitors, Diodes, and Op-Amps to create a 4 control audio output, taking an input wave and turning it into a square wave by running it through an Astable Multivibrator (the first image outputting node C) and then controlling Attack spike, Sustain, Attack, and Delay (the second image, taking in Node C and outputting the transformed wave from node D)',
      },
      { kind: 'images', images: ['synth-astable', 'synth-envelope'] },
      {
        kind: 'paragraph',
        text: 'The synth overall was 5 stages total, with the input wave fed into the Astable multivibrator, then into the complex audio control (controlling attack spike and sustain), then into the envelope (controlling attack and decay), then into an inverting amplifier to make the signal stronger, and finally into the speaker at node D to actually play the sounds.',
      },
      {
        kind: 'paragraph',
        text: 'A large amount of testing and planning went into this and it was a fascinating learning opportunity to understand the physical control and reactions that signals have to components, and how that translates into audio and sound.',
      },
    ],
  },
  {
    slug: 'ti-rslk-driving-controller',
    title: 'TI-RSLK custom driving controller using PID integrated digital compass.',
    cover: 'robot-car',
    coverPosition: 'center 46%',
    blocks: [
      {
        kind: 'paragraph',
        text: 'I taught myself C++ in order to learn how to program and compile code on TI-RSLK embedded microcontroller cars. Along with this I implemented a digital compass to output coordinates and interpret those into roll, pitch, and yaw. Implementing this along with a PID control system to make an overall functional steering system based purely off tilt controls of a breadboard circuit. This was all planned out and simulated before implemented.',
      },
      {
        kind: 'paragraph',
        text: 'This was an interesting exercise and one of my most deep dives I’ve done into robotics systems.',
      },
      { kind: 'images', images: ['robot-car', 'robot-simulation'] },
    ],
  },
  {
    slug: 'traffic-light-state-machine',
    title: 'Finite solid state machine feeding into a seven-segment display and LED array',
    cover: 'traffic-board',
    blocks: [
      {
        kind: 'paragraph',
        text: 'Designed a finite solid state machine to simulate a whole traffic light system with pedestrian crossing and color changes using a lot of digital logic simplification and Gate Amps. It required a huge amount of testing and troubleshooting but we created a solid op-plan and executed on it.',
      },
      { kind: 'images', images: ['traffic-schematic', 'traffic-board'] },
    ],
  },
  {
    slug: 'custom-remote-control-car',
    title: 'Custom Remote Control Car using a 3d printed frame.',
    cover: 'rc-open',
    coverPosition: 'center 54%',
    blocks: [
      {
        kind: 'paragraph',
        text: 'I planned out a Tube style RC car design, measured all components and implemented a custom CAD model to then plan out an entire FDM 3D printed shell design to enclose motors, main power bank, transmitter, and signal processor and brain. I used specific omni-directional wheels that allows lateral movement based on turning the wheels in specific ways. I went through multiple test prints and modifications to tune balance, wireless range. I soldered everything and coordinated it all with a wireless controller, and tested extensively in different places and terrains.',
      },
      { kind: 'images', images: ['rc-open', 'rc-detail'], layout: 'pair' },
    ],
  },
  {
    slug: 'custom-emp-generator',
    title: 'Custom EMP Generator made from scratch.',
    cover: 'emp-coil',
    blocks: [
      {
        kind: 'paragraph',
        text: 'One of the first electronic projects I ever made was a custom EMP generator made from entirely scratch components. This was a highschool science faire project and probably one of the biggest things that pulled me into electrical engineering and continuing to go down this path.',
      },
      { kind: 'images', images: ['emp-coil'] },
    ],
  },
]
