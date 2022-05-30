module.exports = function (colors) {
  const themeColors = {
    // Editor general
    'editor.background': colors.interBackground.hex(),
    'editor.foreground': colors.text.hex(),
    'editorLineNumber.foreground': colors.principal_2.hex(),
    'editorLineNumber.activeForeground': colors.principal_5.hex(),
    'editorCursor.foreground': colors.contrast.hex(),
    'editorLink.activeForeground': null,

    // An extra border around active elements to separate them from others for greater contrast.
    contrastActiveBorder: null,
    // An extra border around elements to separate them from others for greater contrast.
    contrastBorder: null,
    // Overall border color for focused elements. This color is only used if not overridden by a component.
    focusBorder: colors.principal_3.hex(),
    // Overall foreground color. This color is only used if not overridden by a component.
    foreground: colors.text.hex(),
    // Shadow color of widgets such as Find/Replace inside the editor.
    'widget.shadow': colors.black.hex() + '30',
    // Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
    'selection.background': colors.selection_2.hex(),
    // labels in the welcome page
    descriptionForeground: colors.text.hex(),
    // Overall foreground color for error messages
    errorForeground: colors.danger.hex(),

    'icon.foreground': colors.text.hex(), //The default color for icons in the workbench.

    'sash.hoverBorder': colors.principal_3.hex(), //The hover border color for draggable borders.

    'window.activeBorder': colors.principal.hex(), // Border color for the active (focused) window.
    'window.inactiveBorder': colors.principal.hex(), // Border color for the inactive (unfocused) windows.

    // Links
    'textLink.foreground': colors.syntaxBlue.hex(), // Links color
    'textLink.activeForeground': colors.syntaxBlue.darken(0.3).hex(), // Links hover

    // Background color for block quotes in text.
    'textBlockQuote.background': colors.principal_0.hex(),
    // Border color for block quotes in text.
    'textBlockQuote.border': colors.principal_4.hex(),
    // Background color for code blocks in text.
    'textCodeBlock.background': colors.principal_0.hex(),
    // Foreground color for preformatted text segments.
    'textPreformat.foreground': colors.text.hex(),
    // color for text separators.
    'textSeparator.foreground': colors.principal_0.hex(),

    // color of the editor selection.
    'editor.selectionBackground': colors.selection_4.hex(),
    'editor.selectionForeground': colors.text.hex(),
    // cuando selecciono parcialmente una palabra y vscode selecciona todo
    'editor.wordHighlightStrongBackground': colors.selection_1.hex(),
    'editor.wordHighlightStrongBorder': null, // colors.testC.hex(),
    // palabras iguales a la seleccion
    'editor.selectionHighlightBackground': colors.selection_0.hex(),
    'editor.selectionHighlightBorder': colors.selection_2.hex(),
    // palabras completas iguales a la seleccion
    'editor.wordHighlightBackground': colors.selection_1.hex(),
    'editor.wordHighlightBorder': colors.selection_3.hex(),

    // cuando ubico el puntero encima de una palabra
    'editor.hoverHighlightBackground': colors.selection_1.hex(),

    // color of the selection in an inactive editor.
    'editor.inactiveSelectionBackground': colors.selection_1.hex(),

    // color de la linea en la que el cursor esta ubicado
    'editor.lineHighlightBackground': colors.selection_0.hex(),
    'editor.lineHighlightBorder': null,

    // palabra seleccionada por el finder
    'editor.findMatchBackground': colors.selection_0.hex(),
    'editor.findMatchBorder': colors.principal_5.hex(),

    // todas las palabras encontradas por el finder
    'editor.findMatchHighlightBackground': colors.selection_1.hex(),
    'editor.findRangeHighlightBackground': null,

    // fondo de la linea completa cuando se busca
    'editor.rangeHighlightBackground': colors.selection_0.hex(),
    'editor.rangeHighlightForeground': colors.text.hex(),

    // cuando me paro en un bracket me muestar los dos con este color
    'editorBracketMatch.background': null, //colors.principal_0.hex(),
    'editorBracketMatch.border': colors.principal_4.hex(),

    // cuando se activa la viusualizacion de los whitespaces
    'editorWhitespace.foreground': colors.principal_1.hex(),

    // linea vertical que indica la indentacion
    'editorIndentGuide.background': colors.principal_1.hex(),
    'editorIndentGuide.activeBackground': colors.principal_3.hex(),

    // la linea vertical en el codigo super fastidiosa!
    'editorRuler.foreground': colors.principal.hex(),

    // vscode codelens
    'editorCodeLens.foreground': colors.infoLight.hex(),

    // editor states
    'editorError.foreground': colors.danger.hex(),
    'editorError.border': null,
    'editorWarning.foreground': colors.warning.hex(),
    'editorWarning.border': null,

    // el editor gutter es la parte donde esta el numero de linea y las indicaciones de git dentro del archivo
    'editorGutter.background': colors.interBackground.hex(),
    'editorGutter.modifiedBackground': colors.warning.hex(),
    'editorGutter.addedBackground': colors.succes.hex(),
    'editorGutter.deletedBackground': colors.danger.hex(),

    // el widget como el find and replace
    'editorWidget.border': colors.principal_2.hex(),
    'editorWidget.background': colors.principal_1.hex(),
    'editorWidget.resizeBorder': colors.infoLight.hex(),

    // el cuadro que sale cuando estamos escribiendo proponiendo opciones
    'editorSuggestWidget.background': colors.principal_0.hex(),
    'editorSuggestWidget.border': colors.principal_1.hex(),
    'editorSuggestWidget.foreground': colors.principal_5.hex(),
    'editorSuggestWidget.highlightForeground': colors.text.hex(),
    'editorSuggestWidget.selectedBackground': colors.principal_1.hex(),

    // el cuadro que sale cuando ubico el cursor encima de un palabra importante
    'editorHoverWidget.background': colors.principal_0.hex(),
    'editorHoverWidget.border': colors.principal_1.hex(),

    // el cuadro que sale cuando hago click en 'Peek Problem' en el editorHoverWidget
    'editorMarkerNavigation.background': colors.principal_0.hex(),
    'editorMarkerNavigationInfo.background': colors.info.hex(),
    'editorMarkerNavigationError.background': colors.danger.hex(),
    'editorMarkerNavigationWarning.background': colors.warning.hex(),

    // Action colors
    'toolbar.hoverBackground': colors.principal_1.hex(), // Toolbar background when hovering over actions using the mouse
    'toolbar.hoverOutline': null, // Toolbar outline when hovering over actions using the mouse
    'toolbar.activeBackground': colors.principal_3.hex(), // Toolbar background when holding the mouse over actions

    // Botones
    'button.foreground': colors.white.hex(),
    'button.background': colors.contrast.hex(),
    'button.border': null,
    'button.hoverBackground': colors.contrastDark.hex(),

    'button.secondaryForeground': colors.white.hex(),
    'button.secondaryBackground': colors.info.hex(),
    'button.secondaryHoverBackground': colors.infoDark.hex(),

    'checkbox.background': colors.principal_3.hex(),
    'checkbox.foreground': colors.white.hex(),
    'checkbox.border': null,

    // Botones de las extenciones
    'extensionButton.prominentForeground': colors.white.hex(),
    'extensionButton.prominentBackground': colors.contrast.hex(),
    'extensionButton.prominentHoverBackground': colors.contrastDark.hex(),

    // inputs
    // Dropdowns
    // el background del cuadro del input no del menu como tal
    'dropdown.background': colors.principal_0.hex(),
    'dropdown.border': colors.principal_0.hex(),
    'dropdown.foreground': colors.text.hex(),
    'dropdown.listBackground': colors.principal_0.hex(),
    // Inputs text
    'input.background': colors.principal.hex(),
    'input.border': colors.principal_1.hex(),
    'input.foreground': colors.text.hex(),
    'input.placeholderForeground': colors.principal_3.hex(),
    // Input Select
    'inputOption.activeBorder': colors.principal_5.hex(),
    // Input Validation
    'inputValidation.errorBackground': colors.dangerDark.hex(),
    'inputValidation.errorBorder': colors.danger.hex(),
    'inputValidation.infoBackground': colors.infoDark.hex(),
    'inputValidation.infoBorder': colors.info.hex(),
    'inputValidation.warningBackground': colors.warningDark.hex(),
    'inputValidation.warningBorder': colors.warning.hex(),

    // Scrollbar
    'scrollbar.shadow': colors.black.hex() + '50',
    'scrollbarSlider.activeBackground': colors.principal_3.hex() + '50',
    'scrollbarSlider.background': colors.principal_3.hex() + '50',
    'scrollbarSlider.hoverBackground': colors.principal_3.hex() + '80',

    // Badges are small information labels, for example, search results count.
    'badge.background': colors.notificationBadge.hex(),
    'badge.foreground': colors.principal.hex(),

    'progressBar.background': colors.contrast.hex(),

    // Breadcrumbs
    'breadcrumb.foreground': colors.info.hex(),
    'breadcrumb.focusForeground': colors.infoLight.hex(),
    'breadcrumb.activeSelectionForeground': colors.infoLight.hex(),
    'breadcrumbPicker.background': colors.principal_0.hex(),

    // It is the bar on the left that contains the tree view and the explorer
    // Side Bar background color.
    'sideBar.background': colors.interBackground.hex(),
    // Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.
    'sideBar.foreground': colors.principal_5.hex(),
    // Side Bar border color on the side separating the editor.
    'sideBar.border': colors.interBorder.hex(),
    // Side Bar title foreground color.
    'sideBarTitle.foreground': colors.principal_5.hex(),
    // Side Bar section header background color.
    'sideBarSectionHeader.background': colors.principal_0.hex(),
    // Side Bar section header foreground color.
    'sideBarSectionHeader.foreground': colors.principal_5.hex(),
    // Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through. The side bar is the container for views like explorer and search.
    'sideBar.dropBackground': null,

    // Barra de la izquierda
    // Colors for list and trees like the File Explorer.
    // cuando hago click en un archivo
    'list.activeSelectionBackground': colors.principal_2.hex(),
    'list.activeSelectionForeground': colors.text.hex(),
    // cuando me ubico con el cursor en los archivos
    'list.hoverBackground': colors.principal_0.hex(),
    'list.hoverForeground': colors.principal_5.hex(),
    // cuando ya no estoy ubicado en el list tree ej. cuando estoy editando un archivo
    'list.inactiveSelectionBackground': colors.principal_1.hex(),
    'list.inactiveSelectionForeground': colors.text.hex(),
    // Cuando selecciono un archivo con el teclado
    'list.focusBackground': colors.principal_0.hex(),
    'list.focusForeground': colors.principal_5.hex(),
    // List/Tree foreground color for invalid items, for example an unresolved root in explorer.
    'list.invalidItemForeground': colors.contrastDark.hex(),
    // cuando arrstro un archivo o carpeta a otra carpeta
    'list.dropBackground': colors.principal_2.hex(),
    // List/Tree foreground color of the match highlights when searching inside the list/tree.
    'list.highlightForeground': colors.principal_5.hex(),

    // List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
    'list.inactiveFocusBackground': null,
    // Foreground color of list items containing errors.
    'list.errorForeground': colors.danger.hex(),
    // Foreground color of list items containing warnings.
    'list.warningForeground': colors.warningLight.hex(),
    // List/Tree Filter background color of typed text when searching inside the list/tree.
    'listFilterWidget.background': null,
    // List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
    'listFilterWidget.outline': null,
    // List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
    'listFilterWidget.noMatchesOutline': null,

    // "list.filterMatchBackground": colors.danger.hex(), // Background color of the filtered matches in lists and trees.
    // "list.filterMatchBorder": null, // Border color of the filtered matches in lists and trees.
    // "list.deemphasizedForeground": null, // List/Tree foreground color for items that are deemphasized.
    // "tree.indentGuidesStroke": null, // Tree Widget's stroke color for indent guides.
    // "tree.tableColumnsBorder": null, // Tree stroke color for the indentation guides.

    // Activity bar es la primera barra de iconos de la izquierda
    // Activity Bar background color.
    'activityBar.background': colors.interBackground.hex(),
    // Drag and drop feedback color for the Activity Bar items.
    'activityBar.dropBackground': colors.principal_2.hex(),
    // Activity bar foreground color (for example used for the icons).
    'activityBar.foreground': colors.principal_5.hex(),
    // Activity Bar border color with the Side Bar.
    'activityBar.border': null,
    // Activity bar item foreground color when it is inactive.
    'activityBar.inactiveForeground': colors.principal_3.hex(),
    // Activity notification badge background color.
    'activityBarBadge.background': colors.notificationBadge.hex(),
    // Activity notification badge foreground color.
    'activityBarBadge.foreground': colors.principal.hex(),

    'activityBar.activeBorder': colors.contrast.hex(), // Activity Bar active indicator border color.
    'activityBar.activeBackground': colors.principal_0.hex(), // Activity Bar optional background color for the active element.
    'activityBar.activeFocusBorder': colors.contrast.hex(), // Activity bar focus border color for the active item.

    // Editor Groups are the containers of editors. There can be many editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.
    // color to separate multiple editor groups from each other.
    'editorGroup.border': colors.interBorder.hex(),
    // Background color when dragging editors around.
    'editorGroup.dropBackground': colors.contrast.hex() + '70',
    // Background color of the editor group title header when Tabs are disabled (set "workbench.editor.showTabs": false).
    'editorGroupHeader.noTabsBackground': colors.interBackground.hex(),
    // Background color of the Tabs container.
    'editorGroupHeader.tabsBackground': colors.interBackground.hex(),
    // Border color of the editor group title header when tabs are enabled.
    'editorGroupHeader.tabsBorder': colors.interBorder.hex(),

    // Las pestanas de los archivos abiertos
    'tab.border': colors.interBorder.hex(),
    'tab.hoverBorder': null, // Border to highlight tabs when hovering
    'tab.hoverBackground': colors.principal_1.hex(), // Tab background color when hovering
    'tab.hoverForeground': colors.text.hex(), // Tab foreground color when hovering
    'tab.activeBackground': colors.principal_0.hex(),
    'tab.activeForeground': colors.text.hex(),
    'tab.activeBorder': colors.contrast.hex(),
    'tab.activeModifiedBorder': colors.warningLight.hex(), // Border on the top of modified (dirty) active tabs in an active group.
    'tab.inactiveBackground': colors.principal.hex(),
    'tab.inactiveForeground': colors.principal_4.hex(),
    'tab.inactiveModifiedBorder': colors.warningLight.hex() + 50, // Border on the top of modified (dirty) inactive tabs in an active group.
    'tab.unfocusedHoverBorder': null, // Border to highlight tabs in an unfocused group when hovering
    'tab.unfocusedHoverBackground': colors.principal_1.hex(), // Tab background color in an unfocused group when hovering
    'tab.unfocusedHoverForeground': colors.principal_4.hex(), // Tab foreground color in an unfocused group when hovering
    'tab.unfocusedActiveForeground': colors.principal_4.hex(),
    'tab.unfocusedActiveBackground': colors.principal_1.hex() + 60,
    'tab.unfocusedActiveBorder': colors.interBorder.hex(),
    'tab.unfocusedInactiveForeground': colors.principal_3.hex(),
    'tab.unfocusedInactiveBackground': colors.principal.hex(),
    'tab.unfocusedActiveModifiedBorder': colors.warningLight.hex() + 70, // Border on the top of modified (dirty) active tabs in an unfocused group.
    'tab.unfocusedInactiveModifiedBorder': colors.warningLight.hex() + 50, // Border on the top of modified (dirty) inactive tabs in an unfocused group.
    'editorPane.background': null, // Background color of the editor pane visible on the left and right side of the centered editor layout.

    // barra de menus
    'menubar.selectionForeground': colors.text.hex(),
    'menubar.selectionBackground': colors.principal_1.hex(),
    'menubar.selectionBorder': null,
    'menu.foreground': colors.principal_5.hex(),
    'menu.background': colors.principal_0.hex(),
    'menu.selectionForeground': colors.text.hex(),
    'menu.selectionBackground': colors.principal_1.hex(),
    'menu.selectionBorder': null,
    'menu.separatorBackground': colors.interBorder.hex(),

    // Minimap
    'minimap.findMatchHighlight': colors.succes.hex(), // Highlight color for matches from search within files.
    'minimap.selectionHighlight': colors.contrast.hex(), //Highlight color for the editor selection.
    'minimap.errorHighlight': colors.danger.hex(), //Highlight color for errors within the editor.
    'minimap.warningHighlight': colors.warning.hex(), //Highlight color for warnings within the editor.
    'minimap.background': colors.principal.hex(), //Minimap background color.
    'minimapSlider.background': colors.principal_3.hex() + 60, //Minimap slider background color.
    'minimapSlider.hoverBackground': colors.principal_2.hex() + 60, //Minimap slider background color when hovering.
    'minimapSlider.activeBackground': colors.principal_4.hex() + 60, //Minimap slider background color when clicked on.
    'minimapGutter.addedBackground': colors.succes.hex(), //Minimap gutter color for added content.
    'minimapGutter.modifiedBackground': colors.warning.hex(), //Minimap gutter color for modified content.
    'minimapGutter.deletedBackground': colors.danger.hex(), //Minimap gutter color for deleted content.

    // git in editor interfece
    'diffEditor.insertedTextBackground': colors.gitInsertedBg.hex(),
    'diffEditor.insertedTextBorder': null,
    'diffEditor.removedTextBackground': colors.gitRemovedBg.hex(),
    'diffEditor.removedTextBorder': null,

    'debugExceptionWidget.background': colors.principal.hex(),
    'debugExceptionWidget.border': colors.interBorder.hex(),

    // cuando selecciono una palabra y doy shift + f12
    'peekView.border': colors.infoLight.hex(),
    'peekViewEditor.background': colors.principal.hex(),
    'peekViewEditor.matchHighlightBackground': colors.principal_2.hex(),
    'peekViewResult.background': colors.principal_0.hex(),
    'peekViewResult.fileForeground': colors.text.hex(),
    'peekViewResult.lineForeground': colors.text.hex(),
    'peekViewResult.matchHighlightBackground': colors.principal_2.hex(),
    'peekViewResult.selectionBackground': colors.principal_1.hex(),
    'peekViewResult.selectionForeground': colors.text.hex(),
    'peekViewTitle.background': colors.principal_0.hex(),
    'peekViewTitleDescription.foreground': colors.text.hex(),
    'peekViewTitleLabel.foreground': colors.text.hex(),

    // GIT MERGE CONFLICTS
    'merge.currentHeaderBackground': colors.succesLight.hex() + '50',
    'merge.currentContentBackground': null,
    'merge.incomingHeaderBackground': colors.infoLight.hex() + '50',
    'merge.incomingContentBackground': null,
    'merge.border': null,
    'merge.commonContentBackground': colors.warningLight.hex() + '50',
    'merge.commonHeaderBackground': null,

    // color en el scroll
    'editorOverviewRuler.currentContentForeground': colors.contrast.hex(),
    'editorOverviewRuler.incomingContentForeground': colors.contrast.hex(),
    'editorOverviewRuler.commonContentForeground': colors.contrast.hex(),

    // Overview ruler: This ruler is located beneath the scroll bar on the right edge of the editor and gives an overview of the decorations in the editor.
    // color of the overview ruler border.
    'editorOverviewRuler.border': null,
    // Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.
    'editorOverviewRuler.findMatchForeground': colors.principal_1.hex(),
    // Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
    'editorOverviewRuler.rangeHighlightForeground': colors.principal_3.hex(),
    // Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.
    'editorOverviewRuler.selectionHighlightForeground': colors.principal_2.hex(),
    // Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.
    'editorOverviewRuler.wordHighlightForeground': colors.principal_4.hex(),
    // Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.
    'editorOverviewRuler.wordHighlightStrongForeground': colors.principal_4.hex(),
    // Overview ruler marker color for modified content.
    'editorOverviewRuler.modifiedForeground': colors.warningLight.hex(),
    // Overview ruler marker color for added content.
    'editorOverviewRuler.addedForeground': colors.succesLight.hex(),
    // Overview ruler marker color for deleted content.
    'editorOverviewRuler.deletedForeground': colors.danger.hex(),
    // Overview ruler marker color for errors.
    'editorOverviewRuler.errorForeground': colors.danger.hex(),
    // Overview ruler marker color for warnings.
    'editorOverviewRuler.warningForeground': colors.warning.hex(),
    // Overview ruler marker color for infos.
    'editorOverviewRuler.infoForeground': colors.info.hex(),
    // Overview ruler marker color for matching brackets.
    'editorOverviewRuler.bracketMatchForeground': colors.principal_2.hex(),

    // Panels are shown below the editor area and contain views like Output and Integrated Terminal.
    'panel.background': colors.principal.hex(),
    'panel.border': colors.interBorder.hex(),
    'panelTitle.activeBorder': colors.contrast.hex(),
    'panelTitle.activeForeground': colors.text.hex(),
    'panelTitle.inactiveForeground': colors.principal_4.hex(),

    'panelSection.dropBackground': colors.contrast.hex(),
    'panelSectionHeader.background': colors.principal_0.hex(),
    'panelSectionHeader.foreground': colors.text.hex(),
    'panelSectionHeader.border': colors.interBorder.hex(),

    // The Status Bar is shown in the bottom of the workbench.
    'statusBar.background': colors.principal.hex(),
    'statusBar.foreground': colors.principal_5.hex(),
    'statusBar.border': colors.interBorder.hex(),

    'statusBar.debuggingBackground': colors.warning.hex(),
    'statusBar.debuggingForeground': colors.principal.hex(),
    'statusBar.debuggingBorder': colors.warning.hex(),

    'statusBar.noFolderForeground': null,
    'statusBar.noFolderBackground': colors.principal.hex(),
    'statusBar.noFolderBorder': colors.contrast.hex(),

    // cauando doy click en los botones de la barra (onClick)
    'statusBarItem.activeBackground': colors.principal_0.hex(),
    'statusBarItem.hoverBackground': colors.principal_1.hex(),
    'statusBarItem.prominentBackground': colors.principal_3.hex(),
    'statusBarItem.prominentForeground': colors.text.hex(),
    'statusBarItem.prominentHoverBackground': colors.principal_3.hex(),

    'titleBar.activeBackground': colors.principal.hex(),
    'titleBar.activeForeground': colors.principal_5.hex(),
    'titleBar.inactiveBackground': colors.principal.hex(),
    'titleBar.inactiveForeground': colors.principal_3.hex(),

    'notificationCenter.border': colors.interBorder.hex(),
    'notificationCenterHeader.foreground': colors.principal_5.hex(),
    'notificationCenterHeader.background': colors.principal_0.hex(),
    'notificationToast.border': colors.interBorder.hex(),

    'notifications.background': colors.principal.hex(),
    'notifications.foreground': colors.text.hex(),
    'notifications.border': colors.interBorder.hex(),
    'notificationLink.foreground': colors.contrast.hex(),

    // extra textos en el Command Palette
    'pickerGroup.foreground': colors.text.hex(),
    // separador en el Command Palette
    'pickerGroup.border': colors.interBorder.hex(),

    'debugToolBar.background': colors.principal_0.hex(),
    'debugToolBar.border': null,

    'welcomePage.buttonBackground': colors.principal_0.hex(),
    'welcomePage.buttonHoverBackground': colors.principal_1.hex(),
    'walkThrough.embeddedEditorBackground': colors.principal.hex(),

    // Git colors
    'gitDecoration.addedResourceForeground': colors.succesLight.hex(),
    'gitDecoration.modifiedResourceForeground': colors.warningLight.hex(),
    'gitDecoration.deletedResourceForeground': colors.dangerLight.hex(),
    'gitDecoration.untrackedResourceForeground': colors.succesLight.hex(),
    'gitDecoration.ignoredResourceForeground': colors.gitIgnoreExplorer.hex(),
    'gitDecoration.conflictingResourceForeground': colors.danger.hex(),

    // Background color for the progress bar shown for long running operations.
    'progress.background': colors.contrast.hex(),

    // Terminal colors
    'terminal.background': colors.principal.hex(),
    'terminal.ansiWhite': colors.text.hex(),
    'terminal.ansiBlack': colors.black.hex(),
    'terminal.ansiBlue': colors.syntaxBlue.hex(),
    'terminal.ansiCyan': colors.syntaxCyan.hex(),
    'terminal.ansiGreen': colors.syntaxGreen.hex(),
    'terminal.ansiMagenta': colors.syntaxMagenta.hex(),
    'terminal.ansiRed': colors.syntaxRed.hex(),
    'terminal.ansiYellow': colors.syntaxYellow.hex(),
    'terminal.ansiBrightWhite': colors.white.hex(),
    'terminal.ansiBrightBlack': colors.principal_4.hex(),
    'terminal.ansiBrightBlue': colors.syntaxBlue.hex(),
    'terminal.ansiBrightCyan': colors.syntaxCyan.hex(),
    'terminal.ansiBrightGreen': colors.syntaxGreen.hex(),
    'terminal.ansiBrightMagenta': colors.syntaxMagenta.hex(),
    'terminal.ansiBrightRed': colors.syntaxRed.hex(),
    'terminal.ansiBrightYellow': colors.syntaxYellow.hex(),
  }

  const tcNormalize = [
    {
      name: 'normalize font style of certain components',
      scope: [
        'meta.property-list.css meta.property-value.css variable.other.less',
        'meta.property-list.scss variable.scss',
        'meta.property-list.sass variable.sass',
        'meta.brace',
        'keyword.operator.operator',
        'keyword.operator.or.regexp',
        'keyword.operator.expression.in',
        'keyword.operator.relational',
        'keyword.operator.assignment',
        'keyword.operator.comparison',
        'keyword.operator.type',
        'keyword.operator',
        'keyword',
        'punctuation.definintion.string',
        'punctuation',
        'variable.other.readwrite.js',
        'storage.type',
        'source.css',
        'string.quoted',
      ],
      settings: {
        fontStyle: 'normal',
      },
    },
  ]

  const tcGlobalSettings = [
    // gloabal settings
    {
      name: 'Global settings',
      settings: {
        background: colors.principal.hex(),
        foreground: colors.text.hex(),
      },
    },
  ]

  const tcGit = [
    // GIT  colors
    {
      name: 'Changed',
      scope: [
        'markup.changed',
        'meta.diff.header.git',
        'meta.diff.header.from-file',
        'meta.diff.header.to-file',
      ],
      settings: {
        foreground: colors.infoLight.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'Deleted',
      scope: 'markup.deleted.diff',
      settings: {
        foreground: colors.danger.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'Inserted',
      scope: 'markup.inserted.diff',
      settings: {
        foreground: colors.succesLight.hex(),
        fontStyle: 'italic',
      },
    },
  ]

  const tcGeneral = [
    {
      // reserved language variables like this, super, self, etc.
      name: 'Language Variable',
      scope: 'variable.language',
      settings: {
        foreground: colors.specialWordA.hex(),
      },
    },
    {
      // escape sequences like \e
      name: 'Constant Character Escape',
      scope: 'constant.character.escape',
      settings: {
        foreground: colors.string.hex(),
      },
    },
    {
      // the </> of the tag & (,) in pug
      name: 'Meta Tag',
      scope: ['punctuation.definition.tag', 'meta.tag'],
      settings: {
        foreground: colors.metaTag.hex(),
      },
    },
    {
      // HTML & PUG atributes
      name: 'Tag attribute',
      scope: ['entity.other.attribute-name', 'entity.name.type.svelte'],
      settings: {
        foreground: colors.tagAttribute.hex(),
        fontStyle: 'italic',
      },
    },
    {
      // pug classes
      name: 'Pug Classes',
      scope: 'entity.other.attribute-name.class.pug',
      settings: {
        foreground: colors.pugClass.hex(),
        fontStyle: 'italic',
      },
    },
    {
      // function name
      name: 'Support Variable Property',
      scope: 'support.variable.property',
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
    {
      name: 'Invalid deprecated',
      scope: 'invalid.deprecated',
      settings: {
        foreground: colors.deprecated.hex(),
        background: colors.dangerDark.hex(),
      },
    },
    {
      name: 'RegExp String',
      scope: [
        'string.regexp',
        'string.regexp keyword.other',
        'string.regexp punctuation.definition.string',
        'constant.character.escape.backslash.regexp',
        'constant.other.character-class.set.regexp',
        'constant.character.control.regexp',
      ],
      settings: {
        foreground: colors.syntaxBeige.hex(),
      },
    },
    {
      // hex color
      name: 'Constant Other Color',
      scope: 'constant.other.color',
      settings: {
        foreground: colors.regularText.hex(),
      },
    },

    {
      name: 'Italics',
      scope: 'italic',
      settings: {
        foreground: '',
        fontStyle: 'italic',
      },
    },
    {
      name: 'Bold',
      scope: 'bold',
      settings: {
        foreground: colors.string.hex(),
        fontStyle: 'bold',
      },
    },
    {
      name: 'Quote',
      scope: 'quote',
      settings: {
        foreground: colors.string.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'Invalid',
      scope: 'invalid',
      settings: {
        background: colors.danger.hex(),
        foreground: colors.white.hex(),
      },
    },
  ]

  const tcSpecialWords = [
    // SPECIAL WORDS

    // VIOLET COLOR

    {
      // types provided by the framework/library,
      name: 'Library class/type',
      scope: [
        // variables provided by the framework/library. For example global in javascript
        'support.variable',
        // types provided by the framework/library, this is probably only used for
        // languages derived from C, which has typedef (and struct).
        // Most other languages would introduce new types as classes.
        'support.type',
        // when the framework/library provides classes.
        // 'support.class',
        // 'entity.name.type.class',
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
    {
      name: 'Library (function & constant)',
      scope: [
        // functions provided by the framework/library
        // like log in console.log()
        'support.function',
        // constants (magic values) provided by the framework/library.
        'support.constant',
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
        fontStyle: 'italic',
      },
    },

    // ORANGE COLOR
    // object properties before the last property
    // object.[propertyA.propertyAA].propertyAAA
    {
      name: 'Variable Property Other object property',
      scope: ['variable.other.object.property'],
      settings: {
        foreground: colors.text.hex(),
        fontStyle: 'italic',
      },
    },

    // Last object property
    // object.propertyA.propertyAA.[propertyAAA]
    {
      name: 'Variable Instances',
      scope: [
        'variable.instance',
        'variable.other.instance',
        'variable.readwrite.instance',
        'variable.other.readwrite.instance',
      ],
      settings: {
        foreground: colors.variableInstance.hex(),
      },
    },

    {
      name: '',
      scope: [
        'variable.other.property',
        'variable.other.property.js',
        'variable.other.property.ts',
        'variable.object.property.ts',
        '	support.variable.property',
      ],
      settings: {
        foreground: colors.variableProperty.hex(),
      },
    },

    // RED COLOR
    {
      // Math in Math.random() in javascript
      name: 'Support Constant Math',
      scope: 'support.constant.math',
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },

    // BLUE COLOR
    {
      name: 'Storage type',
      scope: [
        // var let const class function type
        'storage.type',
        // @param, @returns
        'punctuation.definition.block.tag',
        // JavaScript Method Declaration e.g. `constructor`
        'meta.method.declaration',
        'meta.method.declaration storage.type.js',
      ],
      settings: {
        foreground: colors.specialWordA.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'interface',
      scope: ['storage.type.interface'],
      settings: {
        foreground: colors.specialWordA.hex(),
      },
    },
    {
      name: 'Storage',
      scope: [
        'storage',
        'meta.class meta.method.declaration meta.var.expr storage.type.js',
        'storage.type.property.js',
        'storage.type.property.ts',
        'storage.type.property.tsx',
      ],
      settings: {
        foreground: colors.specialWordA.hex(),
        fontStyle: 'italic',
      },
    },

    // PURPLE COLOR
    {
      name: 'Entity Name Tag Custom',
      scope: 'entity.name.tag.custom',
      settings: {
        foreground: colors.specialWordC.hex(),
      },
    },
    {
      name: 'Meta Delimiter Period',
      scope: 'meta.delimiter.period',
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'Meta Selector',
      scope: 'meta.selector',
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'Doctypes',
      scope: ['entity.name.tag.doctype', 'meta.tag.sgml.doctype'],
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'Keyword Control Conditional',
      scope: [
        'keyword.control.conditional.js',
        'keyword.control.conditional.ts',
        'keyword.control.switch.js',
        'keyword.control.switch.ts',
        'keyword.control.conditional.svelte',
        'keyword.control.svelte',
      ],
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: 'loops',
      scope: ['keyword.control.loop.vue', 'keyword.control.conditional.vue'],
      settings: {
        foreground: colors.specialWordC.hex(),
      },
    },
    {
      // mainly related to flow control like continue, while, return, etc.
      // at rule name in css & scss & sass
      name: 'import control keyword',
      scope: 'keyword.control',
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },

    // CYAN COLOR
    {
      name: 'Variable Parameter Function',
      scope: 'variable.parameter.function',
      settings: {
        foreground: colors.functionName.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: 'function call',
      scope: 'meta.function-call',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'Meta Property Name',
      scope: 'meta.property-name',
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
    {
      name: 'Keyword Control Operator',
      scope: 'keyword.control.operator',
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
    {
      // function name in javascript and mixins and function names in sass & scss
      name: 'Functions & Classes',
      scope: ['entity.name.function'],
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
    {
      name:
        'Support Constant, `new` keyword, Special Method Keyword, `debugger`, other keywords',
      scope: [
        'support.constant',
        'keyword.other.special-method',
        'keyword.other.new',
        'keyword.other.debugger',
      ],
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
  ]

  const tcStorageNames = [
    // Storage names
    {
      name: 'object key',
      scope: ['meta.var.expr', 'meta.object-literal.key'],
      settings: {
        foreground: colors.variableProperty.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: 'Variable',
      scope: 'variable',
      settings: {
        foreground: colors.variable.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: 'Built-in constant',
      scope: [
        'constant.language',
        'punctuation.definition.constant',
        'variable.other.constant',
      ],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: 'User-defined constant',
      scope: ['constant.character', 'constant.other'],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: 'Class name',
      scope: [
        'entity.name.class',
        'meta.class entity.name.type.class',
        // classes in js,
        'meta.class entity.name.type.class.js',
        'entity.other.inherited-class.js',
        // classes in ts
        'meta.class entity.name.type.class.ts',
      ],
      settings: {
        foreground: colors.specialWordC.hex(),
      },
    },
    {
      name: 'Inherited class',
      scope: 'entity.other.inherited-class',
      settings: {
        foreground: colors.variable.hex(),
      },
    },
  ]

  const tcStrings = [
    {
      name: 'String',
      scope: 'string',
      settings: {
        foreground: colors.string.hex(),
      },
    },
    {
      name: 'String Quoted',
      scope: ['string.quoted', 'string.quoted.single.js'],
      settings: {
        foreground: colors.string.hex(),
      },
    },
    {
      name: 'Backtics(``) in Template Strings',
      scope: 'string.template punctuation.definition.string',
      settings: {
        foreground: colors.string.hex(),
      },
    },
    {
      name: 'Punctuation Definition String',
      scope: 'punctuation.definition.string',
      settings: {
        foreground: colors.string.hex(),
      },
    },
  ]

  const tcPunctuation = [
    {
      name: 'Punctuation',
      scope: [
        'punctuation',
        'punctuation.separator',
        'meta.property-list.css.sass',
        'punctuation.accessor',
        // dot (.) for object property e.g. object.property
        'punctuation.accessor',
      ],
      settings: {
        foreground: colors.punctuation.hex(),
      },
    },
    {
      name: 'Punctuation Tweaks',
      scope: [
        'punctuation.terminator.expression',
        'punctuation.definition.arguments',
        'punctuation.definition.array',
        'punctuation.section.array',
        'meta.array',
      ],
      settings: {
        foreground: colors.punctuation.hex(),
      },
    },
    {
      name: 'More Punctuation Tweaks',
      scope: [
        'punctuation.definition.list.begin',
        'punctuation.definition.list.end',
        'punctuation.separator.arguments',
        'punctuation.definition.list',
      ],
      settings: {
        foreground: colors.punctuation.hex(),
      },
    },
    {
      name: 'Markdown Punctuation',
      scope: [
        'punctuation.definition.string.markdown',
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown',
        'meta.link.inline.markdown punctuation.definition.string',
      ],
      settings: {
        foreground: colors.punctuation.hex(),
      },
    },
    {
      name: 'TypeScript Import/Export Punctuations',
      scope: [
        'meta.import.ts punctuation.definition.block',
        'meta.import.tsx punctuation.definition.block',
        'meta.export.ts punctuation.definition.block',
        'meta.export.tsx punctuation.definition.block',
      ],
      settings: {
        foreground: colors.punctuation.hex(),
      },
    },
    {
      // () [] {}
      name: 'Meta Braces and curly brackets',
      scope: [
        // () []
        'meta.brace',
        // {}
        'punctuation.definition',
        // () in function definitions e.g. function fnName()...
        'punctuation.definition.parameters',
      ],
      settings: {
        foreground: colors.punctuation.hex(),
      },
    },
    {
      // ${}
      name: 'Template Literals expressions',
      scope: ['punctuation.definition.template-expression'],
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },

    // KEYWORD OPERATORS
    {
      name: 'Keyword Operator',
      scope: 'keyword.operator',
      settings: {
        foreground: colors.operator.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: 'Keyword operator expressions',
      scope: ['keyword.operator.expression'],
      settings: {
        foreground: colors.operator.hex(),
      },
    },
    {
      // += -= *= /= %= &= |= ^= <<= and >>=
      name: 'Keyword Operator Assignment',
      scope: 'keyword.operator.assignment',
      settings: {
        foreground: colors.operator.hex(),
      },
    },
    {
      // + - * / % ** ++ --
      name: 'Keyword Operator Arithmetic',
      scope: 'keyword.operator.arithmetic',
      settings: {
        foreground: colors.operator.hex(),
      },
    },
    {
      // & | ^ ~ << >> >>>
      name: 'Keyword Operator Bitwise',
      scope: 'keyword.operator.bitwise',
      settings: {
        foreground: colors.operator.hex(),
      },
    },
    {
      // ++
      name: 'Keyword Operator Increment',
      scope: ['keyword.operator.increment', 'keyword.operator.decrement'],
      settings: {
        foreground: colors.operator.hex(),
      },
    },
    {
      // ? :
      name: 'Keyword Operator Ternary',
      scope: 'keyword.operator.ternary',
      settings: {
        foreground: colors.operator.hex(),
      },
    },
    {
      name: 'Keyword Operator Logical',
      scope: 'keyword.operator.logical',
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: 'normal',
      },
    },
    {
      // <= >=
      name: 'keyword Operator Comparison',
      scope: ['keyword.operator.comparison'],
      settings: {
        foreground: colors.specialWordC.hex(),
      },
    },
    {
      // =	≠	>	<	≥	≤
      name: 'Keyword Operator Relational',
      scope: 'keyword.operator.relational',
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: 'italic',
      },
    },
  ]

  const tcSpecialValues = [
    {
      name: 'Number',
      scope: ['constant.numeric', 'constant.character.numeric'],
      settings: {
        foreground: colors.number.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: 'Null and undefined',
      scope: ['constant.language.null', 'constant.language.undefined'],
      settings: {
        foreground: colors.nullUnd.hex(),
      },
    },
    {
      name: 'Boolean',
      scope: ['constant.language.boolean'],
      settings: {
        foreground: colors.boolean.hex(),
      },
    },
    // {
    //   // code like ~ = &#x7e
    //   name: 'entity names',
    //   scope: ['entity.name.type'],
    //   settings: {
    //     foreground: colors.variable.hex(),
    //   },
    // },
  ]

  const tcStylesheets = [
    {
      name: 'SCSS & SASS Variable',
      scope: [
        'variable.scss',
        'variable.sass',
        'variable.parameter.scss',
        'variable.parameter.sass',
      ],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: 'css and pug ID selector',
      scope: [
        'entity.other.attribute-name.id',
        'entity.other.attribute-name.id.css',
        'entity.other.attribute-name.id.css punctuation.definition.entity.css',
        'entity.other.attribute-name.id.scss',
        'entity.other.attribute-name.id.css.sass',
      ],
      settings: {
        foreground: colors.cssId.hex(),
      },
    },
    {
      name: 'function declaration SASS',
      scope: [
        'support.function.name.sass.library',
        'source.sass entity.name.function',
      ],
      settings: {
        foreground: colors.sassFunction.hex(),
      },
    },
    {
      name: 'css class selector',
      scope: [
        'entity.other.attribute-name.class.css',
        'entity.other.attribute-name.class.css punctuation.definition.entity.css',
        'entity.other.attribute-name.class.css.sass',
        'entity.other.attribute-name.class.scss',
      ],
      settings: {
        foreground: colors.cssClass.hex(),
      },
    },
    {
      name: 'Tag selectors and &',
      scope: [
        'entity.name.tag.css',
        'entity.name.tag.less',
        'entity.name.tag.custom.css',
        'entity.name.tag.reference.scss',
        'entity.name.tag.css.sass',
      ],
      settings: {
        foreground: colors.cssTag.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: 'CSS Pseudo Class',
      scope: [
        //pseudo-class like :hover, :active, :focus, etc.
        'entity.other.attribute-name.pseudo-class.css',
        'entity.other.attribute-name.pseudo-class.css punctuation.definition.entity.css',
        'entity.other.pseudo-class.css.sass',

        //pseudo-elements like ::-webkit...
        'entity.other.attribute-name.pseudo-element.css',
        'entity.other.attribute-name.pseudo-element.css punctuation.definition.entity.css',
      ],
      settings: {
        foreground: colors.cssPseudoClass.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: 'Property name stylesheets',
      scope: [
        'support.type.property-name.css',
        'support.type.property-name.css.sass',
      ],
      settings: {
        foreground: colors.cssProperty.hex(),
      },
    },
    {
      name: 'Values in css',
      scope: ['support.constant.property-value.css'],
      settings: {
        foreground: colors.cssValue.hex(),
      },
    },
    {
      name: 'Stylesheet Numbers and Units',
      scope: [
        'keyword.other.unit',
        'keyword.other.unit.css',
        'keyword.other.unit.scss',
        'keyword.other.unit.css.sass',
        'constant.numeric.css',
        'punctuation.definition.constant.css',
        'constant.numeric.css.sass',
      ],
      settings: {
        foreground: colors.cssUnits.hex(),
      },
    },
    {
      // Stylesheets special words: (orientation),(min-monochrome),(color),
      // (min-aspect-ratio), (min-resolution)
      name: 'Support Type Property Name & entity name tags',
      scope: [
        'support.type.vendor.property-name',
        'support.constant.vendor.property-value',
        'support.type.property-name',
        'meta.property-list entity.name.tag',
      ],
      settings: {
        foreground: colors.cssSpecialWord.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: 'Keyword !important',
      scope: ['keyword.other.important.css', 'keyword.other.important.scss'],
      settings: {
        foreground: colors.syntaxRed.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'keyframes rules',
      scope: [
        'meta.at-rule.keyframes.body.css',
        'source.css.scss meta.at-rule.keyframes.scss entity.other.attribute-name.scss',
      ],
      settings: {
        foreground: colors.syntaxPurple.hex(),
        fontStyle: 'italic',
      },
    },
    {
      // keywords for sass
      name: 'Keyword',
      scope: [
        //@ in at rules
        'punctuation.definition.keyword',
        'entity.name.tag.reference',

        // font-feature-values
        'entity.name.tag.custom.css',
        'entity.name.tag.custom.scss',
        'entity.name.tag.custom.sass',

        // function call
        'support.function.sass',
        'keyword.control.interpolation.sass',

        // operators
        'keyword.operator.css.sass',

        // Sass Reserved Word
        'keyword.other.reserved.sass',

        // @ rules
        'keyword.control.at-rule',
        'keyword.control.at-rule.css.sass',
      ],
      settings: {
        foreground: colors.cssSpecialWord.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'colon (:) in stylesheets',
      scope: [
        'punctuation.separator.key-value.css',
        'punctuation.separator.key-value.scss',
        'punctuation.separator.key-value.less',
        'punctuation.separator.key-value.css.sass',
      ],
      settings: {
        foreground: colors.punctuation.hex(),
      },
    },
    {
      // (*, ^ and $)
      name: 'Wildcard(*) selector in Stylesheets',
      scope: [
        'entity.name.tag.wildcard.css',
        'entity.name.tag.wildcard.less',
        'entity.name.tag.wildcard.scss',
        'entity.name.tag.wildcard.sass',
      ],
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
    {
      name: 'Attribute Name for CSS, SCSS and LESS',
      scope: [
        'meta.attribute-selector.css entity.other.attribute-name',
        'meta.attribute-selector.less entity.other.attribute-name.attribute',
        'entity.other.attribute-name.css.sass',
        'keyword.operator.attribute-selector.css.sass',
        'meta.attribute-selector',

        // SCSS
        'source.css.scss entity.other.attribute-name.attribute',
        'meta.attribute-selector.scss',
        'meta.attribute-selector.scss keyword.operator.scss',
        'meta.attribute-selector.scss punctuation.definition.string.begin.scss',
        'meta.attribute-selector.scss punctuation.definition.string.end.scss',
        'meta.attribute-selector.scss punctuation.definition.attribute-selector.begin.bracket.square.scss',
        'meta.attribute-selector.scss punctuation.definition.attribute-selector.end.bracket.square.scss',
        // SASS
        'entity.other.attribute-selector.sass',
        // CSS
        'meta.attribute-selector.css',
        'meta.attribute-selector.css keyword.operator.pattern.css',
        'meta.attribute-selector.css punctuation.definition.entity.begin.bracket.square.css',
        'meta.attribute-selector.css punctuation.definition.entity.end.bracket.square.css',
      ],
      settings: {
        foreground: colors.cssAttribute.hex(),
      },
    },
    {
      name: 'SASS Interpolation',
      scope: [
        'support.function.interpolation.sass',
        'punctuation.definition.interpolation.begin.bracket.curly.scss',
        'punctuation.definition.interpolation.end.bracket.curly.scss',
      ],
      settings: {
        foreground: colors.sassInterpolation.hex(),
      },
    },
  ]

  // languages
  const tcJavascript = [
    {
      name: 'js ts interface & alias',
      scope: [
        'entity.name.type.interface.js',
        'entity.name.type.interface.ts',
        'entity.name.type.alias.js',
        'entity.name.type.alias.ts',
        'entity.name.type.js',
        'entity.name.type.ts',
        'entity.name.type.module.js',
        'entity.name.type.module.ts',
      ],
      settings: {
        foreground: colors.specialWordC.hex(),
      },
    },
    {
      name: 'javascript portotype methods',
      scope: ['support.variable.property.js', 'support.variable.property.ts'],
      settings: {
        foreground: colors.specialWordB.hex(),
        fontStyle: 'italic',
      },
    },
    {
      // nn
      name: 'Storage type',
      scope: [
        'storage.type.function.arrow.js',
        'storage.type.function.arrow.ts',
      ],
      settings: {
        fontStyle: 'normal',
      },
    },
    {
      name: 'this word in javascript',
      scope: ['variable.language.this.js', 'variable.language.this.ts'],
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },
    {
      name: 'Object literal key',
      scope: [
        'meta.objectliteral.js meta.object.member.js meta.object-literal.key.js',
        'variable.other.property.vue',
      ],
      settings: {
        foreground: colors.variableProperty.hex(),
      },
    },
    {
      name: 'JavaScript module imports and exports',
      scope: [
        'variable.other.meta.import.js',
        'meta.import.js variable.other',
        'variable.other.meta.export.js',
        'meta.export.js variable.other',
      ],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: 'javascript function execution',
      scope: ['meta.function-call.js entity.name.function.js'],
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'TypeScript Punctuation Decorators',
      scope: [
        'meta.decorator punctuation.decorator.ts',
        'meta.decorator punctuation.decorator.tsx',
      ],
      settings: {
        foreground: colors.punctuation.hex(),
      },
    },
    {
      name: 'TypeScript Variables and Object Properties',
      scope: [
        'variable.other.readwrite.alias.ts',
        'variable.other.readwrite.alias.tsx',
        'variable.other.readwrite.ts',
        'variable.other.readwrite.tsx',
        'variable.other.ts',
        'variable.other.tsx',
        'variable.tsx',
        'variable.ts',
      ],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: 'TypeScript Entity Name Types as Parameters',
      scope: [
        'meta.type.parameters.ts entity.name.type',
        'meta.type.parameters.tsx entity.name.type',
      ],
      settings: {
        foreground: colors.principal_5.hex(),
      },
    },
    {
      name: 'JavaScript Variable Other ReadWrite',
      scope: ['variable.other.property', 'variable.parameter'],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: 'Support Class Component',
      scope: ['support.class.component.js', 'support.class.component.tsx'],
      settings: {
        foreground: colors.contrastText.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: 'decorator in javascript',
      scope: ['punctuation.decorator.js'],
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
    {
      name: 'Text nested in React tags',
      scope: [
        'meta.jsx.children',
        'meta.jsx.children.js',
        'meta.jsx.children.tsx',
      ],
      settings: {
        foreground: colors.regularText.hex(),
      },
    },
    {
      // {} jsx react
      name: 'Punctuation Section Embedded',
      scope: 'punctuation.section.embedded',
      settings: {
        foreground: colors.text.hex(),
      },
    },
    {
      name: 'TypeScript Entity Name Type',
      scope: ['entity.name.type.tsx', 'entity.name.type.module.tsx'],
      settings: {
        foreground: colors.specialWordB.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: 'TypeScript Method Declaration e.g. `constructor`',
      scope: [
        'meta.method.declaration storage.type.ts',
        'meta.method.declaration storage.type.tsx',
      ],
      settings: {
        foreground: colors.specialWordA.hex(),
      },
    },
    {
      name: 'js & ts Variable Other Object',
      scope: [
        'variable.other.object.js',
        'variable.other.object.jsx',
        'variable.other.object.ts',
        'variable.other.object.tsx',
        'variable.object.property.js',
        'variable.object.property.jsx',
        'support.variable.vue',
      ],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: 'JavaScript Variables',
      scope: ['variable.js', 'variable.other.js'],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: 'JavaScript Entity Name Type',
      scope: ['entity.name.type.js', 'entity.name.type.module.js'],
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: 'JavaScript Support Classes',
      scope: 'support.class.js',
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: 'Keyword, imports, returns javascript and typescript',
      scope: [
        'keyword.control.flow.js',
        'keyword.control.flow.ts',
        'keyword.control.flow.tsx',
        'keyword.control.import.js',
        'keyword.control.import.ts',
        'keyword.control.import.tsx',
        'keyword.control.from.js',
        'keyword.control.from.ts',
        'keyword.control.from.tsx',
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
        fontStyle: 'italic',
      },
    },
  ]

  const tcCoffescript = [
    {
      name: 'CoffeScript Variable Assignment',
      scope: 'variable.assignment.coffee',
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: 'CoffeScript Parameter Function',
      scope: 'variable.parameter.function.coffee',
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
    {
      name: 'meta arguments',
      scope: ['meta.arguments.coffee', 'variable.parameter.function.coffee'],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
  ]

  const tcCsharp = [
    {
      name: 'C# Readwrite Variables',
      scope: 'variable.other.readwrite.cs',
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: 'C# Classes & Storage types',
      scope: ['entity.name.type.class.cs', 'storage.type.cs'],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
    {
      name: 'C# Namespaces',
      scope: 'entity.name.type.namespace.cs',
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
  ]

  const tcElixir = [
    {
      name: 'Elixir Classes',
      scope: [
        'source.elixir support.type.elixir',
        'source.elixir meta.module.elixir entity.name.class.elixir',
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
    {
      name: 'Elixir Functions',
      scope: 'source.elixir entity.name.function',
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
    {
      name: 'Elixir Constants',
      scope: [
        'source.elixir constant.other.symbol.elixir',
        'source.elixir constant.other.keywords.elixir',
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
    {
      name: 'Elixir String Punctuations',
      scope: 'source.elixir punctuation.definition.string',
      settings: {
        foreground: colors.string.hex(),
      },
    },
    {
      name: 'Elixir',
      scope: [
        'source.elixir variable.other.readwrite.module.elixir',
        'source.elixir variable.other.readwrite.module.elixir punctuation.definition.variable.elixir',
      ],
      settings: {
        foreground: colors.syntaxGreen.hex(),
      },
    },
    {
      name: 'Elixir Binary Punctuations',
      scope: 'source.elixir .punctuation.binary.elixir',
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: 'italic',
      },
    },
  ]

  const tcMarckdown = [
    {
      name: 'Markdown Headings',
      scope: 'markup.heading.markdown',
      settings: {
        foreground: colors.syntaxViolet.hex(),
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown Italics',
      scope: 'markup.italic.markdown',
      settings: {
        foreground: colors.syntaxOrange.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'Markdown Bold',
      scope: 'markup.bold.markdown',
      settings: {
        foreground: colors.syntaxOrange.hex(),
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown Quote + others',
      scope: 'markup.quote.markdown',
      settings: {
        foreground: colors.syntaxGreen.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'Markdown Links',
      scope: [
        'markup.underline.link.markdown',
        'markup.underline.link.image.markdown',
      ],
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      name: 'Markdown Link Title and Description',
      scope: [
        'string.other.link.title.markdown',
        'string.other.link.description.markdown',
      ],
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      name: 'Markdown MetaData Punctuation',
      scope: ['punctuation.definition.metadata.markdown'],
      settings: {
        foreground: colors.text.hex(),
      },
    },
    {
      name: 'Markdown List Punctuation',
      scope: ['beginning.punctuation.definition.list.markdown'],
      settings: {
        foreground: colors.syntaxGreen.hex(),
      },
    },
    {
      name: 'Markdown Inline Raw String',
      scope: 'markup.inline.raw.string.markdown',
      settings: {
        foreground: colors.string.hex(),
      },
    },
  ]

  const tcGo = [
    {
      name: 'Go Keywords',
      scope: [
        'source.go keyword.package.go',
        'source.go keyword.import.go',
        'source.go keyword.function.go',
        'source.go keyword.type.go',
        'source.go keyword.struct.go',
        'source.go keyword.interface.go',
        'source.go keyword.const.go',
        'source.go keyword.var.go',
        'source.go keyword.map.go',
        'source.go keyword.channel.go',
        'source.go keyword.control.go',
      ],
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'Go Constants e.g. nil, string format (%s, %d, etc.)',
      scope: [
        'source.go constant.language.go',
        'source.go constant.other.placeholder.go',
      ],
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },
  ]

  const tcPython = [
    {
      name: 'Language Constants in Python',
      scope: 'constant.language.python',
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },
    {
      name: 'Python Function Parameter and Arguments',
      scope: [
        'variable.parameter.function.python',
        'meta.function-call.arguments.python',
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'Python Function Call',
      scope: ['meta.function-call.python', 'meta.function-call.generic.python'],
      settings: {
        foreground: colors.functionName.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'Punctuations in Python',
      scope: 'punctuation.python',
      settings: {
        foreground: colors.regularText.hex(),
      },
    },
    {
      name: 'Decorator Functions in Python',
      scope: 'entity.name.function.decorator.python',
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },
    {
      name: 'Python Language Variable',
      scope: 'source.python variable.language.special',
      settings: {
        foreground: colors.variable.hex(),
      },
    },
  ]

  const tcHtml = [
    {
      name: 'HTML Tag names',
      scope: [
        'entity.name.tag',
        'meta.tag.other.html',
        'meta.tag.other.js',
        'meta.tag.other.tsx',
        'entity.name.tag.tsx',
        'entity.name.tag.js',
        'entity.name.tag',
        'source.vue entity.name.tag.html invalid.illegal.unrecognized-tag.html',
        'source.vue entity.name.tag.html',
        'meta.tag.js',
        'meta.tag.tsx',
        'meta.tag.html',
        'meta.tag.start.svelte',
        'meta.tag.end.svelte',
        'meta.tag.start.svelte keyword.control.svelte',
        'meta.tag.end.svelte keyword.control.svelte',
      ],
      settings: {
        foreground: colors.htmlTag.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: 'HTML invalid Tag names',
      scope: [
        'invalid.illegal.unrecognized-tag.html entity.name.tag',
        'meta.tag.other.unrecognized.html entity.name.tag',
      ],
      settings: {
        foreground: colors.regularText.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: '@ : = for html',
      scope: [
        'punctuation.separator.key-value.html',
        'punctuation.definition.tag.html',
      ],
      settings: {
        foreground: colors.regularText.hex(),
      },
    },
  ]

  const tcJson = [
    {
      name: 'JSON Property Names',
      scope: 'support.type.property-name.json',
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      // also in javascript
      name: 'JSON Support Constants',
      scope: 'support.constant.json',
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },
    {
      name: 'JSON Property values (string)',
      scope: 'meta.structure.dictionary.value.json string.quoted.double',
      settings: {
        foreground: colors.string.hex(),
      },
    },
    {
      name: 'Strings in JSON values',
      scope: 'string.quoted.double.json punctuation.definition.string.json',
      settings: {
        foreground: colors.string.hex(),
      },
    },
    {
      name: 'Specific JSON Property values like null',
      scope:
        'meta.structure.dictionary.json meta.structure.dictionary.value constant.language',
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },
  ]

  const tcPhp = [
    {
      name: 'PHP tag',
      scope: [
        'punctuation.section.embedded.begin.php',
        'punctuation.section.embedded.end.php',
      ],
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },
    {
      name: 'other keywords',
      scope: [
        'keyword.other.namespace.php',
        'keyword.other.use.php',
        'keyword.other.use-as.php',
        'storage.modifier.php',
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
    {
      name: 'references',
      scope: [
        'meta.use.php',
        'meta.use.php punctuation.separator.inheritance.php',
        'entity.name.type.namespace.php',
        'entity.name.type.namespace.php punctuation.separator.inheritance.php',
      ],
      settings: {
        foreground: colors.variableInstance.hex(),
      },
    },
    {
      name: 'PHP Variables',
      scope: [
        'variable.other.php',
        'variable.other.property.php',
        'punctuation.definition.variable.php',
        'support.class.php',
        'entity.other.alias.php',
      ],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: 'Punctuations in PHP function calls',
      scope: 'meta.function-call.php punctuation',
      settings: {
        foreground: colors.regularText.hex(),
        fontStyle: 'italic',
      },
    },
    // BLADE
    {
      name: 'blade keyword',
      scope: ['keyword.blade'],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
  ]

  const tcCc = [
    {
      name: 'punctuation definition directive',
      scope: [
        'keyword.control.directive.include.cpp punctuation.definition.directive.cpp',
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
  ]

  const tcRust = [
    {
      name: 'Rust ',
      scope: [
        'meta.use.rust',
        'meta.function.definition.rust',
        'keyword.other.rust',
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
    {
      name: 'Rust ',
      scope: ['entity.name.namespace.rust'],
      settings: {
        foreground: colors.specialWordC.hex(),
      },
    },
    {
      name: 'Rust ',
      scope: ['entity.name.namespace.rust'],
      settings: {
        foreground: colors.specialWordC.hex(),
      },
    },
    {
      name: 'Rust ',
      scope: [
        'punctuation.definition.attribute.rust',
        'punctuation.brackets.attribute.rust',
        // 'meta.attribute.rust'
      ],
      settings: {
        foreground: colors.syntaxRed.hex(),
      },
    },
  ]

  const tcComments = [
    {
      name: 'Comment',
      scope: [
        'comment',
        'comment.block.documentation punctuation.definition.bracket.curly',
      ],
      settings: {
        foreground: colors.comment.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'Double-Slashed Comment',
      scope: [
        'comment.line.double-slash',
        'punctuation.definition.comment',
        'punctuation.whitespace.comment',
        'string.comment.buffered.block.pug',
      ],
      settings: {
        foreground: colors.comment.hex(),
      },
    },

    //documentation inside comments
    {
      name: 'Data Type in commented documentation',
      scope: [
        'comment.block.documentation entity.name.type.instance.jsdoc',
        'comment.block.documentation entity.name.type.instance.phpdoc',
      ],
      settings: {
        foreground: colors.specialWordB.hex() + '80',
      },
    },
    {
      name: 'Variables in commented documentation',
      scope: [
        'comment.block.documentation variable.other.jsdoc',
        'comment.block.documentation variable.other.phpdoc',
      ],
      settings: {
        foreground: colors.variable.hex() + '80',
      },
    },
    {
      name: '@tags in commented documentation',
      scope: [
        'comment.block.documentation storage.type.class.jsdoc',
        'comment.block.documentation punctuation.definition.block.tag.jsdoc',
      ],
      settings: {
        foreground: colors.specialWordA.hex() + '80',
      },
    },
  ]

  return {
    name: 'themename',
    type: 'dark',
    colors: {
      ...themeColors,
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
      ...tcRust,
      ...tcPhp,
      ...tcCc,
    ],
  }
}
