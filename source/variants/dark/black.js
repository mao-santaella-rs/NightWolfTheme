import chroma from 'chroma-js'

export default function (colors) {
  // THEME COLORS
  colors.principal = colors.black
  colors.principal_0 = chroma(20, 20, 20) // rgb(20, 20, 20)
  colors.principal_1 = chroma(40, 40, 40) // rgb(40, 40, 40)
  colors.principal_2 = chroma(60, 60, 60) // rgb(60, 60, 60)
  colors.principal_3 = chroma(80, 80, 80) // rgb(80, 80, 80)
  colors.principal_4 = chroma(120, 120, 120) // rgb(120, 120, 120)
  colors.principal_5 = chroma(150, 150, 150) // rgb(150, 150, 150)

  colors.text = chroma(200, 200, 200) // rgb(200, 200, 200)

  colors.gitInsertedBg = chroma(153, 183, 109).alpha(0.15) // rgba(153, 183, 109,.15)
  colors.gitRemovedBg = chroma(239, 83, 80).alpha(0.15) // rgba(239, 83, 80,.15)
  colors.gitIgnoreExplorer = colors.principal_0.brighten(1.5)

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
