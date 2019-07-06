import React from 'react'
import Layout from '../components/layout/layout'
import Banner from '../components/banner/banner'
import CallToAction from '../components/callToAction/callToAction'
import Cards from '../components/cards/cards'
import ImageText from '../components/imageText/imageText'
import Grid from '../components/grid/grid'
import Hero from '../components/hero/hero'
import Pills from '../components/pills/pills'
import { IMAGE_LEFT } from '../components/common/constants'

const lorem =
  'Lorem ipsum dolor sit amet, utamur consetetur nam an, per et graece disputando, an probo copiosae mnesarchum eum. Te nominavi quaerendum vim, ullum dicit ea est. Ne vim natum meliore omnesque. Mundi ornatus habemus nam no, utinam essent option an has. Denique volutpat has cu. Ad sit inani exerci phaedrum.'
const meta = {
  heading: lorem.substring(0, 11),
  btnTxt: lorem.substring(0, 11),
  btnUrl: '#',
  description: lorem.substring(0, 60),
  imagePosition: IMAGE_LEFT,
  moreTxt: lorem.substring(0, 11),
  headline: lorem.substring(0, 30),
  image: 'grid.jpg',
  html: `<p>${lorem.substring(0, 150)}</p>`,
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
  ]
}

const Showcase = () => (
  <Layout>
    <Banner meta={{ ...meta, name: 'Banner' }} />
    <Cards meta={{ ...meta, name: 'Cards' }} />
    <CallToAction meta={{ ...meta, name: 'CallToAction' }} />
    <Grid meta={{ ...meta, name: 'Grid' }} />
    <Hero meta={{ ...meta, name: 'Hero' }} />
    <Pills meta={{ ...meta, name: 'Pills' }} />
    <ImageText meta={{ ...meta, name: 'ImageText' }} />
  </Layout>
)

export default Showcase
