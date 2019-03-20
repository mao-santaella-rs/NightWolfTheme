let Color = require("color");

let colorWhite = Color.rgb(255, 255, 255)
let colorBlack = Color.rgb(0,0,0)

let colorPrincipal = Color.rgb(16, 30, 44)
let colorP_darken = colorPrincipal.darken(0.3)
let colorP_light = colorPrincipal.lighten(0.3)
let colorP_lighten = colorPrincipal.lighten(1)
let colorP_lighter = colorPrincipal.lighten(2);
let colorP_lightest = colorPrincipal.lighten(4.5);

let colorText = colorPrincipal.lighten(6);

let colorEspecialWord = Color.rgb(188, 97, 219)
let colorContrastText = Color.rgb(255, 120, 120)
let colorRegularText = colorText
let colorVariable = Color.rgb(255, 210, 130)
let colorVariableInstance = Color.rgb(150,150,255)
let colorFunction = Color.rgb(80,200,255)
let colorParameter = Color.rgb(0,255,255)
let colorString = Color.rgb(170,230,130)
let colorNumber = colorRegularText
let colorComent = Color.rgb(102,102,102)
let colorBoolean = colorContrastText
let colorNullUnd = colorContrastText

let colorHtmlTag = colorContrastText
let colorMetaTag = Color.rgb(200,200,200)
let colorTagAttribute = colorVariable

let colorCssSelector = colorParameter
let colorCssValue = colorText
let colorCssTag = colorContrastText
let colorCssUnits = colorVariableInstance

let colorInfo = Color.rgb(100, 180, 250)
let colorInfoDark = colorInfo.darken(0.6);
let colorInfoLight = colorInfo.lighten(0.2);
let colorSuccesLight = Color.rgb(175, 220, 100);
let colorWarning = Color.rgb(255, 200, 40)
let colorWarningDark = colorWarning.darken(0.6);
let colorWarningLight = Color.rgb(255, 235, 150);
let colorDanger = Color.rgb(240, 80, 80)
let colorDangerDark = colorDanger.darken(0.4);

let selectionColor = colorP_lighten;
let contrastColor = Color.rgb(255, 0, 255)
let contrastColorLight = contrastColor.lighten(0.5);
let contrastColorDark = contrastColor.darken(0.5);


//colors for test
let colorTestA = Color.rgb(255,255,0)
let colorTestB = Color.rgb(0,255,0)
let colorTestC = Color.rgb(255,100,0)


console.log(contrastColorLight.hex());

let theme = {
  name: "Mao",
  type: "dark",
  colors: {
    contrastActiveBorder: null,
    contrastBorder: null,
    focusBorder: colorP_lighten.hex(),
    foreground: colorText.hex(),
    "widget.shadow": colorPrincipal.hex(),
    "selection.background": colorInfo.hex(),
    errorForeground: colorDanger.hex(),

    // Editor in general
    "editor.background": colorPrincipal.hex(),
    "editor.foreground": colorText.hex(),
    "editorLineNumber.foreground": colorP_lighten.hex(),
    "editorLineNumber.activeForeground": colorP_lightest.hex(),
    "editorCursor.foreground": contrastColorLight.hex(),

    "editor.selectionBackground": selectionColor.lighten(0.5).hex(),
    "editor.selectionForeground": colorText.hex(),
    "editor.selectionHighlightBackground": selectionColor.hex(),
    "editor.inactiveSelectionBackground": selectionColor.hex(),

    "editor.wordHighlightBackground": selectionColor.hex(),
    "editor.wordHighlightStrongBackground": selectionColor.hex(),

    "editor.findMatchBackground": colorP_lightest.hex(),
    "editor.findMatchHighlightBackground": colorP_lighten.hex(),
    "editor.findRangeHighlightBackground": null,
    "editor.hoverHighlightBackground": contrastColor.hex(),
    "editor.lineHighlightBackground": colorP_light.hex(),
    "editor.lineHighlightBorder": null,
    "editorLink.activeForeground": null,
    "editor.rangeHighlightBackground": contrastColor.hex(),
    "editorWhitespace.foreground": null,
    "editorIndentGuide.background": colorP_lighten.hex(),
    "editorIndentGuide.activeBackground": colorP_lightest.hex(),
    "editorRuler.foreground": colorP_lighten.hex(),

    "editorCodeLens.foreground": colorInfoLight.hex(),
    "editorBracketMatch.background": colorP_lighten.hex(),
    "editorBracketMatch.border": null,

    "editorOverviewRuler.currentContentForeground": contrastColor.hex(),
    "editorOverviewRuler.incomingContentForeground": contrastColor.hex(),
    "editorOverviewRuler.commonContentForeground": contrastColor.hex(),

    "editorError.foreground": colorDanger.hex(),
    "editorError.border": null,
    "editorWarning.foreground": colorWarningDark.hex(),
    "editorWarning.border": null,

    "editorGutter.background": colorPrincipal.hex(),
    "editorGutter.modifiedBackground": colorWarning.hex(),
    "editorGutter.addedBackground": colorSuccesLight.hex(),
    "editorGutter.deletedBackground": colorDanger.hex(),

    "editorWidget.border": colorP_lighten.hex(),

    "editorSuggestWidget.background": colorP_lighten.hex(),
    "editorSuggestWidget.border": colorP_lighten.hex(),
    "editorSuggestWidget.foreground": colorText.hex(),
    "editorSuggestWidget.highlightForeground": colorWhite.hex(),
    "editorSuggestWidget.selectedBackground": colorP_lightest.hex(),

    "editorHoverWidget.background": colorPrincipal.hex(),
    "editorHoverWidget.border": colorP_lightest.hex(),
    "editorMarkerNavigation.background": colorP_lighten.hex(),
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
    "scrollbar.shadow": colorBlack.hex(),
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
    "list.activeSelectionBackground": colorP_lighter.hex(),
    "list.activeSelectionForeground": colorWhite.hex(),
    "list.invalidItemForeground": contrastColorDark.hex(),
    "list.dropBackground": colorPrincipal.hex(),
    "list.focusBackground": colorPrincipal.hex(),
    "list.focusForeground": colorWhite.hex(),
    "list.highlightForeground": colorWhite.hex(),
    "list.hoverBackground": colorPrincipal.hex(),
    "list.hoverForeground": colorWhite.hex(),
    "list.inactiveSelectionBackground": colorP_light.hex(),
    "list.inactiveSelectionForeground": colorP_lightest.hex(),

    // Activity bar es la barra de iconos de la derecha
    "activityBar.background": colorPrincipal.hex(),
    "activityBar.dropBackground": colorP_lightest.hex(),
    "activityBar.foreground": colorP_lightest.hex(),
    "activityBar.border": colorPrincipal.hex(),
    "activityBarBadge.background": colorP_lighter.hex(),
    "activityBarBadge.foreground": colorWhite.hex(),

    // Es la barra de la izquierda que contiene el tree view y el explorer
    "sideBar.background": colorPrincipal.hex(),
    "sideBar.foreground": colorText.hex(),
    "sideBar.border": colorP_lighten.hex(),
    "sideBarTitle.foreground": colorP_lightest.hex(),
    "sideBarSectionHeader.background": colorPrincipal.hex(),
    "sideBarSectionHeader.foreground": colorP_lightest.hex(),

    // EditorGroup es la agrupacion de archivos abiertos
    "editorGroup.background": colorP_lighter.hex(),
    "editorGroup.border": colorP_lighten.hex(),
    "editorGroup.dropBackground": contrastColor.hex(),
    "editorGroupHeader.noTabsBackground": colorPrincipal.hex(),
    "editorGroupHeader.tabsBackground": colorPrincipal.hex(),
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

    "diffEditor.insertedTextBackground": colorSuccesLight.hex(),
    "diffEditor.insertedTextBorder": colorSuccesLight.hex(),
    "diffEditor.removedTextBackground": colorDanger.hex(),
    "diffEditor.removedTextBorder": colorDanger.hex(),
    "editorWidget.background": colorP_lighten.hex(),

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

    "merge.currentHeaderBackground": colorP_lightest.hex(),
    "merge.currentContentBackground": null,
    "merge.incomingHeaderBackground": contrastColor.hex(),
    "merge.incomingContentBackground": null,
    "merge.border": null,

    "panel.background": colorPrincipal.hex(),
    "panel.border": colorP_lighten.hex(),
    "panelTitle.activeBorder": colorP_lightest.hex(),
    "panelTitle.activeForeground": colorWhite.hex(),
    "panelTitle.inactiveForeground": colorText.hex(),

    "statusBar.background": colorPrincipal.hex(),
    "statusBar.foreground": colorP_lightest.hex(),
    "statusBar.border": colorP_lighten.hex(),

    "statusBar.debuggingBackground": colorWarning.hex(),
    "statusBar.debuggingForeground": colorBlack.hex(),
    "statusBar.debuggingBorder": colorWarningDark.hex(),

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
    "notificationLink.foreground": "#80CBC4",

    "pickerGroup.foreground": contrastColorLight.hex(),
    "pickerGroup.border": colorPrincipal.hex(),

    "terminal.ansiWhite": colorWhite.hex(),
    "terminal.ansiBlack": colorPrincipal.hex(),
    "terminal.ansiBlue": "#82AAFF",
    "terminal.ansiCyan": "#21c7a8",
    "terminal.ansiGreen": "#22da6e",
    "terminal.ansiMagenta": colorEspecialWord.hex(),
    "terminal.ansiRed": colorDanger.hex(),
    "terminal.ansiYellow": "#addb67",
    "terminal.ansiBrightWhite": colorWhite.hex(),
    "terminal.ansiBrightBlack": "#575656",
    "terminal.ansiBrightBlue": "#82AAFF",
    "terminal.ansiBrightCyan": "#7fdbca",
    "terminal.ansiBrightGreen": "#22da6e",
    "terminal.ansiBrightMagenta": colorEspecialWord.hex(),
    "terminal.ansiBrightRed": colorDanger.hex(),
    "terminal.ansiBrightYellow": colorWarningLight.hex(),

    "debugToolBar.background": colorPrincipal.hex(),
    "welcomePage.buttonBackground": colorPrincipal.hex(),
    "welcomePage.buttonHoverBackground": colorPrincipal.hex(),
    "walkThrough.embeddedEditorBackground": colorPrincipal.hex(),
    "gitDecoration.modifiedResourceForeground": colorWarningLight.hex(),
    "gitDecoration.deletedResourceForeground": colorDanger.hex(),
    "gitDecoration.untrackedResourceForeground": colorSuccesLight.hex(),
    "gitDecoration.ignoredResourceForeground": colorP_lighter.hex(),
    "gitDecoration.conflictingResourceForeground": colorWarningLight.hex(),

    "source.elm": colorP_lightest.hex(),
    // Background color of the progress bar shown for long running operations.
    "progress.background": contrastColor.hex(),

    // languages
    "string.quoted.single.js": colorWhite.hex(),
    "meta.objectliteral.js": "#82AAFF",

    "punctuation.definition.generic.begin.html": colorTestA.hex()
  },
  tokenColors: [
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
    {
      name: "Global settings",
      settings: {
        background: colorPrincipal.hex(),
        foreground: colorText.hex()
      }
    },
    {
      name: "Comment",
      scope: "comment",
      settings: {
        foreground: colorComent.hex(),
        fontStyle: "italic"
      }
    },
    {
      name: "String",
      scope: "string",
      settings: {
        foreground: colorString.hex()
      }
    },
    {
      name: "String Quoted",
      scope: ["string.quoted", "variable.other.readwrite.js"],
      settings: {
        foreground: colorString.hex()
      }
    },
    {
      name: "Support Constant Math",
      scope: "support.constant.math",
      settings: {
        // test
        foreground: colorTestA.hex()
      }
    },
    {
      name: "Number",
      scope: ["constant.numeric", "constant.character.numeric"],
      settings: {
        foreground: colorNumber.hex(),
        fontStyle: ""
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
      scope: ["constant.character", "constant.other"],
      settings: {
        foreground: colorVariable.hex()
      }
    },
    {
      name: "Constant Character Escape",
      scope: "constant.character.escape",
      settings: {
        foreground: colorString.hex()
      }
    },
    {
      name: "RegExp String",
      scope: ["string.regexp", "string.regexp keyword.other"],
      settings: {
        foreground: colorRegularText.hex()
      }
    },
    {
      name: "Comma in functions",
      scope: "meta.function punctuation.separator.comma",
      settings: {
        foreground: colorP_lightest.hex()
      }
    },
    {
      name: "Variable",
      scope: "variable",
      settings: {
        foreground: colorVariable.hex()
      }
    },
    {
      // css !importatnt
      name: "Keyword",
      scope: ["punctuation.accessor", "keyword"],
      settings: {
        foreground: colorEspecialWord.hex(),
        fontStyle: "italic"
      }
    },
    {
      name: "Storage",
      scope: [
        "storage",
        "meta.var.expr",
        "meta.class meta.method.declaration meta.var.expr storage.type.js",
        "storage.type.property.js",
        "storage.type.property.ts",
        "storage.type.property.tsx"
      ],
      settings: {
        foreground: colorEspecialWord.lighten(0.25).hex(),
        fontStyle: "italic"
      }
    },
    {
      name: "javascript portotype",
      scope: ["support.variable.property.js"],
      settings: {
        foreground: colorParameter.hex()
      }
    },
    {
      name: "Storage type",
      scope: "storage.type",
      settings: {
        foreground: colorFunction.hex(),
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
      name: "Class name",
      scope: ["entity.name.class", "meta.class entity.name.type.class"],
      settings: {
        foreground: "#ffcb8b",
      }
    },
    {
      name: "Inherited class",
      scope: "entity.other.inherited-class",
      settings: {
        foreground: "#addb67"
      }
    },
    {
      name: "Function name",
      scope: "entity.name.function",
      settings: {
        foreground: "#DCDCAA",
        fontStyle: "italic"
      }
    },
    {
      name: "Meta Tag",
      scope: ["punctuation.definition.tag", "meta.tag"],
      settings: {
        foreground: colorMetaTag.hex(),
      }
    },
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
      name: "Tag attribute",
      scope: "entity.other.attribute-name",
      settings: {
        fontStyle: "italic",
        foreground: colorTagAttribute.hex()
      }
    },
    {
      name: "Entity Name Tag Custom",
      scope: "entity.name.tag.custom",
      settings: {
        // foreground: "#addb67",
        foreground: colorTestA.hex(),
      }
    },
    {
      name: "Library (function & constant)",
      scope: ["support.function", "support.constant"],
      settings: {
        foreground: "#82AAFF"
      }
    },
    {
      name: "Support Constant Property Value meta",
      scope: "support.constant.meta.property-value",
      settings: {
        // foreground: "#7fdbca"
        foreground: colorTestA.hex()
      }
    },
    {
      name: "Library class/type",
      scope: ["support.type", "support.class"],
      settings: {
        foreground: "#addb67"
      }
    },
    {
      name: "Support Variable DOM",
      scope: "support.variable.dom",
      settings: {
        foreground: "#addb67"
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
    {
      name: "Invalid deprecated",
      scope: "invalid.deprecated",
      settings: {
        foreground: colorWhite.hex(),
        background: colorDangerDark.hex()
      }
    },
    {
      name: "Keyword Operator",
      scope: "keyword.operator",
      settings: {
        foreground: colorContrastText.hex(),
        fontStyle: ""
      }
    },
    {
      name: "Keyword Operator Relational",
      scope: "keyword.operator.relational",
      settings: {
        foreground: colorEspecialWord.hex(),
        fontStyle: "italic"
      }
    },
    {
      name: "Keyword Operator Assignment",
      scope: "keyword.operator.assignment",
      settings: {
        foreground: colorEspecialWord.hex()
      }
    },
    {
      name: "Keyword Operator Arithmetic",
      scope: "keyword.operator.arithmetic",
      settings: {
        foreground: colorEspecialWord.hex(),
      }
    },
    {
      name: "Keyword Operator Bitwise",
      scope: "keyword.operator.bitwise",
      settings: {
        foreground: colorEspecialWord.hex(),
      }
    },
    {
      name: "Keyword Operator Increment",
      scope: "keyword.operator.increment",
      settings: {
        foreground: colorEspecialWord.hex(),
      }
    },
    {
      name: "Keyword Operator Ternary",
      scope: "keyword.operator.ternary",
      settings: {
        foreground: colorEspecialWord.hex(),
      }
    },
    {
      name: "Double-Slashed Comment",
      scope: "comment.line.double-slash",
      settings: {
        foreground: "#637777"
      }
    },
    {
      name: "Object",
      scope: "object",
      settings: {
        foreground: "#cdebf7"
      }
    },
    {
      name: "Null",
      scope: "constant.language.null",
      settings: {
        foreground: colorNullUnd.hex()
      }
    },
    {
      name: "Meta Brace",
      scope: "meta.brace",
      settings: {
        foreground: colorText.hex()
      }
    },
    {
      name: "Meta Delimiter Period",
      scope: "meta.delimiter.period",
      settings: {
        foreground: colorEspecialWord.hex(),
        fontStyle: "italic"
      }
    },
    {
      name: "Punctuation Definition String",
      scope: "punctuation.definition.string",
      settings: {
        foreground: "#d9f5dd"
      }
    },
    {
      name: "Boolean",
      scope: "constant.language.boolean",
      settings: {
        foreground: colorBoolean.hex()
      }
    },
    {
      name: "Object Comma",
      scope: "object.comma",
      settings: {
        foreground: colorWhite.hex()
      }
    },
    {
      name: "Variable Parameter Function",
      scope: "variable.parameter.function",
      settings: {
        foreground: "#7fdbca",
        fontStyle: ""
      }
    },
    {
      // property sass
      name: "Support Type Property Name & entity name tags",
      scope: [
        "support.type.vendor.property-name",
        "support.constant.vendor.property-value",
        "support.type.property-name",
        "meta.property-list entity.name.tag"
      ],
      settings: {
        foreground: colorParameter.hex(),
        fontStyle: ""
      }
    },
    {
      name: "Entity Name tag reference in stylesheets",
      scope: "meta.property-list entity.name.tag.reference",
      settings: {
        // foreground: "#57eaf1",
        foreground: colorTestA.hex()
      }
    },
    {
      name: "Constant Other Color RGB Value Punctuation Definition Constant",
      scope: "constant.other.color.rgb-value punctuation.definition.constant",
      settings: {
        foreground: "#F78C6C"
      }
    },
    {
      name: "Constant Other Color",
      scope: "constant.other.color",
      settings: {
        // foreground: "#FFEB95",
        foreground: colorTestC.hex()
      }
    },
    {
      name: "Meta Selector",
      scope: "meta.selector",
      settings: {
        foreground: colorEspecialWord.hex(),
        fontStyle: "italic"
      }
    },
    {
      // id pug
      name: "Entity Other Attribute Name Id",
      scope: "entity.other.attribute-name.id",
      settings: {
        foreground: colorFunction.hex()
      }
    },
    {
      name: "Meta Property Name",
      scope: "meta.property-name",
      settings: {
        foreground: "#80CBC4"

        // foreground: colorTestA.hex()
      }
    },
    {
      name: "Doctypes",
      scope: ["entity.name.tag.doctype", "meta.tag.sgml.doctype"],
      settings: {
        foreground: colorEspecialWord.hex(),
        fontStyle: "italic"
      }
    },
    {
      name: "Punctuation Definition Parameters",
      scope: "punctuation.definition.parameters",
      settings: {
        foreground: "#d9f5dd"
        // foreground: colorTestA.hex()
      }
    },
    {
      name: "Keyword Control Operator",
      scope: "keyword.control.operator",
      settings: {
        foreground: "#7fdbca",
        // foreground: colorTestA.hex()
      }
    },
    {
      name: "Keyword Operator Logical",
      scope: "keyword.operator.logical",
      settings: {
        foreground: colorEspecialWord.hex(),
        fontStyle: ""
      }
    },
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
        foreground: colorVariableInstance.hex(),
      }
    },
    {
      name: "Variable Property Other object property",
      scope: ["variable.other.object.property"],
      settings: {
        foreground: colorVariableInstance.hex(),
        fontStyle: "italic"
      }
    },
    {
      name: "Variable Property Other object",
      scope: ["variable.other.object.js"],
      settings: {
        
        fontStyle: ""
      }
    },
    {
      name: "Entity Name Function",
      scope: ["entity.name.function"],
      settings: {
        foreground: colorFunction.lighten(.15).hex(),
        fontStyle: "italic"
      }
    },
    {
      name:
        "Keyword Operator Comparison, imports, returns and Keyword Operator Ruby",
      scope: [
        "keyword.operator.comparison",
        "keyword.control.flow.js",
        "keyword.control.flow.ts",
        "keyword.control.flow.tsx",
        "keyword.control.ruby",
        "keyword.control.module.ruby",
        "keyword.control.class.ruby",
        "keyword.control.def.ruby",
        "keyword.control.loop.js",
        "keyword.control.loop.ts",
        "keyword.control.import.js",
        "keyword.control.import.ts",
        "keyword.control.import.tsx",
        "keyword.control.from.js",
        "keyword.control.from.ts",
        "keyword.control.from.tsx"
      ],
      settings: {
        foreground: colorEspecialWord.hex(),
        fontStyle: "italic"
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
      name: "Keyword Control Conditional",
      scope: [
        "keyword.control.conditional.js",
        "keyword.control.conditional.ts",
        "keyword.control.switch.js",
        "keyword.control.switch.ts"
      ],
      settings: {
        foreground: colorEspecialWord.hex(),
        fontStyle: ""
      }
    },
    {
      name:
        "Support Constant, `new` keyword, Special Method Keyword, `debugger`, other keywords",
      scope: [
        "support.constant",
        "keyword.other.special-method",
        "keyword.other.new",
        "keyword.other.debugger",
        "keyword.control"
      ],
      settings: {
        foreground: "#7fdbca"
        // foreground: colorTestA.hex()
      }
    },
    {
      name: "Support Function",
      scope: "support.function",
      settings: {
        foreground: "#addb67"
      }
    },
    {
      name: "Invalid Broken",
      scope: "invalid.broken",
      settings: {
        foreground: "#020e14",
        background: "#F78C6C"
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
        foreground: colorWhite.hex(),
        background: "#ec5f67"
      }
    },
    {
      name: "Language Variable",
      scope: "variable.language",
      settings: {
        foreground: "#7fdbca"
        // foreground: colorTestA.hex()
      }
    },
    {
      name: "Support Variable Property",
      scope: "support.variable.property",
      settings: {
        foreground: "#7fdbca"
        // foreground: colorTestA.hex()
      }
    },
    {
      name: "Variable Function",
      scope: "variable.function",
      settings: {
        foreground: "#82AAFF"
      }
    },
    {
      name: "Variable Interpolation",
      scope: "variable.interpolation",
      settings: {
        foreground: "#ec5f67"
      }
    },
    {
      name: "Meta Function Call",
      scope: "meta.function-call",
      settings: {
        foreground: "#82AAFF"
      }
    },
    {
      name: "Punctuation Section Embedded",
      scope: "punctuation.section.embedded",
      settings: {
        foreground: "#d3423e"
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
        foreground: colorText.hex()
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
        foreground: "#d9f5dd"
      }
    },
    {
      name: "Template Strings",
      scope: "string.template meta.template.expression",
      settings: {
        foreground: colorParameter.hex()
      }
    },
    {
      name: "Backtics(``) in Template Strings",
      scope: "string.template punctuation.definition.string",
      settings: {
        foreground: colorText.hex()
      }
    },
    {
      name: "Italics",
      scope: "italic",
      settings: {
        foreground: colorEspecialWord.hex(),
        fontStyle: "italic"
      }
    },
    {
      name: "Bold",
      scope: "bold",
      settings: {
        foreground: "#addb67",
        fontStyle: "bold"
      }
    },
    {
      name: "Quote",
      scope: "quote",
      settings: {
        foreground: "#697098",
        fontStyle: "italic"
      }
    },
    {
      name: "Raw Code",
      scope: "raw",
      settings: {
        foreground: "#80CBC4",
        foreground: colorTestA.hex()
      }
    },
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
        foreground: colorText.hex()
      }
    },
    {
      name: "CoffeeScript Assignments",
      scope: "variable.assignment.coffee",
      settings: {
        foreground: "#7fdbca"
      }
    },
    {
      name: "C# Readwrite Variables",
      scope: "variable.other.readwrite.cs",
      settings: {
        foreground: colorText.hex()
      }
    },
    {
      name: "C# Classes & Storage types",
      scope: ["entity.name.type.class.cs", "storage.type.cs"],
      settings: {
        foreground: "#82AAFF"
      }
    },
    {
      name: "C# Namespaces",
      scope: "entity.name.type.namespace.cs",
      settings: {
        foreground: "#B2CCD6"
      }
    },
    {
      name: "Tag names in Stylesheets",
      scope: [
        "entity.name.tag.css",
        "entity.name.tag.less",
        "entity.name.tag.custom.css"
      ],
      settings: {
        foreground: colorCssTag.hex(),
        fontStyle: ""
      }
    },
    {
      name: "Values in css",
      scope:[
        "support.constant.property-value.css"
      ],
      settings: {
        foreground: colorCssValue.hex()
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
        foreground: "#7fdbca"
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
      name: "stylesheet numbers",
      scope: ["constant.numeric.css","punctuation.definition.constant.css"],
      settings: {
        foreground: colorRegularText.hex()
      }
    },
    {
      name: "Attribute Name for CSS",
      scope: [
        "meta.attribute-selector.css entity.other.attribute-name.attribute",
        "variable.other.readwrite.js"
      ],
      settings: {
        foreground: "#F78C6C"
      }
    },
    {
      name: "Elixir Classes",
      scope: [
        "source.elixir support.type.elixir",
        "source.elixir meta.module.elixir entity.name.class.elixir"
      ],
      settings: {
        foreground: "#82AAFF"
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
        foreground: "#82AAFF"
      }
    },
    {
      name: "Elixir String Punctuations",
      scope: "source.elixir punctuation.definition.string",
      settings: {
        foreground: "#addb67"
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
        foreground: colorEspecialWord.hex(),
        fontStyle: "italic"
      }
    },
    {
      name: "Go Function Calls",
      scope: "source.go meta.function-call.go",
      settings: {
        foreground: "#DDDDDD"
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
        foreground: colorEspecialWord.hex(),
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
        foreground: "#ff5874"
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
        foreground: colorEspecialWord.hex(),
        fontStyle: "italic"
      }
    },
    {
      name: "JavaScript Classes",
      scope: "meta.class entity.name.type.class.js",
      settings: {
        foreground: "#ffcb8b"
      }
    },
    {
      name: "JavaScript Method Declaration e.g. `constructor`",
      scope: "meta.method.declaration storage.type.js",
      settings: {
        foreground: "#82AAFF"
      }
    },
    {
      name: "JavaScript Terminator",
      scope: "terminator.js",
      settings: {
        foreground: colorText.hex()
      }
    },
    {
      name: "JavaScript Meta Punctuation Definition",
      scope: "meta.js punctuation.definition.js",
      settings: {
        foreground: colorText.hex()
      }
    },
    {
      name: "Entity Names in Code Documentations",
      scope: [
        "entity.name.type.instance.jsdoc",
        "entity.name.type.instance.phpdoc"
      ],
      settings: {
        foreground: colorP_lightest.hex()
      }
    },
    {
      name: "Other Variables in Code Documentations",
      scope: ["variable.other.jsdoc", "variable.other.phpdoc"],
      settings: {
        foreground: "#78ccf0"
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
        foreground: colorVariable.hex()
      }
    },
    {
      name: "JavaScript Variable Parameter Function",
      scope: "variable.parameter.function.js",
      settings: {
        foreground: "#7986E7"
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
        foreground: colorVariable.hex(),
      }
    },
    {
      name: "JavaScript Variables",
      scope: ["variable.js", "variable.other.js"],
      settings: {
        foreground: colorVariable.hex()
      }
    },
    {
      name: "JavaScript Entity Name Type",
      scope: ["entity.name.type.js", "entity.name.type.module.js"],
      settings: {
        foreground: colorContrastText.lighten(.15).hex(),
        fontStyle: ""
      }
    },
    {
      name: "JavaScript Support Classes",
      scope: "support.class.js",
      settings: {
        foreground: colorText.hex()
      }
    },
    {
      name: "JSON Property Names",
      scope: "support.type.property-name.json",
      settings: {
        foreground: "#addb67"
      }
    },
    {
      name: "JSON Support Constants",
      scope: "support.constant.json",
      settings: {
        foreground: "#addb67"
      }
    },
    {
      name: "JSON Property values (string)",
      scope: "meta.structure.dictionary.value.json string.quoted.double",
      settings: {
        foreground: "#c789d6"
      }
    },
    {
      name: "Strings in JSON values",
      scope: "string.quoted.double.json punctuation.definition.string.json",
      settings: {
        foreground: "#80CBC4"
      }
    },
    {
      name: "Specific JSON Property values like null",
      scope:
        "meta.structure.dictionary.json meta.structure.dictionary.value constant.language",
      settings: {
        foreground: "#ff5874"
      }
    },
    {
      name: "Ruby Variables",
      scope: ["variable.other.ruby"],
      settings: {
        foreground: colorText.hex()
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
      name: "LESS Tag names",
      scope: "entity.name.tag.less",
      settings: {
        foreground: "#7fdbca"
      }
    },
    {
      name: "Attribute Name for LESS",
      scope:
        "meta.attribute-selector.less entity.other.attribute-name.attribute",
      settings: {
        foreground: "#F78C6C"
      }
    },
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
        foreground: colorEspecialWord.hex(),
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
        foreground: colorText.hex()
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
        foreground: "#82b1ff"
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
        foreground: colorText.hex()
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
    {
      name: "Language Constants in Python",
      scope: "constant.language.python",
      settings: {
        foreground: "#ff5874"
      }
    },
    {
      name: "Python Function Parameter and Arguments",
      scope: [
        "variable.parameter.function.python",
        "meta.function-call.arguments.python"
      ],
      settings: {
        foreground: "#82AAFF"
      }
    },
    {
      name: "Python Function Call",
      scope: ["meta.function-call.python", "meta.function-call.generic.python"],
      settings: {
        foreground: "#B2CCD6"
      }
    },
    {
      name: "Punctuations in Python",
      scope: "punctuation.python",
      settings: {
        foreground: colorText.hex()
      }
    },
    {
      name: "Decorator Functions in Python",
      scope: "entity.name.function.decorator.python",
      settings: {
        foreground: "#addb67"
      }
    },
    {
      name: "Python Language Variable",
      scope: "source.python variable.language.special",
      settings: {
        foreground: "#8EACE3"
      }
    },
    {
      name: "Python import control keyword",
      scope: "keyword.control",
      settings: {
        foreground: colorEspecialWord.hex()
      }
    },
    {
      name: "SCSS Variable",
      scope: [
        "variable.scss",
        "variable.sass",
        "variable.parameter.url.scss",
        "variable.parameter.url.sass"
      ],
      settings: {
        foreground: "#addb67"
      }
    },
    {
      name: "Variables in SASS At-Rules",
      scope: [
        "source.css.scss meta.at-rule variable",
        "source.css.sass meta.at-rule variable"
      ],
      settings: {
        foreground: "#82AAFF"
      }
    },
    {
      name: "Variables in SASS At-Rules",
      scope: [
        "source.css.scss meta.at-rule variable",
        "source.css.sass meta.at-rule variable"
      ],
      settings: {
        foreground: "#bec5d4"
      }
    },
    {
      name: "Attribute Name for SASS",
      scope: [
        "meta.attribute-selector.scss entity.other.attribute-name.attribute",
        "meta.attribute-selector.sass entity.other.attribute-name.attribute"
      ],
      settings: {
        foreground: "#F78C6C"
      }
    },
    {
      name: "Tag names in SASS",
      scope: ["entity.name.tag.scss", "entity.name.tag.sass"],
      settings: {
        foreground: "#7fdbca"
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
        foreground: colorText.hex()
      }
    },
    {
      name: "TypeScript[React] Entity Name Types",
      scope: ["entity.name.type.ts", "entity.name.type.tsx"],
      settings: {
        foreground: "#ffcb8b"
      }
    },
    {
      name: "TypeScript[React] Node Classes",
      scope: ["support.class.node.ts", "support.class.node.tsx"],
      settings: {
        foreground: "#82AAFF"
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
      name: "TypeScript[React] Import/Export Punctuations",
      scope: [
        "meta.import.ts punctuation.definition.block",
        "meta.import.tsx punctuation.definition.block",
        "meta.export.ts punctuation.definition.block",
        "meta.export.tsx punctuation.definition.block"
      ],
      settings: {
        foreground: colorText.hex()
      }
    },
    {
      name: "TypeScript[React] Punctuation Decorators",
      scope: [
        "meta.decorator punctuation.decorator.ts",
        "meta.decorator punctuation.decorator.tsx"
      ],
      settings: {
        foreground: "#82AAFF"
      }
    },
    {
      name: "TypeScript[React] Punctuation Decorators",
      scope: "meta.tag.js meta.jsx.children.tsx",
      settings: {
        foreground: "#82AAFF"
      }
    },
    {
      name: "YAML Entity Name Tags",
      scope: "entity.name.tag.yaml",
      settings: {
        foreground: "#7fdbca"
      }
    },
    {
      name: "JavaScript Variable Other ReadWrite",
      scope: ["variable.other.readwrite.js", "variable.parameter"],
      settings: {
        foreground: colorVariable.hex(),

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
      name: "Text nested in React tags",
      scope: [
        "meta.jsx.children",
        "meta.jsx.children.js",
        "meta.jsx.children.tsx"
      ],
      settings: {
        foreground: colorText.hex()
      }
    },
    {
      name: "TypeScript Classes",
      scope: "meta.class entity.name.type.class.tsx",
      settings: {
        foreground: "#ffcb8b"
      }
    },
    {
      name: "TypeScript Entity Name Type",
      scope: ["entity.name.type.tsx", "entity.name.type.module.tsx"],
      settings: {
        foreground: "#ffcb8b"
      }
    },
    {
      name: "TypeScript Method Declaration e.g. `constructor`",
      scope: [
        "meta.method.declaration storage.type.ts",
        "meta.method.declaration storage.type.tsx"
      ],
      settings: {
        foreground: "#82AAFF"
      }
    },
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
    }
  ]
};

module.exports = theme