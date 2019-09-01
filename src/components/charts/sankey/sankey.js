import React from 'react'
import { ResponsiveSankey } from '@nivo/sankey'

/**
 * The data to use in the chart below
 */
const data = {
  "nodes": [
    {
      "id": "Mexico",
      "color": "hsl(347, 70%, 50%)"
    },
    {
      "id": "Argentina",
      "color": "hsl(151, 70%, 50%)"
    },
    {
      "id": "United States",
      "color": "hsl(232, 70%, 50%)"
    },
    {
      "id": "Panama",
      "color": "hsl(306, 70%, 50%)"
    },
    {
      "id": "Colombia",
      "color": "hsl(149, 70%, 50%)"
    },
    {
      "id": "Canada",
      "color": "hsl(191, 70%, 50%)"
    }
  ],
  "links": [
    {
      "source": "Argentina",
      "target": "Canada",
      "value": 116
    },
    {
      "source": "Argentina",
      "target": "Panama",
      "value": 9
    },
    {
      "source": "Argentina",
      "target": "Colombia",
      "value": 41
    },
    {
      "source": "Argentina",
      "target": "United States",
      "value": 128
    },
    {
      "source": "Argentina",
      "target": "Mexico",
      "value": 91
    },
    {
      "source": "Mexico",
      "target": "Canada",
      "value": 125
    },
    {
      "source": "Mexico",
      "target": "United States",
      "value": 190
    },
    {
      "source": "Mexico",
      "target": "Colombia",
      "value": 120
    },
    {
      "source": "Colombia",
      "target": "Canada",
      "value": 164
    },
    {
      "source": "Colombia",
      "target": "Panama",
      "value": 159
    },
    {
      "source": "Colombia",
      "target": "United States",
      "value": 149
    },
    {
      "source": "Panama",
      "target": "United States",
      "value": 87
    },
    {
      "source": "Panama",
      "target": "Canada",
      "value": 175
    }
  ]
}

/**
 * Renders a Nivo Sankey chart
 * @returns {*}
 * @constructor
 */
const Sankey = () => (
  <ResponsiveSankey
    data={data}
    margin={{ top: 40, right: 160, bottom: 40, left: 0 }}
    align="justify"
    colors={['#012690', '#1CAFC6']}
    nodeOpacity={1}
    nodeThickness={18}
    nodeInnerPadding={3}
    nodeSpacing={24}
    nodeBorderWidth={0}
    nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
    linkOpacity={0.5}
    linkHoverOthersOpacity={0.1}
    enableLinkGradient={true}
    labelPosition="outside"
    labelOrientation="vertical"
    labelPadding={16}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1]] }}
    animate={true}
    motionStiffness={140}
    motionDamping={13}
    enableLabels={true}
    nodeTooltip={() => <span style={{ background: 'transparent' }} />}
    linkTooltip={() => <span style={{ background: 'transparent' }} />}
    tooltipFormat={() => {}}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        translateX: 130,
        itemWidth: 100,
        itemHeight: 14,
        itemDirection: 'right-to-left',
        itemsSpacing: 2,
        itemTextColor: '#999',
        symbolSize: 14,
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000',
            },
          },
        ],
      },
    ]}
  />
)

export default Sankey
