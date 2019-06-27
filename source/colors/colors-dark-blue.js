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

colors.interBorder =          colors.principal_1


// colors.principal =            Color.rgb(16,30,44)
// colors.principal_0 =          Color.rgb(11,21,31)
// colors.principal_1 =          Color.rgb(21,39,57)
// colors.principal_2 =          Color.rgb(32,60,88)
// colors.principal_3 =          Color.rgb(48,90,132)
// colors.principal_4 =          Color.rgb(123,165,207)

// colors.text =                 Color.rgb(189,210,231)

// colors.selection =            colors.principal_3
// colors.selectionHighlight =   colors.principal_2
// colors.selectionInactive =    colors.selection
// colors.hoverHiglight =        colors.selection
// colors.wordHighlightStrong =  colors.selection
// colors.findMatch =            colors.principal_3
// colors.findHighlight =        colors.selectionHighlight
// colors.rangeHiglight =        colors.principal_1
// colors.lineHiglight =         colors.principal_0

// colors.comment =              Color.rgb(100,120,130)

// // SYNTAX COLORS
// // General colors
// colors.variable =             colors.syntaxYellow
// colors.variableProperty =     colors.text
// colors.contrastText =         colors.syntaxRed
// colors.variableInstance =     colors.syntaxOrange
// colors.specialWordA =         colors.syntaxBlue
// colors.specialWordB =         colors.syntaxViolet
// colors.specialWordC =         colors.syntaxPurple
// colors.functionName =         colors.syntaxCyan
// colors.string =               colors.syntaxGreen
// colors.operator =             colors.contrastText
// colors.regularText =          colors.text
// colors.number =               colors.syntaxOrange
// colors.boolean =              colors.contrastText
// colors.nullUnd =              colors.contrastText
// colors.punctuation =          colors.regularText
// colors.deprecated =           colors.danger

// // Markup
// colors.htmlTag =              colors.contrastText
// colors.metaTag =              colors.text
// colors.tagAttribute =         colors.specialWordB
// colors.pugClass =             colors.variable

// // Stylesheets
// colors.cssAttribute =         colors.functionName
// colors.cssValue =             colors.text
// colors.cssTag =               colors.contrastText
// colors.cssClass =             colors.variable
// colors.cssId =                colors.specialWordA
// colors.cssProperty =          colors.functionName
// colors.cssUnits =             colors.number
// colors.cssSpecialWord =       colors.functionName

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

colors.comment =              Color.rgb(100,120,130)

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

module.exports = colors