import React from 'react'
import { ResponsiveChord } from '@nivo/chord'

/**
 * Data to use for the chart
 */
const matrix = [
  [379, 221, 294, 329, 345],
  [256, 189, 398, 338, 613],
  [452, 1066, 182, 195, 389],
  [1536, 1244, 283, 171, 113],
  [1701, 46, 485, 445, 480],
]

/**
 * Renders a Nivo chord chart
 */
const Chord = () => (
  <ResponsiveChord
    matrix={matrix}
    keys={['John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim']}
    margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
    valueFormat=".2f"
    padAngle={0.02}
    innerRadiusRatio={0.96}
    innerRadiusOffset={0.02}
    arcOpacity={1}
    arcBorderWidth={1}
    arcBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
    ribbonOpacity={0.5}
    ribbonBorderWidth={1}
    ribbonBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
    enableLabel={false}
    label="id"
    labelOffset={12}
    labelRotation={-90}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1]] }}
    colors={['#012690', '#1CAFC6']}
    isInteractive={true}
    arcHoverOpacity={1}
    arcHoverOthersOpacity={0.25}
    ribbonHoverOpacity={0.75}
    ribbonHoverOthersOpacity={0.25}
    animate={true}
    motionStiffness={90}
    motionDamping={7}
    arcTooltip={() => <span />}
    ribbonTooltip={() => <span />}
  />
)

export default Chord
