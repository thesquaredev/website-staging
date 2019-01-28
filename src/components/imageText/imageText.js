import React from 'react'
import InViewMonitor from 'react-inview-monitor'
import { Link } from 'gatsby'
import { IMAGE_LEFT } from '../common/common'
import './imageText.scss'

const ImageText = ({ heading, html, btnTxt, image, elemId, imagePosition }) => (
  <section
    className={
      imagePosition === IMAGE_LEFT
        ? 'image-text image-left'
        : 'image-text image-right'
    }
    id={elemId}
  >
    <div className="container m-auto">
      <div className="row">
        <div
          className={
            imagePosition === IMAGE_LEFT
              ? 'col-md-5 image-col'
              : 'col-md-5 image-col offset-md-1 order-md-2'
          }
        >
          <div className="image-wrap">
            <InViewMonitor
              classNameNotInView=""
              classNameInView="inview"
            >
              <div
                className="image"
                style={{ backgroundImage: `url(images/${image})` }}
              />
            </InViewMonitor>
          </div>
        </div>
        <div className="text-col col-md-5 offset-md-1">
          <div className="text-container">
            <div className="text-wrap">
              <h2>{heading}</h2>
              <div
                className="pt-20 pb-20"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <Link className="primary-btn" to="">
                {btnTxt}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ImageText
