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

console.log(JSON.stringify(DATA, null, 2))

function ReportsPieChart () {
  return (
    <Card title="SMS Message status ">
      <br />
      <ResponsiveContainer aspect={1.6}>
        <PieChart >
          <Tooltip isAnimationActive={false} />
          <Legend iconType="circle" />
          <Pie data={DATA} dataKey="value" nameKey="name" label>
            {DATA.map((entry, i) => <Cell key={`cell-${i}`} fill={COLORS[i]} />)}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default ReportsPieChart
