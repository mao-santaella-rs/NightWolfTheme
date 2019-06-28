const Color = require("color")
const colors = require("./common-colors")

// THEME COLORS
colors.principal =            colors.black
colors.principal_0 =          Color.rgb(15,15,15)
colors.principal_1 =          Color.rgb(25,25,25)
colors.principal_2 =          Color.rgb(50,50,50)
colors.principal_3 =          Color.rgb(75,75,75)
colors.principal_4 =          Color.rgb(100,100,100)

colors.text =                 Color.rgb(200,200,200)

colors.selection =            colors.principal_3
colors.selectionHighlight =   colors.principal_2
colors.selectionInactive =    colors.selection
colors.hoverHiglight =        colors.selection
colors.wordHighlightStrong =  colors.selection
colors.findMatch =            colors.principal_3
colors.findHighlight =        colors.selectionHighlight
colors.rangeHiglight =        colors.principal_1
colors.lineHiglight =         colors.principal_0
colors.comment =              colors.principal_4

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