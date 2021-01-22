const colors = {
  // SENT: 'hsl(212, 100%, 60%)',
  // PENDING: '#f5b840',
  // FAILED: '#f15947',
  SENT: 'hsl(256deg 60% 67%)',
  PENDING: 'hsl(206deg 47% 70%)',
  FAILED: 'hsl(3deg 76% 65%)',
  GRID_LINE: 'hsl(0deg 0% 92%)',
  AXIS_LINE: 'hsl(0deg 0% 68%)',
  TICK_LINE: 'hsl(0deg 0% 68%)',
  TICK: 'hsl(0deg 0% 60%)',
}

const MESSAGE_COLORS_LIST = [colors.SENT, colors.PENDING, colors.FAILED]

export {
  MESSAGE_COLORS_LIST,
}

export default colors
