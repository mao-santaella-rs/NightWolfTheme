const Color = require("color")
const colors = require("./common-colors")


colors.syntaxRed =            Color.rgb(255,56,56) 
colors.syntaxOrange =         Color.rgb(255,127,66)
colors.syntaxYellow =         Color.rgb(255,190,88)
colors.syntaxBeige =          Color.rgb(188,176,136)
colors.syntaxGreen =          Color.rgb(113,207,66)
colors.syntaxCyan =           Color.rgb(0,190,190)
colors.syntaxBlue =           Color.rgb(000,123,255)
colors.syntaxViolet =         Color.rgb(88,88,255)
colors.syntaxPurple =         Color.rgb(190,77,255)

colors.syntaxMagenta =        Color.rgb(255,025,255)

colors.contrast =             colors.syntaxMagenta
colors.contrastLight =        Color.rgb(255,190,255)
colors.contrastDark =         Color.rgb(150,000,150)

// STATES COLORS
colors.infoDark =             Color.rgb(040,072,100)
colors.info =                 Color.rgb(100,180,250)
colors.infoLight =            Color.rgb(156,217,255)

colors.succesDark =           Color.rgb(044,072,032)
colors.succes =               Color.rgb(110,180,080)
colors.succesLight =          Color.rgb(161,216,132)

colors.warningDark =          Color.rgb(102,080,016)
colors.warning =              Color.rgb(255,200,040)
colors.warningLight =         Color.rgb(255,227,156)

colors.dangerDark =           Color.rgb(071,032,032)
colors.danger =               Color.rgb(240,080,080)
colors.dangerLight =          Color.rgb(216,130,130)


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