import styles from './ReportsPieChart.module.css'
import React from 'react'
import {Card} from '@shopify/polaris'
import {ResponsiveContainer, PieChart, Tooltip, Pie, Cell, CartesianGrid} from 'recharts'
import colors from './colors'
import {convertToPieData} from './util'
import CustomLegend from './CustomLegend'

//
import {generateNormalReports} from './debug'

const COLORS = [colors.SENT, colors.PENDING, colors.FAILED]
const DATA = convertToPieData(generateNormalReports())

function ReportsPieChart () {
  return (
    <Card title="SMS Messages - Overview">
       <Card.Section title="Last 7 days">
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
