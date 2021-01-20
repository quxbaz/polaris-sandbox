import React from 'react'
import {Card} from '@shopify/polaris'
import {
  ResponsiveContainer, BarChart, CartesianGrid,
  XAxis, YAxis, Legend, Tooltip, Bar,
} from 'recharts'
import colors from './colors'
import {formatTick} from './util'
import debug from './debug'

const BAR_PROPS = {minPointSize: 6}
const DATA = debug.generateNormalReports()

function ReportsLineChart () {
  return (
    <Card title="SMS Message status over time">
      <br />
      <ResponsiveContainer aspect={1.6}>
        <BarChart data={DATA} barGap={0} barCategoryGap="15%" reverseStackOrder={true}>
          <CartesianGrid stroke="hsl(0, 0%, 92%)" />
          <XAxis dataKey="date" tickLine={false} tickFormatter={formatTick} />
          <YAxis />
          <Legend verticalAlign="bottom" height={36} iconType="square" />
          <Tooltip isAnimationActive={false} cursor={{fill: "hsl(44 81% 62% / 0.3)"}} />
          <Bar {...BAR_PROPS} name="Sent"    dataKey="quantity_sent" fill={colors.SENT} />
          <Bar {...BAR_PROPS} name="Pending" dataKey="quantity_pending" fill={colors.PENDING} />
          <Bar {...BAR_PROPS} name="Failed"  dataKey="quantity_failed" fill={colors.FAILED} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default ReportsLineChart
