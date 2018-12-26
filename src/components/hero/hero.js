import React from 'react';

const Hero = ({ data: { heading, description }, elemId }) => (
  <section className="generic-banner relative" id={elemId}>
    <div className="container">
      <div className="row height align-items-center justify-content-center">
        <div className="col-lg-10">
          <div className="generic-banner-content">
            <h2 className="text-white">{heading}</h2>
            <p className="text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero;
