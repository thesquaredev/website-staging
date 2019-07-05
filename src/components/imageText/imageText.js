import React from 'react'
// import InViewMonitor from 'react-inview-monitor'
import { IMAGE_LEFT } from '../common/constants'
import './imageText.scss'
import withLocation from '../common/withLocation'
import withShowcase from '../common/withShowcase/withShowcase'

const ImageText = ({
  meta: { headline, heading, html, btnTxt, btnUrl, image, imagePosition },
  elemId,
}) => (
  <section
    className={
      imagePosition === IMAGE_LEFT
        ? 'image-text image-left section-gap'
        : 'image-text image-right section-gap'
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
              style={{ backgroundImage: `url(/images/${image})` }}
            />
          </div>
          {/*</InViewMonitor>*/}
        </div>
        <div
          className={
            imagePosition === IMAGE_LEFT
              ? 'text-col col-md-6 offset-md-1'
              : 'text-col col-md-6'
          }
        >
          <div className="text-container">
            <div className="text-wrap">
              <h6>{headline}</h6>
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

export default withLocation(withShowcase(ImageText))
