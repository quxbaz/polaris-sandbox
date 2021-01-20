import styles from './ReportsPieChart.module.css'
import React from 'react'
import {Card} from '@shopify/polaris'
import {
  ResponsiveContainer, PieChart,
  Legend, Tooltip, Pie, Cell,
} from 'recharts'
import colors from './colors'
import {convertToPieData} from './util'
import debug from './debug'

const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

const COLORS = [colors.SENT, colors.PENDING, colors.FAILED]
const DATA = convertToPieData(debug.generateNormalReports())

const formatLegendText = (value, entry) => (
  <span className={styles.LegendText}>{capitalize(value)}</span>
)

function ReportsPieChart () {
  return (
    <Card title="SMS Messages - Overview">
      <Card.Section title="Last 7 days">
        <ResponsiveContainer aspect={1}>
          <PieChart className={styles.PieChart}>
            <Tooltip isAnimationActive={false} />
            <Legend iconType="circle" iconSize={19} formatter={formatLegendText} />
            <Pie data={DATA} dataKey="value" nameKey="name" label innerRadius="38%">
              {DATA.map((entry, i) => <Cell key={`cell-${i}`} fill={COLORS[i]} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Card.Section>
    </Card>
  )
}

export default ReportsPieChart
