import React from 'react'
import {Card} from '@shopify/polaris'
import {
  ResponsiveContainer, LineChart, CartesianGrid,
  XAxis, YAxis, Tooltip,
  Line, Label,
} from 'recharts'
import colors from './colors'
import {formatTick} from './util'
import CustomLegend from './CustomLegend'

//
import debug from './debug'

const LINE_PROPS = {type: 'linear', dot: false, strokeWidth: 1.5}
const DATA = debug.generateNormalReports()

function ReportsLineChart () {
  return (
    <Card>
      <Card.Section title="SMS Messages - last 60 days">
        <ResponsiveContainer aspect={1.6}>
          <LineChart data={DATA} margin={{top: 0, right: 45, left: 0, bottom: 0}}>
            <CartesianGrid stroke='hsl(0, 0%, 92%)' />
            <XAxis dataKey='date' minTickGap={30} tickFormatter={formatTick} />
            <YAxis tickLine={false}>
              <Label angle={-90} value='Messages' position='insideLeft' style={{textAnchor: 'middle'}} />
            </YAxis>
            <Tooltip isAnimationActive={false} />
            <Line {...LINE_PROPS} name='Sent'    dataKey='quantity_sent'    stroke={colors.SENT} />
            <Line {...LINE_PROPS} name='Pending' dataKey='quantity_pending' stroke={colors.PENDING} />
            <Line {...LINE_PROPS} name='Failed'  dataKey='quantity_failed'  stroke={colors.FAILED} />
          </LineChart>
        </ResponsiveContainer>
        <CustomLegend />
      </Card.Section>
    </Card>
  )
}

export default ReportsLineChart
