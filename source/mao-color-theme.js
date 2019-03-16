let Color = require("color");

let colorWhite = Color.rgb(255, 255, 255)
let colorBlack = Color.rgb(0,0,0)

let colorPrincipal = Color.rgb(16, 30, 44)
let colorP_darken = colorPrincipal.darken(0.3)
let colorP_light = colorPrincipal.lighten(0.3)
let colorP_lighten = colorPrincipal.lighten(1.5)
let colorP_lighter = colorPrincipal.lighten(2);
let colorP_lightest = colorPrincipal.lighten(4.5);

let colorText = colorPrincipal.lighten(6);

let colorEspecialWord = Color.rgb(188,97,219)
let colorVariable = Color.rgb(217,152,92)
let colorFunction = Color.rgb(71,174,245)
let colorParameter = Color.rgb(0,200,200)
let colorString = Color.rgb(130,200,100)
let colorInstanceVariable = Color.rgb(255,100,120)
let colorRegularText = Color.rgb(179,179,179)
let colorComent = Color.rgb(102,102,102)

let colorInfo = Color.rgb(100, 180, 250)
let colorInfoDark = colorInfo.darken(0.6);
let colorInfoLight = colorInfo.lighten(0.2);
let colorSuccesLight = Color.rgb(175, 220, 100);
let colorWarning = Color.rgb(255, 200, 40)
let colorWarningDark = colorWarning.darken(0.6);
let colorWarningLight = Color.rgb(255, 235, 150);
let colorDanger = Color.rgb(240, 80, 80)
let colorDangerDark = colorDanger.darken(0.4);

let selectionColor = colorP_lighter;

console.log(selectionColor.darken(0.6).hex());


let theme = {
  name: "Mao",
  type: "dark",
  colors: {
    "contrastActiveBorder": null,
    "contrastBorder": colorP_lighten.hex(),
    "focusBorder": colorP_lighten.hex(),
    "foreground": colorText.hex(),
    "widget.shadow": colorPrincipal.hex(),
    "selection.background": "#4373c2",
    "errorForeground": colorDanger.hex(),

    "button.background": "#7e57c2",
    "button.foreground": colorWhite.hex(),
    "button.hoverBackground": "#7e57c2",

    "dropdown.background": colorPrincipal.hex(),
    "dropdown.border": colorP_lighten.hex(),
    "dropdown.foreground": colorText.hex(),

    "input.background": colorP_light.hex(),
    "input.border": colorP_lighten.hex(),
    "input.foreground": colorText.hex(),
    "input.placeholderForeground": colorP_lightest.hex(),

    "inputOption.activeBorder": colorP_lightest.hex(),
    "inputValidation.errorBackground": colorDangerDark.hex(),
    "inputValidation.errorBorder": colorDanger.hex(),
    "inputValidation.infoBackground": colorInfoDark.hex(),
    "inputValidation.infoBorder": colorInfo.hex(),
    "inputValidation.warningBackground": colorWarningDark.hex(),
    "inputValidation.warningBorder": colorWarning.hex(),

    "scrollbar.shadow": colorBlack.hex(),
    "scrollbarSlider.activeBackground": colorP_lighten.hex(),
    "scrollbarSlider.background": colorP_lighten.hex(),
    "scrollbarSlider.hoverBackground": colorP_lighten.hex(),

    "badge.background": colorP_lightest.hex(),
    "badge.foreground": colorWhite.hex(),

    "progress.background": "#7e57c2",

    "breadcrumb.foreground": "#A599E9",
    "breadcrumb.focusForeground": colorWhite.hex(),
    "breadcrumb.activeSelectionForeground": colorWhite.hex(),
    "breadcrumbPicker.background": "#001122",

    "list.activeSelectionBackground": colorP_lighter.hex(),
    "list.activeSelectionForeground": colorWhite.hex(),
    "list.invalidItemForeground": "#975f94",
    "list.dropBackground": colorPrincipal.hex(),
    "list.focusBackground": colorPrincipal.hex(),
    "list.focusForeground": colorWhite.hex(),
    "list.highlightForeground": colorWhite.hex(),
    "list.hoverBackground": colorPrincipal.hex(),
    "list.hoverForeground": colorWhite.hex(),
    "list.inactiveSelectionBackground": colorP_light.hex(),
    "list.inactiveSelectionForeground": colorP_lightest.hex(),

    "activityBar.background": colorPrincipal.hex(),
    "activityBar.dropBackground": colorP_lightest.hex(),
    "activityBar.foreground": colorP_lightest.hex(),
    "activityBar.border": colorPrincipal.hex(),
    "activityBarBadge.background": colorP_lighter.hex(),
    "activityBarBadge.foreground": colorWhite.hex(),

    "sideBar.background": colorPrincipal.hex(),
    "sideBar.foreground": colorP_lightest.hex(),
    "sideBar.border": colorPrincipal.hex(),
    "sideBarTitle.foreground": colorP_lightest.hex(),
    "sideBarSectionHeader.background": colorPrincipal.hex(),
    "sideBarSectionHeader.foreground": colorP_lightest.hex(),

    "editorGroup.background": "#32374C",
    "editorGroup.border": colorPrincipal.hex(),
    "editorGroup.dropBackground": "#7e57c2",
    "editorGroupHeader.noTabsBackground": colorPrincipal.hex(),
    "editorGroupHeader.tabsBackground": colorPrincipal.hex(),
    "editorGroupHeader.tabsBorder": "#262A39",

    "tab.activeBackground": "#0b2942",
    "tab.activeForeground": colorText.hex(),
    "tab.border": "#272B3B",
    "tab.activeBorder": "#262A39",
    "tab.unfocusedActiveBorder": "#262A39",
    "tab.inactiveBackground": colorP_darken.hex(),
    "tab.inactiveForeground": colorP_lightest.hex(),
    "tab.unfocusedActiveForeground": colorP_lightest.hex(),
    "tab.unfocusedInactiveForeground": colorP_lightest.hex(),


    "editor.background": colorPrincipal.hex(),
    "editor.foreground": colorText.hex(),
    "editorLineNumber.foreground": "#4b6479",
    "editorLineNumber.activeForeground": "#C5E4FD",
    "editorCursor.foreground": "#80a4c2",

    "editor.selectionBackground": selectionColor.hex(),
    "editor.selectionForeground": colorText.hex(),
    "editor.selectionHighlightBackground": selectionColor.lighten(0.5).hex(),
    "editor.inactiveSelectionBackground": selectionColor.lighten(1).hex(),

    "editor.wordHighlightBackground": selectionColor.hex(),
    "editor.wordHighlightStrongBackground": selectionColor.hex(),

    
    "editor.findMatchBackground": "#5f7e97",
    "editor.findMatchHighlightBackground": "#2E3248",
    "editor.findRangeHighlightBackground": null,
    "editor.hoverHighlightBackground": "#7e57c2",
    "editor.lineHighlightBackground": "#0003",
    "editor.lineHighlightBorder": null,
    "editorLink.activeForeground": null,
    "editor.rangeHighlightBackground": "#7e57c2",
    "editorWhitespace.foreground": null,
    "editorIndentGuide.background": "#5e81ce",
    "editorIndentGuide.activeBackground": "#7E97AC",
    "editorRuler.foreground": "#5e81ce",
    "editorCodeLens.foreground": "#5e82ce",
    "editorBracketMatch.background": "#5f7e97",
    "editorBracketMatch.border": null,
    "editorOverviewRuler.currentContentForeground": "#7e57c2",
    "editorOverviewRuler.incomingContentForeground": "#7e57c2",
    "editorOverviewRuler.commonContentForeground": "#7e57c2",
    "editorError.foreground": colorDanger.hex(),
    "editorError.border": null,
    "editorWarning.foreground": "#b39554",
    "editorWarning.border": null,
    "editorGutter.background": colorPrincipal.hex(),
    "editorGutter.modifiedBackground": "#e2b93d",
    "editorGutter.addedBackground": "#9CCC65",
    "editorGutter.deletedBackground": colorDanger.hex(),
    "editorWidget.border": "#262A39",
    "editorSuggestWidget.background": "#2C3043",
    "editorSuggestWidget.border": "#2B2F40",
    "editorSuggestWidget.foreground": colorText.hex(),
    "editorSuggestWidget.highlightForeground": colorWhite.hex(),
    "editorSuggestWidget.selectedBackground": colorP_lightest.hex(),
    "editorHoverWidget.background": colorPrincipal.hex(),
    "editorHoverWidget.border": colorP_lightest.hex(),
    "editorMarkerNavigation.background": colorP_lighten.hex(),
    "editorMarkerNavigationError.background": colorDanger.hex(),
    "editorMarkerNavigationWarning.background": colorWarning.hex(),

    "diffEditor.insertedTextBackground": "#99b76d",
    "diffEditor.insertedTextBorder": "#addb67",
    "diffEditor.removedTextBackground": colorDanger.hex(),
    "diffEditor.removedTextBorder": colorDanger.hex(),
    "editorWidget.background": colorP_lighten.hex(),

    "debugExceptionWidget.background": colorPrincipal.hex(),
    "debugExceptionWidget.border": colorP_lightest.hex(),

    "peekView.border": colorP_lightest.hex(),
    "peekViewEditor.background": colorPrincipal.hex(),
    "peekViewEditor.matchHighlightBackground": "#7e57c2",
    "peekViewResult.background": colorPrincipal.hex(),
    "peekViewResult.fileForeground": colorP_lightest.hex(),
    "peekViewResult.lineForeground": colorP_lightest.hex(),
    "peekViewResult.matchHighlightBackground": colorWhite.hex(),
    "peekViewResult.selectionBackground": "#2E3250",
    "peekViewResult.selectionForeground": colorP_lightest.hex(),
    "peekViewTitle.background": colorPrincipal.hex(),
    "peekViewTitleDescription.foreground": "#697098",
    "peekViewTitleLabel.foreground": colorP_lightest.hex(),

    "merge.currentHeaderBackground": colorP_lightest.hex(),
    "merge.currentContentBackground": null,
    "merge.incomingHeaderBackground": "#7e57c2",
    "merge.incomingContentBackground": null,
    "merge.border": null,

    "panel.background": colorPrincipal.hex(),
    "panel.border": colorP_lightest.hex(),
    "panelTitle.activeBorder": colorP_lightest.hex(),
    "panelTitle.activeForeground": colorWhite.hex(),
    "panelTitle.inactiveForeground": colorText.hex(),

    "statusBar.background": colorPrincipal.hex(),
    "statusBar.foreground": "#676E95",
    "statusBar.border": "#262A39",
    "statusBar.debuggingBackground": "#202431",
    "statusBar.debuggingForeground": null,
    "statusBar.debuggingBorder": "#1F2330",
    "statusBar.noFolderForeground": null,
    "statusBar.noFolderBackground": colorPrincipal.hex(),
    "statusBar.noFolderBorder": "#25293A",
    "statusBarItem.activeBackground": "#202431",
    "statusBarItem.hoverBackground": "#202431",
    "statusBarItem.prominentBackground": "#202431",
    "statusBarItem.prominentHoverBackground": "#202431",

    "titleBar.activeBackground": colorPrincipal.hex(),
    "titleBar.activeForeground": colorText.hex(),
    "titleBar.inactiveBackground": colorP_darken.hex(),
    "titleBar.inactiveForeground": null,

    "notifications.background": colorPrincipal.hex(),
    "notifications.foreground": colorWhite.hex(),
    "notificationLink.foreground": "#80CBC4",

    "extensionButton.prominentForeground": colorWhite.hex(),
    "extensionButton.prominentBackground": "#7e57c2cc",
    "extensionButton.prominentHoverBackground": "#7e57c2",

    "pickerGroup.foreground": "#d1aaff",
    "pickerGroup.border": colorPrincipal.hex(),

    "terminal.ansiWhite": colorWhite.hex(),
    "terminal.ansiBlack": colorPrincipal.hex(),
    "terminal.ansiBlue": "#82AAFF",
    "terminal.ansiCyan": "#21c7a8",
    "terminal.ansiGreen": "#22da6e",
    "terminal.ansiMagenta": "#C792EA",
    "terminal.ansiRed": colorDanger.hex(),
    "terminal.ansiYellow": "#addb67",
    "terminal.ansiBrightWhite": colorWhite.hex(),
    "terminal.ansiBrightBlack": "#575656",
    "terminal.ansiBrightBlue": "#82AAFF",
    "terminal.ansiBrightCyan": "#7fdbca",
    "terminal.ansiBrightGreen": "#22da6e",
    "terminal.ansiBrightMagenta": "#C792EA",
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

    // languages
    "string.quoted.single.js": colorWhite.hex(),
    "meta.objectliteral.js": "#82AAFF",

    "punctuation.definition.generic.begin.html": colorInstanceVariable.hex()
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
        foreground: "#a2bffc",
        fontStyle: "italic"
      }
    },
    {
      name: "Deleted",
      scope: "markup.deleted.diff",
      settings: {
        foreground: "#EF5350",
        fontStyle: "italic"
      }
    },
    {
      name: "Inserted",
      scope: "markup.inserted.diff",
      settings: {
        foreground: "#addb67",
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
        foreground: "#637777",
        fontStyle: "italic"
      }
    },
    {
      name: "String",
      scope: "string",
      settings: {
        foreground: "#addb67"
      }
    },
    {
      name: "String Quoted",
      scope: ["string.quoted", "variable.other.readwrite.js"],
      settings: {
        foreground: "#ecc48d"
      }
    },
    {
      name: "Support Constant Math",
      scope: "support.constant.math",
      settings: {
        foreground: "#addb67"
      }
    },
    {
      name: "Number",
      scope: ["constant.numeric", "constant.character.numeric"],
      settings: {
        foreground: "#F78C6C",
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
        foreground: "#82AAFF"
      }
    },
    {
      name: "User-defined constant",
      scope: ["constant.character", "constant.other"],
      settings: {
        foreground: "#82AAFF"
      }
    },
    {
      name: "Constant Character Escape",
      scope: "constant.character.escape",
      settings: {
        foreground: "#F78C6C"
      }
    },
    {
      name: "RegExp String",
      scope: ["string.regexp", "string.regexp keyword.other"],
      settings: {
        foreground: "#5ca7e4"
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
        foreground: "#addb67"
      }
    },
    {
      name: "Keyword",
      scope: ["punctuation.accessor", "keyword"],
      settings: {
        foreground: "#c792ea",
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
        foreground: "#c792ea",
        fontStyle: "italic"
      }
    },
    {
      name: "Storage type",
      scope: "storage.type",
      settings: {
        foreground: "#82AAFF"
      }
    },
    {
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
        foreground: "#ffcb8b"
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
        foreground: "#7fdbca"
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
        foreground: "#7fdbca",
        fontStyle: ""
      }
    },
    {
      name: "Tag attribute",
      scope: "entity.other.attribute-name",
      settings: {
        fontStyle: "italic",
        foreground: "#addb67"
      }
    },
    {
      name: "Entity Name Tag Custom",
      scope: "entity.name.tag.custom",
      settings: {
        foreground: "#addb67"
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
        foreground: "#7fdbca"
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
        background: "#ff2c83",
        foreground: colorWhite.hex()
      }
    },
    {
      name: "Invalid deprecated",
      scope: "invalid.deprecated",
      settings: {
        foreground: colorWhite.hex(),
        background: "#d3423e"
      }
    },
    {
      name: "Keyword Operator",
      scope: "keyword.operator",
      settings: {
        foreground: "#7fdbca",
        fontStyle: ""
      }
    },
    {
      name: "Keyword Operator Relational",
      scope: "keyword.operator.relational",
      settings: {
        foreground: "#c792ea",
        fontStyle: "italic"
      }
    },
    {
      name: "Keyword Operator Assignment",
      scope: "keyword.operator.assignment",
      settings: {
        foreground: "#c792ea"
      }
    },
    {
      name: "Keyword Operator Arithmetic",
      scope: "keyword.operator.arithmetic",
      settings: {
        foreground: "#c792ea"
      }
    },
    {
      name: "Keyword Operator Bitwise",
      scope: "keyword.operator.bitwise",
      settings: {
        foreground: "#c792ea"
      }
    },
    {
      name: "Keyword Operator Increment",
      scope: "keyword.operator.increment",
      settings: {
        foreground: "#c792ea"
      }
    },
    {
      name: "Keyword Operator Ternary",
      scope: "keyword.operator.ternary",
      settings: {
        foreground: "#c792ea"
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
        foreground: "#ff5874"
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
        foreground: "#c792ea",
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
        foreground: "#ff5874"
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
      name: "Support Type Property Name & entity name tags",
      scope: [
        "support.type.vendor.property-name",
        "support.constant.vendor.property-value",
        "support.type.property-name",
        "meta.property-list entity.name.tag"
      ],
      settings: {
        foreground: "#80CBC4",
        fontStyle: ""
      }
    },
    {
      name: "Entity Name tag reference in stylesheets",
      scope: "meta.property-list entity.name.tag.reference",
      settings: {
        foreground: "#57eaf1"
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
        foreground: "#FFEB95"
      }
    },
    {
      name: "Keyword Other Unit",
      scope: "keyword.other.unit",
      settings: {
        foreground: "#FFEB95"
      }
    },
    {
      name: "Meta Selector",
      scope: "meta.selector",
      settings: {
        foreground: "#c792ea",
        fontStyle: "italic"
      }
    },
    {
      name: "Entity Other Attribute Name Id",
      scope: "entity.other.attribute-name.id",
      settings: {
        foreground: "#FAD430"
      }
    },
    {
      name: "Meta Property Name",
      scope: "meta.property-name",
      settings: {
        foreground: "#80CBC4"
      }
    },
    {
      name: "Doctypes",
      scope: ["entity.name.tag.doctype", "meta.tag.sgml.doctype"],
      settings: {
        foreground: "#c792ea",
        fontStyle: "italic"
      }
    },
    {
      name: "Punctuation Definition Parameters",
      scope: "punctuation.definition.parameters",
      settings: {
        foreground: "#d9f5dd"
      }
    },
    {
      name: "Keyword Control Operator",
      scope: "keyword.control.operator",
      settings: {
        foreground: "#7fdbca"
      }
    },
    {
      name: "Keyword Operator Logical",
      scope: "keyword.operator.logical",
      settings: {
        foreground: "#c792ea",
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
        foreground: "#7fdbca"
      }
    },
    {
      name: "Variable Property Other object property",
      scope: ["variable.other.object.property"],
      settings: {
        foreground: "#d7dbe0",
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
        foreground: "#DCDCAA",
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
        foreground: "#c792ea",
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
        foreground: "#c792ea",
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
      }
    },
    {
      name: "Support Variable Property",
      scope: "support.variable.property",
      settings: {
        foreground: "#7fdbca"
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
        foreground: "#d3423e"
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
        foreground: "#c792ea",
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
        foreground: "#80CBC4"
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
        "entity.name.tag.custom.css",
        "support.constant.property-value.css"
      ],
      settings: {
        foreground: "#ff6363",
        fontStyle: ""
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
      name: "CSS Keyword Other Unit",
      scope: "keyword.other.unit.css",
      settings: {
        foreground: "#FFEB95"
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
        foreground: "#c792ea",
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
        foreground: "#c792ea",
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
        foreground: "#c792ea",
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
        foreground: colorText.hex()
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
        foreground: colorText.hex()
      }
    },
    {
      name: "JavaScript Variables",
      scope: ["variable.js", "variable.other.js"],
      settings: {
        foreground: colorText.hex()
      }
    },
    {
      name: "JavaScript Entity Name Type",
      scope: ["entity.name.type.js", "entity.name.type.module.js"],
      settings: {
        foreground: "#ffcb8b",
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
      name: "LESS Keyword Other Unit",
      scope: "keyword.other.unit.css",
      settings: {
        foreground: "#FFEB95"
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
        foreground: "#c792ea",
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
        foreground: "#c792ea"
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
      name: "SASS Keyword Other Unit",
      scope: ["keyword.other.unit.scss", "keyword.other.unit.sass"],
      settings: {
        foreground: "#FFEB95"
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
        foreground: "#d7dbe0"
      }
    },
    {
      name: "Support Class Component",
      scope: ["support.class.component.js", "support.class.component.tsx"],
      settings: {
        foreground: "#f78c6c",
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