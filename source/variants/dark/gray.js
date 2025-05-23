import chroma from 'chroma-js'

export default function (colors) {
  // THEME COLORS
  colors.principal = chroma(37, 37, 37) // rgb(37, 37, 37)
  colors.principal_0 = chroma(45, 45, 45) // rgb(45, 45, 45)
  colors.principal_1 = chroma(55, 55, 55) // rgb(55, 55, 55)
  colors.principal_2 = chroma(69, 69, 69) // rgb(69, 69, 69)
  colors.principal_3 = chroma(89, 89, 89) // rgb(89, 89, 89)
  colors.principal_4 = chroma(117, 117, 117) // rgb(117, 117, 117)
  colors.principal_5 = chroma(155, 155, 155) // rgb(155, 155, 155)

  colors.text = chroma(206, 206, 206) // rgb(206, 206, 206)

  colors.gitInsertedBg = chroma(153, 183, 109).alpha(0.15) // rgba(153, 183, 109,.15)
  colors.gitRemovedBg = chroma(239, 83, 80).alpha(0.15) // rgba(239, 83, 80,.15)
  colors.gitIgnoreExplorer = colors.principal.brighten(1.5)

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
