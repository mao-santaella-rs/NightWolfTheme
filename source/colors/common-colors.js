const Color = require("color")

let colors = {}

//basic colors
colors.white = Color.rgb(255, 255, 255)
colors.black = Color.rgb(0, 0, 0)

// Syntax Colors
colors.syntaxRed = Color.rgb(255, 120, 120)
colors.syntaxOrange = Color.rgb(255, 180, 130)
colors.syntaxYellow = Color.rgb(255, 220, 150)
colors.syntaxBeige = Color.rgb(219, 212, 186)
colors.syntaxGreen = Color.rgb(170, 230, 130)
colors.syntaxCyan = Color.rgb(0, 220, 220)
colors.syntaxBlue = Color.rgb(0, 177, 255)
colors.syntaxViolet = Color.rgb(150, 150, 255)
colors.syntaxPurple = Color.rgb(220, 140, 255)
colors.syntaxMagenta = Color.rgb(255, 80, 255)

colors.contrast = colors.syntaxMagenta
colors.contrastLight = Color.rgb(255, 190, 255)
colors.contrastDark = Color.rgb(150, 0, 150)

// STATES COLORS
colors.infoDark = Color.rgb(40, 72, 100)
colors.info = Color.rgb(100, 180, 250)
colors.infoLight = Color.rgb(156, 217, 255)

colors.succesDark = Color.rgb(44, 72, 32)
colors.succes = Color.rgb(110, 180, 80)
colors.succesLight = Color.rgb(161, 216, 132)

colors.warningDark = Color.rgb(102, 80, 16)
colors.warning = Color.rgb(255, 200, 40)
colors.warningLight = Color.rgb(255, 227, 156)

colors.dangerDark = Color.rgb(071, 32, 32)
colors.danger = Color.rgb(240, 80, 80)
colors.dangerLight = Color.rgb(216, 130, 130)

//Test colors
colors.testA = Color.rgb(255, 255, 0)
colors.testB = Color.rgb(0, 255, 0)
colors.testC = Color.rgb(255, 100, 0)

module.exports = colors

