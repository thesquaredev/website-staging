import React from 'react'
import Layout from '../components/layout/layout'
import Banner from '../components/banner/banner'
import CallToAction from '../components/callToAction/callToAction'
import Cards from '../components/cards/cards'
import ImageText from '../components/imageText/imageText'
import Grid from '../components/grid/grid'
import Hero from '../components/hero/hero'
import Pills from '../components/pills/pills'
import Quartet from '../components/quartet/quartet'
import mockData from '../components/common/mockData'

const meta = mockData;

const Showcase = () => (
  <Layout>
    <Banner meta={{ ...meta, name: 'Banner' }} />
    <Cards meta={{ ...meta, name: 'Cards' }} />
    <CallToAction meta={{ ...meta, name: 'CallToAction' }} />
    <Grid meta={{ ...meta, name: 'Grid' }} />
    <Hero meta={{ ...meta, name: 'Hero' }} />
    <Pills meta={{ ...meta, name: 'Pills' }} />
    <ImageText meta={{ ...meta, name: 'ImageText' }} />
    <Quartet meta={{ ...meta, name: 'Quartet' }} />
  </Layout>
)

export default Showcase
