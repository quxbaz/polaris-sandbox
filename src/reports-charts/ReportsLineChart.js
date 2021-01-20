import React from 'react'
import {Card} from '@shopify/polaris'
import {
  ResponsiveContainer, LineChart, CartesianGrid,
  XAxis, YAxis, Legend, Tooltip,
  Line, Label,
} from 'recharts'
import colors from './colors'
import {formatTick} from './util'
import debug from './debug'

const LINE_PROPS = {type: 'linear', dot: false, strokeWidth: 1.5}
const DATA = debug.generateNormalReports()

function ReportsLineChart () {
  return (
    <Card title="SMS Message status over time">
      <br />
      <ResponsiveContainer aspect={1.6}>
        <LineChart data={DATA} margin={{top: 0, right: 45, left: 0, bottom: 0}}>
          <CartesianGrid stroke='hsl(0, 0%, 92%)' />
          <XAxis dataKey='date' minTickGap={30} tickFormatter={formatTick} />
          <YAxis tickLine={false}>
            <Label angle={-90} value='Messages' position='insideLeft' style={{textAnchor: 'middle'}} />
          </YAxis>
          <Legend verticalAlign='bottom' height={36} iconType='plainline' />
          <Tooltip isAnimationActive={false} />
          <Line {...LINE_PROPS} name='Sent'    dataKey='quantity_sent'    stroke={colors.SENT} />
          <Line {...LINE_PROPS} name='Pending' dataKey='quantity_pending' stroke={colors.PENDING} />
          <Line {...LINE_PROPS} name='Failed'  dataKey='quantity_failed'  stroke={colors.FAILED} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default ReportsLineChart
