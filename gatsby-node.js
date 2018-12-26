const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  let pages = []
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                template
                title
                slug
                component
                position
                heading
                btnTxt
                description
                icons
              }
              html
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        // Construct page
        const page = {
          title: node.frontmatter.title,
          template: node.frontmatter.template,
          slug: node.frontmatter.slug,
        }
        // Construct component
        const component = {
          name: node.frontmatter.component,
          position: node.frontmatter.position,
        }
        if (node.frontmatter.component === 'banner') {
          component.heading = node.frontmatter.heading
          component.btnTxt = node.frontmatter.btnTxt
          component.html = node.html
        }
        if (node.frontmatter.component === 'grid') {
          const texts = node.html.split('<hr>\n')
          const icons = node.frontmatter.icons.split(', ')
          component.heading = node.frontmatter.heading
          component.description = node.frontmatter.description
          component.tiles = texts.map((html, i) => ({
            html,
            icon: icons[i],
          }))
        }
        // Find page index if already exists
        const index = pages.findIndex(p => p.title === page.title)
        // Existing page, add component
        if (index > -1) {
          pages[index] = {
            ...pages[index],
            components: [...pages[index].components, component],
          }
        }
        // New page, destructure and reconstruct pages
        else {
          pages = [
            ...pages,
            {
              ...page,
              components: [component],
            },
          ]
        }
      })
      pages.forEach(page => {
        createPage({
          path: page.slug,
          component: path.resolve(`./src/templates/${page.template}.js`),
          context: {
            title: page.title,
            components: page.components.sort((a, b) => a.position - b.position),
          },
        })
      })
      resolve()
    })
  })
}
