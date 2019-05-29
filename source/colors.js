const Color = require("color")


let colors = {}

//Test colors
colors.testA =                Color.rgb(255, 255, 0)
colors.testB =                Color.rgb(0, 255, 0)
colors.testC =                Color.rgb(255, 100, 0)

// Syntax Colors
colors.syntaxYellow =         Color.rgb(255,220,150)
colors.syntaxBlue =           Color.rgb(0,177,255)
colors.syntaxPurple =         Color.rgb(220,140,255)
colors.syntaxRed =            Color.rgb(255,120,120)
colors.syntaxCyan =           Color.rgb(0,220,220)
colors.syntaxGreen =          Color.rgb(170,230,130)
colors.syntaxViolet =         Color.rgb(150,150,255)
colors.syntaxMagenta =        Color.rgb(255,80,255)
colors.syntaxOrange =         Color.rgb(255,180,130)
colors.syntaxBeige =          Color.rgb(219,212,186)


// THEME COLORS
colors.white =                Color.rgb(255,255,255)
colors.black =                Color.rgb(0,0,0)

colors.principal =            Color.rgb(16, 30, 44)
colors.p_darken =             colors.principal.darken(0.3)
colors.p_light =              colors.principal.lighten(0.3)
colors.p_lighten =            colors.principal.lighten(1)
colors.p_lighter =            colors.principal.lighten(2)
colors.p_lightest =           colors.principal.lighten(4.5)

colors.text =                 colors.principal.lighten(6)

colors.selection =            colors.p_lighter
colors.selectionHighlight =   colors.p_lighten
colors.selectionInactive =    colors.selection
colors.hoverHiglight =        colors.selection
colors.wordHighlightStrong =  colors.selection
colors.findMatch =            colors.p_lighter
colors.findHighlight =        colors.selectionHighlight
colors.rangeHiglight =        colors.p_light
colors.lineHiglight =         colors.p_darken

colors.contrast =             Color.rgb(255,0,255)
colors.contrastLight =        colors.contrast.lighten(0.5)
colors.contrastDark =         colors.contrast.darken(0.5)

colors.comment =              Color.rgb(100,120,130)

colors.gitInsertedBg =        Color.rgb(16,50,44)
colors.gitRemovedBg =         Color.rgb(55,31,44)


// STATES COLORS
colors.info =                 Color.rgb(100,180,250)
colors.infoDark =             colors.info.darken(0.6)
colors.infoLight =            colors.info.lighten(0.2)
colors.succes =               Color.rgb(110,180,80)
colors.succesLight =          Color.rgb(175,220,100)
colors.warning =              Color.rgb(255,200,40)
colors.warningDark =          colors.warning.darken(0.6)
colors.warningLight =         Color.rgb(255,235,150)
colors.danger =               Color.rgb(240,80,80)
colors.dangerDark =           colors.danger.darken(0.4)


// SYNTAX COLORS
// General colors.s
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
colors.metaTag =              Color.rgb(200,200,200)
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

// Documentation in comments
colors.docEntityNames =       Color.rgb(180,120,130)
colors.docVariables =         Color.rgb(180,150,120)

module.exports = colors

