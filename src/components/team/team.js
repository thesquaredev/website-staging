import React from 'react'
import './team.scss'

/**
 * Renders a member box
 * @param name Team member's name
 * @param position Team member's job position
 * @param photo Team member's photo
 * @param url The url to follow when clicking the card
 */
const Member = ({ name, position, photo }) => (
  <div
    className="member"
    style={{
      padding: ['50px', '65px', '80px'][Math.floor(Math.random() * 3)],
      order: Math.floor(Math.random() * 5) + 1,
    }}
  >
    <div className="member__img-wrapper">
      <img src={`/images/${photo}`} alt="" />
    </div>
    <h3 className="member__name" dangerouslySetInnerHTML={{ __html: name }} />
    <div
      className="member__position"
      dangerouslySetInnerHTML={{ __html: position }}
    />
  </div>
)

/**
 * Renders a team component
 * @param heading The text that appears in the upper left area of the section
 * @param description Description text for the team
 * @param icon The icon to accompany the heading
 * @param members An object containing an array of member properties
 * @param elemId The id of the root element of the section
 */
const Team = ({ meta: { heading, description, icon, members }, elemId }) => (
  <section className="team section-gap" id={elemId}>
    <div className="container">
      <div className="team__wrapper">
        <div className="team__intro">
          <div className="team__heading">
            <h2 dangerouslySetInnerHTML={{ __html: heading }} />
            <img src={`/icons/${icon}`} alt="" />
          </div>
          <div className="team__description">
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
        {members.map(({ name, position, photo }, i) => {
          return (
            <Member name={name} position={position} photo={photo} key={i} />
          )
        })}
      </div>
    </div>
  </section>
)

export default Team
