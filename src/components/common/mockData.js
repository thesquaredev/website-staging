import { IMAGE_LEFT } from './constants'

const lorem =
  'Lorem ipsum dolor sit amet, utamur consetetur nam an, per et graece disputando, an probo copiosae mnesarchum eum. Te nominavi quaerendum vim, ullum dicit ea est. Ne vim natum meliore omnesque. Mundi ornatus habemus nam no, utinam essent option an has. Denique volutpat has cu. Ad sit inani exerci phaedrum.'

const mockData = {
  heading: lorem.substring(0, 11),
  btnTxt: lorem.substring(0, 11),
  btnUrl: '#',
  description: lorem.substring(0, 60),
  imagePosition: IMAGE_LEFT,
  moreTxt: lorem.substring(0, 11),
  headline: lorem.substring(0, 30),
  image: 'grid.jpg',
  html: `<p>${lorem.substring(0, 150)}</p>`,
  icon: 'lab-tubes.png',
  icons: [
    'lab-tubes.png',
    'lab-tubes.png',
    'lab-tubes.png',
    'lab-tubes.png',
    'lab-tubes.png',
  ],
  cards: [
    {
      industry: lorem.substring(0, 11),
      heading: lorem.substring(0, 60),
      description: lorem.substring(0, 150),
      image: 'grid.jpg',
      moreTxt: lorem.substring(0, 11),
    },
    {
      industry: lorem.substring(0, 11),
      heading: lorem.substring(0, 60),
      description: lorem.substring(0, 150),
      image: 'grid.jpg',
      moreTxt: lorem.substring(0, 11),
    },
    {
      industry: lorem.substring(0, 11),
      heading: lorem.substring(0, 60),
      description: lorem.substring(0, 150),
      image: 'grid.jpg',
      moreTxt: lorem.substring(0, 11),
    },
  ],
  tiles: [
    {
      html: `<p>${lorem.substring(0, 150)}</p>`,
      icon: 'engineering.svg',
    },
    {
      html: `<p>${lorem.substring(0, 150)}</p>`,
      icon: 'networking.svg',
    },
    {
      html: `<p>${lorem.substring(0, 150)}</p>`,
      icon: 'iot.svg',
    },
    {
      html: `<p>${lorem.substring(0, 150)}</p>`,
      icon: 'ml.svg',
    },
  ],
  pills: [
    {
      heading: lorem.substring(0, 60),
      icon: 'lab-tubes.png',
      description: lorem.substring(0, 150),
    },
    {
      heading: lorem.substring(0, 60),
      icon: 'lab-tubes.png',
      description: lorem.substring(0, 150),
    },
    {
      heading: lorem.substring(0, 60),
      icon: 'lab-tubes.png',
      description: lorem.substring(0, 150),
    },
  ],
  quarters: [
    {
      heading: lorem.substring(0, 60),
      icon: 'lab-tubes.png',
      description: lorem.substring(0, 150),
    },
    {
      heading: lorem.substring(0, 60),
      icon: 'lab-tubes.png',
      description: lorem.substring(0, 150),
    },
    {
      heading: lorem.substring(0, 60),
      icon: 'lab-tubes.png',
      description: lorem.substring(0, 150),
    },
    {
      heading: lorem.substring(0, 60),
      icon: 'lab-tubes.png',
      description: lorem.substring(0, 150),
    },
  ],
}

export default mockData
