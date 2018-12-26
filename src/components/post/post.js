import React from 'react'
import './post.scss'

const Post = ({ data: { heading, description, html }, elemId }) => (
  <section className="post" id={elemId}>
    <div className="container">
      <div className="post__hero row">
        <div className="col-lg-10">
          <h2 className="post__hero__heading">{heading}</h2>
          <p className="post__hero__description">{description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div
            className="post__content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  </section>
)

export default Post
