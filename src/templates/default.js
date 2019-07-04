import React from 'react'
import Layout from '../components/layout/layout'
import Banner from '../components/banner/banner'
import Grid from '../components/grid/grid'
import CallToAction from '../components/callToAction/callToAction'
import Contact from '../components/contact/contact'
import ImageText from '../components/imageText/imageText'
import Cards from '../components/cards/cards'
import Hero from '../components/hero/hero'

/**
 * Utility to resolve the component in use
 * @param meta Component's meta
 * @param elemId Section's id, used for anchoring
 * @param i Index used for mapping
 */
const componentResolver = (meta, elemId, i) => ({
  ['banner']: <Banner meta={meta} elemId={elemId} key={i} />,
  ['grid']: <Grid meta={meta} elemId={elemId} key={i} />,
  ['calltoaction']: <CallToAction meta={meta} elemId={elemId} key={i} />,
  ['contact']: <Contact meta={meta} elemId={elemId} key={i} />,
  ['imagetext']: <ImageText meta={meta} elemId={elemId} key={i} />,
  ['cards']: <Cards meta={meta} elemId={elemId} key={i} />,
  ['hero']: <Hero meta={meta} elemId={elemId} key={i} />,
})

/**
 * Component for laying out a default page
 * @param components
 */
const DefaultTemplate = ({ pageContext: { components } }) => (
  <Layout>
    {components.map((meta, i) => {
      const comName = meta.name.toLowerCase()
      const elemId = `${comName}${meta.position}`
      return componentResolver(meta, elemId, i)[comName]
    })}
  </Layout>
)

export default DefaultTemplate
