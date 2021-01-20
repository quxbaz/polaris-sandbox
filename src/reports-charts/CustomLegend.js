import styles from './CustomLegend.module.css'
import React from 'react'
import PropTypes from 'prop-types'

const LegendItem = ({text, color}) => (
  <span className={styles.LegendItem} style={{background: color}}>
    {text}
  </span>
)

const CustomLegend = ({items}) => (
  <div className={styles.CustomLegend}>
    {items.map((item, i) => <LegendItem key={i} {...item} />)}
  </div>
)

CustomLegend.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    color: PropTypes.string,
  })).isRequired,
}

export default CustomLegend
