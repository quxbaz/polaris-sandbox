import React from 'react'
import {Card} from '@shopify/polaris'
import {ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, Label} from 'recharts'
import colors from './colors'
import {formatTick} from './util'
import CustomLegend from './CustomLegend'

//
import {generateNormalReports} from './debug'

const LINE_PROPS = {type: 'monotone', dot: false, strokeWidth: 2.5}
const DATA = generateNormalReports()

const LabelY = () => (
  <span>foobar</span>
)

function ReportsLineChart () {
  return (
    <Card title="SMS Messages - Trend">
      <Card.Section title="Last 60 days">
        <ResponsiveContainer height={240}>
          <LineChart data={DATA} margin={{top: 0, right: 0, bottom: 0, left: 0}}>
            <CartesianGrid stroke='hsl(0, 0%, 92%)' />
            <XAxis dataKey="date"
                   axisLine={{stroke: colors.AXIS_LINE, strokeWidth: 1}}
                   tick={{fill: colors.TICK}} tickSize={12} tickMargin={4}
                   tickLine={{stroke: colors.TICK_LINE}} minTickGap={30} tickFormatter={formatTick} />
            <YAxis mirror label={LabelY} />
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
