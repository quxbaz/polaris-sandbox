import styles from './CustomLegend.module.css'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const LegendItem = ({text, color}) => (
  <span className={styles.LegendItem} style={{background: color}}>
    {text}
  </span>
)

const CustomLegend = ({className, style, items}) => (
  <div className={classNames(styles.CustomLegend, className)} style={style}>
    {items.map((item, i) => <LegendItem key={i} {...item} />)}
  </div>
)

CustomLegend.LegendItem = LegendItem

CustomLegend.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    color: PropTypes.string,
  })).isRequired,
}

export default CustomLegend
