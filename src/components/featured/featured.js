import React from 'react'
import './featured.scss'

const Featured = ({ meta: { banners }, elemId }) => (
  <section className="featured" id={elemId}>
    {banners.map(({ url, imgSrc, altText }) => {
      console.log(url)
      return (
      <div className="featured__banner">
        <a href={`https://${url}`} target="_blank" rel="noopener noreferrer">
          <img src={imgSrc} alt={altText} />
        </a>
      </div>
    )})}
  </section>
)

export default Featured
