import React from 'react'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'
import Excerpts from '../components/excerpts/excerpts'
import { graphql, StaticQuery } from 'gatsby'

const IndexTemplate = ({ pageContext }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const excerpts = data.allPagesJson.edges
          .filter(edge => edge.node.template === 'blogPost')
          .map(edge => ({
            ...edge.node.components.find(com => com.name === 'editor').data,
            slug: edge.node.slug,
          }))
        const page = data.allPagesJson.edges.find(
          edge => edge.node.id === pageContext.id
        )
        const components = page.node.components.sort(
          (a, b) => a.position - b.position
        )
        return (
          <Layout>
            {components.map((com, i) => {
              const Component = com.name.toLowerCase()
              switch (Component) {
                case 'hero':
                  return (
                    <Hero
                      data={com.data}
                      elemId={com.title.toLowerCase()}
                      key={i}
                    />
                  )
                case 'excerpts':
                  return (
                    <Excerpts
                      excerpts={excerpts}
                      elemId={com.title.toLowerCase()}
                      key={i}
                    />
                  )
                default:
                  return ''
              }
            })}
          </Layout>
        )
      }}
    />
  )
}

const query = graphql`
  query {
    allPagesJson {
      edges {
        node {
          id
          template
          slug
          components {
            name
            title
            position
            data {
              heading
              description
              html
            }
          }
        }
      }
    }
  }
`
export default IndexTemplate
