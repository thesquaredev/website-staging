import React from 'react'
import { Link } from 'gatsby'
import './excerpts.scss'

const Excerpt = ({ heading, html, slug }) => (
  <div className="excerpt">
    <Link to={slug}>
      <h3 className="excerpt__heading">{heading}</h3>
    </Link>
    <div
      className="excerpt__content"
      dangerouslySetInnerHTML={{ __html: `${html.substring(0, 240)}...` }}
    />
  </div>
)

const Excerpts = ({ excerpts, elemId }) => (
  <section className="excerpts" id={elemId}>
    <div className="container">
      {excerpts.map(({ heading, html, slug }, i) => {
        return <Excerpt heading={heading} html={html} slug={slug} key={i} />
      })}
    </div>
  </section>
)

export default Excerpts
