const colors = require("./colors/dark-gray")

// theme object variables
const themeColors = {
  // An extra border around active elements to separate them from others for greater contrast.
  "contrastActiveBorder": null,
  // An extra border around elements to separate them from others for greater contrast.
  "contrastBorder": null,
  // Overall border color for focused elements. This color is only used if not overridden by a component.
  "focusBorder": colors.pLighten.hex(),
  // Overall foreground color. This color is only used if not overridden by a component.
  "foreground": colors.text.hex(),
  // Shadow color of widgets such as Find/Replace inside the editor.
  "widget.shadow": colors.pDarken.hex(),
  // Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
  "selection.background": colors.info.hex(),
  // labels in the welcome page
  "descriptionForeground": colors.text.hex(),
  // Overall foreground color for error messages
  "errorForeground": colors.danger.hex(),

  // Links
  "textLink.foreground": colors.syntaxBlue.hex(),
  // Links hover
  "textLink.activeForeground": colors.syntaxBlue.lighten(0.5).hex(),

  "textBlockQuote.background": colors.pLighter.hex(),
  "textBlockQuote.border": colors.pLighter.hex(),
  "textCodeBlock.background": colors.pLighter.hex(),
  "textPreformat.foreground": colors.text.hex(),
  "textSeparator.foreground": colors.text.hex(),

  // Editor in general
  "editor.background": colors.principal.hex(),
  "editor.foreground": colors.text.hex(),
  "editorLineNumber.foreground": colors.pLighten.hex(),
  "editorLineNumber.activeForeground": colors.pLightest.hex(),
  "editorCursor.foreground": colors.contrastLight.hex(),
  "editorLink.activeForeground": null,

  // cuando selecciono con el mouse
  "editor.selectionBackground": colors.selection.hex(),
  "editor.selectionForeground": colors.text.hex(),

  // las palabras iguales a la seleccion
  "editor.selectionHighlightBackground": colors.selectionHighlight.hex(),

  // la seleccion cuando salgo de la ventana donde estoy
  "editor.inactiveSelectionBackground": colors.selectionInactive.hex(),

  // cuando ubico el cursor en el medio de una palabra y vscode la selecciona
  "editor.wordHighlightBackground": colors.hoverHiglight.hex(),

  // cuando ubico el puntero encima de una palabra
  "editor.hoverHighlightBackground": colors.hoverHiglight.hex(),

  // cuando selecciono parcialmente una palabra y vscode selecciona todo
  "editor.wordHighlightStrongBackground": colors.wordHighlightStrong.hex(),

  // palabra seleccionada por el finder
  "editor.findMatchBackground": colors.findMatch.hex(),

  // todas las palabras encontradas por el finder
  "editor.findMatchHighlightBackground": colors.findHighlight.hex(),
  "editor.findRangeHighlightBackground": null,

  // color de la linea en la que el cursor esta ubicado
  "editor.lineHighlightBackground": colors.lineHiglight.hex(),
  "editor.lineHighlightBorder": null,

  // fondo de la linea completa cuando se busca
  "editor.rangeHighlightBackground": colors.rangeHiglight.hex(),
  "editor.rangeHighlightForeground": colors.text.hex(),

  // cuando me paro en un bracket me muestar los dos con este color
  "editorBracketMatch.background": colors.pLighten.hex(),
  "editorBracketMatch.border": null,

  // cuando se activa la viusualizacion de los whitespaces
  "editorWhitespace.foreground": colors.pLighten.hex(),

  // linea vertical que indica la indentacion
  "editorIndentGuide.background": colors.pLighten.hex(),
  "editorIndentGuide.activeBackground": colors.pLightest.hex(),

  

  // vscode codelens
  "editorCodeLens.foreground": colors.infoLight.hex(),


  // editor states
  "editorError.foreground": colors.danger.hex(),
  "editorError.border": null,
  "editorWarning.foreground": colors.warning.hex(),
  "editorWarning.border": null,

  // el editor gutter es la parte donde esta el numero de linea y las indicaciones de git dentro del archivo
  "editorGutter.background": colors.principal.hex(),
  "editorGutter.modifiedBackground": colors.warning.hex(),
  "editorGutter.addedBackground": colors.succesLight.hex(),
  "editorGutter.deletedBackground": colors.danger.hex(),

  // el widget como el find and replace
  "editorWidget.border": colors.pLightest.hex(),
  "editorWidget.background": colors.pLighten.hex(),

  // el cuadro que sale cuando estamos escribiendo proponiendo opciones
  "editorSuggestWidget.background": colors.pLight.hex(),
  "editorSuggestWidget.border": colors.pLighten.hex(),
  "editorSuggestWidget.foreground": colors.pLightest.hex(),
  "editorSuggestWidget.highlightForeground": colors.text.hex(),
  "editorSuggestWidget.selectedBackground": colors.pLighter.hex(),
  "editorHoverWidget.background": colors.principal.hex(),
  "editorHoverWidget.border": colors.pLightest.hex(),


  "editorMarkerNavigation.background": colors.pLighten.hex(),
  "editorMarkerNavigationInfo.background": colors.info.hex(),
  "editorMarkerNavigationError.background": colors.danger.hex(),
  "editorMarkerNavigationWarning.background": colors.warning.hex(),

  // Botones
  "button.foreground": colors.white.hex(),
  "button.background": colors.contrast.hex(),
  "button.hoverBackground": colors.contrastDark.hex(),

  // Botones de las extenciones
  "extensionButton.prominentForeground": colors.white.hex(),
  "extensionButton.prominentBackground": colors.contrast.hex(),
  "extensionButton.prominentHoverBackground": colors.contrastDark.hex(),

  // inputs
  // Dropdowns
  "dropdown.background": colors.principal.hex(),
  "dropdown.border": colors.pLighten.hex(),
  "dropdown.foreground": colors.text.hex(),
  "dropdown.listBackground": null,
  // Inputs text
  "input.background": colors.pLight.hex(),
  "input.border": colors.pLighten.hex(),
  "input.foreground": colors.text.hex(),
  "input.placeholderForeground": colors.pLightest.hex(),
  // Input Select
  "inputOption.activeBorder": colors.pLightest.hex(),
  // Input Validation
  "inputValidation.errorBackground": colors.dangerDark.hex(),
  "inputValidation.errorBorder": colors.danger.hex(),
  "inputValidation.infoBackground": colors.infoDark.hex(),
  "inputValidation.infoBorder": colors.info.hex(),
  "inputValidation.warningBackground": colors.warningDark.hex(),
  "inputValidation.warningBorder": colors.warning.hex(),

  // Scrollbar
  "scrollbar.shadow": null,
  "scrollbarSlider.activeBackground": colors.pLightest.hex() + "50",
  "scrollbarSlider.background": colors.pLightest.hex() + "50",
  "scrollbarSlider.hoverBackground": colors.pLightest.hex() + "80",

  // Badges are small information labels, for example, search results count.
  "badge.background": colors.pLightest.hex(),
  "badge.foreground": colors.white.hex(),

  // Breadcrumbs
  "breadcrumb.foreground": colors.info.hex(),
  "breadcrumb.focusForeground": colors.infoLight.hex(),
  "breadcrumb.activeSelectionForeground": colors.white.hex(),
  "breadcrumbPicker.background": colors.pDarken.hex(),

  // Barra de la izquierda
  // Colors for list and trees like the File Explorer.
  // List/Tree background color for the selected item when the list/tree is active.
  "list.activeSelectionBackground": colors.pLighter.hex(),
  // List/Tree foreground color for the selected item when the list/tree is active.
  "list.activeSelectionForeground": colors.white.hex(),
  // List/Tree foreground color for invalid items, for example an unresolved root in explorer.
  "list.invalidItemForeground": colors.contrastDark.hex(),
  // List/Tree drag and drop background when moving items around using the mouse.
  "list.dropBackground": colors.principal.hex(),
  // List/Tree background color for the focused item when the list/tree is active.
  "list.focusBackground": colors.principal.hex(),
  // List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
  "list.focusForeground": colors.white.hex(),
  // List/Tree foreground color of the match highlights when searching inside the list/tree.
  "list.highlightForeground": colors.white.hex(),
  // List/Tree background when hovering over items using the mouse.
  "list.hoverBackground": colors.principal.hex(),
  // List/Tree foreground when hovering over items using the mouse.
  "list.hoverForeground": colors.white.hex(),
  // List/Tree background color for the selected item when the list/tree is inactive.
  "list.inactiveSelectionBackground": colors.pLight.hex(),
  // List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
  "list.inactiveSelectionForeground": colors.pLightest.hex(),
  

  // List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
  "list.inactiveFocusBackground": null,
  // Foreground color of list items containing errors.
  "list.errorForeground": colors.danger.hex(),
  // Foreground color of list items containing warnings.
  "list.warningForeground": colors.warningLight.hex(),
  // List/Tree Filter background color of typed text when searching inside the list/tree.
  "listFilterWidget.background": null,
  // List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
  "listFilterWidget.outline": null,
  // List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
  "listFilterWidget.noMatchesOutline": null,





  // Activity bar es la barra de iconos de la izquierda
  // Activity Bar background color.
  "activityBar.background": colors.principal.hex(),
  // Drag and drop feedback color for the Activity Bar items.
  "activityBar.dropBackground": colors.pLightest.hex(),
  // Activity bar foreground color (for example used for the icons).
  "activityBar.foreground": colors.pLightest.hex(),
  // Activity Bar border color with the Side Bar.
  "activityBar.border": colors.principal.hex(),
  // Activity notification badge background color.
  "activityBarBadge.background": colors.pLighter.hex(),
  // Activity notification badge foreground color.
  "activityBarBadge.foreground": colors.white.hex(),
  // Activity bar item foreground color when it is inactive.
  // "activityBar.inactiveForeground": null,

// Es la barra de la izquierda que contiene el tree view y el explorer
  // Side Bar background color.
  "sideBar.background": colors.principal.hex(),
  // Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.
  "sideBar.foreground": colors.text.hex(),
  // Side Bar border color on the side separating the editor.
  "sideBar.border": colors.pLighten.hex(),
  // Side Bar title foreground color.
  "sideBarTitle.foreground": colors.pLightest.hex(),
  // Side Bar section header background color.
  "sideBarSectionHeader.background": colors.principal.hex(),
  // Side Bar section header foreground color.
  "sideBarSectionHeader.foreground": colors.pLightest.hex(),
  // Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through. The side bar is the container for views like explorer and search.
  // "sideBar.dropBackground": null

// Editor Groups are the containers of editors. There can be many editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.
  // Background color when dragging editors around.
  "editorGroup.background": colors.pLighter.hex(),
  // Color to separate multiple editor groups from each other.
  "editorGroup.border": colors.pLighten.hex(),
  // Background color when dragging editors around.
  "editorGroup.dropBackground": colors.contrast.hex(),
  // Background color of the editor group title header when Tabs are disabled (set "workbench.editor.showTabs": false).
  "editorGroupHeader.noTabsBackground": colors.principal.hex(),
  // Background color of the Tabs container.
  "editorGroupHeader.tabsBackground": colors.principal.hex(),
  // Border color of the editor group title header when tabs are enabled.
  "editorGroupHeader.tabsBorder": colors.pLighten.hex(),

  // Las pestanas de los archivos abiertos
  "tab.activeBackground": colors.pLight.hex(),
  "tab.activeForeground": colors.text.hex(),
  "tab.activeBorder": colors.pLightest.hex(),
  "tab.border": colors.pLight.hex(),
  "tab.inactiveBackground": colors.pDarken.hex(),
  "tab.inactiveForeground": colors.text.hex(),
  "tab.unfocusedActiveForeground": colors.text.hex(),
  "tab.unfocusedActiveBorder": colors.pLighter.hex(),
  "tab.unfocusedInactiveForeground": colors.text.hex(),

  "menubar.selectionForeground": colors.white.hex(),
  "menubar.selectionBackground": colors.pDarken.hex(),
  "menubar.selectionBorder": null,
  "menu.foreground": colors.pLightest.hex(),
  "menu.background": colors.pDarken.hex(),
  "menu.selectionForeground": colors.white.hex(),
  "menu.selectionBackground": colors.pLighter.hex(),
  "menu.selectionBorder": null,
  "menu.separatorBackground": colors.pLighter.hex(),

  // git in editor interfece
  "diffEditor.insertedTextBackground": colors.gitInsertedBg.hex(),
  "diffEditor.insertedTextBorder": null,
  "diffEditor.removedTextBackground": colors.gitRemovedBg.hex(),
  "diffEditor.removedTextBorder": null,

  "debugExceptionWidget.background": colors.principal.hex(),
  "debugExceptionWidget.border": colors.pLightest.hex(),

  "peekView.border": colors.pLightest.hex(),
  "peekViewEditor.background": colors.principal.hex(),
  "peekViewEditor.matchHighlightBackground": colors.contrast.hex(),
  "peekViewResult.background": colors.principal.hex(),
  "peekViewResult.fileForeground": colors.pLightest.hex(),
  "peekViewResult.lineForeground": colors.pLightest.hex(),
  "peekViewResult.matchHighlightBackground": colors.white.hex(),
  "peekViewResult.selectionBackground": colors.pLighten.hex(),
  "peekViewResult.selectionForeground": colors.pLightest.hex(),
  "peekViewTitle.background": colors.principal.hex(),
  "peekViewTitleDescription.foreground": colors.pLightest.hex(),
  "peekViewTitleLabel.foreground": colors.pLightest.hex(),

  // GIT MERGE CONFLICTS
  "merge.currentHeaderBackground": colors.pLightest.hex(),
  "merge.currentContentBackground": null,
  "merge.incomingHeaderBackground": colors.contrast.hex(),
  "merge.incomingContentBackground": null,
  "merge.border": null,
  "merge.commonContentBackground": null,
  "merge.commonHeaderBackground": null,
  "editorOverviewRuler.currentContentForeground": colors.contrast.hex(),
  "editorOverviewRuler.incomingContentForeground": colors.contrast.hex(),
  "editorOverviewRuler.commonContentForeground": colors.contrast.hex(),



  // Overview ruler: This ruler is located beneath the scroll bar on the right edge of the editor and gives an overview of the decorations in the editor.
  //  Color of the overview ruler border.
  "editorOverviewRuler.border": null,
  // Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.
  "editorOverviewRuler.findMatchForeground": colors.pLightest.hex(),
  // Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
  "editorOverviewRuler.rangeHighlightForeground": colors.white.hex(),
  // Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.
  "editorOverviewRuler.selectionHighlightForeground": colors.pLighter.hex(),
  // Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.
  "editorOverviewRuler.wordHighlightForeground": colors.white.hex(),
  // Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.
  "editorOverviewRuler.wordHighlightStrongForeground": colors.white.hex(),
  // Overview ruler marker color for modified content.
  "editorOverviewRuler.modifiedForeground": colors.warningLight.hex(),
  // Overview ruler marker color for added content.
  "editorOverviewRuler.addedForeground": colors.succesLight.hex(),
  // Overview ruler marker color for deleted content.
  "editorOverviewRuler.deletedForeground": colors.danger.hex(),
  // Overview ruler marker color for errors.
  "editorOverviewRuler.errorForeground": colors.danger.hex(),
  // Overview ruler marker color for warnings.
  "editorOverviewRuler.warningForeground": colors.warning.hex(),
  // Overview ruler marker color for infos.
  "editorOverviewRuler.infoForeground": colors.info.hex(),
  // Overview ruler marker color for matching brackets.
  "editorOverviewRuler.bracketMatchForeground": colors.text.hex(),



  "panel.background": colors.principal.hex(),
  "panel.border": colors.pLighten.hex(),
  "panelTitle.activeBorder": colors.pLightest.hex(),
  "panelTitle.activeForeground": colors.white.hex(),
  "panelTitle.inactiveForeground": colors.text.hex(),

  "statusBar.background": colors.principal.hex(),
  "statusBar.foreground": colors.pLightest.hex(),
  "statusBar.border": colors.pLighten.hex(),

  "statusBar.debuggingBackground": colors.warning.hex(),
  "statusBar.debuggingForeground": colors.pDarken.hex(),
  "statusBar.debuggingBorder": colors.warning.hex(),

  "statusBar.noFolderForeground": null,
  "statusBar.noFolderBackground": colors.principal.hex(),
  "statusBar.noFolderBorder": colors.contrast.hex(),
  "statusBarItem.activeBackground": colors.pLighten.hex(),
  "statusBarItem.hoverBackground": colors.pLighten.hex(),
  "statusBarItem.prominentBackground": colors.pLighten.hex(),
  "statusBarItem.prominentHoverBackground": colors.pLighten.hex(),

  "titleBar.activeBackground": colors.principal.hex(),
  "titleBar.activeForeground": colors.text.hex(),
  "titleBar.inactiveBackground": colors.pDarken.hex(),
  "titleBar.inactiveForeground": null,

  "notifications.background": colors.principal.hex(),
  "notifications.foreground": colors.white.hex(),
  "notificationLink.foreground": colors.contrast.hex(),

  "pickerGroup.foreground": colors.contrastLight.hex(),
  "pickerGroup.border": colors.principal.hex(),

  "debugToolBar.background": colors.pDarken.hex(),
  "debugToolBar.border": null,

  "welcomePage.buttonBackground": colors.principal.hex(),
  "welcomePage.buttonHoverBackground": colors.principal.hex(),
  "walkThrough.embeddedEditorBackground": colors.principal.hex(),


  // Git colors
  "gitDecoration.addedResourceForeground": colors.succesLight.hex(),
  "gitDecoration.modifiedResourceForeground": colors.warningLight.hex(),
  "gitDecoration.deletedResourceForeground": colors.danger.hex(),
  "gitDecoration.untrackedResourceForeground": colors.succesLight.hex(),
  "gitDecoration.ignoredResourceForeground": colors.pLighter.hex(),
  "gitDecoration.conflictingResourceForeground": colors.warningLight.hex(),

  "source.elm": colors.pLightest.hex(),

  "editorRuler.foreground": colors.pLighten.hex(),

  // Background color for the progress bar shown for long running operations.
  "progress.background": colors.contrast.hex(),


  // Terminal colors
  "terminal.ansiWhite": colors.text.hex(),
  "terminal.ansiBlack": colors.black.hex(),
  "terminal.ansiBlue": colors.syntaxBlue.hex(),
  "terminal.ansiCyan": colors.syntaxCyan.hex(),
  "terminal.ansiGreen": colors.syntaxGreen.hex(),
  "terminal.ansiMagenta": colors.syntaxMagenta.hex(),
  "terminal.ansiRed": colors.syntaxRed.hex(),
  "terminal.ansiYellow": colors.syntaxYellow.hex(),
  "terminal.ansiBrightWhite": colors.white.hex(),
  "terminal.ansiBrightBlack": colors.pLighter.hex(),
  "terminal.ansiBrightBlue": colors.syntaxBlue.hex(),
  "terminal.ansiBrightCyan": colors.syntaxCyan.hex(),
  "terminal.ansiBrightGreen": colors.syntaxGreen.hex(),
  "terminal.ansiBrightMagenta": colors.syntaxMagenta.hex(),
  "terminal.ansiBrightRed": colors.syntaxRed.hex(),
  "terminal.ansiBrightYellow": colors.syntaxYellow.hex(),
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
      background: colors.principal.hex(),
      foreground: colors.text.hex()
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
      foreground: colors.infoLight.hex(),
      fontStyle: "italic"
    }
  },
  {
    name: "Deleted",
    scope: "markup.deleted.diff",
    settings: {
      foreground: colors.danger.hex(),
      fontStyle: "italic"
    }
  },
  {
    name: "Inserted",
    scope: "markup.inserted.diff",
    settings: {
      foreground: colors.succesLight.hex(),
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
      foreground: colors.specialWordA.hex()
    }
  },
  {
    // escape sequences like \e
    name: "Constant Character Escape",
    scope: "constant.character.escape",
    settings: {
      foreground: colors.string.hex()
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
      foreground: colors.metaTag.hex()
    }
  },
  {
    // HTML & PUG atributes
    name: "Tag attribute",
    scope: "entity.other.attribute-name",
    settings: {
      fontStyle: "italic",
      foreground: colors.tagAttribute.hex(),
      // foreground: colors.testB.hex()
    }
  },
  {
    // pug classes
    name: "Pug Classes",
    scope: "entity.other.attribute-name.class.pug",
    settings: {
      fontStyle: "italic",
      foreground: colors.pugClass.hex(),
    }
  },
  {
    // function name
    name: "Support Variable Property",
    scope: "support.variable.property",
    settings: {
      foreground: colors.functionName.hex()
    }
  },
  {
    name: "Invalid deprecated",
    scope: "invalid.deprecated",
    settings: {
      foreground: colors.deprecated.hex(),
      background: colors.dangerDark.hex()
    }
  },


  {
    // hex color
    name: "Constant Other Color",
    scope: "constant.other.color",
    settings: {
      foreground: colors.regularText.hex()
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
      foreground: colors.string.hex(),
      fontStyle: "bold"
    }
  },
  {
    name: "Quote",
    scope: "quote",
    settings: {
      foreground: colors.string.hex(),
      fontStyle: "italic"
    }
  },
  {
    name: "Invalid",
    scope: "invalid",
    settings: {
      background: colors.danger.hex(),
      foreground: colors.white.hex()
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
        foreground: colors.specialWordB.hex(),
        // foreground: colors.testB.hex()
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
        foreground: colors.specialWordB.hex(),
        // foreground: colors.testC.hex(),
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
        foreground: colors.variableProperty.hex(),
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
        foreground: colors.variableInstance.hex()
      }
    },

    // RED COLOR
    {
      // Math in Math.random() in javascript
      name: "Support Constant Math",
      scope: "support.constant.math",
      settings: {
        foreground: colors.contrastText.hex(),
        // foreground: colors.testB.hex()
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
        foreground: colors.specialWordA.hex(),
        fontStyle: "italic"
      }
    },
    {
      name: "interface",
      scope: [
        "storage.type.interface"
      ],
      settings:{
        foreground: colors.specialWordA.hex()
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
        foreground: colors.specialWordA.hex(),
        fontStyle: "italic"
      }
    },
    


    //----------------------------------


    // PURPLE COLOR


    {
      name: "Entity Name Tag Custom",
      scope: "entity.name.tag.custom",
      settings: {
        foreground: colors.specialWordC.hex(),
        // foreground: colors.testB.hex()
      }
    },
    {
      name: "Meta Delimiter Period",
      scope: "meta.delimiter.period",
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: "italic"
      }
    },
    {
      name: "Meta Selector",
      scope: "meta.selector",
      settings: {
        foreground: colors.specialWordC.hex(),
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
        foreground: colors.specialWordC.hex(),
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
        foreground: colors.specialWordC.hex(),
        fontStyle: ""
      }
    },
    {
      name: "loops",
      scope:[
        "keyword.control.loop"
      ],
      settings:{
        foreground: colors.specialWordC.hex(),
      }
    },
    {
      // mainly related to flow control like continue, while, return, etc.
      // at rule name in css & scss & sass
      name: "import control keyword",
      scope: "keyword.control",
      settings: {
        foreground: colors.specialWordB.hex(),
        // foreground: colors.testB.hex()
      }
    },

    //----------------------------------


    // CYAN COLOR
    {
      name: "Variable Parameter Function",
      scope: "variable.parameter.function",
      settings: {
        foreground: colors.functionName.hex(),
        fontStyle: ""
      }
    },
    {
      name: "Meta Property Name",
      scope: "meta.property-name",
      settings: {
        foreground: colors.functionName.hex()
      }
    },
    {
      name: "Keyword Control Operator",
      scope: "keyword.control.operator",
      settings: {
        foreground: colors.functionName.hex()
      }
    },
    {
      // function name in javascript and mixins and function names in sass & scss
      name: "Entity Name Function",
      scope: ["entity.name.function"],
      settings: {
        foreground: colors.functionName.hex(),
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
        foreground: colors.functionName.hex()
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
      foreground: colors.variableProperty.hex(),
      fontStyle: "normal"
    }
  },
  {
    name: "Variable",
    scope: "variable",
    settings: {
      foreground: colors.variable.hex(),
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
      foreground: colors.variable.hex()
    }
  },
  {
    name: "User-defined constant",
    scope: [
      "constant.character",
      "constant.other"
    ],
    settings: {
      foreground: colors.variable.hex()
    }
  },
  {
    name: "Class name",
    scope: ["entity.name.class", "meta.class entity.name.type.class"],
    settings: {
      foreground: colors.variable.hex()
    }
  },
  {
    name: "Inherited class",
    scope: "entity.other.inherited-class",
    settings: {
      foreground: colors.variable.hex(),
    }
  },
  {
    // NO IDEA
    name: "Variable Property Other object",
    scope: ["variable.other.object.js"],
    settings: {
      // foreground: colors.variable.hex(),
      foreground: colors.testB.hex(),
      fontStyle: ""
    }
  },

]

const tcStrings = [
  {
    name: "String",
    scope: "string",
    settings: {
      foreground: colors.string.hex()
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
      foreground: colors.string.hex()
    }
  },
  {
    name: "Backtics(``) in Template Strings",
    scope: "string.template punctuation.definition.string",
    settings: {
      foreground: colors.string.hex()
    }
  },
  {
    name: "Punctuation Definition String",
    scope: "punctuation.definition.string",
    settings: {
      foreground: colors.string.hex()
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
      foreground: colors.punctuation.hex(),
      // foreground: colors.testB.hex(),
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
      foreground: colors.punctuation.hex(),
      // foreground: colors.testB.hex(),
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
      foreground: colors.punctuation.hex(),
      // foreground: colors.testB.hex(),
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
      foreground: colors.punctuation.hex(),
      // foreground: colors.testB.hex(),
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
      foreground: colors.punctuation.hex(),
      // foreground: colors.testB.hex(),
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
      foreground: colors.punctuation.hex()
    }
  },
  {
    // ${}
    name: "Template Literals expressions",
    scope: [
      "punctuation.definition.template-expression"
    ],
    settings: {
      foreground: colors.contrastText.hex()
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
      // foreground: colors.variable.hex(),
      background: colors.testA.hex()
    }
  },
  {
    name: "JavaScript Meta Punctuation Definition",
    scope: "meta.js punctuation.definition.js",
    settings: {
      foreground: colors.punctuation.hex(),
      background: colors.testA.hex()
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
      foreground: colors.operator.hex(),
      // foreground: colors.testB.hex(),
      fontStyle: ""
    }
  },
  {
    // += -= *= /= %= &= |= ^= <<= and >>=
    name: "Keyword Operator Assignment",
    scope: "keyword.operator.assignment",
    settings: {
      foreground: colors.operator.hex(),
      // foreground: colors.testA.hex(),
    }
  },
  {
    // + - * / % ** ++ --
    name: "Keyword Operator Arithmetic",
    scope: "keyword.operator.arithmetic",
    settings: {
      foreground: colors.operator.hex(),
      // foreground: colors.testB.hex(),
    }
  },
  {
    // & | ^ ~ << >> >>>
    name: "Keyword Operator Bitwise",
    scope: "keyword.operator.bitwise",
    settings: {
      foreground: colors.operator.hex(),
      // foreground: colors.testB.hex(),
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
      foreground: colors.operator.hex(),
      // foreground: colors.testB.hex(),
    }
  },
  {
    // ? :
    name: "Keyword Operator Ternary",
    scope: "keyword.operator.ternary",
    settings: {
      foreground: colors.operator.hex(),
      // foreground: colors.testB.hex(),
    }
  },
  {
    name: "Keyword Operator Logical",
    scope: "keyword.operator.logical",
    settings: {
      foreground: colors.specialWordC.hex(),
      // foreground: colors.testB.hex(),
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
      foreground: colors.specialWordC.hex(),
      // foreground: colors.testB.hex(),
    }
  },
  {
    // =	≠	>	<	≥	≤
    name: "Keyword Operator Relational",
    scope: "keyword.operator.relational",
    settings: {
      foreground: colors.specialWordC.hex(),
      // foreground: colors.testB.hex(),
      fontStyle: "italic"
    }
  },
]

const tcSpecialValues = [
  {
    name: "Number",
    scope: ["constant.numeric", "constant.character.numeric"],
    settings: {
      foreground: colors.number.hex(),
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
      foreground: colors.nullUnd.hex()
    }
  },
  {
    name: "Boolean",
    scope: [
      "constant.language.boolean"
    ],
    settings: {
      foreground: colors.boolean.hex()
    }
  },
  {
    // code like ~ = &#x7e
    name: "entity names",
    scope: [
      "entity.name.type"
    ],
    settings:{
      foreground: colors.variable.hex()
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
  //     foreground: colors.testB.hex()
  //   }
  // },

  {
    name: "SCSS & SASS Variable",
    scope: [
      "variable.scss",
      "variable.sass",
      "variable.parameter.scss",
      "variable.parameter.sass",
    ],
    settings: {
      foreground: colors.variable.hex()
    }
  },
  {
    name: "css and pug ID selector",
    scope:[
      "entity.other.attribute-name.id",
      "entity.other.attribute-name.id.css",
      "entity.other.attribute-name.id.scss",
      "entity.other.attribute-name.id.css.sass"
    ],
    settings:{
      foreground: colors.cssId.hex()
    }
  },
  {
    name: "css class selector",
    scope:[
      "entity.other.attribute-name.class.css",
      "entity.other.attribute-name.class.css.sass",
      "entity.other.attribute-name.class.scss"
    ],
    settings:{
      foreground: colors.cssClass.hex()
    }
  },
  {
    name: "Tag selectors and &",
    scope: [
      "entity.name.tag.css",
      "entity.name.tag.less",
      "entity.name.tag.custom.css",
      "entity.name.tag.scss",
      "entity.name.tag.css.sass"
    ],
    settings: {
      foreground: colors.cssTag.hex(),
      fontStyle: ""
    }
  },
  {
    name: "Property name stylesheets",
    scope:[
      "support.type.property-name.css",
      "support.type.property-name.css.sass"
    ],
    settings:{
      foreground: colors.cssProperty.hex()
    }
  },
  {
    name: "Values in css",
    scope: ["support.constant.property-value.css"],
    settings: {
      foreground: colors.cssValue.hex()
    }
  },
  {
    name: "stylesheet numbers",
    scope: [
      "constant.numeric.css", 
      "punctuation.definition.constant.css",
      "constant.numeric.css.sass"
    ],
    settings: {
      foreground: colors.number.hex()
    }
  },
  {
    name: "Stylesheet Units",
    scope: [
      "keyword.other.unit",
      "keyword.other.unit.css",
      "keyword.other.unit.scss",
      "keyword.other.unit.css.sass"
    ],
    settings: {
      foreground: colors.cssUnits.hex()
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
      foreground: colors.cssSpecialWord.hex(),
      fontStyle: ""
    }
  },


  {
    // css !importatnt, @
    // keywords for sass
    name: "Keyword",
    scope: [
      
      //@ in at rules
      "punctuation.definition.keyword",

      // "keyword.operator.css",
      // "keyword.operator.scss",


      // "keyword.control.css",
      // "keyword.control.scss",
      // "keyword.control.less",

      // !important
      // "keyword.other.important.css",
      
      //&
      // "meta.property-list entity.name.tag.reference",
      "entity.name.tag.reference",

      // font-feature-values
      "entity.name.tag.custom.css",
      "entity.name.tag.custom.scss",
      "entity.name.tag.custom.sass",

      "entity.other.attribute-name.css.scss",

      // html attribute
      // "entity.other.attribute-name.attribute.scss",
      // "entity.other.attribute-name.attribute.css.sass",

      //pseudo-class like :hover, :active, :focus, etc.
      "entity.other.attribute-name.pseudo-class.css",
      "entity.other.pseudo-class.css.sass",
      // "entity.other.attribute-name.pseudo-class.css.scss",
      // "entity.other.attribute-name",

      //pseudo-elements like ::-webkit...
      "entity.other.attribute-name.pseudo-element.css",
      // "entity.other.attribute-name.parent-selector.css",
      
      // "support.function.css",

      // "punctuation.scss",
      // "punctuation.definition.keyword.scss",
      // "punctuation.definition.entity.scss",

      // "punctuation.css.sass",
      // "punctuation.definition.keyword.css.sass",
      // "punctuation.definition.entity.css.sass",

      // "meta.selector.scss",

      // function call
      "support.function.sass",
      "keyword.control.interpolation.sass",

      // operators
      "keyword.operator.css.sass",

      // Sass Reserved Word
      "keyword.other.reserved.sass",

      // @ rules
      "keyword.control.at-rule",
      "keyword.control.at-rule.css.sass"
    ],
    settings: {
      foreground: colors.specialWordB.hex(),
      // foreground: colors.testB.hex(),
      fontStyle: "italic"
    }
  },
  {
    name: "keyframes properties",
    scope:[
      // "entity.other.attribute-name.css",
      // "entity.other.attribute-name.scss",
      "entity.other.attribute-name.sass",

      // "entity.other.attribute-name.class.mixin.css",
      // "entity.other.attribute-name.handlebars",
      // "entity.other.attribute-name.placeholder.css",
      // "entity.other.attribute-name.class.css"
    ],
    settings: {
      foreground: colors.testC.hex()
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
      foreground: colors.punctuation.hex()
    }
  },
  {
    // (*, ^ and $)
    name: "Wildcard(*) selector in Stylesheets",
    scope: [
      "entity.name.tag.wildcard.css",
      "entity.name.tag.wildcard.less",
      "entity.name.tag.wildcard.scss",
      "entity.name.tag.wildcard.sass"
    ],
    settings: {
      foreground: colors.functionName.hex()
    }
  },
  {
    name: "Attribute Name for CSS and SCSS",
    scope: [
      "meta.attribute-selector.css entity.other.attribute-name.attribute",
      "meta.attribute-selector.scss entity.other.attribute-name.attribute",
      "meta.attribute-selector.sass entity.other.attribute-name.attribute",
      "meta.attribute-selector.less entity.other.attribute-name.attribute",
      "entity.other.attribute-name.css.sass",
      "keyword.operator.attribute-selector.css.sass",
      // "variable.other.readwrite.js",


      // "entity.other.attribute-name.css.sass",
      // "keyword.operator.attribute-selector.css.sass",
      // "meta.attribute-selector"
      "meta.attribute-selector"
    ],
    settings: {
      foreground: colors.cssAttribute.hex(),
      // foreground: colors.testC.hex()
    }
  },
  {
    name: "Variables in SASS At-Rules",
    scope: [
      "source.css.scss meta.at-rule variable",
      "source.css.sass meta.at-rule variable"
    ],
    settings: {
      // foreground: colors.specialWordB.hex(),
      foreground: colors.testB.hex()
    }
  }
]

// languages
const tcJavascript = [
  {
    name: "javascript portotype methods",
    scope: ["support.variable.property.js"],
    settings: {
      foreground: colors.specialWordB.hex(),
      // foreground: colors.testB.hex(),
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
      foreground: colors.contrastText.hex()
    }
  },
  {
    name: "JavaScript Classes",
    scope: "meta.class entity.name.type.class.js",
    settings: {
      foreground: colors.variable.hex()
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
      foreground: colors.variable.hex(),
    }
  },
  {
    name: "TypeScript[React] Punctuation Decorators",
    scope: [
      "meta.decorator punctuation.decorator.ts",
      "meta.decorator punctuation.decorator.tsx"
    ],
    settings: {
      foreground: colors.punctuation.hex()
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
      foreground: colors.variable.hex()
    }
  },
  {
    name: "TypeScript[React] Entity Name Types",
    scope: [
      "entity.name.type.ts", 
      "entity.name.type.tsx"
    ],
    settings: {
      foreground: "#c",
      foreground: colors.variable.hex()
    }
  },
  {
    name: "TypeScript[React] Node Classes",
    scope: ["support.class.node.ts", "support.class.node.tsx"],
    settings: {
      foreground: colors.specialWordB.hex(),
      foreground: colors.testC.hex()
    }
  },
  {
    name: "TypeScript[React] Entity Name Types as Parameters",
    scope: [
      "meta.type.parameters.ts entity.name.type",
      "meta.type.parameters.tsx entity.name.type"
    ],
    settings: {
      foreground: colors.pLightest.hex()
    }
  },
  {
    name: "TypeScript[React] Punctuation Decorators",
    scope: "meta.tag.js meta.jsx.children.tsx",
    settings: {
      foreground: colors.specialWordB.hex(),
      foreground: colors.testA.hex()
    }
  },
  {
    name: "JavaScript Variable Other ReadWrite",
    scope: ["variable.other.readwrite.js", "variable.parameter"],
    settings: {
      foreground: colors.variable.hex()
    }
  },
  {
    name: "Support Class Component",
    scope: ["support.class.component.js", "support.class.component.tsx"],
    settings: {
      foreground: colors.contrastText.hex(),
      fontStyle: ""
    }
  },
  {
    name: "@ in decorator in javascript",
    scope: ["punctuation.decorator.js"],
    settings: {
      foreground: colors.functionName.hex()
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
      foreground: colors.regularText.hex()
    }
  },
  {
    // {} jsx react
    name: "Punctuation Section Embedded",
    scope: "punctuation.section.embedded",
    settings: {
      foreground: colors.text.hex(),
    }
  },
  {
    name: "TypeScript Classes",
    scope: "meta.class entity.name.type.class.tsx",
    settings: {
      foreground: colors.variable.hex()
    }
  },
  {
    name: "TypeScript Entity Name Type",
    scope: ["entity.name.type.tsx", "entity.name.type.module.tsx"],
    settings: {
      foreground: colors.specialWordB.hex(),
      fontStyle: ""
    }
  },
  {
    name: "TypeScript Method Declaration e.g. `constructor`",
    scope: [
      "meta.method.declaration storage.type.ts",
      "meta.method.declaration storage.type.tsx"
    ],
    settings: {
      foreground: colors.specialWordA.hex()
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
      foreground: colors.variable.hex()
    }
  },
  {
    name: "JavaScript Variables",
    scope: ["variable.js", "variable.other.js"],
    settings: {
      foreground: colors.variable.hex(),
    }
  },
  {
    name: "JavaScript Entity Name Type",
    scope: ["entity.name.type.js", "entity.name.type.module.js"],
    settings: {
      foreground: colors.specialWordB.hex(),
      fontStyle: ""
    }
  },
  {
    name: "JavaScript Support Classes",
    scope: "support.class.js",
    settings: {
      foreground: colors.variable.hex()
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
      foreground: colors.specialWordB.hex(),
      // foreground: colors.testB.hex(),
      fontStyle: "italic"
    }
  },
]

const tcCoffescript = [

  {
    name: "CoffeScript Variable Assignment",
    scope: "variable.assignment.coffee",
    settings: {
      foreground: colors.variable.hex()
    }
  },
  {
    name: "CoffeScript Parameter Function",
    scope: "variable.parameter.function.coffee",
    settings: {
      foreground: colors.functionName.hex()
    }
  },
  {
    name: "meta arguments",
    scope: [
      "meta.arguments.coffee",
      "variable.parameter.function.coffee"
    ],
    settings:{
      foreground: colors.variable.hex()
    }
  }
]

const tcCsharp = [

  {
    name: "C# Readwrite Variables",
    scope: "variable.other.readwrite.cs",
    settings: {
      foreground: colors.variable.hex()
    }
  },
  {
    name: "C# Classes & Storage types",
    scope: ["entity.name.type.class.cs", "storage.type.cs"],
    settings: {
      foreground: colors.specialWordB.hex(),
    }
  },
  {
    name: "C# Namespaces",
    scope: "entity.name.type.namespace.cs",
    settings: {
      foreground: colors.syntaxYellow.hex()
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
      foreground: colors.specialWordB.hex()
    }
  },
  {
    name: "Elixir Functions",
    scope: "source.elixir entity.name.function",
    settings: {
      foreground: colors.functionName.hex(),
    }
  },
  {
    name: "Elixir Constants",
    scope: [
      "source.elixir constant.other.symbol.elixir",
      "source.elixir constant.other.keywords.elixir"
    ],
    settings: {
      foreground: colors.specialWordB.hex()
    }
  },
  {
    name: "Elixir String Punctuations",
    scope: "source.elixir punctuation.definition.string",
    settings: {
      foreground: colors.string.hex()
    }
  },
  {
    name: "Elixir",
    scope: [
      "source.elixir variable.other.readwrite.module.elixir",
      "source.elixir variable.other.readwrite.module.elixir punctuation.definition.variable.elixir"
    ],
    settings: {
      foreground: colors.syntaxGreen.hex()
    }
  },
  {
    name: "Elixir Binary Punctuations",
    scope: "source.elixir .punctuation.binary.elixir",
    settings: {
      foreground: colors.specialWordC.hex(),
      fontStyle: "italic"
    }
  },
]

const tcMarckdown = [
  {
    name: "Markdown Headings",
    scope: "markup.heading.markdown",
    settings: {
      foreground: colors.syntaxViolet.hex(),
      fontStyle: "bold"
    }
  },
  {
    name: "Markdown Italics",
    scope: "markup.italic.markdown",
    settings: {
      foreground: colors.syntaxOrange.hex(),
      fontStyle: "italic"
    }
  },
  {
    name: "Markdown Bold",
    scope: "markup.bold.markdown",
    settings: {
      foreground: colors.syntaxOrange.hex(),
      fontStyle: "bold"
    }
  },
  {
    name: "Markdown Quote + others",
    scope: "markup.quote.markdown",
    settings: {
      foreground: colors.syntaxGreen.hex(),
      fontStyle: "italic"
    }
  },
  {
    name: "Markdown Links",
    scope: [
      "markup.underline.link.markdown",
      "markup.underline.link.image.markdown"
    ],
    settings: {
      foreground: colors.syntaxYellow.hex()
    }
  },
  {
    name: "Markdown Link Title and Description",
    scope: [
      "string.other.link.title.markdown",
      "string.other.link.description.markdown"
    ],
    settings: {
      foreground: colors.syntaxYellow.hex()
    }
  },
  {
    name: "Markdown MetaData Punctuation",
    scope: ["punctuation.definition.metadata.markdown"],
    settings: {
      foreground: colors.text.hex()
    }
  },
  {
    name: "Markdown List Punctuation",
    scope: ["beginning.punctuation.definition.list.markdown"],
    settings: {
      foreground: colors.syntaxGreen.hex()
    }
  },
  {
    name: "Markdown Inline Raw String",
    scope: "markup.inline.raw.string.markdown",
    settings: {
      foreground: colors.string.hex()
    }
  },
]

const tcGo = [

  {
    name: "Go Function Calls",
    scope: "source.go meta.function-call.go",
    settings: {
      // foreground: "#DDDDDD",
      foreground: colors.testB.hex()
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
      foreground: colors.specialWordC.hex(),
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
      foreground: colors.contrastText.hex()
    }
  },
]

const tcPython = [
  {
    name: "Language Constants in Python",
    scope: "constant.language.python",
    settings: {
      foreground: colors.contrastText.hex()
    }
  },
  {
    name: "Python Function Parameter and Arguments",
    scope: [
      "variable.parameter.function.python",
      "meta.function-call.arguments.python"
    ],
    settings: {
      foreground: colors.specialWordB.hex()
    }
  },
  {
    name: "Python Function Call",
    scope: ["meta.function-call.python", "meta.function-call.generic.python"],
    settings: {
      foreground: colors.functionName.hex()
    }
  },
  {
    name: "Punctuations in Python",
    scope: "punctuation.python",
    settings: {
      foreground: colors.regularText.hex()
    }
  },
  {
    name: "Decorator Functions in Python",
    scope: "entity.name.function.decorator.python",
    settings: {
      foreground: colors.contrastText.hex()
    }
  },
  {
    name: "Python Language Variable",
    scope: "source.python variable.language.special",
    settings: {
      foreground: colors.variable.hex()
    }
  },
]

const tcRuby = [
  {
    name: "Ruby Variables",
    scope: ["variable.other.ruby"],
    settings: {
      foreground: colors.variable.hex()
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
      foreground: colors.specialWordC.hex(),
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
      foreground: colors.htmlTag.hex(),
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
      foreground: colors.regularText.hex()
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
      foreground: colors.specialWordC.hex(),
      fontStyle: "italic"
    }
  },
]

const tcJson = [
  {
    name: "JSON Property Names",
    scope: "support.type.property-name.json",
    settings: {
      foreground: colors.variable.hex()
    }
  },
  {
    // also in javascript
    name: "JSON Support Constants",
    scope: "support.constant.json",
    settings: {
      foreground: colors.contrastText.hex()
    }
  },
  {
    name: "JSON Property values (string)",
    scope: "meta.structure.dictionary.value.json string.quoted.double",
    settings: {
      foreground: colors.string.hex()
    }
  },
  {
    name: "Strings in JSON values",
    scope: "string.quoted.double.json punctuation.definition.string.json",
    settings: {
      foreground: colors.string.hex()
    }
  },
  {
    name: "Specific JSON Property values like null",
    scope:
      "meta.structure.dictionary.json meta.structure.dictionary.value constant.language",
    settings: {
      foreground: colors.contrastText.hex()
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
      foreground: colors.regularText.hex()
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
     foreground: colors.tagAttribute.hex()
   }
 },
 {
   name: "RegExp String",
   scope: ["string.regexp", "string.regexp keyword.other"],
   settings: {
     foreground: colors.string.hex()
   }
 }
]

const tcComments = [
  {
    name: "Comment",
    scope: [
      "comment",
    ],
    settings: {
      foreground: colors.comment.hex(),
      fontStyle: "italic"
    }
  },
  {
    name: "Double-Slashed Comment",
    scope: [
      "comment.line.double-slash",
      "punctuation.definition.comment",
      "punctuation.whitespace.comment",
      "string.comment.buffered.block.pug"
    ],
    settings: {
      foreground: colors.comment.hex()
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
      foreground: colors.docEntityNames.hex(),
      // foreground: colors.testB.hex()
    }
  },
  {
    name: "Other Variables in Code Documentations",
    scope: [
      "variable.other.jsdoc", 
      "variable.other.phpdoc"
    ],
    settings: {
      foreground: colors.docVariables.hex()
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
      foreground: colors.testB.hex()
    }
  },
  {
    name: "Object Comma",
    scope: "object.comma",
    settings: {
      foreground: colors.white.hex(),
      foreground: colors.testB.hex()
    }
  },
  {
    name: "Constant Other Color RGB Value Punctuation Definition Constant",
    scope: "constant.other.color.rgb-value punctuation.definition.constant",
    settings: {
      foreground: "#F78C6C",
      foreground: colors.testB.hex()
    }
  },
  {
    name: "Invalid Broken",
    scope: "invalid.broken",
    settings: {
      foreground: "#020e14",
      background: "#F78C6C",
      foreground: colors.testC.hex()
    }
  },
  {
    name: "Template Strings",
    scope: "string.template meta.template.expression",
    settings: {
      foreground: "#F78C6C",
      foreground: colors.testB.hex(),
      background: colors.testA.hex()
    }
  },
  {
    name: "Raw Code",
    scope: "raw",
    settings: {
      foreground: "#80CBC4",
      foreground: colors.testB.hex()
    }
  },
  {
    name: "Support Constant Property Value meta",
    scope: "support.constant.meta.property-value",
    settings: {
      foreground: "#7fdbca",
      foreground: colors.testB.hex()
    }
  },
  {
    name: "Support Variable DOM",
    scope: "support.variable.dom",
    settings: {
      foreground: "#addb67",
      foreground: colors.testB.hex()
    }
  },







  {
    name: "Invalid Unimplemented",
    scope: "invalid.unimplemented",
    settings: {
      background: "#8BD649",
      foreground: colors.white.hex()
    }
  },
  {
    name: "Invalid Illegal",
    scope: "invalid.illegal",
    settings: {
      foreground: colors.danger.hex(),
      background: colors.warningLight.hex()
    }
  },
  {
    name: "Variable Interpolation",
    scope: "variable.interpolation",
    settings: {
      foreground: "#ec5f67",
      foreground: colors.testB.hex()
    }
  },
  {
    name: "Meta Function Call",
    scope: "meta.function-call",
    settings: {
      foreground: colors.specialWordB.hex(),
      foreground: colors.testB.hex()
    }
  },




  // NOT WORKING
  // {
  //   name: "Variable Function",
  //   scope: "variable.function",
  //   settings: {
  //     foreground: colors.specialWordB.hex(),
  //     foreground: colors.testB.hex()
  //   }
  // },

  
]

const theme = {
  name: "Night Wolf",
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