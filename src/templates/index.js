import React from 'react'
import Layout from '../components/layout/layout'
import Banner from '../components/banner/banner'
import Grid from '../components/grid/grid'
import CallToAction from '../components/callToAction/callToAction'
import Contact from '../components/contact/contact'
import ImageText from '../components/imageText/imageText'
import Cards from '../components/cards/cards'

const IndexTemplate = ({ pageContext: { title, components } }) => (
  <Layout>
    {components.map((com, i) => {
      const Component = com.name.toLowerCase()
      switch (Component) {
        case 'banner':
          return (
            <Banner
              heading={com.heading}
              html={com.html}
              btnTxt={com.btnTxt}
              elemId={`${com.name}${com.position}`}
              key={i}
            />
          )
        case 'grid':
          return (
            <Grid
              heading={com.heading}
              description={com.description}
              tiles={com.tiles}
              elemId={`${com.name}${com.position}`}
              key={i}
            />
          )
        case 'calltoaction':
          return (
            <CallToAction
              heading={com.heading}
              html={com.html}
              btnTxt={com.btnTxt}
              elemId={`${com.name}${com.position}`}
              key={i}
              image={com.image}
            />
          )
        case 'contact':
          return (
            <Contact
              heading={com.heading}
              form={com.form}
              address={com.address}
              elemId={`${com.name}${com.position}`}
              key={i}
            />
          )
        case 'imagetext':
          return (
            <ImageText
              headline={com.headline}
              heading={com.heading}
              html={com.html}
              btnTxt={com.btnTxt}
              btnUrl={com.btnUrl}
              image={com.image}
              elemId={`${com.name}${com.position}`}
              imagePosition={com.imagePosition}
              key={i}
            />
          )
        case 'cards':
          return (
            <Cards
              headline={com.headline}
              moreTxt={com.moreTxt}
              cards={com.cards}
              elemId={`${com.name}${com.position}`}
              key={i}
            />
          )
        default:
          return ''
      }
    })}
  </Layout>
)

export default IndexTemplate
