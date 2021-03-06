import chartStyles from './chart-styles.module.css'
import React from 'react'
import {Card} from '@shopify/polaris'
import {ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Cell} from 'recharts'
import colors, {MESSAGE_COLORS_LIST} from './colors'
import {capitalize, convertToBarData} from './util'
import CustomLegend from './CustomLegend'

//
import {generateNormalReports} from './debug'

const DATA = convertToBarData(generateNormalReports())

// const BarLabel = ({index, x, y, width, height, value}) => {
//   return (
//     <text x={x} y={y - 4} fill='#000' textAnchor="inside">
//       {value}
//     </text>
//   )
// }

function ReportsBarChart () {
  return (
    <Card>
      <Card.Section title="SMS Messages sent in the last 7 days">
        <ResponsiveContainer className={chartStyles.Container} height={240} >
          <BarChart data={DATA} layout="vertical" barSize={40} margin={{left: 0, right: 0}}>
            <Tooltip isAnimationActive={false} cursor={{fill: "hsl(0deg 0% 60% / 10%)"}}
                     formatter={(value, name) => [value, "Quantity"]}
                     labelFormatter={(label) => capitalize(label) + " messages"} />
            <CartesianGrid horizontalPoints={[0]} stroke={colors.GRID_LINE} />
            <XAxis type="number" dataKey="value"
                   axisLine={{stroke: colors.AXIS_LINE, strokeWidth: 1}}
                   tick={{fontSize: 12, fill: colors.TICK}} tickSize={12} tickMargin={4}
                   tickLine={{stroke: colors.TICK_LINE}} />
            <Bar dataKey="value">
              {DATA.map((entry, index) => <Cell key={index} fill={MESSAGE_COLORS_LIST[index]} />)}
            </Bar>
            <YAxis type="category" dataKey="name" mirror tickLine={false}
                   tickFormatter={capitalize} hide />
          </BarChart>
        </ResponsiveContainer>
        <CustomLegend align="right" />
      </Card.Section>
    </Card>
  )
}

export default ReportsBarChart
