import React from 'react'
import { Link } from 'gatsby'
import {
  BACKGROUND_SIZE_CONTAIN,
  BACKGROUND_SIZE_COVER,
  IMAGE_RIGHT,
} from '../common/constants'
import './imageText.scss'
import withLocation from '../common/withLocation'
import withShowcase from '../common/withShowcase/withShowcase'
import classNames from 'classnames'

/**
 * Utility to return classes for image column
 * @param imagePosition Where to position the image (left or right)
 * @returns {string}
 */
const getImageClass = imagePosition =>
  classNames({
    'image-text__image': true,
    'col-lg-6': true,
    'col-md-12': true,
    'offset-lg-1': imagePosition === IMAGE_RIGHT,
    'order-lg-last': imagePosition === IMAGE_RIGHT,
  })

/**
 * Utility to return class for text column
 * @param imagePosition Where to position the image (left or right)
 * @returns {string}
 */
const getTextClass = imagePosition =>
  classNames({
    'image-text__text': true,
    'col-lg-5': true,
    'col-md-12': true,
    'offset-lg-1': imagePosition !== IMAGE_RIGHT,
  })

/**
 * Utility to return styling for the background image
 * @param image The image to use as background
 * @param backgroundSize Value for the background-size property (contain/cover)
 * @returns An object with CSS properties
 */
const getImageStyle = (image, backgroundSize) => ({
  backgroundImage: `url(/images/${image})`,
  backgroundSize:
    backgroundSize === BACKGROUND_SIZE_CONTAIN
      ? BACKGROUND_SIZE_CONTAIN
      : BACKGROUND_SIZE_COVER,
})

/**
 * Renders a component with two columns: one column showing an image and the other showing text.
 * @param headline The text that appears above all texts
 * @param heading The title of the section
 * @param html The content of the markdown file in html format
 * @param btnTxt The text of the button, if left blank, button will be hidden
 * @param btnUrl The link to be followed when button is clicked
 * @param image The image to use
 * @param imagePosition The position of the image
 * @param backgroundSize The background-size property of the image
 * @param elemId The id for the root element of the component
 */
const ImageText = ({
  meta: {
    headline,
    heading,
    html,
    btnTxt,
    btnUrl,
    image,
    imagePosition,
    backgroundSize,
  },
  elemId,
}) => (
  <section className="image-text section-gap" id={elemId}>
    <div className="container">
      <div className="row">
        <div
          className={getImageClass(imagePosition)}
          style={getImageStyle(image, backgroundSize)}
        />
        <div className={getTextClass(imagePosition)}>
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
  </section>
)

export default withLocation(withShowcase(ImageText))
