const Color = require("color")
const colors = require("./common-colors")

// THEME COLORS
colors.principal =            colors.black
colors.pDarken =              Color.rgb(015,015,015)
colors.pLight =               Color.rgb(025,025,025)
colors.pLighten =             Color.rgb(050,050,050)
colors.pLighter =             Color.rgb(075,075,075)
colors.pLightest =            Color.rgb(100,100,100)

colors.text =                 Color.rgb(200,200,200)

colors.selection =            colors.pLighter
colors.selectionHighlight =   colors.pLighten
colors.selectionInactive =    colors.selection
colors.hoverHiglight =        colors.selection
colors.wordHighlightStrong =  colors.selection
colors.findMatch =            colors.pLighter
colors.findHighlight =        colors.selectionHighlight
colors.rangeHiglight =        colors.pLight
colors.lineHiglight =         colors.pDarken

colors.contrast =             colors.syntaxMagenta
colors.contrastLight =        colors.contrast.lighten(0.5)
colors.contrastDark =         colors.contrast.darken(0.5)

colors.comment =              colors.pLightest

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