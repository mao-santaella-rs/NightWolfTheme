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
    name: "SCSS & SASS Variable",
    scope: [
      "variable.scss",
      "variable.sass",
      "variable.parameter.scss",
      "variable.parameter.sass",
    ],
    settings: {
      foreground: colorVariable.hex()
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
      foreground: colorCssId.hex()
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
      "entity.name.tag.css.sass"
    ],
    settings: {
      foreground: colorCssTag.hex(),
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
    scope: [
      "constant.numeric.css", 
      "punctuation.definition.constant.css",
      "constant.numeric.css.sass"
    ],
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
      "keyword.other.unit.css.sass"
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
      

      // "punctuation.scss",
      // "punctuation.definition.keyword.scss",
      // "punctuation.definition.entity.scss",

      // "punctuation.css.sass",
      // "punctuation.definition.keyword.css.sass",
      // "punctuation.definition.entity.css.sass",

      // "meta.selector.scss",

      // operators
      "keyword.operator.css.sass",

      // @ rules
      "keyword.control.at-rule",
      "keyword.control.at-rule.css.sass"
    ],
    settings: {
      // foreground: colorSpecialWordB.hex(),
      foreground: colorTestB.hex(),
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
      foreground: colorTestC.hex()
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
    // (*, ^ and $)
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
      "entity.other.attribute-name.css.sass",
      "keyword.operator.attribute-selector.css.sass",
      // "variable.other.readwrite.js",


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
      // foreground: colorSpecialWordB.hex(),
      foreground: colorTestB.hex()
    }
  },
]