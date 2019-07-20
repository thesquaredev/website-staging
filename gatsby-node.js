const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const getTextContent = (str, strElem) => {
  if (str && str.indexOf(strElem) > -1) {
    const start = str.indexOf(`<${strElem}>`) + strElem.length + 2
    const end = str.indexOf(`</${strElem}>`)
    return str.substring(start, end)
  }
  return null
}

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
                btnUrl
                description
                image
                imagePosition
                moreTxt
                headline
                # icons
                # formTitle
                # formNamePlaceholder
                # formEmailPlaceholder
                # formMessagePlaceholder
                # formSubmitBtnTxt
                # addressTitle
                # addressLine1
                # addressLine2
                # addressCountry
                # addressEmail
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
        if (
          node.frontmatter.component === 'banner' ||
          node.frontmatter.component === 'callToAction' ||
          node.frontmatter.component === 'imageText' ||
          node.frontmatter.component === 'hero'
        ) {
          component.headline = node.frontmatter.headline
          component.heading = node.frontmatter.heading
          component.btnTxt = node.frontmatter.btnTxt
          component.btnUrl = node.frontmatter.btnUrl
          component.description = node.frontmatter.description
          component.image = node.frontmatter.image
          component.imagePosition = node.frontmatter.imagePosition
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
        if (node.frontmatter.component === 'cards') {
          const cards = node.html.split('<hr>\n')
          component.headline = node.frontmatter.headline
          component.moreTxt = node.frontmatter.moreTxt
          component.cards = cards.map(card => ({
            industry: getTextContent(card, 'h1'),
            heading: getTextContent(card, 'h2'),
            image: getTextContent(card, 'h3'),
            description: getTextContent(card, 'p'),
          }))
        }
        if (node.frontmatter.component === 'pills') {
          const pills = node.html.split('<hr>\n')
          component.pills = pills.map(pill => ({
            heading: getTextContent(pill, 'h1'),
            icon: getTextContent(pill, 'h2'),
            description: getTextContent(pill, 'p'),
          }))
        }
        if (node.frontmatter.component === 'quartet') {
          component.heading = node.frontmatter.heading
          component.description = node.frontmatter.description
          const quarters = node.html.split('<hr>\n')
          component.quarters = quarters.map(quarter => ({
            heading: getTextContent(quarter, 'h1'),
            icon: getTextContent(quarter, 'h2'),
            description: getTextContent(quarter, 'p'),
          }))
        }
        if (node.frontmatter.component === 'contact') {
          component.heading = node.frontmatter.heading
          component.form = {
            title: node.frontmatter.formTitle,
            namePlaceholder: node.frontmatter.formNamePlaceholder,
            emailPlaceholder: node.frontmatter.formEmailPlaceholder,
            messagePlaceholder: node.frontmatter.formMessagePlaceholder,
            submitBtnTxt: node.frontmatter.formSubmitBtnTxt,
          }
          component.address = {
            title: node.frontmatter.addressTitle,
            line1: node.frontmatter.addressLine1,
            line2: node.frontmatter.addressLine2,
            country: node.frontmatter.addressCountry,
            email: node.frontmatter.addressEmail,
          }
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
