import React from 'react'
import InViewMonitor from 'react-inview-monitor'
import { IMAGE_LEFT } from '../common/common'
import './imageText.scss'

const ImageText = ({
  heading,
  html,
  btnTxt,
  btnUrl,
  image,
  elemId,
  imagePosition,
}) => (
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
          {/*<InViewMonitor*/}
          {/*classNameNotInView="image-wrap"*/}
          {/*classNameInView="image-wrap inview"*/}
          {/*>*/}
          <div className="image-wrap inview">
            <div
              className="image"
              style={{ backgroundImage: `url(images/${image})` }}
            />
          </div>
          {/*</InViewMonitor>*/}
        </div>
        <div className="text-col col-md-5 offset-md-1">
          <div className="text-container">
            <div className="text-wrap">
              <h2>{heading}</h2>
              <div
                className="pt-20 pb-20"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              {btnTxt && (
                <a className="primary-btn" href={btnUrl} target="_blank">
                  {btnTxt}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ImageText
