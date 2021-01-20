import React from 'react'
import {Card} from '@shopify/polaris'
import {
  ResponsiveContainer, PieChart,
  Legend, Tooltip, Pie, Cell,
} from 'recharts'
import colors from './colors'
import {convertToPieData} from './util'
import debug from './debug'

const COLORS = [colors.SENT, colors.PENDING, colors.FAILED]
const DATA = convertToPieData(debug.generateNormalReports())

function ReportsPieChart () {
  return (
    <Card>
      <Card.Section title="SMS Messages - overview">
        <ResponsiveContainer aspect={1}>
          <PieChart >
            <Tooltip isAnimationActive={false} />
            <Legend iconType="circle" />
            <Pie data={DATA} dataKey="value" nameKey="name" label innerRadius='38%'>
              {DATA.map((entry, i) => <Cell key={`cell-${i}`} fill={COLORS[i]} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Card.Section>

    </Card>
  )
}

export default ReportsPieChart
