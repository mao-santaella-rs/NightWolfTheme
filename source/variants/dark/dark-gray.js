import chroma from 'chroma-js'

export default function (colors) {
  // THEME COLORS
  colors.principal = chroma(27, 27, 27) // rgb(27, 27, 27)
  colors.principal_0 = chroma(36, 36, 36) // rgb(36, 36, 36)
  colors.principal_1 = chroma(46, 46, 46) // rgb(46, 46, 46)
  colors.principal_2 = chroma(61, 61, 61) // rgb(61, 61, 61)
  colors.principal_3 = chroma(82, 82, 82) // rgb(82, 82, 82)
  colors.principal_4 = chroma(124, 124, 124) // rgb(124, 124, 124)
  colors.principal_5 = chroma(157, 157, 157) // rgb(157, 157, 157)

  colors.text = chroma(206, 206, 206) // rgb(206, 206, 206)

  // INTERFACE COLORS
  colors.interBackground = colors.principal
  colors.interBorder = colors.principal_1
  colors.notificationBadge = colors.white

  // INTERFACE SELECTION
  colors.selection_0 = colors.principal_5.alpha(0.1)
  colors.selection_1 = colors.principal_5.alpha(0.2)
  colors.selection_2 = colors.principal_5.alpha(0.3)
  colors.selection_3 = colors.principal_5.alpha(0.4)
  colors.selection_4 = colors.principal_5.alpha(0.35)

  return colors
}
