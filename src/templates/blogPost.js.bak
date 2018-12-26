import React from 'react'
import Layout from '../components/layout/layout'
import Post from '../components/post/post'
import { graphql, StaticQuery } from 'gatsby'

const BlogPostTemplate = ({ pageContext }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
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
                case 'editor':
                  return (
                    <Post
                      data={com.data}
                      elemId={com.title.toLowerCase()}
                      key={i}
                    />
                  )
                default:
                  return ""
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

export default BlogPostTemplate
