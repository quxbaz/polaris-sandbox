import React from 'react'
import {Card} from '@shopify/polaris'
import {ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Cell} from 'recharts'
import colors, {COLORS_LIST} from './colors'
import {capitalize, convertToBarData} from './util'
import CustomLegend from './CustomLegend'

//
import {generateNormalReports} from './debug'

const DATA = convertToBarData(generateNormalReports())

// const BarLabel = ({index, x, y, width, height, value}) => {
//   return (
//     <text x={x} y={y} fontSize="16" fill='#000' textAnchor="inside" fontWeight="bold">
//       {value}
//     </text>
//   )
// }

function ReportsBarChart () {
  return (
    <Card title="SMS Messages - Overview">
      <Card.Section title="Last 7 days">
        <ResponsiveContainer aspect={1.6}>
          <BarChart data={DATA} layout="vertical">
            <CartesianGrid horizontal={false} stroke={colors.GRID_LINE} />
            <XAxis type="number" datakey="value" />
            <YAxis type="category" dataKey="name" hide />
            <Tooltip isAnimationActive={false} cursor={{fill: "hsl(0deg 0% 92%)"}}
                     formatter={(value, name) => [value, 'Quantity']}
                     labelFormatter={(label) => capitalize(label) + ' messages'}/>
            <Bar dataKey="value">
              {DATA.map((entry, index) => <Cell key={index} fill={COLORS_LIST[index]} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <CustomLegend />
      </Card.Section>
    </Card>
  )
}

export default ReportsBarChart
