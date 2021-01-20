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

//
import debug from './debug'

const COLORS = [colors.SENT, colors.PENDING, colors.FAILED]
const DATA = convertToPieData(debug.generateNormalReports())

function ReportsPieChart () {
  return (
    <Card>
       <Card.Section title="SMS Messages - Overview">
         <ResponsiveContainer aspect={1.6}>
          <PieChart className={styles.PieChart}>
            <Tooltip isAnimationActive={false} />
            <Pie data={DATA} dataKey="value" nameKey="name" strokeWidth={2} label>
              {DATA.map((entry, i) => <Cell key={`cell-${i}`} fill={COLORS[i]} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <CustomLegend />
      </Card.Section>
    </Card>
  )
}

export default ReportsPieChart
