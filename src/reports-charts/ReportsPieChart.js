import styles from './ReportsPieChart.module.css'
import React from 'react'
import {Card} from '@shopify/polaris'
import {
  ResponsiveContainer, PieChart,
  Tooltip, Pie, Cell,
} from 'recharts'
import colors from './colors'
import {convertToPieData} from './util'
import CustomLegend from './CustomLegend'
import debug from './debug'

const COLORS = [colors.SENT, colors.PENDING, colors.FAILED]
const DATA = convertToPieData(debug.generateNormalReports())
const LEGEND_ITEMS = [
  {text: 'Sent', color: colors.SENT},
  {text: 'Pending', color: colors.PENDING},
  {text: 'Failed', color: colors.FAILED},
]

function ReportsPieChart () {
  return (
    <Card>
      <Card.Section title="SMS Messages - Overview">
        <ResponsiveContainer aspect={1}>
          <PieChart className={styles.PieChart}>
            <Tooltip isAnimationActive={false} />
            <Pie data={DATA} dataKey="value" nameKey="name" innerRadius="50%" outerRadius="100%">
              {DATA.map((entry, i) => <Cell key={`cell-${i}`} fill={COLORS[i]} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <CustomLegend items={LEGEND_ITEMS} />
      </Card.Section>
    </Card>
  )
}

export default ReportsPieChart
