import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Footer from '../footer/footer'
import Header from '../header/header'
import '../../sass/style.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== this.state.isScrolled) {
        this.setState({ isScrolled })
      }
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: 'Squaredev website',
                },
                {
                  name: 'keywords',
                  content:
                    'Squaredev, Software Development, Data Analytics, Data Visualisations',
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header isScrolled={this.state.isScrolled} />
            {this.props.children}
            <Footer />
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
