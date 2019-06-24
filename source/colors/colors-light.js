const Color = require("color")
const colors = require("./common-colors")

// THEME COLORS
colors.principal =            Color.rgb(240,240,240)
colors.principal_0 =          Color.rgb(231,230,236)
colors.principal_1 =          Color.rgb(214,213,217)
colors.principal_2 =          Color.rgb(176,176,184)
colors.principal_3 =          Color.rgb(139,138,150)
colors.principal_4 =          Color.rgb(101,101,117)
colors.principal_5 =          Color.rgb(64,63,83)

colors.text =                 colors.principal_5

colors.selection =            colors.principal_2
colors.selectionHighlight =   colors.principal_1
colors.selectionInactive =    colors.principal_2
colors.hoverHiglight =        colors.principal_1
colors.wordHighlightStrong =  colors.principal_1
colors.findMatch =            colors.principal_3
colors.findHighlight =        colors.principal_1
colors.rangeHiglight =        colors.principal_2
colors.lineHiglight =         colors.principal_0

colors.comment =              Color.rgb(100,120,130)

// INTERFACE COLORS
colors.interBorder =          colors.principal_2

// SYNTAX COLORS
// General colors
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

// Markup
colors.htmlTag =              colors.contrastText
colors.metaTag =              colors.text
colors.tagAttribute =         colors.specialWordB
colors.pugClass =             colors.variable

// Stylesheets
colors.cssAttribute =         colors.functionName
colors.cssValue =             colors.text
colors.cssTag =               colors.contrastText
colors.cssClass =             colors.variable
colors.cssId =                colors.specialWordA
colors.cssProperty =          colors.functionName
colors.cssUnits =             colors.number
colors.cssSpecialWord =       colors.functionName

module.exports = colors