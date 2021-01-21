import React from 'react'
import {Card} from '@shopify/polaris'
import {ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar} from 'recharts'
import colors from './colors'
import {formatTick} from './util'
import CustomLegend from './CustomLegend'

//
import debug from './debug'

const BAR_PROPS = {minPointSize: 6}
const DATA = debug.generateNormalReports()

function ReportsLineChart () {
  return (
    <Card title="SMS Messages - Recent">
      <Card.Section title="Last 14 days">
        <ResponsiveContainer aspect={1.6}>
          <BarChart data={DATA} barGap={0} barCategoryGap="15%" reverseStackOrder={true}>
            <CartesianGrid stroke="hsl(0, 0%, 92%)" />
            <XAxis dataKey="date" tickLine={false} tickFormatter={formatTick} />
            <YAxis />
            <Tooltip isAnimationActive={false} cursor={{fill: "hsl(44 81% 62% / 0.3)"}} />
            <Bar {...BAR_PROPS} name="Sent"    dataKey="quantity_sent" fill={colors.SENT} />
            <Bar {...BAR_PROPS} name="Pending" dataKey="quantity_pending" fill={colors.PENDING} />
            <Bar {...BAR_PROPS} name="Failed"  dataKey="quantity_failed" fill={colors.FAILED} />
          </BarChart>
        </ResponsiveContainer>
        <CustomLegend />
      </Card.Section>
    </Card>
  )
}

export default ReportsLineChart
