import chroma from 'chroma-js'

const colors = {}

//basic colors
colors.white = chroma(255, 255, 255)
colors.black = chroma(0, 0, 0)

// Syntax Colors
colors.syntaxRed = chroma(255, 120, 120)        // rgb(255, 120, 120)
colors.syntaxRedIntense = chroma(255, 80, 180)  // rgb(255,80,120)
colors.syntaxOrange = chroma(255, 180, 130)     // rgb(255, 180, 130)
colors.syntaxDarkOrange = chroma(255, 153, 102) // rgb(255 153 102)
colors.syntaxYellow = chroma(255, 220, 150)     // rgb(255, 220, 150)
colors.syntaxBeige = chroma(219, 212, 186)      // rgb(219, 212, 186)
colors.syntaxGreen = chroma(170, 230, 130)      // rgb(170, 230, 130)
colors.syntaxCyan = chroma(0, 220, 220)         // rgb(0, 220, 220)
colors.syntaxLightBlue = chroma(134, 224, 244)  // rgb(134 224 244)
colors.syntaxBlue = chroma(0, 177, 255)         // rgb(0, 177, 255)
colors.syntaxViolet = chroma(150, 150, 255)     // rgb(150, 150, 255)
colors.syntaxPurple = chroma(220, 140, 255)     // rgb(220, 140, 255)
colors.syntaxMagenta = chroma(255, 80, 255)     // rgb(255, 80, 255)

colors.contrast = colors.syntaxMagenta
colors.contrastLight = chroma(255, 190, 255)    // rgb(255, 190, 255)
colors.contrastDark = chroma(150, 0, 150)       // rgb(150, 0, 150)

colors.comment = chroma(100, 120, 130)          // rgb(100, 120, 130)

// STATES COLORS
colors.infoDark = chroma(40, 72, 100)           // rgb(40, 72, 100)
colors.info = chroma(100, 180, 250)             // rgb(100, 180, 250)
colors.infoLight = chroma(156, 217, 255)        // rgb(156, 217, 255)

colors.successDark = chroma(44, 72, 32)          // rgb(44, 72, 32)
colors.success = chroma(110, 180, 80)            // rgb(110, 180, 80)
colors.successLight = chroma(161, 216, 132)      // rgb(161, 216, 132)

colors.warningDark = chroma(102, 80, 16)        // rgb(102, 80, 16)
colors.warning = chroma(255, 200, 40)           // rgb(255, 200, 40)
colors.warningLight = chroma(255, 227, 156)     // rgb(255, 227, 156)

colors.dangerDark = chroma(71, 32, 32)          // rgb(71, 32, 32)
colors.danger = chroma(240, 80, 80)             // rgb(240, 80, 80)
colors.dangerLight = chroma(216, 130, 130)      // rgb(216, 130, 130)

//Test colors
colors.testA = chroma(255, 255, 0)              // rgb(255, 255, 0)
colors.testB = chroma(0, 255, 0)                // rgb(0, 255, 0)
colors.testC = chroma(255, 100, 0)              // rgb(255, 100, 0)

colors.redPastel = chroma(48,118,174)           // rgb(248 118 174)
colors.pinkPastel = chroma(252,154,193)         // rgb(252 154 193)
colors.purplePastel = chroma(182,147,223)       // rgb(182 147 223)
colors.yellowPastel = chroma(243,251,151)       // rgb(243 251 151)
colors.greenPastel = chroma(4,250,210)          // rgb(4 250 210)

// SYNTAX COLORS
colors.text = colors.white
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
colors.number = colors.syntaxOrange
colors.boolean = colors.contrastText
colors.nullUnd = colors.contrastText
colors.punctuation = colors.text
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
colors.cssProperty = colors.syntaxCyan
colors.cssUnits = colors.number
colors.cssSpecialWord = colors.syntaxLightBlue
colors.cssPseudoClass = colors.syntaxPurple
colors.sassFunction = colors.syntaxBlue
colors.sassInterpolation = colors.syntaxRed

export default colors
