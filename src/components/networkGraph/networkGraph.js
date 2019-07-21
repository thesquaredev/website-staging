import React from 'react'
import { Link } from 'gatsby'
import './networkGraph.scss'
import withLocation from '../common/withLocation'
import withShowcase from '../common/withShowcase/withShowcase'

const NetworkGraph = ({
  meta: { headline, heading, html, btnTxt, btnUrl, nodes },
  elemId,
}) => (
  <section className="image-text section-gap" id={elemId}>
    <div className="container">
      <div className="row">
        <div className="graph col-md-5">
          <div className="nodes">
            <div className="node node--1" />
            <div className="node node--2" />
            <div className="node node--3" />
            <div className="node node--4" />
          </div>
        </div>

        <div className="text-col col-md-6 offset-md-1">
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
