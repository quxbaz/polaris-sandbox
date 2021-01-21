import React from 'react'
import {Card} from '@shopify/polaris'
import {ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar} from 'recharts'
import colors from './colors'
import CustomLegend from './CustomLegend'

//
import debug from './debug'

// const DATA = debug.generateNormalReports()

const DATA = [
  {"name": "sent",    "value": 32},
  {"name": "pending", "value": 4},
  {"name": "failed",  "value": 2},
]

const BarLabel = () => (
  <div>foobar</div>
)

function ReportsBarChart () {
  return (
    <Card title="SMS Messages - Recent">
      <Card.Section title="Last 14 days">
        <ResponsiveContainer aspect={1.6}>
          <BarChart data={DATA} layout="vertical">
            <CartesianGrid stroke="hsl(0, 0%, 92%)" />
            <XAxis type="number" />
            <YAxis type="category" />
            <Tooltip isAnimationActive={false} cursor={{fill: "hsl(44 81% 62% / 0.3)"}} />
            <Bar dataKey="value" label={BarLabel} />
          </BarChart>
        </ResponsiveContainer>
        <CustomLegend align="left" />
      </Card.Section>
    </Card>
  )
}

export default ReportsBarChart
