import React from 'react'
import { Link } from 'gatsby'
import './networkGraph.scss'
import withLocation from '../common/withLocation'
import withShowcase from '../common/withShowcase/withShowcase'
import { IMAGE_LEFT } from '../common/constants'

const NetworkGraph = ({
  meta: { headline, heading, html, btnTxt, btnUrl, icons, imagePosition },
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
    <div className="container">
      <div className="row">
        <div
          className={
            imagePosition === IMAGE_LEFT
              ? 'graph col-md-5'
              : 'graph col-md-5 offset-md-1 order-md-2'
          }
        >
          <div className="nodes">
            <div
              className="nodes__image"
              style={{ backgroundImage: `url(/icons/${icons[0]})` }}
            />
            <div className="node node--1">
              <div
                className="node__image node__image--1"
                style={{ backgroundImage: `url(/icons/${icons[1]})` }}
              />
            </div>
            <div className="node node--2">
              <div
                className="node__image node__image--2"
                style={{ backgroundImage: `url(/icons/${icons[2]})` }}
              />
            </div>
            <div className="node node--3">
              <div
                className="node__image node__image--3"
                style={{ backgroundImage: `url(/icons/${icons[3]})` }}
              />
            </div>
            <div className="node node--4">
              <div
                className="node__image node__image--4"
                style={{ backgroundImage: `url(/icons/${icons[4]})` }}
              />
            </div>
          </div>
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
                <Link className="primary-btn" to={btnUrl}>
                  {btnTxt}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default withLocation(withShowcase(NetworkGraph))
