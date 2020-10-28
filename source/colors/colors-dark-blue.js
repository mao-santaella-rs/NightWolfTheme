const Color = require("color")
const colors = require("./common-colors")

// THEME COLORS

colors.principal =            Color.rgb(16,30,44)
colors.principal_0 =          Color.rgb(20,40,60)
colors.principal_1 =          Color.rgb(27,50,74)
colors.principal_2 =          Color.rgb(30,70,103)
colors.principal_3 =          Color.rgb(48,90,132)
colors.principal_4 =          Color.rgb(95,130,165)
colors.principal_5 =          Color.rgb(123,165,207)

colors.text =                 Color.rgb(189,210,231)

colors.selection =            colors.principal_2
colors.selectionHighlight =   colors.principal_1
colors.selectionInactive =    colors.principal_2
colors.hoverHiglight =        colors.principal_1
colors.wordHighlightStrong =  colors.principal_1
colors.findMatch =            colors.principal_3
colors.findHighlight =        colors.principal_1
colors.rangeHiglight =        colors.principal_2
colors.lineHiglight =         colors.principal_0

colors.gitInsertedBg =        Color.rgb(20,51,46)
colors.gitRemovedBg =         Color.rgb(30,19,28)
colors.gitIgnoreExplorer =    colors.principal.lighten(1.1)

//INTERFACE COLORS
colors.interBackground =      colors.principal
colors.interBorder =          colors.principal_1
colors.notificationBadge =    colors.infoLight

// SYNTAX COLORS
colors.variable =             colors.syntaxYellow
colors.variableProperty =     colors.text
colors.contrastText =         colors.syntaxRed
colors.variableInstance =     colors.syntaxOrange
colors.specialWordA =         colors.syntaxBlue
colors.specialWordB =         colors.syntaxViolet
colors.specialWordC =         colors.syntaxPurple
colors.functionName =         colors.syntaxCyan
colors.string =               colors.syntaxGreen
colors.operator =             colors.contrastText
colors.regularText =          colors.text
colors.number =               colors.syntaxOrange
colors.boolean =              colors.contrastText
colors.nullUnd =              colors.contrastText
colors.punctuation =          colors.regularText
colors.deprecated =           colors.danger
colors.comment =              Color.rgb(100,120,130)

// Markup
colors.htmlTag =              colors.contrastText
colors.metaTag =              colors.text
colors.tagAttribute =         colors.specialWordB
colors.pugClass =             colors.variable

// Stylesheets
colors.cssAttribute =         colors.syntaxGreen
colors.cssValue =             colors.syntaxOrange
colors.cssTag =               colors.syntaxRed
colors.cssClass =             colors.syntaxYellow
colors.cssId =                colors.syntaxBlue
colors.cssProperty =          colors.syntaxCyan
colors.cssUnits =             colors.number
colors.cssSpecialWord =       colors.syntaxViolet
colors.cssPseudoClass =       colors.syntaxPurple
colors.sassFunction =         colors.syntaxBlue
colors.sassInterpolation =    colors.syntaxRed


module.exports = colors