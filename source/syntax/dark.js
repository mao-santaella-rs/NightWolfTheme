export default function (colors) {
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
  colors.number = colors.syntaxOrange
  colors.boolean = colors.contrastText
  colors.nullUnd = colors.contrastText
  colors.punctuation = colors.text
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
  colors.cssProperty = colors.syntaxCyan
  colors.cssUnits = colors.number
  colors.cssSpecialWord = colors.syntaxLightBlue
  colors.cssPseudoClass = colors.syntaxPurple
  colors.sassFunction = colors.syntaxBlue
  colors.sassInterpolation = colors.syntaxRed

  return colors
}
