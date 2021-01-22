function capitalize (s) {
  return s[0].toUpperCase() + s.slice(1)
}

/*
 * Takes a date of the example format:
 *   2021-1-20
 *
 * And returns a string:
 *   1/20/2021
 *
 * @date {string}
 * @return {string}
 */
function formatDate (date) {
  const parts = date.split('-')
  return `${parts[1]}/${parts[2]}/${parts[0]}`
}

/*
 * Takes a date of the example format:
 *   2021-1-20
 *
 * And returns a chart-axis-friendly format like such:
 *   1/20
 *
 * @date {string}
 * @return {string}
 */
function formatTick (date) {
  return date.split('-').slice(1).join('/')
}

/*
 * Takes data of the form:
 *   [
 *     {"report": {"quantity_failed": 0, "quantity_pending": 2, "quantity_sent": 10, "date": "2020-11-14"}},
 *     {"report": {"quantity_failed": 2, "quantity_pending": 3, "quantity_sent": 15, "date": "2020-11-15"}},
 *     {"report": {"quantity_failed": 2, "quantity_pending": 1, "quantity_sent": 12, "date": "2020-11-16"}},
 *     ...,
 *   ]
 *
 * And converts it to a shape that a Recharts <PieChart> component expects, like such:
 *   [
 *     {"name": "sent",    "value": 610
 *     {"name": "pending", "value": 102},
 *     {"name": "failed",  "value": 65},
 *   ]
 *
 * https://recharts.org/en-US/api/PieChart
 */
function convertToPieData (reports) {
  let [sent, pending, failed] = [0, 0, 0]
  reports.forEach((report) => {
    sent += report.quantity_sent
    pending += report.quantity_pending
    failed += report.quantity_failed
  })
  return [
    {name: 'sent',    value: sent},
    {name: 'pending', value: pending},
    {name: 'failed',  value: failed},
  ]
}

function convertToBarData (reports) {
  return convertToPieData(reports)
}

export {
  capitalize,
  formatDate,
  formatTick,
  convertToPieData,
  convertToBarData,
}
