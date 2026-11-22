import type { ImageId } from './projects'

type ProjectImage = {
  width: number
  height: number
  thumbnail?: { width: number; height: number }
  detailWidth: string
  alt: string
}

export const projectImages: Record<ImageId, ProjectImage> = {
  'power-schematic': {
    width: 1249, height: 619, detailWidth: '100%',
    alt: 'LTspice schematic of the high-voltage power supply',
  },
  'power-graph': {
    width: 2048, height: 476, detailWidth: '100%',
    alt: 'LTspice graph of simulated voltage over time',
  },
  'power-front': {
    width: 1500, height: 1051, detailWidth: '100%',
    thumbnail: { width: 840, height: 589 },
    alt: 'Completed transformer power supply mounted in a wooden frame',
  },
  'power-top': {
    width: 906, height: 1500, detailWidth: '100%',
    alt: 'Overhead view of the transformer and power supply assembly',
  },
  'power-test': {
    width: 1500, height: 872, detailWidth: '100%',
    alt: 'Power supply test setup with a multimeter and a variac',
  },
  'synth-astable': {
    width: 713, height: 340, detailWidth: '49%',
    alt: 'Astable multivibrator circuit diagram',
  },
  'synth-envelope': {
    width: 1410, height: 811, detailWidth: '100%',
    thumbnail: { width: 840, height: 483 },
    alt: 'Audio control and envelope circuit diagram',
  },
  'robot-car': {
    width: 1266, height: 1500, detailWidth: '47%',
    thumbnail: { width: 840, height: 995 },
    alt: 'TI-RSLK robot with a red circuit board and wired breadboard',
  },
  'robot-simulation': {
    width: 1167, height: 906, detailWidth: '69%',
    alt: 'Steering simulation with a robot view and three response plots',
  },
  'traffic-schematic': {
    width: 892, height: 531, detailWidth: '73%',
    alt: 'Logic circuit diagram for the traffic light controller',
  },
  'traffic-board': {
    width: 1386, height: 1070, detailWidth: '73%',
    thumbnail: { width: 840, height: 648 },
    alt: 'Traffic light controller built on wired breadboards',
  },
  'rc-open': {
    width: 954, height: 1500, detailWidth: '100%',
    thumbnail: { width: 840, height: 534 },
    alt: 'Top view of the RC car chassis beside its red printed shell',
  },
  'rc-detail': {
    width: 753, height: 1500, detailWidth: '100%',
    alt: 'Close-up of the RC car battery, controller, and wiring',
  },
  'emp-coil': {
    width: 216, height: 188, detailWidth: '13.5rem',
    alt: 'Close-up of a copper coil on dark fabric',
  },
}
