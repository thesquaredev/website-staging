import React from 'react'
import './withShowcase.scss'
import { SHOWCASE } from '../constants'

const withShowcase = WrappedComponent =>
  class extends React.Component {
    render() {
      return this.props.location.search.includes(SHOWCASE) ? (
        <div className="showcase" data-name={this.props.meta.name}>
          <WrappedComponent {...this.props} />
        </div>
      ) : (
        <WrappedComponent {...this.props} />
      )
    }
  }

export default withShowcase
