import chroma from 'chroma-js'

export default function (colors) {
  // THEME COLORS
  colors.principal = chroma(16, 30, 44) // rgb(16, 30, 44)
  colors.principal_0 = chroma(20, 40, 60) // rgb(20, 40, 60)
  colors.principal_1 = chroma(27, 50, 74) // rgb(27, 50, 74)
  colors.principal_2 = chroma(30, 70, 103) // rgb(30, 70, 103)
  colors.principal_3 = chroma(48, 90, 132) // rgb(48, 90, 132)
  colors.principal_4 = chroma(95, 130, 165) // rgb(95, 130, 165)
  colors.principal_5 = chroma(123, 165, 207) // rgb(123, 165, 207)

  colors.text = chroma(189, 210, 231) // rgb(189, 210, 231)

  colors.gitInsertedBg = chroma(153, 183, 109).alpha(0.15) // rgba(153, 183, 109,.15)
  colors.gitRemovedBg = chroma(239, 83, 80).alpha(0.15) // rgba(239, 83, 80,.15)
  colors.gitIgnoreExplorer = colors.principal.brighten(1.5)

  // INTERFACE COLORS
  colors.interBackground = colors.principal
  colors.interBorder = colors.principal_1
  colors.notificationBadge = colors.infoLight

  // INTERFACE SELECTION
  colors.selection_0 = colors.principal_5.alpha(0.1)
  colors.selection_1 = colors.principal_5.alpha(0.2)
  colors.selection_2 = colors.principal_5.alpha(0.3)
  colors.selection_3 = colors.principal_5.alpha(0.4)
  colors.selection_4 = colors.principal_2.alpha(0.6)

  return colors
}
