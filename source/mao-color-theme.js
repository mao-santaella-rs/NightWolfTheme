const Color = require("color")


//colors for test
const colorTestA =                Color.rgb(255, 255, 0)
const colorTestB =                Color.rgb(0, 255, 0)
const colorTestC =                Color.rgb(255, 100, 0)

// Syntax Colors
const colorSyntaxYellow =         Color.rgb(255,220,150)
const colorSyntaxBlue =           Color.rgb(0,177,255)
const colorSyntaxPurple =         Color.rgb(220,140,255)
const colorSyntaxRed =            Color.rgb(255,120,120)
const colorSyntaxCyan =           Color.rgb(0,220,220)
const colorSyntaxGreen =          Color.rgb(170,230,130)
const colorSyntaxViolet =         Color.rgb(150,150,255)
const colorSyntaxMagenta =        Color.rgb(255,80,255)
const colorSyntaxOrange =         Color.rgb(255,180,130)


// THEME COLORS
const colorWhite =                Color.rgb(255,255,255)
const colorBlack =                Color.rgb(0,0,0)

const colorPrincipal =            Color.rgb(16, 30, 44)
const colorP_darken =             colorPrincipal.darken(0.3)
const colorP_light =              colorPrincipal.lighten(0.3)
const colorP_lighten =            colorPrincipal.lighten(1)
const colorP_lighter =            colorPrincipal.lighten(2)
const colorP_lightest =           colorPrincipal.lighten(4.5)

const colorText =                 colorPrincipal.lighten(6)

const colorSelection =            colorP_lighter
const colorSelectionHighlight =   colorP_lighten
const colorSelectionInactive =    colorSelection
const colorHoverHiglight =        colorSelection
const colorWordHighlightStrong =  colorSelection
const colorFindMatch =            colorP_lighter
const colorFindHighlight =        colorSelectionHighlight
const colorRangeHiglight =        colorP_light
const colorLineHiglight =         colorP_darken

const contrastColor =             Color.rgb(255,0,255)
const contrastColorLight =        contrastColor.lighten(0.5)
const contrastColorDark =         contrastColor.darken(0.5)

const colorComment =              Color.rgb(100,120,130)

const colorGitInsertedBg =        Color.rgb(16,50,44)
const colorGitRemovedBg =         Color.rgb(55,31,44)


// STATES COLORS
const colorInfo =                 Color.rgb(100,180,250)
const colorInfoDark =             colorInfo.darken(0.6)
const colorInfoLight =            colorInfo.lighten(0.2)
const colorSucces =               Color.rgb(110,180,80)
const colorSuccesLight =          Color.rgb(175,220,100)
const colorWarning =              Color.rgb(255,200,40)
const colorWarningDark =          colorWarning.darken(0.6)
const colorWarningLight =         Color.rgb(255,235,150)
const colorDanger =               Color.rgb(240,80,80)
const colorDangerDark =           colorDanger.darken(0.4)


// SYNTAX COLORS
// General colors
const colorVariable =             Color.rgb(255,220,150)
const colorVariableProperty =     colorText
const colorContrastText =         Color.rgb(255,120,120)
const colorVariableInstance =     colorSyntaxOrange //Color.rgb(219,212,186)
const colorSpecialWordA =         Color.rgb(0,177,255)
const colorSpecialWordB =         Color.rgb(150,150,255)
const colorSpecialWordC =         Color.rgb(220,140,255)
const colorFunctionName =         Color.rgb(0,220,220)
const colorString =               Color.rgb(170,230,130)
const colorOperator =             colorContrastText
const colorRegularText =          colorText
const colorNumber =               Color.rgb(255,180,130)
const colorBoolean =              colorContrastText
const colorNullUnd =              colorContrastText
const colorPunctuation =          colorRegularText
const colorDeprecated =           Color.rgb(255,0,0)

// Markup
const colorHtmlTag =              colorContrastText
const colorMetaTag =              Color.rgb(200,200,200)
const colorTagAttribute =         colorSpecialWordB
const colorPugClass =             colorVariable

// Stylesheets
const colorCssAttribute =         colorFunctionName
const colorCssValue =             colorText
const colorCssTag =               colorContrastText
const colorCssClass =             colorVariable
const colorCssId =                colorSpecialWordA
const colorCssProperty =          colorFunctionName
const colorCssUnits =             colorNumber
const colorCssSpecialWord =       colorFunctionName

// Documentation in comments
const colorDocEntityNames =       Color.rgb(180,120,130)
const colorDocVariables =         Color.rgb(180,150,120)



console.log(Date.now())
console.log(colorText.hex())


const themeColors = {
  // An extra border around active elements to separate them from others for greater contrast.
  "contrastActiveBorder": null,
  // An extra border around elements to separate them from others for greater contrast.
  "contrastBorder": null,
  // Overall border color for focused elements. This color is only used if not overridden by a component.
  "focusBorder": colorP_lighten.hex(),
  // Overall foreground color. This color is only used if not overridden by a component.
  "foreground": colorText.hex(),
  // Shadow color of widgets such as Find/Replace inside the editor.
  "widget.shadow": colorP_darken.hex(),
  // Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
  "selection.background": colorInfo.hex(),
  // labels in the welcome page
  "descriptionForeground": colorText.hex(),
  // Overall foreground color for error messages
  "errorForeground": colorDanger.hex(),


  // Links
  "textLink.foreground": colorSyntaxBlue.hex(),
  // Links hover
  "textLink.activeForeground": colorSyntaxBlue.lighten(0.5).hex(),

  "textBlockQuote.background": colorP_lighter.hex(),
  "textBlockQuote.border": colorP_lighter.hex(),
  "textCodeBlock.background": colorP_lighter.hex(),
  "textPreformat.foreground": colorText.hex(),
  "textSeparator.foreground": colorText.hex(),



  // Editor in general
  "editor.background": colorPrincipal.hex(),
  "editor.foreground": colorText.hex(),
  "editorLineNumber.foreground": colorP_lighten.hex(),
  "editorLineNumber.activeForeground": colorP_lightest.hex(),
  "editorCursor.foreground": contrastColorLight.hex(),
  "editorLink.activeForeground": null,

  // cuando selecciono con el mouse
  "editor.selectionBackground": colorSelection.hex(),
  "editor.selectionForeground": colorText.hex(),

  // las palabras iguales a la seleccion
  "editor.selectionHighlightBackground": colorSelectionHighlight.hex(),

  // la seleccion cuando salgo de la ventana donde estoy
  "editor.inactiveSelectionBackground": colorSelectionInactive.hex(),

  // cuando ubico el cursor en el medio de una palabra y vscode la selecciona
  "editor.wordHighlightBackground": colorHoverHiglight.hex(),

  // cuando ubico el puntero encima de una palabra
  "editor.hoverHighlightBackground": colorHoverHiglight.hex(),

  // cuando selecciono parcialmente una palabra y vscode selecciona todo
  "editor.wordHighlightStrongBackground": colorWordHighlightStrong.hex(),

  // palabra seleccionada por el finder
  "editor.findMatchBackground": colorFindMatch.hex(),

  // todas las palabras encontradas por el finder
  "editor.findMatchHighlightBackground": colorFindHighlight.hex(),
  "editor.findRangeHighlightBackground": null,

  // color de la linea en la que el cursor esta ubicado
  "editor.lineHighlightBackground": colorLineHiglight.hex(),
  "editor.lineHighlightBorder": null,

  // fondo de la linea completa cuando se busca
  "editor.rangeHighlightBackground": colorRangeHiglight.hex(),
  "editor.rangeHighlightForeground": colorText.hex(),

  // cuando me paro en un bracket me muestar los dos con este color
  "editorBracketMatch.background": colorP_lighten.hex(),
  "editorBracketMatch.border": null,

  // cuando se activa la viusualizacion de los whitespaces
  "editorWhitespace.foreground": colorP_lighten.hex(),

  // linea vertical que indica la indentacion
  "editorIndentGuide.background": colorP_lighten.hex(),
  "editorIndentGuide.activeBackground": colorP_lightest.hex(),

  

  // vscode codelens
  "editorCodeLens.foreground": colorInfoLight.hex(),


  // editor states
  "editorError.foreground": colorDanger.hex(),
  "editorError.border": null,
  "editorWarning.foreground": colorWarning.hex(),
  "editorWarning.border": null,

  // el editor gutter es la parte donde esta el numero de linea y las indicaciones de git dentro del archivo
  "editorGutter.background": colorPrincipal.hex(),
  "editorGutter.modifiedBackground": colorWarning.hex(),
  "editorGutter.addedBackground": colorSuccesLight.hex(),
  "editorGutter.deletedBackground": colorDanger.hex(),

  // el widget como el find and replace
  "editorWidget.border": colorP_lightest.hex(),
  "editorWidget.background": colorP_lighten.hex(),

  // el cuadro que sale cuando estamos escribiendo proponiendo opciones
  "editorSuggestWidget.background": colorP_light.hex(),
  "editorSuggestWidget.border": colorP_lighten.hex(),
  "editorSuggestWidget.foreground": colorP_lightest.hex(),
  "editorSuggestWidget.highlightForeground": colorText.hex(),
  "editorSuggestWidget.selectedBackground": colorP_lighter.hex(),
  "editorHoverWidget.background": colorPrincipal.hex(),
  "editorHoverWidget.border": colorP_lightest.hex(),


  "editorMarkerNavigation.background": colorP_lighten.hex(),
  "editorMarkerNavigationInfo.background": colorInfo.hex(),
  "editorMarkerNavigationError.background": colorDanger.hex(),
  "editorMarkerNavigationWarning.background": colorWarning.hex(),

  // Botones
  "button.foreground": colorWhite.hex(),
  "button.background": contrastColor.hex(),
  "button.hoverBackground": contrastColorDark.hex(),

  // Botones de las extenciones
  "extensionButton.prominentForeground": colorWhite.hex(),
  "extensionButton.prominentBackground": contrastColor.hex(),
  "extensionButton.prominentHoverBackground": contrastColorDark.hex(),

  // inputs
  // Dropdowns
  "dropdown.background": colorPrincipal.hex(),
  "dropdown.border": colorP_lighten.hex(),
  "dropdown.foreground": colorText.hex(),
  "dropdown.listBackground": null,
  // Inputs text
  "input.background": colorP_light.hex(),
  "input.border": colorP_lighten.hex(),
  "input.foreground": colorText.hex(),
  "input.placeholderForeground": colorP_lightest.hex(),
  // Input Select
  "inputOption.activeBorder": colorP_lightest.hex(),
  // Input Validation
  "inputValidation.errorBackground": colorDangerDark.hex(),
  "inputValidation.errorBorder": colorDanger.hex(),
  "inputValidation.infoBackground": colorInfoDark.hex(),
  "inputValidation.infoBorder": colorInfo.hex(),
  "inputValidation.warningBackground": colorWarningDark.hex(),
  "inputValidation.warningBorder": colorWarning.hex(),

  // Scrollbar
  "scrollbar.shadow": null,
  "scrollbarSlider.activeBackground": colorP_lighten.hex(),
  "scrollbarSlider.background": colorP_lighten.hex(),
  "scrollbarSlider.hoverBackground": colorP_lighten.hex(),

  // Badges are small information labels, for example, search results count.
  "badge.background": colorP_lightest.hex(),
  "badge.foreground": colorWhite.hex(),

  // Breadcrumbs
  "breadcrumb.foreground": colorInfo.hex(),
  "breadcrumb.focusForeground": colorInfoLight.hex(),
  "breadcrumb.activeSelectionForeground": colorWhite.hex(),
  "breadcrumbPicker.background": colorP_darken.hex(),

  // Barra de la izquierda
  // Colors for list and trees like the File Explorer.
  // List/Tree background color for the selected item when the list/tree is active.
  "list.activeSelectionBackground": colorP_lighter.hex(),
  // List/Tree foreground color for the selected item when the list/tree is active.
  "list.activeSelectionForeground": colorWhite.hex(),
  // List/Tree foreground color for invalid items, for example an unresolved root in explorer.
  "list.invalidItemForeground": contrastColorDark.hex(),
  // List/Tree drag and drop background when moving items around using the mouse.
  "list.dropBackground": colorPrincipal.hex(),
  // List/Tree background color for the focused item when the list/tree is active.
  "list.focusBackground": colorPrincipal.hex(),
  // List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
  "list.focusForeground": colorWhite.hex(),
  // List/Tree foreground color of the match highlights when searching inside the list/tree.
  "list.highlightForeground": colorWhite.hex(),
  // List/Tree background when hovering over items using the mouse.
  "list.hoverBackground": colorPrincipal.hex(),
  // List/Tree foreground when hovering over items using the mouse.
  "list.hoverForeground": colorWhite.hex(),
  // List/Tree background color for the selected item when the list/tree is inactive.
  "list.inactiveSelectionBackground": colorP_light.hex(),
  // List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
  "list.inactiveSelectionForeground": colorP_lightest.hex(),
  

  // List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
  "list.inactiveFocusBackground": null,
  // Foreground color of list items containing errors.
  "list.errorForeground": null,
  // Foreground color of list items containing warnings.
  "list.warningForeground": null,
  // List/Tree Filter background color of typed text when searching inside the list/tree.
  "listFilterWidget.background": null,
  // List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
  "listFilterWidget.outline": null,
  // List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
  "listFilterWidget.noMatchesOutline": null,





  // Activity bar es la barra de iconos de la izquierda
  // Activity Bar background color.
  "activityBar.background": colorPrincipal.hex(),
  // Drag and drop feedback color for the Activity Bar items.
  "activityBar.dropBackground": colorP_lightest.hex(),
  // Activity bar foreground color (for example used for the icons).
  "activityBar.foreground": colorP_lightest.hex(),
  // Activity Bar border color with the Side Bar.
  "activityBar.border": colorPrincipal.hex(),
  // Activity notification badge background color.
  "activityBarBadge.background": colorP_lighter.hex(),
  // Activity notification badge foreground color.
  "activityBarBadge.foreground": colorWhite.hex(),
  // Activity bar item foreground color when it is inactive.
  // "activityBar.inactiveForeground": null,

// Es la barra de la izquierda que contiene el tree view y el explorer
  // Side Bar background color.
  "sideBar.background": colorPrincipal.hex(),
  // Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.
  "sideBar.foreground": colorText.hex(),
  // Side Bar border color on the side separating the editor.
  "sideBar.border": colorP_lighten.hex(),
  // Side Bar title foreground color.
  "sideBarTitle.foreground": colorP_lightest.hex(),
  // Side Bar section header background color.
  "sideBarSectionHeader.background": colorPrincipal.hex(),
  // Side Bar section header foreground color.
  "sideBarSectionHeader.foreground": colorP_lightest.hex(),
  // Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through. The side bar is the container for views like explorer and search.
  // "sideBar.dropBackground": null

// Editor Groups are the containers of editors. There can be many editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.
  // Background color when dragging editors around.
  "editorGroup.background": colorP_lighter.hex(),
  // Color to separate multiple editor groups from each other.
  "editorGroup.border": colorP_lighten.hex(),
  // Background color when dragging editors around.
  "editorGroup.dropBackground": contrastColor.hex(),
  // Background color of the editor group title header when Tabs are disabled (set "workbench.editor.showTabs": false).
  "editorGroupHeader.noTabsBackground": colorPrincipal.hex(),
  // Background color of the Tabs container.
  "editorGroupHeader.tabsBackground": colorPrincipal.hex(),
  // Border color of the editor group title header when tabs are enabled.
  "editorGroupHeader.tabsBorder": colorP_lighten.hex(),

  // Las pestanas de los archivos abiertos
  "tab.activeBackground": colorP_light.hex(),
  "tab.activeForeground": colorText.hex(),
  "tab.activeBorder": colorP_lightest.hex(),
  "tab.border": colorP_light.hex(),
  "tab.inactiveBackground": colorP_darken.hex(),
  "tab.inactiveForeground": colorText.hex(),
  "tab.unfocusedActiveForeground": colorText.hex(),
  "tab.unfocusedActiveBorder": colorP_lighter.hex(),
  "tab.unfocusedInactiveForeground": colorText.hex(),

  "menubar.selectionForeground": colorWhite.hex(),
  "menubar.selectionBackground": colorP_darken.hex(),
  "menubar.selectionBorder": null,
  "menu.foreground": colorP_lightest.hex(),
  "menu.background": colorP_darken.hex(),
  "menu.selectionForeground": colorWhite.hex(),
  "menu.selectionBackground": colorP_lighter.hex(),
  "menu.selectionBorder": null,
  "menu.separatorBackground": colorP_lighter.hex(),

  // git in editor interfece
  "diffEditor.insertedTextBackground": colorGitInsertedBg.hex(),
  "diffEditor.insertedTextBorder": null,
  "diffEditor.removedTextBackground": colorGitRemovedBg.hex(),
  "diffEditor.removedTextBorder": null,

  "debugExceptionWidget.background": colorPrincipal.hex(),
  "debugExceptionWidget.border": colorP_lightest.hex(),

  "peekView.border": colorP_lightest.hex(),
  "peekViewEditor.background": colorPrincipal.hex(),
  "peekViewEditor.matchHighlightBackground": contrastColor.hex(),
  "peekViewResult.background": colorPrincipal.hex(),
  "peekViewResult.fileForeground": colorP_lightest.hex(),
  "peekViewResult.lineForeground": colorP_lightest.hex(),
  "peekViewResult.matchHighlightBackground": colorWhite.hex(),
  "peekViewResult.selectionBackground": colorP_lighten.hex(),
  "peekViewResult.selectionForeground": colorP_lightest.hex(),
  "peekViewTitle.background": colorPrincipal.hex(),
  "peekViewTitleDescription.foreground": colorP_lightest.hex(),
  "peekViewTitleLabel.foreground": colorP_lightest.hex(),

  // GIT MERGE CONFLICTS
  "merge.currentHeaderBackground": colorP_lightest.hex(),
  "merge.currentContentBackground": null,
  "merge.incomingHeaderBackground": contrastColor.hex(),
  "merge.incomingContentBackground": null,
  "merge.border": null,
  "merge.commonContentBackground": null,
  "merge.commonHeaderBackground": null,
  "editorOverviewRuler.currentContentForeground": contrastColor.hex(),
  "editorOverviewRuler.incomingContentForeground": contrastColor.hex(),
  "editorOverviewRuler.commonContentForeground": contrastColor.hex(),


  "panel.background": colorPrincipal.hex(),
  "panel.border": colorP_lighten.hex(),
  "panelTitle.activeBorder": colorP_lightest.hex(),
  "panelTitle.activeForeground": colorWhite.hex(),
  "panelTitle.inactiveForeground": colorText.hex(),

  "statusBar.background": colorPrincipal.hex(),
  "statusBar.foreground": colorP_lightest.hex(),
  "statusBar.border": colorP_lighten.hex(),

  "statusBar.debuggingBackground": colorWarning.hex(),
  "statusBar.debuggingForeground": colorP_darken.hex(),
  "statusBar.debuggingBorder": colorWarning.hex(),

  "statusBar.noFolderForeground": null,
  "statusBar.noFolderBackground": colorPrincipal.hex(),
  "statusBar.noFolderBorder": contrastColor.hex(),
  "statusBarItem.activeBackground": colorP_lighten.hex(),
  "statusBarItem.hoverBackground": colorP_lighten.hex(),
  "statusBarItem.prominentBackground": colorP_lighten.hex(),
  "statusBarItem.prominentHoverBackground": colorP_lighten.hex(),

  "titleBar.activeBackground": colorPrincipal.hex(),
  "titleBar.activeForeground": colorText.hex(),
  "titleBar.inactiveBackground": colorP_darken.hex(),
  "titleBar.inactiveForeground": null,

  "notifications.background": colorPrincipal.hex(),
  "notifications.foreground": colorWhite.hex(),
  "notificationLink.foreground": contrastColor.hex(),

  "pickerGroup.foreground": contrastColorLight.hex(),
  "pickerGroup.border": colorPrincipal.hex(),

  "debugToolBar.background": colorP_darken.hex(),
  "debugToolBar.border": null,

  "welcomePage.buttonBackground": colorPrincipal.hex(),
  "welcomePage.buttonHoverBackground": colorPrincipal.hex(),
  "walkThrough.embeddedEditorBackground": colorPrincipal.hex(),


  // Git colors
  "gitDecoration.addedResourceForeground": colorSuccesLight.hex(),
  "gitDecoration.modifiedResourceForeground": colorWarningLight.hex(),
  "gitDecoration.deletedResourceForeground": colorDanger.hex(),
  "gitDecoration.untrackedResourceForeground": colorSuccesLight.hex(),
  "gitDecoration.ignoredResourceForeground": colorP_lighter.hex(),
  "gitDecoration.conflictingResourceForeground": colorWarningLight.hex(),

  "source.elm": colorP_lightest.hex(),

  "editorRuler.foreground": colorP_lighten.hex(),

  // Background color for the progress bar shown for long running operations.
  "progress.background": contrastColor.hex(),


  // Terminal colors
  "terminal.ansiWhite": colorText.hex(),
  "terminal.ansiBlack": colorBlack.hex(),
  "terminal.ansiBlue": colorSyntaxViolet.hex(),
  "terminal.ansiCyan": colorSyntaxCyan.hex(),
  "terminal.ansiGreen": colorSyntaxGreen.hex(),
  "terminal.ansiMagenta": colorSyntaxMagenta.hex(),
  "terminal.ansiRed": colorSyntaxRed.hex(),
  "terminal.ansiYellow": colorSyntaxYellow.hex(),
  "terminal.ansiBrightWhite": colorWhite.hex(),
  "terminal.ansiBrightBlack": colorP_lighter.hex(),
  "terminal.ansiBrightBlue": colorSyntaxViolet.hex(),
  "terminal.ansiBrightCyan": colorSyntaxCyan.hex(),
  "terminal.ansiBrightGreen": colorSyntaxGreen.hex(),
  "terminal.ansiBrightMagenta": colorSyntaxMagenta.hex(),
  "terminal.ansiBrightRed": colorSyntaxRed.hex(),
  "terminal.ansiBrightYellow": colorSyntaxYellow.hex(),


}

const tcNormalize = [
  {
    name: "normalize font style of certain components",
    scope: [
      "meta.property-list.css meta.property-value.css variable.other.less",
      "meta.property-list.scss variable.scss",
      "meta.property-list.sass variable.sass",
      "meta.brace",
      "keyword.operator.operator",
      "keyword.operator.or.regexp",
      "keyword.operator.expression.in",
      "keyword.operator.relational",
      "keyword.operator.assignment",
      "keyword.operator.comparison",
      "keyword.operator.type",
      "keyword.operator",
      "keyword",
      "punctuation.definintion.string",
      "punctuation",
      "variable.other.readwrite.js",
      "storage.type",
      "source.css",
      "string.quoted"
    ],
    settings: {
      fontStyle: ""
    }
  },
]

const tcGlobalSettings = [
// gloabal settings
  {
    name: "Global settings",
    settings: {
      background: colorPrincipal.hex(),
      foreground: colorText.hex()
    }
  },
]

const tcGit = [
  // GIT  colors 
  {
    name: "Changed",
    scope: [
      "markup.changed",
      "meta.diff.header.git",
      "meta.diff.header.from-file",
      "meta.diff.header.to-file"
    ],
    settings: {
      foreground: colorInfoLight.hex(),
      fontStyle: "italic"
    }
  },
  {
    name: "Deleted",
    scope: "markup.deleted.diff",
    settings: {
      foreground: colorDanger.hex(),
      fontStyle: "italic"
    }
  },
  {
    name: "Inserted",
    scope: "markup.inserted.diff",
    settings: {
      foreground: colorSuccesLight.hex(),
      fontStyle: "italic"
    }
  },
]

const tcGeneral = [
  {
    // reserved language variables like this, super, self, etc.
    name: "Language Variable",
    scope: "variable.language",
    settings: {
      foreground: colorSpecialWordA.hex()
    }
  },
  {
    // escape sequences like \e
    name: "Constant Character Escape",
    scope: "constant.character.escape",
    settings: {
      foreground: colorString.hex()
    }
  },
  {
    // the </> of the tag & (,) in pug
    name: "Meta Tag",
    scope: [
      "punctuation.definition.tag", 
      "meta.tag"
    ],
    settings: {
      foreground: colorMetaTag.hex()
    }
  },
  {
    // HTML & PUG atributes
    name: "Tag attribute",
    scope: "entity.other.attribute-name",
    settings: {
      fontStyle: "italic",
      foreground: colorTagAttribute.hex(),
    }
  },
  {
    // pug classes
    name: "Pug Classes",
    scope: "entity.other.attribute-name.class.pug",
    settings: {
      fontStyle: "italic",
      foreground: colorPugClass.hex(),
    }
  },
  {
    // function name
    name: "Support Variable Property",
    scope: "support.variable.property",
    settings: {
      foreground: colorFunctionName.hex()
    }
  },
  {
    name: "Invalid deprecated",
    scope: "invalid.deprecated",
    settings: {
      foreground: colorDeprecated.hex(),
      background: colorDangerDark.hex()
    }
  },


  {
    // hex color
    name: "Constant Other Color",
    scope: "constant.other.color",
    settings: {
      foreground: colorRegularText.hex()
    }
  },









  
  
  {
    name: "Italics",
    scope: "italic",
    settings: {
      fontStyle: "italic"
    }
  },
  {
    name: "Bold",
    scope: "bold",
    settings: {
      foreground: colorString.hex(),
      fontStyle: "bold"
    }
  },
  {
    name: "Quote",
    scope: "quote",
    settings: {
      foreground: colorString.hex(),
      fontStyle: "italic"
    }
  },
  {
    name: "Invalid",
    scope: "invalid",
    settings: {
      background: colorDanger.hex(),
      foreground: colorWhite.hex()
    }
  },
]

const tcSpecialWords = [

  // SPECIAL WORDS

    // VIOLET COLOR
    
    {
      // types provided by the framework/library, 
      name: "Library class/type",
      scope: [
        // variables provided by the framework/library. For example global in javascript
        "support.variable",
        // types provided by the framework/library, this is probably only used for 
        // languages derived from C, which has typedef (and struct). 
        // Most other languages would introduce new types as classes.
        "support.type", 
        // when the framework/library provides classes.
        "support.class"
      ],
      settings: {
        foreground: colorSpecialWordB.hex(),
        // foreground: colorTestB.hex()
      }
    },
    {
      name: "Library (function & constant)",
      scope: [
        // functions provided by the framework/library
        // like log in console.log()
        "support.function", 
        // constants (magic values) provided by the framework/library.
        "support.constant"
      ],
      settings: {
        foreground: colorSpecialWordB.hex(),
        // foreground: colorTestB.hex(),
        fontStyle: "italic"
      }
    },

    // ORANGE COLOR
    // object properties before the last property
    // object.[propertyA.propertyAA].propertyAAA
    {
      name: "Variable Property Other object property",
      scope: ["variable.other.object.property"],
      settings: {
        foreground: colorVariableProperty.hex(),
        fontStyle: "italic"
      }
    },

    // Last object property
    // object.propertyA.propertyAA.[propertyAAA]
    {
      name: "Variable Instances",
      scope: [
        "variable.instance",
        "variable.other.instance",
        "variable.readwrite.instance",
        "variable.other.readwrite.instance",
        "variable.other.property"
      ],
      settings: {
        foreground: colorVariableInstance.hex()
      }
    },

    // RED COLOR
    {
      // Math in Math.random() in javascript
      name: "Support Constant Math",
      scope: "support.constant.math",
      settings: {
        foreground: colorContrastText.hex(),
        // foreground: colorTestB.hex()
      }
    },



    // BLUE COLOR

    {
      name: "Storage type",
      scope: [
        // var let const class function type 
        "storage.type",
        // @param, @returns
        "punctuation.definition.block.tag",
        // JavaScript Method Declaration e.g. `constructor`
        "meta.method.declaration",
        "meta.method.declaration storage.type.js"
        
      ],
      settings: {
        foreground: colorSpecialWordA.hex(),
        fontStyle: "italic"
      }
    },
    {
      name: "interface",
      scope: [
        "storage.type.interface"
      ],
      settings:{
        foreground: colorSpecialWordA.hex()
      }
    },
    {
      name: "Storage",
      scope: [
        "storage",
        "meta.class meta.method.declaration meta.var.expr storage.type.js",
        "storage.type.property.js",
        "storage.type.property.ts",
        "storage.type.property.tsx"
      ],
      settings: {
        foreground: colorSpecialWordA.hex(),
        fontStyle: "italic"
      }
    },
    


    //----------------------------------


    // PURPLE COLOR


    {
      name: "Entity Name Tag Custom",
      scope: "entity.name.tag.custom",
      settings: {
        foreground: colorSpecialWordC.hex(),
        // foreground: colorTestB.hex()
      }
    },
    {
      name: "Meta Delimiter Period",
      scope: "meta.delimiter.period",
      settings: {
        foreground: colorSpecialWordC.hex(),
        fontStyle: "italic"
      }
    },
    {
      name: "Meta Selector",
      scope: "meta.selector",
      settings: {
        foreground: colorSpecialWordC.hex(),
        fontStyle: "italic"
      }
    },
    {
      name: "Doctypes",
      scope: [
        "entity.name.tag.doctype", 
        "meta.tag.sgml.doctype"
      ],
      settings: {
        foreground: colorSpecialWordC.hex(),
        fontStyle: "italic"
      }
    },
    {
      name: "Keyword Control Conditional",
      scope: [
        "keyword.control.conditional.js",
        "keyword.control.conditional.ts",
        "keyword.control.switch.js",
        "keyword.control.switch.ts"
      ],
      settings: {
        foreground: colorSpecialWordC.hex(),
        fontStyle: ""
      }
    },
    {
      name: "loops",
      scope:[
        "keyword.control.loop"
      ],
      settings:{
        foreground: colorSpecialWordC.hex(),
      }
    },
    {
      // mainly related to flow control like continue, while, return, etc.
      // at rule name in css & scss & sass
      name: "import control keyword",
      scope: "keyword.control",
      settings: {
        foreground: colorSpecialWordB.hex(),
        // foreground: colorTestB.hex()
      }
    },

    //----------------------------------


    // CYAN COLOR
    {
      name: "Variable Parameter Function",
      scope: "variable.parameter.function",
      settings: {
        foreground: colorFunctionName.hex(),
        fontStyle: ""
      }
    },
    {
      name: "Meta Property Name",
      scope: "meta.property-name",
      settings: {
        foreground: colorFunctionName.hex()
      }
    },
    {
      name: "Keyword Control Operator",
      scope: "keyword.control.operator",
      settings: {
        foreground: colorFunctionName.hex()
      }
    },
    {
      // function name in javascript and mixins and function names in sass & scss
      name: "Entity Name Function",
      scope: ["entity.name.function"],
      settings: {
        foreground: colorFunctionName.hex(),
        fontStyle: "italic"
      }
    },
    {
      name:
        "Support Constant, `new` keyword, Special Method Keyword, `debugger`, other keywords",
      scope: [
        "support.constant",
        "keyword.other.special-method",
        "keyword.other.new",
        "keyword.other.debugger"
      ],
      settings: {
        foreground: colorFunctionName.hex()
      }
    },

]

const tcStorageNames = [
  // Storage names
  {
    name: "object key",
    scope: [
      "meta.var.expr",
      "meta.object-literal.key"
    ],
    settings:{
      foreground: colorVariableProperty.hex(),
      fontStyle: "normal"
    }
  },
  {
    name: "Variable",
    scope: "variable",
    settings: {
      foreground: colorVariable.hex(),
      fontStyle: "normal"
    }
  },
  {
    name: "Built-in constant",
    scope: [
      "constant.language",
      "punctuation.definition.constant",
      "variable.other.constant"
    ],
    settings: {
      foreground: colorVariable.hex()
    }
  },
  {
    name: "User-defined constant",
    scope: [
      "constant.character",
      "constant.other"
    ],
    settings: {
      foreground: colorVariable.hex()
    }
  },
  {
    name: "Class name",
    scope: ["entity.name.class", "meta.class entity.name.type.class"],
    settings: {
      foreground: colorVariable.hex()
    }
  },
  {
    name: "Inherited class",
    scope: "entity.other.inherited-class",
    settings: {
      foreground: colorVariable.hex(),
    }
  },
  {
    // NO IDEA
    name: "Variable Property Other object",
    scope: ["variable.other.object.js"],
    settings: {
      // foreground: colorVariable.hex(),
      foreground: colorTestB.hex(),
      fontStyle: ""
    }
  },

]

const tcStrings = [
  {
    name: "String",
    scope: "string",
    settings: {
      foreground: colorString.hex()
    }
  },
  {
    name: "String Quoted",
    scope: [
      "string.quoted",
      "variable.other.readwrite.js",
      "string.quoted.single.js"
    ],
    settings: {
      foreground: colorString.hex()
    }
  },
  {
    name: "Backtics(``) in Template Strings",
    scope: "string.template punctuation.definition.string",
    settings: {
      foreground: colorString.hex()
    }
  },
  {
    name: "Punctuation Definition String",
    scope: "punctuation.definition.string",
    settings: {
      foreground: colorString.hex()
    }
  },
]

const tcPunctuation = [
  {
    name: "Punctuation",
    scope: [
      "punctuation",
      
      // "punctuation.definition.arguments",
      // "punctuation.definition.array",
      // "punctuation.definition.list",
      // "punctuation.definition.tag",
      // "punctuation.definition.string",
      // "punctuation.definition.quote",
      // "punctuation.definition.separator",
      // "punctuation.definition.range",
      // "punctuation.definition.namespace",
      // "punctuation.definition.heading",
      // "punctuation.definition.entity",
      // "punctuation.definition.constant",
      // "punctuation.definition.directive",
      // "punctuation.definition.parameters",
      // "punctuation.definition.attribute",
      // "punctuation.definition.arguments",
      // "punctuation.definition.annotation",
      // "punctuation.definition.comment",
      // "punctuation.definition.annotation-arguments",
      // "punctuation.definition.binding-pattern",
      // "punctuation.definition.case-pattern",
      // "punctuation.definition.template-expression",
      // "punctuation.definition.block",

      "punctuation.separator",
      "meta.property-list.css.sass",
      "punctuation.accessor",
      // dot (.) for object property e.g. object.property
      "punctuation.accessor",
    ],
    settings: {
      foreground: colorPunctuation.hex(),
      // foreground: colorTestB.hex(),
    }
  },
  {
    name: "Punctuation Tweaks",
    scope: [
      "punctuation.terminator.expression",
      "punctuation.definition.arguments",
      "punctuation.definition.array",
      "punctuation.section.array",
      "meta.array"
    ],
    settings: {
      foreground: colorPunctuation.hex(),
      // foreground: colorTestB.hex(),
    }
  },
  {
    name: "More Punctuation Tweaks",
    scope: [
      "punctuation.definition.list.begin",
      "punctuation.definition.list.end",
      "punctuation.separator.arguments",
      "punctuation.definition.list"
    ],
    settings: {
      foreground: colorPunctuation.hex(),
      // foreground: colorTestB.hex(),
    }
  },
  {
    name: "Markdown Punctuation",
    scope: [
      "punctuation.definition.string.markdown",
      "punctuation.definition.string.begin.markdown",
      "punctuation.definition.string.end.markdown",
      "meta.link.inline.markdown punctuation.definition.string"
    ],
    settings: {
      foreground: colorPunctuation.hex(),
      // foreground: colorTestB.hex(),
    }
  },
  {
    name: "TypeScript[React] Import/Export Punctuations",
    scope: [
      "meta.import.ts punctuation.definition.block",
      "meta.import.tsx punctuation.definition.block",
      "meta.export.ts punctuation.definition.block",
      "meta.export.tsx punctuation.definition.block"
    ],
    settings: {
      foreground: colorPunctuation.hex(),
      // foreground: colorTestB.hex(),
    }
  },
  {
    // () [] {}
    name: "Meta Braces and curly brackets",
    scope: [
      // () []
      "meta.brace",
      // {}
      "punctuation.definition",
      // () in function definitions e.g. function fnName()...
      "punctuation.definition.parameters"
    ],
    settings: {
      foreground: colorPunctuation.hex()
    }
  },
  {
    // ${}
    name: "Template Literals expressions",
    scope: [
      "punctuation.definition.template-expression"
    ],
    settings: {
      foreground: colorContrastText.hex()
    }
  },

  // TESTING

  {
    // in theory the entire line which declares a function
    // but does not work that way
    // # alone in a function in javascript
    // Comma in functions
    name: "Comma in functions",
    scope: "meta.function",
    settings: {
      // foreground: colorVariable.hex(),
      background: colorTestA.hex()
    }
  },
  {
    name: "JavaScript Meta Punctuation Definition",
    scope: "meta.js punctuation.definition.js",
    settings: {
      foreground: colorPunctuation.hex(),
      background: colorTestA.hex()
    }
  },







  // KEYWORD OPERATORS
  {
    // perators can either be textual (e.g. or) or be characters.
    // like typeof, instanceof, new, in, --, delete in javascript
    // and some s#$%t in regex
    name: "Keyword Operator",
    scope: "keyword.operator",
    settings: {
      foreground: colorOperator.hex(),
      // foreground: colorTestB.hex(),
      fontStyle: ""
    }
  },
  {
    // += -= *= /= %= &= |= ^= <<= and >>=
    name: "Keyword Operator Assignment",
    scope: "keyword.operator.assignment",
    settings: {
      foreground: colorOperator.hex(),
      // foreground: colorTestA.hex(),
    }
  },
  {
    // + - * / % ** ++ --
    name: "Keyword Operator Arithmetic",
    scope: "keyword.operator.arithmetic",
    settings: {
      foreground: colorOperator.hex(),
      // foreground: colorTestB.hex(),
    }
  },
  {
    // & | ^ ~ << >> >>>
    name: "Keyword Operator Bitwise",
    scope: "keyword.operator.bitwise",
    settings: {
      foreground: colorOperator.hex(),
      // foreground: colorTestB.hex(),
    }
  },
  {
    // ++
    name: "Keyword Operator Increment",
    scope: [
      "keyword.operator.increment",
      "keyword.operator.decrement"
    ],
    settings: {
      foreground: colorOperator.hex(),
      // foreground: colorTestB.hex(),
    }
  },
  {
    // ? :
    name: "Keyword Operator Ternary",
    scope: "keyword.operator.ternary",
    settings: {
      foreground: colorOperator.hex(),
      // foreground: colorTestB.hex(),
    }
  },
  {
    name: "Keyword Operator Logical",
    scope: "keyword.operator.logical",
    settings: {
      foreground: colorSpecialWordC.hex(),
      // foreground: colorTestB.hex(),
      fontStyle: ""
    }
  },
  {
    // <= >= 
    name: "keyword Operator Comparison",
    scope: [
      "keyword.operator.comparison"
    ],
    settings:{
      foreground: colorSpecialWordC.hex(),
      // foreground: colorTestB.hex(),
    }
  },
  {
    // =	≠	>	<	≥	≤
    name: "Keyword Operator Relational",
    scope: "keyword.operator.relational",
    settings: {
      foreground: colorSpecialWordC.hex(),
      // foreground: colorTestB.hex(),
      fontStyle: "italic"
    }
  },
]

const tcSpecialValues = [
  {
    name: "Number",
    scope: ["constant.numeric", "constant.character.numeric"],
    settings: {
      foreground: colorNumber.hex(),
      fontStyle: ""
    }
  },
  {
    name: "Null and undefined",
    scope: [
      "constant.language.null",
      "constant.language.undefined"
    ],
    settings: {
      foreground: colorNullUnd.hex()
    }
  },
  {
    name: "Boolean",
    scope: [
      "constant.language.boolean"
    ],
    settings: {
      foreground: colorBoolean.hex()
    }
  },
  {
    // code like ~ = &#x7e
    name: "entity names",
    scope: [
      "entity.name.type"
    ],
    settings:{
      foreground: colorVariable.hex()
    }
  },
]

const tcStylesheets = [
  // {
  //   name: "sass test",
  //   scope:[
  //     "keyword.other.parent-selector",
  //     "keyword.control.interpolation.sass",
  //     "keyword.other.reserved.sass",
  //     "entity.other.pseudo-classs",
  //     "support.function.sass"
  //   ],
  //   settings:{
  //     foreground: colorTestB.hex()
  //   }
  // },

  {
    name: "css and pug ID selector",
    scope:[
      "entity.other.attribute-name.id",
      "entity.other.attribute-name.id.css",
      "entity.other.attribute-name.id.scss"
    ],
    settings:{
      foreground: colorCssId.hex()
    }
  },
  {
    name: "css class selector",
    scope:[
      "entity.other.attribute-name.class.css"
    ],
    settings:{
      foreground: colorCssClass.hex()
    }
  },
  {
    name: "Tag selectors and &",
    scope: [
      "entity.name.tag.css",
      "entity.name.tag.less",
      "entity.name.tag.custom.css",
      "entity.name.tag.scss",
      "entity.name.tag.sass"
    ],
    settings: {
      foreground: colorCssTag.hex(),
      fontStyle: ""
    }
  },
  {
    name: "Property name stylesheets",
    scope:[
      "support.type.property-name.css"
    ],
    settings:{
      foreground: colorCssProperty.hex()
    }
  },
  {
    name: "Values in css",
    scope: ["support.constant.property-value.css"],
    settings: {
      foreground: colorCssValue.hex()
    }
  },
  {
    name: "stylesheet numbers",
    scope: ["constant.numeric.css", "punctuation.definition.constant.css"],
    settings: {
      foreground: colorNumber.hex()
    }
  },
  {
    name: "Stylesheet Units",
    scope: [
      "keyword.other.unit",
      "keyword.other.unit.css",
      "keyword.other.unit.scss",
      "keyword.other.unit.sass"
    ],
    settings: {
      foreground: colorCssUnits.hex()
    }
  },
  {
    // Stylesheets special words: (orientation),(min-monochrome),(color),
    // (min-aspect-ratio), (min-resolution)
    name: "Support Type Property Name & entity name tags",
    scope: [
      "support.type.vendor.property-name",
      "support.constant.vendor.property-value",
      "support.type.property-name",
      "meta.property-list entity.name.tag"
    ],
    settings: {
      foreground: colorCssSpecialWord.hex(),
      fontStyle: ""
    }
  },
  {
    name: "SCSS & SASS Variable",
    scope: [
      "variable.scss",
      "variable.sass",
      "variable.parameter.scss",
      "variable.parameter.sass"
    ],
    settings: {
      foreground: colorVariable.hex()
    }
  },


  {
    // css !importatnt, @
    // keywords for sass
    name: "Keyword",
    scope: [
      "punctuation.definition.keyword",
      "keyword.operator.css",
      "keyword.operator.scss",
      //@ in at rules
      "keyword.control.css",
      "keyword.control.scss",
      "keyword.control.less",
      "keyword.control.css.sass",
      //!important
      "keyword.other.important.css",
      //&
      "meta.property-list entity.name.tag.reference",

      // font-feature-values
      "entity.name.tag.custom.css",
      "entity.name.tag.custom.scss",
      "entity.name.tag.custom.scss",

      "punctuation.scss",
      // "punctuation.definition.keyword.scss",
      "punctuation.definition.entity.scss",
      
      "meta.selector.scss"
    ],
    settings: {
      foreground: colorSpecialWordB.hex(),
      // foreground: colorTestC.hex(),
      fontStyle: "italic"
    }
  },
  {
    name: "colon (:) in stylesheets",
    scope: [
      "punctuation.separator.key-value.css",
      "punctuation.separator.key-value.scss",
      "punctuation.separator.key-value.less",
      "punctuation.separator.key-value.css.sass"
    ],
    settings:{
      foreground: colorPunctuation.hex()
    }
  },
  {
    name: "Wildcard(*) selector in Stylesheets",
    scope: [
      "entity.name.tag.wildcard.css",
      "entity.name.tag.wildcard.less",
      "entity.name.tag.wildcard.scss",
      "entity.name.tag.wildcard.sass"
    ],
    settings: {
      foreground: colorFunctionName.hex()
    }
  },
  {
    name: "Attribute Name for CSS and SCSS",
    scope: [
      "meta.attribute-selector.css entity.other.attribute-name.attribute",
      "meta.attribute-selector.scss entity.other.attribute-name.attribute",
      "meta.attribute-selector.sass entity.other.attribute-name.attribute",
      "meta.attribute-selector.less entity.other.attribute-name.attribute",
      "variable.other.readwrite.js",


      // "entity.other.attribute-name.css.sass",
      // "keyword.operator.attribute-selector.css.sass",
      // "meta.attribute-selector"
      "meta.attribute-selector"
    ],
    settings: {
      foreground: colorCssAttribute.hex(),
      // foreground: colorTestC.hex()
    }
  },
  {
    name: "Variables in SASS At-Rules",
    scope: [
      "source.css.scss meta.at-rule variable",
      "source.css.sass meta.at-rule variable"
    ],
    settings: {
      foreground: colorSpecialWordB.hex(),
      foreground: colorTestB.hex()
    }
  },
]

// languages
const tcJavascript = [
  {
    name: "javascript portotype methods",
    scope: ["support.variable.property.js"],
    settings: {
      foreground: colorSpecialWordB.hex(),
      // foreground: colorTestB.hex(),
      fontStyle: "italic"
    }
  },
  {
    // nn
    name: "Storage type",
    scope: "storage.type.function.arrow.js",
    settings: {
      fontStyle: ""
    }
  },
  {
    name: "this word in javascript",
    scope: ["variable.language.this.js"],
    settings: {
      foreground: colorContrastText.hex()
    }
  },
  {
    name: "JavaScript Classes",
    scope: "meta.class entity.name.type.class.js",
    settings: {
      foreground: colorVariable.hex()
    }
  },
  {
    name: "JavaScript module imports and exports",
    scope: [
      "variable.other.meta.import.js",
      "meta.import.js variable.other",
      "variable.other.meta.export.js",
      "meta.export.js variable.other"
    ],
    settings: {
      foreground: colorVariable.hex(),
    }
  },
  {
    name: "TypeScript[React] Punctuation Decorators",
    scope: [
      "meta.decorator punctuation.decorator.ts",
      "meta.decorator punctuation.decorator.tsx"
    ],
    settings: {
      foreground: colorPunctuation.hex()
    }
  },
  {
    name: "TypeScript[React] Variables and Object Properties",
    scope: [
      "variable.other.readwrite.alias.ts",
      "variable.other.readwrite.alias.tsx",
      "variable.other.readwrite.ts",
      "variable.other.readwrite.tsx",
      "variable.other.object.ts",
      "variable.other.object.tsx",
      "variable.object.property.ts",
      "variable.object.property.tsx",
      "variable.other.ts",
      "variable.other.tsx",
      "variable.tsx",
      "variable.ts"
    ],
    settings: {
      foreground: colorVariable.hex()
    }
  },
  {
    name: "TypeScript[React] Entity Name Types",
    scope: [
      "entity.name.type.ts", 
      "entity.name.type.tsx"
    ],
    settings: {
      foreground: "#ffcb8b",
      foreground: colorVariable.hex()
    }
  },
  {
    name: "TypeScript[React] Node Classes",
    scope: ["support.class.node.ts", "support.class.node.tsx"],
    settings: {
      foreground: colorSpecialWordB.hex(),
      foreground: colorTestC.hex()
    }
  },
  {
    name: "TypeScript[React] Entity Name Types as Parameters",
    scope: [
      "meta.type.parameters.ts entity.name.type",
      "meta.type.parameters.tsx entity.name.type"
    ],
    settings: {
      foreground: colorP_lightest.hex()
    }
  },
  {
    name: "TypeScript[React] Punctuation Decorators",
    scope: "meta.tag.js meta.jsx.children.tsx",
    settings: {
      foreground: colorSpecialWordB.hex(),
      foreground: colorTestA.hex()
    }
  },
  {
    name: "JavaScript Variable Other ReadWrite",
    scope: ["variable.other.readwrite.js", "variable.parameter"],
    settings: {
      foreground: colorVariable.hex()
    }
  },
  {
    name: "Support Class Component",
    scope: ["support.class.component.js", "support.class.component.tsx"],
    settings: {
      foreground: colorContrastText.hex(),
      fontStyle: ""
    }
  },
  {
    name: "@ in decorator in javascript",
    scope: ["punctuation.decorator.js"],
    settings: {
      foreground: colorFunctionName.hex()
    }
  },
  {
    name: "Text nested in React tags",
    scope: [
      "meta.jsx.children",
      "meta.jsx.children.js",
      "meta.jsx.children.tsx"
    ],
    settings: {
      foreground: colorRegularText.hex()
    }
  },
  {
    name: "TypeScript Classes",
    scope: "meta.class entity.name.type.class.tsx",
    settings: {
      foreground: colorVariable.hex()
    }
  },
  {
    name: "TypeScript Entity Name Type",
    scope: ["entity.name.type.tsx", "entity.name.type.module.tsx"],
    settings: {
      foreground: "#ffcb8b",
      foreground: colorTestB.hex()
    }
  },
  {
    name: "TypeScript Method Declaration e.g. `constructor`",
    scope: [
      "meta.method.declaration storage.type.ts",
      "meta.method.declaration storage.type.tsx"
    ],
    settings: {
      foreground: colorSpecialWordA.hex()
    }
  },
  {
    name: "JavaScript[React] Variable Other Object",
    scope: [
      "variable.other.object.js",
      "variable.other.object.jsx",
      "variable.object.property.js",
      "variable.object.property.jsx"
    ],
    settings: {
      foreground: colorVariable.hex()
    }
  },
  {
    name: "JavaScript Variables",
    scope: ["variable.js", "variable.other.js"],
    settings: {
      foreground: colorVariable.hex(),
    }
  },
  {
    name: "JavaScript Entity Name Type",
    scope: ["entity.name.type.js", "entity.name.type.module.js"],
    settings: {
      foreground: colorSpecialWordB.hex(),
      fontStyle: ""
    }
  },
  {
    name: "JavaScript Support Classes",
    scope: "support.class.js",
    settings: {
      foreground: colorVariable.hex()
    }
  },
  {
    name:
      "Keyword, imports, returns javascript and typescript",
    scope: [
      "keyword.control.flow.js",
      "keyword.control.flow.ts",
      "keyword.control.flow.tsx",
      "keyword.control.import.js",
      "keyword.control.import.ts",
      "keyword.control.import.tsx",
      "keyword.control.from.js",
      "keyword.control.from.ts",
      "keyword.control.from.tsx"
    ],
    settings: {
      foreground: colorSpecialWordB.hex(),
      // foreground: colorTestB.hex(),
      fontStyle: "italic"
    }
  },
]

const tcCoffescript = [

  {
    name: "CoffeScript Variable Assignment",
    scope: "variable.assignment.coffee",
    settings: {
      foreground: "#31e1eb"
    }
  },
  {
    name: "CoffeScript Parameter Function",
    scope: "variable.parameter.function.coffee",
    settings: {
      foreground: colorFunctionName.hex()
    }
  },
  {
    name: "CoffeeScript Assignments",
    scope: "variable.assignment.coffee",
    settings: {
      foreground: "#7fdbca"
    }
  },
]

const tcCsharp = [

  {
    name: "C# Readwrite Variables",
    scope: "variable.other.readwrite.cs",
    settings: {
      foreground: colorVariable.hex()
    }
  },
  {
    name: "C# Classes & Storage types",
    scope: ["entity.name.type.class.cs", "storage.type.cs"],
    settings: {
      foreground: colorSpecialWordB.hex(),
    }
  },
  {
    name: "C# Namespaces",
    scope: "entity.name.type.namespace.cs",
    settings: {
      foreground: "#B2CCD6"
    }
  },
]

const tcElixir = [

  {
    name: "Elixir Classes",
    scope: [
      "source.elixir support.type.elixir",
      "source.elixir meta.module.elixir entity.name.class.elixir"
    ],
    settings: {
      foreground: colorSpecialWordB.hex()
    }
  },
  {
    name: "Elixir Functions",
    scope: "source.elixir entity.name.function",
    settings: {
      foreground: "#addb67"
    }
  },
  {
    name: "Elixir Constants",
    scope: [
      "source.elixir constant.other.symbol.elixir",
      "source.elixir constant.other.keywords.elixir"
    ],
    settings: {
      foreground: colorSpecialWordB.hex()
    }
  },
  {
    name: "Elixir String Punctuations",
    scope: "source.elixir punctuation.definition.string",
    settings: {
      foreground: colorString.hex()
    }
  },
  {
    name: "Elixir",
    scope: [
      "source.elixir variable.other.readwrite.module.elixir",
      "source.elixir variable.other.readwrite.module.elixir punctuation.definition.variable.elixir"
    ],
    settings: {
      foreground: "#addb67"
    }
  },
  {
    name: "Elixir Binary Punctuations",
    scope: "source.elixir .punctuation.binary.elixir",
    settings: {
      foreground: colorSpecialWordC.hex(),
      fontStyle: "italic"
    }
  },
]

const tcMarckdown = [
  {
    name: "Markdown Headings",
    scope: "markup.heading.markdown",
    settings: {
      foreground: "#82b1ff"
    }
  },
  {
    name: "Markdown Italics",
    scope: "markup.italic.markdown",
    settings: {
      foreground: colorSpecialWordC.hex(),
      fontStyle: "italic"
    }
  },
  {
    name: "Markdown Bold",
    scope: "markup.bold.markdown",
    settings: {
      foreground: "#addb67",
      fontStyle: "bold"
    }
  },
  {
    name: "Markdown Quote + others",
    scope: "markup.quote.markdown",
    settings: {
      foreground: "#697098",
      fontStyle: "italic"
    }
  },
  {
    name: "Markdown Raw Code + others",
    scope: "markup.inline.raw.markdown",
    settings: {
      foreground: "#80CBC4"
    }
  },
  {
    name: "Markdown Links",
    scope: [
      "markup.underline.link.markdown",
      "markup.underline.link.image.markdown"
    ],
    settings: {
      foreground: "#ff869a"
    }
  },
  {
    name: "Markdown Link Title and Description",
    scope: [
      "string.other.link.title.markdown",
      "string.other.link.description.markdown"
    ],
    settings: {
      foreground: colorRegularText.hex()
    }
  },
  {
    name: "Markdown MetaData Punctuation",
    scope: ["punctuation.definition.metadata.markdown"],
    settings: {
      foreground: "#7fdbca"
    }
  },
  {
    name: "Markdown List Punctuation",
    scope: ["beginning.punctuation.definition.list.markdown"],
    settings: {
      foreground: "#82b1ff"
    }
  },
  {
    name: "Markdown Inline Raw String",
    scope: "markup.inline.raw.string.markdown",
    settings: {
      foreground: "#addb67"
    }
  },
]

const tcGo = [

  {
    name: "Go Function Calls",
    scope: "source.go meta.function-call.go",
    settings: {
      foreground: "#DDDDDD",
      foreground: colorTestB.hex()
    }
  },
  {
    name: "Go Keywords",
    scope: [
      "source.go keyword.package.go",
      "source.go keyword.import.go",
      "source.go keyword.function.go",
      "source.go keyword.type.go",
      "source.go keyword.struct.go",
      "source.go keyword.interface.go",
      "source.go keyword.const.go",
      "source.go keyword.var.go",
      "source.go keyword.map.go",
      "source.go keyword.channel.go",
      "source.go keyword.control.go"
    ],
    settings: {
      foreground: colorSpecialWordC.hex(),
      fontStyle: "italic"
    }
  },
  {
    name: "Go Constants e.g. nil, string format (%s, %d, etc.)",
    scope: [
      "source.go constant.language.go",
      "source.go constant.other.placeholder.go"
    ],
    settings: {
      foreground: colorContrastText.hex()
    }
  },
]

const tcPython = [
  {
    name: "Language Constants in Python",
    scope: "constant.language.python",
    settings: {
      foreground: colorContrastText.hex()
    }
  },
  {
    name: "Python Function Parameter and Arguments",
    scope: [
      "variable.parameter.function.python",
      "meta.function-call.arguments.python"
    ],
    settings: {
      foreground: colorSpecialWordB.hex()
    }
  },
  {
    name: "Python Function Call",
    scope: ["meta.function-call.python", "meta.function-call.generic.python"],
    settings: {
      foreground: colorFunctionName.hex()
    }
  },
  {
    name: "Punctuations in Python",
    scope: "punctuation.python",
    settings: {
      foreground: colorRegularText.hex()
    }
  },
  {
    name: "Decorator Functions in Python",
    scope: "entity.name.function.decorator.python",
    settings: {
      foreground: colorContrastText.hex()
    }
  },
  {
    name: "Python Language Variable",
    scope: "source.python variable.language.special",
    settings: {
      foreground: colorVariable.hex()
    }
  },
]

const tcRuby = [
  {
    name: "Ruby Variables",
    scope: ["variable.other.ruby"],
    settings: {
      foreground: colorVariable.hex()
    }
  },
  {
    name: "Ruby Class",
    scope: ["entity.name.type.class.ruby"],
    settings: {
      foreground: "#ecc48d"
    }
  },
  {
    name: "Ruby Hashkeys",
    scope: "constant.language.symbol.hashkey.ruby",
    settings: {
      foreground: "#7fdbca"
    }
  },
  {
    name: "Ruby Symbols",
    scope: "constant.language.symbol.ruby",
    settings: {
      foreground: "#7fdbca"
    }
  },
  {
    name:
      "Keywords Controls Ruby",
    scope: [
      "keyword.control.ruby",
      "keyword.control.module.ruby",
      "keyword.control.class.ruby",
      "keyword.control.def.ruby"
    ],
    settings: {
      foreground: colorSpecialWordC.hex(),
      fontStyle: "italic"
    }
  },
]

const tcHtml = [
  {
    name: "HTML Tag names",
    scope: [
      "entity.name.tag",
      "meta.tag.other.html",
      "meta.tag.other.js",
      "meta.tag.other.tsx",
      "entity.name.tag.tsx",
      "entity.name.tag.js",
      "entity.name.tag",
      "meta.tag.js",
      "meta.tag.tsx",
      "meta.tag.html"
    ],
    settings: {
      foreground: colorHtmlTag.hex(),
      fontStyle: ""
    }
  },
  {
    name: "@ : = for html",
    scope: [
      "punctuation.separator.key-value.html",
      "punctuation.definition.tag.html"
    ],
    settings: {
      foreground: colorRegularText.hex()
    }
  },

  {
    name: "ID Attribute Name in HTML",
    scope: "entity.other.attribute-name.id.html",
    settings: {
      foreground: "#addb67"
    }
  },
  {
    name: "HTML Punctuation Definition Tag",
    scope: "punctuation.definition.tag.html",
    settings: {
      foreground: "#6ae9f0"
    }
  },
  {
    name: "HTML Doctype",
    scope: "meta.tag.sgml.doctype.html",
    settings: {
      foreground: colorSpecialWordC.hex(),
      fontStyle: "italic"
    }
  },
]

const tcJson = [
  {
    name: "JSON Property Names",
    scope: "support.type.property-name.json",
    settings: {
      foreground: colorVariable.hex()
    }
  },
  {
    // also in javascript
    name: "JSON Support Constants",
    scope: "support.constant.json",
    settings: {
      foreground: colorContrastText.hex()
    }
  },
  {
    name: "JSON Property values (string)",
    scope: "meta.structure.dictionary.value.json string.quoted.double",
    settings: {
      foreground: colorString.hex()
    }
  },
  {
    name: "Strings in JSON values",
    scope: "string.quoted.double.json punctuation.definition.string.json",
    settings: {
      foreground: colorString.hex()
    }
  },
  {
    name: "Specific JSON Property values like null",
    scope:
      "meta.structure.dictionary.json meta.structure.dictionary.value constant.language",
    settings: {
      foreground: colorContrastText.hex()
    }
  },

]

const tcPhp = [
  {
    name: "PHP Variables",
    scope: ["variable.other.php", "variable.other.property.php"],
    settings: {
      foreground: "#bec5d4"
    }
  },
  {
    name: "Support Classes in PHP",
    scope: "support.class.php",
    settings: {
      foreground: "#ffcb8b"
    }
  },
  {
    name: "Punctuations in PHP function calls",
    scope: "meta.function-call.php punctuation",
    settings: {
      foreground: colorRegularText.hex()
    }
  },
  {
    name: "PHP Global Variables",
    scope: "variable.other.global.php",
    settings: {
      foreground: "#addb67"
    }
  },
  {
    name: "Declaration Punctuation in PHP Global Variables",
    scope: "variable.other.global.php punctuation.definition.variable",
    settings: {
      foreground: "#addb67"
    }
  },
]

const tcOtherLang = [
  {
   name: "YAML Entity Name Tags",
   scope: "entity.name.tag.yaml",
   settings: {
     foreground: colorTagAttribute.hex()
   }
 },
 {
   name: "RegExp String",
   scope: ["string.regexp", "string.regexp keyword.other"],
   settings: {
     foreground: colorString.hex()
   }
 }
]

const tcComments = [
  {
    name: "Comment",
    scope: [
      "comment"
    ],
    settings: {
      foreground: colorComment.hex(),
      fontStyle: "italic"
    }
  },
  {
    name: "Double-Slashed Comment",
    scope: [
      "comment.line.double-slash",
      "punctuation.definition.comment",
      "punctuation.whitespace.comment"
    ],
    settings: {
      foreground: colorComment.hex()
    }
  },


  //documentation inside comments
  {
    name: "Entity Names in Code Documentations",
    scope: [
      "entity.name.type.instance.jsdoc",
      "entity.name.type.instance.phpdoc"
    ],
    settings: {
      foreground: colorDocEntityNames.hex(),
      // foreground: colorTestB.hex()
    }
  },
  {
    name: "Other Variables in Code Documentations",
    scope: [
      "variable.other.jsdoc", 
      "variable.other.phpdoc"
    ],
    settings: {
      foreground: colorDocVariables.hex()
    }
  },

]

// testing
const tcTesting = [
  {
    name: "Object",
    scope: "object",
    settings: {
      foreground: "#cdebf7",
      foreground: colorTestB.hex()
    }
  },
  {
    name: "Object Comma",
    scope: "object.comma",
    settings: {
      foreground: colorWhite.hex(),
      foreground: colorTestB.hex()
    }
  },
  {
    name: "Constant Other Color RGB Value Punctuation Definition Constant",
    scope: "constant.other.color.rgb-value punctuation.definition.constant",
    settings: {
      foreground: "#F78C6C",
      foreground: colorTestB.hex()
    }
  },
  {
    name: "Invalid Broken",
    scope: "invalid.broken",
    settings: {
      foreground: "#020e14",
      background: "#F78C6C",
      foreground: colorTestC.hex()
    }
  },
  {
    name: "Template Strings",
    scope: "string.template meta.template.expression",
    settings: {
      foreground: "#F78C6C",
      foreground: colorTestB.hex(),
      background: colorTestA.hex()
    }
  },
  {
    name: "Raw Code",
    scope: "raw",
    settings: {
      foreground: "#80CBC4",
      foreground: colorTestB.hex()
    }
  },
  {
    name: "Support Constant Property Value meta",
    scope: "support.constant.meta.property-value",
    settings: {
      foreground: "#7fdbca",
      foreground: colorTestB.hex()
    }
  },
  {
    name: "Support Variable DOM",
    scope: "support.variable.dom",
    settings: {
      foreground: "#addb67",
      foreground: colorTestB.hex()
    }
  },







  {
    name: "Invalid Unimplemented",
    scope: "invalid.unimplemented",
    settings: {
      background: "#8BD649",
      foreground: colorWhite.hex()
    }
  },
  {
    name: "Invalid Illegal",
    scope: "invalid.illegal",
    settings: {
      foreground: colorDanger.hex(),
      background: colorWarningLight.hex()
    }
  },
  {
    name: "Variable Interpolation",
    scope: "variable.interpolation",
    settings: {
      foreground: "#ec5f67",
      foreground: colorTestB.hex()
    }
  },
  {
    name: "Meta Function Call",
    scope: "meta.function-call",
    settings: {
      foreground: colorSpecialWordB.hex(),
      foreground: colorTestB.hex()
    }
  },
  {
    name: "Punctuation Section Embedded",
    scope: "punctuation.section.embedded",
    settings: {
      foreground: "#d3423e",
      foreground: colorTestB.hex()
    }
  },




  // NOT WORKING
  // {
  //   name: "Variable Function",
  //   scope: "variable.function",
  //   settings: {
  //     foreground: colorSpecialWordB.hex(),
  //     foreground: colorTestB.hex()
  //   }
  // },

  
]

const theme = {
  name: "Mao",
  type: "dark",
  colors: {
    ...themeColors
  },
  tokenColors: [
    ...tcGlobalSettings,
    ...tcNormalize,
    ...tcGit,

    ...tcGeneral,
    ...tcSpecialWords,
    ...tcStorageNames,
    ...tcStrings,

    ...tcPunctuation,
    ...tcComments,
    ...tcSpecialValues,

    ...tcStylesheets,

    ...tcJavascript,
    ...tcHtml,
    ...tcJson,
    ...tcPython,
    ...tcCoffescript,
    ...tcCsharp,
    ...tcElixir,
    ...tcMarckdown,
    ...tcGo,
    ...tcRuby,
    ...tcPhp,
    ...tcOtherLang,

    ...tcTesting,
  ]
}

module.exports = theme