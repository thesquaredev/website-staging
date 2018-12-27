import React from 'react'
import Layout from '../components/layout/layout'
import Banner from '../components/banner/banner'
import Grid from '../components/grid/grid'
import CallToAction from '../components/callToAction/callToAction'
import Contact from '../components/contact/contact'

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
        default:
          return ''
      }
    })}
  </Layout>
)

export default IndexTemplate
