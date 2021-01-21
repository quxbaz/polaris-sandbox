import styles from './CustomLegend.module.css'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import colors from './colors'

const LegendItem = ({children, color}) => (
  <span className={styles.LegendItem} style={{background: color}}>
    {children}
  </span>
)

const CustomLegend = ({className, style, items, align}) => {
  if (align != null)
    style = {...style, textAlign: align}
  return (
    <div className={classNames(styles.CustomLegend, className)} style={style}>
     {items.map((item, i) => (
       <LegendItem key={i} {...item}>{item.text}</LegendItem>
     ))}
   </div>
  )
}

CustomLegend.Item = LegendItem

CustomLegend.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    color: PropTypes.string,
  })),
  align: PropTypes.oneOf(['left', 'right', 'center']),
}

CustomLegend.defaultProps = {
  items: [
    {text: 'Sent', color: colors.SENT},
    {text: 'Pending', color: colors.PENDING},
    {text: 'Failed', color: colors.FAILED},
  ],
}

export default CustomLegend
