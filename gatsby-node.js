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
              fileAbsolutePath
              frontmatter {
                template
                component
                heading
                btnTxt
                btnUrl
                description
                image
                imagePosition
                backgroundSize
                headline
                showAddress
                formTitle
                formNamePlaceholder
                formEmailPlaceholder
                formCompanyPlaceholder
                formJobPlaceholder
                formMessagePlaceholder
                formSubmitBtnTxt
                addressTitle
                addressLine1
                addressLine2
                addressCountry
                addressEmail
                icon
              }
              html
            }
          }
        }
      }
    `).then(result => {
      // When GraphQL fails to read markdown files (usually a field is missing from frontmatter), Gatsby throws a shitty
      // generic error, that tells nada about the real issue. So, we catch and throw an exception showing the real error
      if (!result.data) {
        const message = result.errors[0].message
        throw new Error(message)
      }
      // Read markdown data
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        // Get title, position and slug from path
        const filePath = node.fileAbsolutePath
        const title = filePath.split('/').slice(-2, -1)[0]
        // Get slug from path, if path is 'home' then change it to root ('/')
        const shortPath = filePath
          .split('/src/pages')[1]
          .split('/')
          .slice(1, -1)
          .join('/')
        const slug = shortPath === 'home' ? '/' : `/${shortPath}`
        // Check if a number prefix is used in the file for positioning.
        // If not, the position returned will be 0
        const prefix = filePath
          .split('/')
          .slice(-1)[0]
          .split('-')[0]
        const position = !isNaN(prefix) ? prefix : 0

        // Construct page
        const page = {
          title,
          template: node.frontmatter.template,
          slug,
        }
        // Construct component
        const component = {
          name: node.frontmatter.component,
          position,
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
          component.backgroundSize = node.frontmatter.backgroundSize
          component.html = node.html
        }
        if (node.frontmatter.component === 'grid') {
          const tiles = node.html.split('<hr>\n')
          component.heading = node.frontmatter.heading
          component.description = node.frontmatter.description
          component.tiles = tiles.map((tile, i) => ({
            heading: getTextContent(tile, 'h1'),
            icon: getTextContent(tile, 'h2'),
            description: getTextContent(tile, 'p'),
          }))
        }
        if (node.frontmatter.component === 'cards') {
          const cards = node.html.split('<hr>\n')
          component.heading = node.frontmatter.heading
          component.icon = node.frontmatter.icon
          component.cards = cards.map(card => ({
            headline: getTextContent(card, 'h1'),
            heading: getTextContent(card, 'h2'),
            icon: getTextContent(card, 'h3'),
            url: getTextContent(card, 'h4'),
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
          component.image = node.frontmatter.image
          const quarters = node.html.split('<hr>\n')
          component.quarters = quarters.map(quarter => ({
            heading: getTextContent(quarter, 'h1'),
            icon: getTextContent(quarter, 'h2'),
            description: getTextContent(quarter, 'p'),
          }))
        }
        if (node.frontmatter.component === 'contact') {
          component.heading = node.frontmatter.heading
          component.icon = node.frontmatter.icon
          component.description = node.frontmatter.description
          component.showAddress = node.frontmatter.showAddress
          component.form = {
            title: node.frontmatter.formTitle,
            namePlaceholder: node.frontmatter.formNamePlaceholder,
            emailPlaceholder: node.frontmatter.formEmailPlaceholder,
            companyPlaceholder: node.frontmatter.formCompanyPlaceholder,
            jobPlaceholder: node.frontmatter.formJobPlaceholder,
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
        if (node.frontmatter.component === 'featured') {
          const banners = node.html.split('<hr>\n')
          component.banners = banners.map(banner => ({
            url: getTextContent(banner, 'h1'),
            imgSrc: getTextContent(banner, 'h2'),
            altText: getTextContent(banner, 'h3'),
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
