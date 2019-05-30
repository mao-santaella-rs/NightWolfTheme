const Color = require("color")

let colors = {}

//basic colors
colors.white =                Color.rgb(255,255,255)
colors.black =                Color.rgb(0,0,0)

// Syntax Colors
colors.syntaxRed =            Color.rgb(255,120,120)
colors.syntaxOrange =         Color.rgb(255,180,130)
colors.syntaxYellow =         Color.rgb(255,220,150)
colors.syntaxBeige =          Color.rgb(219,212,186)
colors.syntaxGreen =          Color.rgb(170,230,130)
colors.syntaxCyan =           Color.rgb(000,220,220)
colors.syntaxBlue =           Color.rgb(000,177,255)
colors.syntaxViolet =         Color.rgb(150,150,255)
colors.syntaxPurple =         Color.rgb(220,140,255)
colors.syntaxMagenta =        Color.rgb(255,080,255)

// STATES COLORS
colors.info =                 Color.rgb(100,180,250)
colors.infoDark =             colors.info.darken(0.5)
colors.infoLight =            colors.info.lighten(0.2)
colors.succes =               Color.rgb(110,180,80)
colors.succesLight =          Color.rgb(175,220,100)
colors.warning =              Color.rgb(255,200,40)
colors.warningDark =          colors.warning.darken(0.6)
colors.warningLight =         Color.rgb(255,235,150)
colors.danger =               Color.rgb(240,80,80)
colors.dangerDark =           colors.danger.darken(0.4)

//Test colors
colors.testA =                Color.rgb(255,255,000)
colors.testB =                Color.rgb(000,255,000)
colors.testC =                Color.rgb(255,100,000)



module.exports = colors

