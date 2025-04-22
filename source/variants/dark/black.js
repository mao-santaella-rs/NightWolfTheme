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

  // SYNTAX COLORS
  colors.variable = colors.syntaxYellow
  colors.variableProperty = colors.text
  colors.contrastText = colors.syntaxRed
  colors.variableInstance = colors.syntaxOrange
  colors.specialWordA = colors.syntaxBlue
  colors.specialWordB = colors.syntaxViolet
  colors.specialWordC = colors.syntaxPurple
  colors.functionName = colors.syntaxCyan
  colors.string = colors.syntaxGreen
  colors.operator = colors.contrastText
  colors.regularText = colors.text
  colors.number = colors.syntaxOrange
  colors.boolean = colors.contrastText
  colors.nullUnd = colors.contrastText
  colors.punctuation = colors.regularText
  colors.deprecated = colors.danger

  // Markup
  colors.htmlTag = colors.contrastText
  colors.metaTag = colors.text
  colors.tagAttribute = colors.specialWordB
  colors.pugClass = colors.variable

  // Stylesheets
  colors.cssAttribute = colors.syntaxGreen
  colors.cssValue = colors.syntaxOrange
  colors.cssTag = colors.syntaxRed
  colors.cssClass = colors.syntaxYellow
  colors.cssId = colors.syntaxBlue
  colors.cssProperty = colors.syntaxCyan
  colors.cssUnits = colors.number
  colors.cssSpecialWord = colors.syntaxViolet
  colors.cssPseudoClass = colors.syntaxPurple
  colors.sassFunction = colors.syntaxBlue
  colors.sassInterpolation = colors.syntaxRed

  return colors
}
