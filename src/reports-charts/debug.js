/*
 * dev-debug.js
 *
 * Contains methods useful for debugging and testing in development. Not to be
 * used in production code.
 */

/**
 * Generate a single report.
 *
 * @return {object}
 */
const report = (date, high=20, low=0, pendingPercent=0.4, failingPercent=0.2) => {
  const quantity_sent = Math.round(Math.random() * (high - low) + low)
  const quantity_pending = Math.round(quantity_sent * Math.random() * pendingPercent)
  const quantity_failed = Math.round(quantity_sent * Math.random() * failingPercent)
  return {
    quantity_sent,
    quantity_pending,
    quantity_failed,
    date: `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`,
  }
}

/**
 * Generates normal reporting data.
 *
 * @return {array of report object}
 */
function generateNormalReports (days=61) {
  const reports = []
  for (let i=0; i < days; i++) {
    const date = new Date()
    date.setDate(date.getDate() + i)
    reports.push(report(date))
  }
  return reports
}

/**
 * Generates trending up reporting data.
 *
 * @return {array of report object}
 */
function generateTrendingUpReports (days=61) {
  const reports = []
  for (let i=0; i < days; i++) {
    const date = new Date()
    date.setDate(date.getDate() + i)
    reports.push(report(date, 20 + (Math.random() * i * 4) + i * 2))
  }
  return reports
}

/**
 * Generates trending down reporting data.
 *
 * @return {array of report object}
 */
function generateTrendingDownReports (days=61) {
  const reports = []
  for (let i=0; i < days; i++) {
    const date = new Date()
    date.setDate(date.getDate() + i)
    reports.push(report(date, Math.max(0, 100 - (Math.random() * i * 3) - i)))
  }
  return reports
}

/**
 * Generates failing reporting data.
 *
 * @return {array of report object}
 */
function generateFailingReports (days=61) {
  const reports = []
  for (let i=0; i < days; i++) {
    const date = new Date()
    date.setDate(date.getDate() + i)
    reports.push(report(date, 20, 0, 0.4, 0.9))
  }
  return reports
}

export {
  generateNormalReports,
  generateTrendingUpReports,
  generateTrendingDownReports,
  generateFailingReports,
}
