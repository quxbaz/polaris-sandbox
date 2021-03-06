import chartStyles from './chart-styles.module.css'
import React from 'react'
import {Card} from '@shopify/polaris'
import {ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line} from 'recharts'
import colors from './colors'
import {formatDate, formatTick} from './util'
import CustomLegend from './CustomLegend'

//
import {generateNormalReports} from './debug'

const LINE_PROPS = {type: 'linear', dot: false, strokeWidth: 1.5}
const DATA = generateNormalReports()

function ReportsLineChart () {
  return (
    <Card>
      <Card.Section title="SMS Messages Sent in the Last 60 Days">
        <ResponsiveContainer className={chartStyles.Container} height={240}>
          <LineChart data={DATA} margin={{left: -30, right: 0}}>
            <CartesianGrid stroke={colors.GRID_LINE} />
            <XAxis dataKey="date"
                   axisLine={{stroke: colors.AXIS_LINE, strokeWidth: 1}}
                   tick={{fontSize: 12, fill: colors.TICK}} tickSize={12} tickMargin={4}
                   tickLine={{stroke: colors.TICK_LINE}} minTickGap={30} tickFormatter={formatTick} />
            <Tooltip isAnimationActive={false} labelFormatter={formatDate} />
            <Line {...LINE_PROPS} name="Sent"    dataKey="quantity_sent"    stroke={colors.SENT} />
            <Line {...LINE_PROPS} name="Pending" dataKey="quantity_pending" stroke={colors.PENDING} />
            <Line {...LINE_PROPS} name="Failed"  dataKey="quantity_failed"  stroke={colors.FAILED} />
            <YAxis dataKey="quantity_sent"
                   axisLine={false} tickLine={false}
                   tickLine={{stroke: colors.TICK_LINE}}
                   tickSize={12} tickMargin={4}
                   tick={{fontSize: 12, fill: colors.TICK}} />
          </LineChart>
        </ResponsiveContainer>
        <CustomLegend />
      </Card.Section>
    </Card>
  )
}

export default ReportsLineChart
