export default function (colors) {
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
    'editor.wordHighlightStrongBorder': null,
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
    'editorRuler.foreground': colors.principal_1.hex(),

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
    'editorGutter.addedBackground': colors.success.hex(),
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
    'minimap.findMatchHighlight': colors.success.hex(), // Highlight color for matches from search within files.
    'minimap.selectionHighlight': colors.contrast.hex(), //Highlight color for the editor selection.
    'minimap.errorHighlight': colors.danger.hex(), //Highlight color for errors within the editor.
    'minimap.warningHighlight': colors.warning.hex(), //Highlight color for warnings within the editor.
    'minimap.background': colors.principal.hex(), //Minimap background color.
    'minimapSlider.background': colors.principal_3.hex() + 60, //Minimap slider background color.
    'minimapSlider.hoverBackground': colors.principal_2.hex() + 60, //Minimap slider background color when hovering.
    'minimapSlider.activeBackground': colors.principal_4.hex() + 60, //Minimap slider background color when clicked on.
    'minimapGutter.addedBackground': colors.success.hex(), //Minimap gutter color for added content.
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
    'merge.currentHeaderBackground': colors.successLight.hex() + '50',
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
    'editorOverviewRuler.addedForeground': colors.successLight.hex(),
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
    'statusBar.focusBorder': colors.principal_5.hex(),

    'statusBar.debuggingBackground': colors.principal.hex(),
    'statusBar.debuggingForeground': colors.principal_5.hex(),
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
    'statusBarItem.remoteBackground': colors.principal.hex(),
    'statusBarItem.remoteForeground': colors.principal_5.hex(),
    'statusBarItem.focusBorder': colors.principal_5.hex(),
    'statusBarItem.errorBackground': colors.danger.hex(),
    'statusBarItem.errorForeground': colors.white.hex(),
    'statusBarItem.warningBackground': colors.warning.hex(),
    'statusBarItem.warningForeground': colors.white.hex(),

    'titleBar.activeBackground': colors.principal.hex(),
    'titleBar.activeForeground': colors.principal_5.hex(),
    'titleBar.inactiveBackground': colors.principal.hex(),
    'titleBar.inactiveForeground': colors.principal_3.hex(),
    'titleBar.border': null,

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
    'gitDecoration.addedResourceForeground': colors.successLight.hex(),
    'gitDecoration.modifiedResourceForeground': colors.warningLight.hex(),
    'gitDecoration.deletedResourceForeground': colors.dangerLight.hex(),
    'gitDecoration.untrackedResourceForeground': colors.successLight.hex(),
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

  const normalize = [
    {
      name: 'normalize font style of certain components',
      scope: [
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
        'punctuation.definition.string',
        'punctuation',
        'variable.other',
        'storage.type',
        'source.css',
        'string.quoted',
      ],
      settings: {
        fontStyle: 'normal',
      },
    },
  ]

  const globalSettings = [
    {
      name: 'Global settings',
      settings: {
        background: colors.principal.hex(),
        foreground: colors.text.hex(),
      },
    },
    {
      name: 'Italics',
      scope: ['italic', 'markup.italic'],
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'Bold',
      scope: ['bold', 'markup.bold'],
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'Quote',
      scope: 'quote',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'Invalid',
      scope: 'invalid',
      settings: {
        background: colors.danger.hex(),
        foreground: colors.text.hex(),
      },
    },
    {
      name: 'Invalid deprecated',
      scope: 'invalid.deprecated',
      settings: {
        background: colors.dangerDark.hex(),
        foreground: colors.deprecated.hex(),
      },
    },
  ]

  const tcGit = [
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
        foreground: colors.successLight.hex(),
        fontStyle: 'italic',
      },
    },
  ]

  const general = [
    {
      // reserved language variables like this, super, self, etc.
      name: 'Variables',
      scope: [
        'variable',
        'variable.language',
        'variable.other',

        // Built-in constant
        'punctuation.definition.constant',
        'variable.other.constant',

        //User-defined constant
        'constant.character',
        'constant.other',
      ],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: 'object key',
      scope: [
        'variable.other.object.property',
        'meta.object-literal.key',
        // 'meta.var.expr',
        'variable.object.property',
        'variable.other.property',
        'support.variable.property',
        'support.type.map.key',
      ],
      settings: {
        foreground: colors.variableProperty.hex(),
      },
    },
    {
      name: 'String',
      scope: [
        'string',
        'string.quoted',
        'string.quoted.single',
        'string.quoted.double',
        'string.template punctuation.definition.string',
        'punctuation.definition.string',

        // escape sequences like \e
        'constant.character.escape',
      ],
      settings: {
        foreground: colors.string.hex(),
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
    // template / markup tags
    {
      // the </> of the tag & (,) in pug
      name: 'Meta Tag',
      scope: ['punctuation.definition.tag', 'meta.tag'],
      settings: {
        foreground: colors.metaTag.hex(),
      },
    },
    {
      // HTML & PUG attributes
      name: 'Tag attribute',
      scope: ['entity.other.attribute-name', 'entity.name.type.svelte'],
      settings: {
        foreground: colors.tagAttribute.hex(),
        fontStyle: 'italic',
      },
    },
    {
      // regex
      name: 'RegExp String',
      scope: [
        'string.regexp',
        'string.regexp punctuation.definition.string',
        'meta.group.regexp',
        'string.regexp keyword.other',
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
        foreground: colors.text.hex(),
      },
    },
    // code languages
    {
      // words like function, var, let, const
      name: 'Storage type',
      scope: [
        'storage',
        // var let const class function type
        'storage.type',
        // @param, @returns
        'punctuation.definition.block.tag',
        // JavaScript Method Declaration e.g. `constructor`
        'meta.method.declaration',
        // function keyword
        'keyword.function',
        // class keyword
        'keyword.class',
        // interface keyword
        'keyword.interface',
        // var keyword
        'keyword.var',
      ],
      settings: {
        foreground: colors.specialWordA.hex(),
        fontStyle: 'italic',
      },
    },
    {
      // special words
      name: 'Library (function & constant)',
      scope: [
        // constants (magic values) provided by the language or framework/library.
        'support.constant',
        'support.class.promise',
        'storage.modifier.async',

        'keyword.control.flow',

        // mainly related to flow control like continue, while, return, etc.
        // at rule name in css & scss & sass
        'keyword.control',

        'keyword.other.special-method',
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'Conditionals',
      scope: ['keyword.control.conditional'],
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: 'loops',
      scope: ['keyword.control.loop'],
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: 'italic',
      },
    },
    {
      // function names & classes names
      name: 'Functions & Classes',
      scope: [
        'entity.name.function',
        'entity.name.class',
        'meta.function-call',
        'support.variable.property',
        'entity.name.type.class',
        'meta.class',
        'entity.other.inherited-class',
      ],
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
    {
      name: 'Function & classes execution',
      scope: ['meta.function-call', 'meta.function-call entity.name.function'],
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'function arguments',
      scope: ['variable.parameter.function', 'variable.parameter'],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      // numbers
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
    {
      // when constant like true, false, None, null are not defined in the language
      name: 'Other constants',
      scope: ['constant.language'],
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },
    {
      name: 'Type',
      scope: [
        // like boolean, string ...
        'support.type',
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
    {
      // () [] {} .
      name: 'Punctuation',
      scope: [
        'punctuation',
        'punctuation.separator',
        'meta.property-list.css.sass',
        'punctuation.accessor',
        // dot (.) for object property e.g. object.property
        'punctuation.accessor',

        // ()
        'meta.brace',

        // {}
        'punctuation.definition',

        'punctuation.terminator.expression',
        'punctuation.section.array',
        'meta.array',

        'punctuation.separator.arguments',
      ],
      settings: {
        foreground: colors.punctuation.hex(),
      },
    },
    {
      name: 'Operators',
      scope: [
        'keyword.operator',
        'keyword.operator.expression',

        // += -= *= /= %= &= |= ^= <<= and >>=
        'keyword.operator.assignment',

        // + - * / % ** ++ --
        'keyword.operator.arithmetic',

        // & | ^ ~ << >> >>>
        'keyword.operator.bitwise',

        // ++ --
        'keyword.operator.increment',
        'keyword.operator.decrement',

        // ? :
        'keyword.operator.ternary',

        // word new
        'keyword.other.new',
      ],
      settings: {
        foreground: colors.operator.hex(),
      },
    },
    {
      name: 'Operators Logical & Relational',
      scope: [
        // && || ! == != >= <= > <
        'keyword.operator.logical',

        // == != >= <= > <
        'keyword.operator.comparison',
        'keyword.operator.relational',
      ],
      settings: {
        foreground: colors.specialWordC.hex(),
      },
    },
    {
      name: 'this keyword',
      scope: ['variable.language.this'],
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },
  ]

  const specialWords = [
    // not sure about this ones
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
      name: 'Support Constant, `new` keyword, Special Method Keyword, `debugger`, other keywords',
      scope: ['support.constant', 'keyword.other.debugger'],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
  ]

  const comments = [
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

  // languages
  const styleSheets = [
    {
      name: 'css',
      scope: 'source.css',
      settings: {
        foreground: colors.text.hex(),
      },
    },
    {
      name: 'Comparators and primitive values',
      scope: [
        'meta.definition.variable.scss',
        'meta.definition.variable.sass',
        'sass.script.maps support.type.property-name.css.sass',
      ],
      settings: {
        foreground: colors.syntaxRed.hex(),
      },
    },
    {
      name: 'Color values',
      scope: [
        'constant.language.color.rgb-value.css.sass',
        'constant.other.color.rgb-value.hex.css',
        'constant.other.color.rgb-value.hex.css punctuation.definition.constant.css',
      ],
      settings: {
        foreground: colors.text.hex(),
      },
    },
    {
      name: 'css and pug ID selector',
      scope: [
        'entity.other.attribute-name.id',
        'entity.other.attribute-name.id punctuation.definition',
      ],
      settings: {
        foreground: colors.syntaxBlue.hex(),
      },
    },
    {
      name: 'function declaration',
      scope: [
        'support.function.misc',
        'entity.name.function.scss',
        'support.function.url',
        'source.sass support.function.name.sass.library',
        'sass.script.maps support.function.name',
        'meta.property-list.css entity.name.function',
        'support.function.gradient',
        'support.function.name.sass entity.name.function',
        'source.sass entity.name.function',
        'punctuation.section.function.scss',
      ],
      settings: {
        foreground: colors.sassFunction.hex(),
      },
    },
    {
      name: 'css class selector',
      scope: [
        'entity.other.attribute-name.class.css',
        'entity.other.inherited-class.placeholder-selector.css',
        'entity.other.attribute-name.parent-selector-suffix.css punctuation.definition',
      ],
      settings: {
        foreground: colors.cssClass.hex(),
      },
    },
    {
      name: 'Tag selectors and &',
      scope: [
        'entity.name.tag.css',
        'meta.property-list.scss entity.name.tag.reference.scss',
      ],
      settings: {
        foreground: colors.cssTag.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: 'CSS Pseudo Class',
      scope: [
        'entity.other.attribute-name.pseudo-element.css',
        'entity.other.attribute-name.pseudo-element.css punctuation.definition.entity.css',
        'entity.other.attribute-name.pseudo-class.css',
        'entity.other.attribute-name.pseudo-class.css punctuation.definition.entity.css',
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
        'meta.property-list.scss entity.name.tag.css',
        'support.type.vendored.property-name.css',
      ],
      settings: {
        foreground: colors.cssProperty.hex(),
      },
    },
    {
      name: 'Values in css',
      scope: [
        // 'support.constant.property-value.css',
        'meta.property-value.css',
        'meta.property-value.scss',
        'meta.property-value.sass',
        'meta.property-value.less',
        'support.constant.font-name.css',
        'support.constant.font-name.scss',
        'support.constant.font-name.sass',
        'support.constant.font-name.less',

        'support.constant.vendored.property-value.css',
        'keyword.operator.gradient.css',
        'support.constant.property-value.css',
        'source.css meta.property-value',
        'support.constant.color.w3c-standard-color-name.css',
        'meta.property-value.scss support.type.property-name.css',
      ],
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
        'meta.property-list.media-query.scss',
        'keyword.control.unit.css.sass',
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
        'support.type.vendor.property-name.media',
        'support.constant.vendor.property-value',
        'support.type.property-name',
        'meta.property-name.media-query.scss support.type.property-name.css',
        'meta.at-rule.media.header.css',
        'meta.property-list entity.name.tag',
        'meta.at-rule.media.header.css punctuation.definition.parameters',
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
        'keyword.control.at-rule punctuation.definition',
        'entity.name.tag.reference',
        'meta.at-rule keyword.control punctuation.definition',

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

        'meta.property-value.scss support.constant.mathematical-symbols.scss',
      ],
      settings: {
        foreground: colors.syntaxViolet.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'support.constant.media',
      scope: [
        'meta.at-rule.media.header.css support.constant.media.css',
        'meta.at-rule.media.scss support.constant.media.css',
        'meta.at-rule.import.css support.constant.media.css',
        'meta.at-rule.page.css',
      ],
      settings: {
        foreground: colors.syntaxLightBlue.hex(),
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
      name: 'Wildcard(*) selector in Stylesheets',
      scope: [
        'entity.name.tag.wildcard.css',
        'entity.name.tag.wildcard.less',
        'entity.name.tag.wildcard.scss',
        'entity.name.tag.wildcard.sass',
      ],
      settings: {
        foreground: colors.syntaxRedIntense.hex(),
      },
    },
    {
      name: 'attribute selector brackets',
      scope: [
        'meta.attribute-selector.css punctuation.definition.entity.begin.bracket.square.css',
        'meta.attribute-selector.css punctuation.definition.entity.end.bracket.square.css',
        'entity.other.attribute-selector.scss',
        'entity.other.attribute-selector.sass',
      ],
      settings: {
        foreground: colors.text.hex(),
      },
    },
    {
      name: 'attribute selector',
      scope: [
        'source.css.scss entity.other.attribute-name.attribute',
        'meta.attribute-selector.scss punctuation.definition.attribute-selector.begin.bracket.square.scss',
        'meta.attribute-selector.scss punctuation.definition.attribute-selector.end.bracket.square.scss',
        'meta.attribute-selector.css entity.other.attribute-name',
        'meta.attribute-selector.scss keyword.operator',
        'meta.attribute-selector.css keyword.operator.pattern.css',
        'meta.attribute-selector.less entity.other.attribute-name.attribute',
        'entity.other.attribute-name.css.sass',
        'keyword.operator.attribute-selector.css.sass',
        'meta.attribute-selector',
        'meta.attribute-selector.scss',
        'meta.attribute-selector.scss punctuation.definition.string',
        'meta.attribute-selector.css',
        'entity.other.attribute-selector.sass',
        'meta.attribute-selector.css punctuation.definition.entity.begin.bracket.square.css',
        'meta.attribute-selector.css punctuation.definition.entity.end.bracket.square.css',
      ],
      settings: {
        foreground: colors.cssAttribute.hex(),
      },
    },
    {
      name: 'url parameter',
      scope: [
        'variable.parameter.url.css',
        'variable.parameter.url.scss',
        'variable.parameter.url.sass',
        'variable.parameter.url.less',
      ],
      settings: {
        foreground: colors.syntaxGreen.hex(),
      },
    },
    {
      name: 'SASS Interpolation',
      scope: [
        // like #{}
        'support.function.interpolation.sass',
        'punctuation.definition.interpolation.begin.bracket.curly.scss',
        'punctuation.definition.interpolation.end.bracket.curly.scss',
      ],
      settings: {
        foreground: colors.sassInterpolation.hex(),
      },
    },
  ]

  const javascript = [
    {
      name: 'Variable Property',
      scope: ['source.ts entity.name.type.enum'],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: 'Support properties',
      scope: [
        // like .length
        'source.js support.variable.property',
        'source.ts support.variable.property',
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'function*',
      scope: [
        'source.js meta.function keyword.generator.asterisk',
        'source.ts meta.function keyword.generator.asterisk',
      ],
      settings: {
        foreground: colors.functionName.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: 'keywords',
      scope: [
        // like static in classes
        'source.js storage.modifier',
        'source.ts storage.modifier',

        // words like super() and extends (for classes)
        'source.js variable.language',
        'source.ts variable.language',
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'labels',
      scope: [
        'source.js entity.name.label',
        'source.ts entity.name.label',
        'source.js punctuation.separator.label',
        'source.ts punctuation.separator.label',
      ],
      settings: {
        foreground: colors.pinkPastel.hex(),
      },
    },
    {
      name: 'TypeScript Decorators',
      scope: [
        'source.ts meta.decorator punctuation.decorator',
        'source.tsx meta.decorator punctuation.decorator',
        'source.ts meta.decorator variable.other.readwrite',
        'source.ts meta.decorator entity.name.function',
        'source.ts meta.decorator meta.function-call entity.name.function',
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
    {
      name: 'interface & alias',
      scope: [
        'source.ts entity.name.type.interface',
        'source.tsx entity.name.type.interface',
        'source.ts entity.name.type.alias',
        'source.tsx entity.name.type.alias',
        'source.ts meta.type.declaration entity.name.type',
        'source.tsx meta.type.declaration entity.name.type',
        'source.ts meta.type.annotation entity.name.type',
        'source.tsx meta.type.annotation entity.name.type',
        'source.ts meta.type.parameters entity.name.type',
        'source.tsx meta.type.parameters entity.name.type',
        'source.ts meta.interface entity.other.inherited-class',
        'source.tsx meta.interface entity.other.inherited-class',
      ],
      settings: {
        foreground: colors.syntaxLightBlue.hex(),
      },
    },
    {
      name: 'Text nested in jsx tags',
      scope: [
        'meta.jsx.children',
        'meta.jsx.children.js',
        'meta.jsx.children.ts',
        'meta.jsx.children.tsx',
      ],
      settings: {
        foreground: colors.text.hex(),
      },
    },
  ]

  const markdown = [
    {
      name: 'Markdown Headings',
      scope: ['markup.heading.markdown', 'heading punctuation.definition.heading'],
      settings: {
        foreground: colors.syntaxViolet.hex(),
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown Bold',
      scope: 'markup.bold.markdown',
      settings: {
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
      scope: ['markup.underline.link.markdown', 'markup.underline.link.image.markdown'],
      settings: {
        foreground: colors.syntaxLightBlue.hex(),
      },
    },
    {
      name: 'Markdown Link Title and Description',
      scope: [
        'string.other.link.title.markdown',
        'string.other.link.description.markdown',
      ],
      settings: {
        foreground: colors.syntaxBeige.hex(),
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

  const go = [
    {
      name: 'Go Keywords',
      scope: ['source.go keyword'],
      settings: {
        foreground: colors.specialWordA.hex(),
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
    {
      name: 'Functions & Classes',
      scope: ['support.function.go'],
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
    {
      name: 'embedded sql',
      scope: ['meta.embedded.sql'],
      settings: {
        foreground: colors.text.hex(),
      },
    },
    {
      name: 'Go types',
      scope: ['entity.name.type.go'],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: 'Go types',
      scope: ['source.go storage.type'],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
    {
      name: 'Go packages',
      scope: ['source.go entity.name.type.package'],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
  ]

  const python = [
    {
      name: 'Decorator Functions in Python',
      scope: [
        'entity.name.function.decorator.python',
        'entity.name.function.decorator.python punctuation.definition.decorator',
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
  ]

  const html = [
    {
      name: 'HTML Tag names',
      scope: [
        'entity.name.tag',
        'meta.tag.other.html',
        'meta.tag.other.js',
        'meta.tag.other.ts',
        'meta.tag.other.tsx',
        'entity.name.tag.js',
        'entity.name.tag.ts',
        'entity.name.tag.tsx',
        'entity.name.tag',
        'source.vue entity.name.tag.html invalid.illegal.unrecognized-tag.html',
        'source.vue entity.name.tag.html',
        'source.vue support.class.component.html',
        'meta.tag.js',
        'meta.tag.ts',
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
        foreground: colors.text.hex(),
        fontStyle: 'normal',
      },
    },
    {
      name: '@ : = for html',
      scope: ['punctuation.separator.key-value.html', 'punctuation.definition.tag.html'],
      settings: {
        foreground: colors.text.hex(),
      },
    },
    {
      name: 'text',
      scope: ['text.html'],
      settings: {
        foreground: colors.text.hex(),
      },
    },
    {
      name: 'especial characters',
      scope: [
        'text.html.derivative constant.character',
        'text.html.derivative constant.character punctuation.definition',
      ],
      settings: {
        foreground: colors.syntaxBeige.hex(),
      },
    },
  ]

  const json = [
    {
      name: 'JSON Property Names',
      scope: 'support.type.property-name.json',
      settings: {
        foreground: colors.variable.hex(),
      },
    },
  ]

  const php = [
    {
      name: 'PHP Constants',
      scope: 'entity.name.type.enum.php',
      settings: {
        foreground: colors.variable.hex(),
      },
    },
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
        'keyword.other.type.php',
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
        foreground: colors.syntaxOrange.hex(),
      },
    },
    {
      name: 'Punctuations in PHP function calls',
      scope: 'meta.function-call.php punctuation',
      settings: {
        foreground: colors.text.hex(),
        fontStyle: 'italic',
      },
    },
    {
      name: 'echo',
      scope: ['support.function.construct.output.php'],
      settings: {
        foreground: colors.specialWordC.hex(),
      },
    },
    {
      name: 'interface',
      scope: ['entity.name.type.interface.php', 'entity.name.type.trait.php'],
      settings: {
        foreground: colors.syntaxLightBlue.hex(),
      },
    },
  ]

  const rust = [
    {
      name: 'Rust Special words',
      scope: ['meta.use.rust', 'meta.function.definition.rust', 'keyword.other.rust'],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
    {
      name: 'rust storage type',
      scope: ['keyword.other.fn.rust'],
      settings: {
        foreground: colors.specialWordA.hex(),
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
      ],
      settings: {
        foreground: colors.syntaxRed.hex(),
      },
    },
    {
      name: 'Rust ',
      scope: ['entity.name.type.rust', 'entity.name.type.struct.rust'],
      settings: {
        foreground: colors.syntaxLightBlue.hex(),
      },
    },
    {
      name: 'Rust ',
      scope: ['entity.name.type.struct.rust'],
      settings: {
        foreground: colors.syntaxOrange.hex(),
      },
    },
  ]

  const sql = [
    {
      name: 'SQL Punctuation',
      scope: ['meta.create.sql', 'keyword.other.insert.sql', 'meta.create.from.sql'],
      settings: {
        foreground: colors.syntaxRed.hex(),
      },
    },
    {
      name: 'SQL Keywords',
      scope: [
        'keyword.other.DDL.sql',
        'keyword.other.select.sql',
        'keyword.other.select.set_op.sql',
      ],
      settings: {
        foreground: colors.syntaxViolet.hex(),
      },
    },
    {
      name: 'especial words',
      scope: [
        'keyword.other.select.join.sql',
        'keyword.other.DML.sql',
        'keyword.other.alias.sql',
        'keyword.other.sql',
        'keyword.other.DDL.create.II.sql',
      ],
      settings: {
        foreground: colors.syntaxPurple.hex(),
      },
    },
  ]

  const semanticTokenColors = {
    variable: colors.variable.hex(),
    parameter: colors.variable.hex(),
    type: colors.specialWordC.hex(),
    function: colors.functionName.hex(),
    method: colors.functionName.hex(),
    class: colors.functionName.hex(),
    'class.defaultLibrary': colors.specialWordB.hex(),
    property: colors.text.hex(),
    string: colors.string.hex(),
    number: colors.number.hex(),
    regexp: colors.syntaxBeige.hex(),
    comment: colors.comment.hex(),
    keyword: colors.operator.hex(),
    interface: colors.specialWordC.hex(),
  }

  return {
    name: 'themename',
    type: 'dark',
    colors: {
      ...themeColors,
    },
    tokenColors: [
      ...globalSettings,
      ...normalize,
      ...tcGit,
      ...general,
      ...specialWords,
      ...comments,
      ...styleSheets,
      ...javascript,
      ...html,
      ...json,
      ...python,
      ...markdown,
      ...go,
      ...rust,
      ...php,
      ...sql,
    ],
    semanticHighlighting: true,
    semanticTokenColors,
  }
}
