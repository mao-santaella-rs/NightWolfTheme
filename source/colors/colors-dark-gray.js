const chroma = require("chroma-js")
const colors = require("./common-colors")

// THEME COLORS

colors.principal = chroma(27, 27, 27) // rgb(27, 27, 27)
colors.principal_0 = chroma(36, 36, 36) // rgb(36, 36, 36)
colors.principal_1 = chroma(46, 46, 46) // rgb(46, 46, 46)
colors.principal_2 = chroma(61, 61, 61) // rgb(61, 61, 61)
colors.principal_3 = chroma(82, 82, 82) // rgb(82, 82, 82)
colors.principal_4 = chroma(124, 124, 124) // rgb(124, 124, 124)
colors.principal_5 = chroma(157, 157, 157) // rgb(157, 157, 157)

colors.text = chroma(206, 206, 206) // rgb(206, 206, 206)

colors.gitInsertedBg = chroma(5, 20, 5) // rgb(5, 20, 5)
colors.gitRemovedBg = chroma(20, 0, 0) // rgb(20, 0, 0)
colors.gitIgnoreExplorer = colors.principal.brighten(1.5)

// INTERFACE COLORS
colors.interBackground = colors.principal
colors.interBorder = colors.principal_1
colors.notificationBadge = colors.white

// INTERFACE SELECTION
colors.selection_0 = colors.principal_5.alpha(.1)
colors.selection_1 = colors.principal_5.alpha(.2)
colors.selection_2 = colors.principal_5.alpha(.3)
colors.selection_3 = colors.principal_5.alpha(.4)
colors.selection_4 = colors.principal_5.alpha(.35)

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

module.exports = colors