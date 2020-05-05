/*! @copyright Peter T Bosse II | @license Apache-2.0 | @link https://github.com/ptb/style/tree/eb76f1f | @version 2020.4.20-0 */
function css (params, className) {
  const input = isArr (params) ? merge (... params) : params;

  return parse ({ input })
    .map (cache)
    .map (update)
    .map (getClassName)
    .concat (
      isArr (className)
        ? className.filter (Boolean).join (" ")
        : className
    )
    .filter (Boolean)
    .sort ()
    .join (" ")
}

function getAncestors (ancestors = [], selectors = []) {
  return selectors.reduce (function (results, selector) {
    if (ancestors.length) {
      const index = selector.indexOf ("&");

      ancestors.forEach (function (ancestor) {
        results.push (
          index < 0
            ? ancestor.concat (" ", selector)
            : selector
              .slice (0, index)
              .concat (ancestor, selector.slice (index + 1))
        );
      });

      return results
    }

    return results.concat ([selector])
  }, [])
}

function getBlockString (params = {}) {
  const block = params.block || [];

  let sep = ";";

  return block
    .map (function (rule) {
      return toPairs (rule).map (function (style) {
        const property = style[0];
        const value = style[1];

        if (isObj (value)) {
          const a = toPairs (value)
            .map (function (b) {
              return kebabCase (b[0]).concat (":", b[1])
            })
            .join (";");

          sep = "";

          return "".concat (property, "{", a, "}")
        }

        return "".concat (property, ":", value)
      })
    })
    .join (sep)
}

function getClassName (params = {}) {
  const emit = params.emit;
  const identifier = params.identifier;

  return emit ? identifier : null
}

function getPlaceholders (selectors = []) {
  return selectors.map (function (selector) {
    return (/^%/u).test (selector)
      ? ".".concat (
        parseIdentifier ({
          "property": selector,
          "value": selector
        }).identifier
      )
      : selector
  })
}

/**
 * @param {string} propertyName
 * - Property name/identifier specifying a stylistic CSS feature to change.
 *
 * @returns {number}
 */

function getPropertyId (propertyName = "") {
  const n = parseInt ("af", 36);

  switch (true) {
    case (/^%/u).test (propertyName):
      return 0 + n
    case (/^\x2D\x2D/u).test (propertyName):
      return 1 + n
    default:
      return (
        "$*,--*,all,direction,unicodeBidi,writingMode,textOrientation,glyphOrientationVertical,textCombineUpright,textTransform,whiteSpace,textSpaceCollapse,textSpaceTrim,tabSize,wordBreak,lineBreak,hyphens,overflowWrap,wordWrap,textWrap,wrapBefore,wrapAfter,wrapInside,hyphenateCharacter,hyphenateLimitZone,hyphenateLimitChars,hyphenateLimitLines,hyphenateLimitLast,textAlign,textAlignAll,textAlignLast,textJustify,textGroupAlign,wordSpacing,letterSpacing,linePadding,textSpacing,textIndent,hangingPunctuation,textDecoration,textDecorationLine,textDecorationStyle,textDecorationColor,textDecorationWidth,textDecorationSkip,textDecorationSkipInk,textUnderlineOffset,textUnderlinePosition,textEmphasis,textEmphasisStyle,textEmphasisColor,textEmphasisPosition,textEmphasisSkip,textShadow,src,font,fontStyle,fontVariant,fontWeight,fontStretch,fontSize,lineHeight,fontFamily,fontMinSize,fontMaxSize,fontSizeAdjust,fontSynthesis,fontSynthesisWeight,fontSynthesisStyle,fontSynthesisSmallCaps,unicodeRange,fontFeatureSettings,fontVariationSettings,fontLanguageOverride,fontKerning,fontVariantLigatures,fontVariantPosition,fontVariantCaps,fontVariantNumeric,fontVariantAlternates,fontVariantEastAsian,fontOpticalSizing,fontPalette,fontVariantEmoji,content,quotes,stringSet,bookmarkLevel,bookmarkLabel,bookmarkState,running,footnoteDisplay,footnotePolicy,outline,outlineColor,outlineStyle,outlineWidth,outlineOffset,resize,textOverflow,cursor,caret,caretColor,caretShape,navUp,navRight,navDown,navLeft,userSelect,appearance,position,top,right,bottom,left,offsetBefore,offsetAfter,offsetStart,offsetEnd,zIndex,display,contain,width,height,minWidth,minHeight,maxWidth,maxHeight,boxSizing,visibility,pageBreakBefore,pageBreakAfter,pageBreakInside,margin,marginTop,marginRight,marginBottom,marginLeft,marginTrim,padding,paddingTop,paddingRight,paddingBottom,paddingLeft,dominantBaseline,verticalAlign,alignmentBaseline,baselineShift,inlineSizing,initialLetters,initialLettersAlign,initialLettersWrap,listStyle,listStyleType,listStylePosition,listStyleImage,markerSide,counterReset,counterSet,counterIncrement,overflow,overflowX,overflowY,overflowBlock,overflowInline,blockOverflow,lineClamp,maxLines,continue,tableLayout,borderCollapse,borderSpacing,captionSide,emptyCells,flexFlow,flexDirection,flexWrap,order,flex,flexGrow,flexShrink,flexBasis,placeContent,alignContent,justifyContent,placeItems,alignItems,justifyItems,placeSelf,alignSelf,justifySelf,gap,rowGap,columnGap,columns,columnWidth,columnCount,columnRule,columnRuleWidth,columnRuleStyle,columnRuleColor,columnSpan,columnFill,flowInto,flowFrom,regionFragment,breakBefore,breakAfter,breakInside,orphans,widows,boxDecorationBreak,grid,gridTemplate,gridTemplateRows,gridTemplateColumns,gridTemplateAreas,gridAutoFlow,gridAutoRows,gridAutoColumns,gridArea,gridRow,gridRowStart,gridRowEnd,gridColumn,gridColumnStart,gridColumnEnd,rubyPosition,rubyMerge,rubyAlign,float,clear,blockSize,inlineSize,minBlockSize,minInlineSize,maxBlockSize,maxInlineSize,marginBlock,marginBlockStart,marginBlockEnd,marginInline,marginInlineStart,marginInlineEnd,inset,insetBlock,insetBlockStart,insetBlockEnd,insetInline,insetInlineStart,insetInlineEnd,paddingBlock,paddingBlockStart,paddingBlockEnd,paddingInline,paddingInlineStart,paddingInlineEnd,borderBlockWidth,borderBlockStartWidth,borderBlockEndWidth,borderInlineWidth,borderInlineStartWidth,borderInlineEndWidth,borderBlockStyle,borderBlockStartStyle,borderBlockEndStyle,borderInlineStyle,borderInlineStartStyle,borderInlineEndStyle,borderBlockColor,borderBlockStartColor,borderBlockEndColor,borderInlineColor,borderInlineStartColor,borderInlineEndColor,borderBlock,borderBlockStart,borderBlockEnd,borderInline,borderInlineStart,borderInlineEnd,borderStartStartRadius,borderStartEndRadius,borderEndStartRadius,borderEndEndRadius,fillRule,fillBreak,fill,fillColor,fillImage,fillOrigin,fillPosition,fillSize,fillRepeat,fillOpacity,strokeWidth,strokeAlign,strokeLinecap,strokeLinejoin,strokeMiterlimit,strokeBreak,strokeDasharray,strokeDashoffset,strokeDashCorner,strokeDashJustify,stroke,strokeColor,strokeImage,strokeOrigin,strokePosition,strokeSize,strokeRepeat,strokeOpacity,marker,markerStart,markerMid,markerEnd,markerSegment,markerPattern,markerKnockoutLeft,markerKnockoutRight,vectorEffect,colorRendering,shapeRendering,textRendering,imageRendering,bufferedRendering,stopColor,stopOpacity,color,opacity,colorAdjust,objectFit,objectPosition,imageResolution,imageOrientation,imageRendering,background,backgroundColor,backgroundImage,backgroundPosition,backgroundPositionX,backgroundPositionY,backgroundSize,backgroundRepeat,backgroundAttachment,backgroundOrigin,backgroundClip,border,borderTop,borderRight,borderBottom,borderLeft,borderWidth,borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth,borderStyle,borderTopStyle,borderRightStyle,borderBottomStyle,borderLeftStyle,borderColor,borderTopColor,borderRightColor,borderBottomColor,borderLeftColor,borderRadius,borderTopLeftRadius,borderTopRightRadius,borderBottomRightRadius,borderBottomLeftRadius,borderImage,borderImageSource,borderImageSlice,borderImageWidth,borderImageOutset,borderImageRepeat,boxShadow,clip,clipPath,clipRule,mask,maskImage,maskPosition,maskSize,maskRepeat,maskOrigin,maskClip,maskComposite,maskMode,maskBorder,maskBorderSource,maskBorderSlice,maskBorderWidth,maskBorderOutset,maskBorderRepeat,maskBorderMode,maskType,shapeOutside,shapeImageThreshold,shapeMargin,filter,floodColor,floodOpacity,colorInterpolationFilters,lightingColor,mixBlendMode,isolation,backgroundBlendMode,transition,transitionProperty,transitionDuration,transitionTimingFunction,transitionDelay,transform,transformOrigin,transformBox,transformStyle,perspective,perspectiveOrigin,backfaceVisibility,animation,animationName,animationDuration,animationTimingFunction,animationDelay,animationIterationCount,animationDirection,animationFillMode,animationPlayState,offset,offsetPosition,offsetPath,offsetDistance,offsetRotate,offsetAnchor,willChange,scrollSnapType,scrollPadding,scrollPaddingTop,scrollPaddingRight,scrollPaddingBottom,scrollPaddingLeft,scrollPaddingBlock,scrollPaddingBlockStart,scrollPaddingBlockEnd,scrollPaddingInline,scrollPaddingInlineStart,scrollPaddingInlineEnd,scrollMargin,scrollMarginTop,scrollMarginRight,scrollMarginBottom,scrollMarginLeft,scrollMarginBlock,scrollMarginBlockStart,scrollMarginBlockEnd,scrollMarginInline,scrollMarginInlineStart,scrollMarginInlineEnd,scrollSnapAlign,scrollSnapStop,scrollBehavior"
          .split (",")
          .indexOf (
            camelCase (propertyName)
              .replace (/^(Moz|Ms|Webkit)/u, "")
              .replace (/^([A-Z])/u, function (a) {
                return a.toLowerCase ()
              })
          ) + n
      )
  }
}

/**
 * @param {string} selectors
 * - String identifying the elements to which a set of CSS rulesets apply.
 *
 * @returns {?RegExpMatchArray}
 */

function getSelectors (selectors = "") {
  const identifier =
    "-?[A-Z_a-z\\u{00a0}-\\u{ffff}]+[-0-9A-Z_a-z\\u{00a0}-\\u{ffff}]*";

  const regex = new RegExp (
    [
      "(&)",

      "(#".concat (identifier, ")"),

      "(\\.".concat (identifier, ")"),
      "(\\$".concat (identifier, ")"),
      "(%".concat (identifier, ")"),
      "(\\^".concat (identifier, ")"),
      "(\\[[-$*0-9=A-Z^_a-z|~\\u{00a0}-\\u{ffff}]+\\])",
      "(::?".concat ("(?:", identifier, "|[(+)]|[0-9])+", ")"),

      "(".concat (identifier, ")"),

      "(\\*)",

      "([ +>~]+)"
    ].join ("|"),
    "gu"
  );

  return selectors.split (",").map (function (selector) {
    return selector
      .trim ()
      .match (regex)
      .map (function (str) {
        return str.trim ().replace (/^$/u, " ")
      })
  })
}

function getSelectorsString (params = {}) {
  const selectors = params.selectors || [];

  return selectors
    .map (function (selector) {
      return selector.join ("")
    })
    .join (",")
}

/**
 * Converts `string` to unique hash identifier string.
 *
 * @param {string} string
 * - The string to convert.
 *
 * @returns {string}
 *   The string hash identifier.
 */

function getStringHash (string = "") {
  return string
    .split ("")
    .reduce (function (i, str) {
      return i << 5 ^ i ^ str.charCodeAt () & 0xffffffffff
    }, 5381 << 2)
    .toString (36)
}

function getStyle (params = {}, mq = false) {
  const media = mq && params.media;
  const property = params.property;

  return (/^%/u).test (property) || !isDef (property)
    ? null
    : "".concat (
      media ? "@media ".concat (media, "{") : "",
      getSelectorsString (params),
      "{",
      getBlockString (params),
      "}",
      media ? "}" : ""
    )
}

function getStyles () {
  let results = [];

  store.forEach (function (rules, media) {
    let styles = [];

    rules.forEach (function (style) {
      styles.push (getStyle (style));
    });

    styles = styles.sort ();

    if (media) {
      styles.unshift ("@media ".concat (media, "{"));
      styles.push ("}");
    }

    results = results.concat (styles.join (""));
  });

  return results
    .filter (Boolean)
    .sort ()
    .join ("")
}

/* istanbul ignore next */

/**
 * @returns {boolean}
 */

const canUseDom = Boolean (
  typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
);

/* istanbul ignore next */

const getStyleElement = (function () {
  let styles;

  return function (media = "") {
    if (typeof styles === "undefined") {
      styles = document.querySelectorAll ("style[data-creator='@amory/style']");
    }

    let style;

    for (style of styles) {
      if (style.media === media) {
        return style
      }
    }

    style = document.createElement ("style");
    style.setAttribute ("data-creator", "@amory/style");

    if (media.length) {
      style.media = media;
    }

    document.head.appendChild (style);

    styles = document.querySelectorAll ("style[data-creator='@amory/style']");

    return style
  }
}) ();

/* istanbul ignore next */

function insertRule (params = {}) {
  if (canUseDom) {
    const sheet = getStyleElement ().sheet;
    const style = getStyle (params, true);

    if (isDef (sheet) && style) {
      // const rules = Array.prototype.slice
      //   .call (sheet.cssRules)
      //   .map (({ cssText }) => cssText.replace (/[\n ]+/gu, ""))
      //   .concat (style.replace (/[\n ]+/gu, ""))
      //   .sort ()
      //
      // const index = rules.indexOf (style.replace (/[\n ]+/gu, ""))
      //
      // sheet.insertRule (style, index)
      sheet.insertRule (style, sheet.cssRules.length);
    }
  }

  return params
}

/* istanbul ignore next */

function update (params = {}) {
  if (canUseDom && params.insertRule) {
    insertRule (params);
  }

  return params
}

function parse (params = {}) {
  return parseInput (params)
    .reduce (function (styles, style) {
      return styles.concat (parseNumbers (style))
    }, [])
    .reduce (function (styles, style) {
      return styles.concat (parseMedia (style))
    }, [])
    .reduce (function (styles, style) {
      return styles.concat (parsePlaceholder (style))
    }, [])
    .reduce (function (styles, style) {
      return styles.concat (parseSelectors (style))
    }, [])
    .reduce (function (styles, style) {
      return styles.concat (parseIdentifier (style))
    }, [])
    .reduce (function (styles, style) {
      return styles.concat (parseFallbacks (style))
    }, [])
    .reduce (function (styles, style) {
      return styles.concat (parseFontFace (style))
    }, [])
    .reduce (function (styles, style) {
      return styles.concat (parseKeyframes (style))
    }, [])
    .reduce (function (styles, style) {
      return styles.concat (parseTypeSelector (style))
    }, [])
}

/* eslint-disable max-lines-per-function */
function parseFallbacks (params = {}) {
  const value = params.value;

  if (Array.isArray (value)) {
    const property = params.property;

    let block = [];
    const styles = [];

    switch (property) {
      case "backgroundImage":
      case "backgroundPosition":
      case "backgroundPositionX":
      case "backgroundPositionY":
      case "backgroundRepeat":
      case "backgroundSize":
        block = [
          {
            [kebabCase (property)]: value.join (",")
          }
        ];
        break
      case "fontFamily":
        block = [
          {
            "font-family": value
              .reduce (function (fonts, font) {
                if (isObj (font)) {
                  const fontFace = parseFontFace ({
                    "property": property,
                    "value": font
                  }).shift ();

                  styles.push (fontFace);

                  return fonts.concat (fontFace.value)
                }

                return fonts.concat (font)
              }, [])
              .join (",")
          }
        ];
        break
      default:
        block = value.map (function (fallback) {
          return { [kebabCase (property)]: fallback }
        });
        break
    }

    return styles.concat (
      merge (
        params,
        {
          "block": null
        },
        {
          block
        }
      )
    )
  }

  return params
}
/* eslint-enable max-lines-per-function */

function parseFontFace (params = {}) {
  const property = params.property;
  const value = params.value;

  if (property === "fontFamily" && isObj (value) && !isArr (value)) {
    const media = params.media || "";

    const tmp = parseIdentifier (
      merge (params, { "selectors": null }, { "selectors": [["@font-face"]] })
    );

    const fontFamily =
      value.fontFamily || value["font-family"] || tmp.identifier;

    value.fontFamily = fontFamily;
    delete value["font-family"];

    return [
      merge (
        tmp,
        {
          "block": null
        },
        {
          "block": toPairs (value).reduce (function (styles, style) {
            return styles.concat ({ [kebabCase (style[0])]: style[1] })
          }, []),
          "emit": false,
          "media": "",
          "value": fontFamily
        }
      ),
      merge (
        tmp,
        { "block": null, "selectors": null },
        {
          "block": [{ "font-family": fontFamily }],
          "emit": true,
          "media": media,
          "selectors": [[".".concat (tmp.identifier)]],
          "value": fontFamily
        }
      )
    ]
  }

  return params
}

function parseIdentifier (params = {}) {
  if (params.property) {
    const media = params.media || "";
    const property = params.property;
    const value = params.value;

    let selectors = params.selectors || [];

    const identifier = isDef (params.identifier)
      ? params.identifier
      : getPropertyId (property).toString (36) +
        getStringHash (
          ""
            .concat (media)
            .concat (
              selectors
                .map (function (selector) {
                  return selector.join ("")
                })
                .join (",")
            )
            .concat (JSON.stringify (value))
        ).slice (-4);

    selectors =
      selectors.length || (/^%/u).test (property)
        ? selectors.map (function (selector) {
          return (/^:/u).test (selector[0])
            ? [].concat (".".concat (identifier), selector)
            : selector
        })
        : selectors.concat ([[".".concat (identifier)]]);

    return merge (params, { "selectors": null }, { identifier, selectors })
  }

  return params
}

function parseInput (params = {}) {
  const emit = isDef (params.emit) ? params.emit : true;
  const input = params.input || {};
  const media = params.media || "";
  const selectors = params.selectors || [];

  return toPairs (input).reduce (function (styles, style) {
    const property = style[0];
    const value = style[1];

    return styles.concat ({
      "block": [
        {
          [kebabCase (property)]: value
        }
      ],
      "emit": emit,
      "input": {
        [property]: value
      },
      "media": media,
      "property": camelCase (property),
      "selectors": selectors,
      "value": value
    })
  }, [])
}

function parseKeyframes (params = {}) {
  const property = params.property;
  const value = params.value;

  if (property === "animationName" && isObj (value)) {
    const media = params.media || "";

    const tmp = parseIdentifier (
      merge (params, { "selectors": null }, { "selectors": [["@keyframes", " "]] })
    );

    const animationName = tmp.identifier;

    return [
      merge (
        tmp,
        { "block": null, "selectors": null },
        {
          "block": toPairs (value).reduce (function (styles, style) {
            return styles.concat ({ [kebabCase (style[0])]: style[1] })
          }, []),
          "emit": false,
          "media": "",
          "selectors": [tmp.selectors[0].concat (animationName)],
          "value": animationName
        }
      ),
      merge (
        tmp,
        { "block": null, "selectors": null },
        {
          "block": [{ "animation-name": animationName }],
          "emit": true,
          "media": media,
          "selectors": [[".".concat (animationName)]],
          "value": animationName
        }
      )
    ]
  }

  return params
}

function parseMedia (params = {}) {
  const property = params.property;
  const value = params.value;

  if ((/^@media/u).test (property) && isObj (value)) {
    const media = [params.media, kebabCase (property.slice (6).trim ())]
      .filter (Boolean)
      .join (" and ");

    return parse ({ "input": value, media })
  }

  return params
}

function parseNumbers (params = {}) {
  const property = params.property;
  let value = params.value;

  /* eslint-disable-next-line max-len */
  const regex = /(animationIterationCount|borderImage(?:Outset|Slice|Width)|box(?:(?:Flex)(?:Group)?|OrdinalGroup)|column(?:Count|s)|fillOpacity|floodOpacity|stopOpacity|stroke(?:Dash(?:array|offset)|Miterlimit|Opacity|Width)|flex(?:Grow|Positive|Shrink|Negative|Order)?\b|grid(?:Area|Column(?:End|Start)?|Row(?:End|Start)?)|fontWeight|line(?:Clamp|Height)|opacity|\border|orphans|tabSize|widows|zIndex|zoom)/u;

  if (!regex.test (property) && isNum (value) && value !== 0) {
    value = "".concat (value, "px");

    return merge (
      params,
      { "block": null },
      { "block": [{ [kebabCase (property)]: value }], value }
    )
  }

  return params
}

function parsePlaceholder (params = {}) {
  const property = params.property;
  const value = params.value;

  if ((/^%/u).test (property) && value === true) {
    return merge (params, {
      "identifier": parseIdentifier ({
        "media": params.media,
        property,
        "value": property
      }).identifier
    })
  }

  return params
}

function parseSelectors (params = {}) {
  const property = params.property;
  const value = params.value;

  if ((/([#$%&*+,.>[^~]|:[a-z])/u).test (property) && isObj (value)) {
    const emit = (/^:/u).test (property);

    const selectors = getSelectors (kebabCase (property))
      .reduce (function (a, b) {
        return a.concat (getAncestors (params.selectors, [b]))
      }, [])
      .reduce (function (a, b) {
        return a.concat ([getPlaceholders (b)])
      }, []);

    return parse ({ emit, "input": value, "media": params.media, selectors })
  }

  return params
}

function parseTypeSelector (params = {}) {
  const property = params.property;
  const value = params.value;

  if ((/^([a-z]+)$/u).test (property) && isObj (value) && !isArr (value)) {
    return parse ({
      "emit": false,
      "input": value,
      "media": params.media,
      "selectors": [[property]]
    })
  }

  return params
}

function cache (params = {}) {
  const block = params.block || [];
  const media = params.media || "";

  const key = JSON.stringify (block);

  if (!store.has (media)) {
    store.set (media, new Map ());
  }

  if (store.get (media).has (key)) {
    const style = store.get (media).get (key);

    const addSelector =
      style.selectors.findIndex (function (selector) {
        return selector.join ("") === params.selectors[0].join ("")
      }) < 0;

    store.get (media).set (
      key,
      merge (
        params,
        {
          "selectors": null
        },
        {
          "insertRule": addSelector,
          "selectors": (addSelector
            ? style.selectors.concat (params.selectors)
            : style.selectors
          ).sort (function (a, b) {
            return a.length - b.length || a.join ("").localeCompare (b.join (""))
          })
        }
      )
    );
  } else {
    store.get (media).set (key, merge (params, { "insertRule": true }));
  }

  return store.get (media).get (key)
}

const store = (function (STORE) {
  return STORE
}) (new Map ());

/**
 * Converts `string` to camel case.
 *
 * @param {string} string
 * - The string to convert.
 *
 * @returns {string}
 *   The camel cased string.
 */

function camelCase (string = "") {
  return string.replace (/\x2D([a-z])/gu, function (_, a) {
    return a.toUpperCase ()
  })
}

/**
 * Converts `string` to kebab case.
 *
 * @param {string} string
 * - The string to convert.
 *
 * @returns {string}
 *   The kebab cased string.
 */

function kebabCase (string = "") {
  return string.replace (/[A-Z]|^ms/gu, "-$&").toLowerCase ()
}

/* eslint-disable no-use-before-define */

const isArr = Array.isArray;

function isDef (value) {
  return typeof value !== "undefined"
}

function isFunc (value) {
  return typeof value === "function"
}

function isNum (value) {
  return typeof value === "number"
}

function isObj (value) {
  return typeof value === "object"
}

function canMerge (value) {
  return (
    Boolean (value) &&
    isObj (value) &&
    !(/^\[object (?:Date|RegExp)\]$/u).test (
      Object.prototype.toString.call (value)
    )
  )
}

function emptyObj (value) {
  return isArr (value) ? [] : {}
}

function cloneObj (value) {
  return canMerge (value) ? merge (emptyObj (value), value) : value
}

function mergeArr (target, source) {
  return (isArr (target) && isArr (source)
    ? target.concat (source)
    : source
  ).map (cloneObj)
}

function mergeObj (target, source) {
  for (const key of Object.keys (source)) {
    target[key] = merge (
      Object.prototype.hasOwnProperty.call (target, key) ? target[key] : {},
      source[key]
    );
  }

  return target
}

/**
 * This method recursively merges own enumerable string keyed properties of
 * source objects into a new empty object. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * @param  {...Object} sources
 * - The source objects.
 *
 * @returns {Object}
 *   Returns `object`.
 */

function merge (... sources) {
  return sources.reduce (function (target, source) {
    if (!isDef (source)) {
      return target
    } else if (isArr (source)) {
      return mergeArr (target, source)
    } else if (canMerge (source)) {
      return mergeObj (target, source)
    }

    return cloneObj (source)
  }, {})
}

function toPairs (params = {}) {
  return Object.keys (params).map (function (key) {
    return [key, params[key]]
  })
}

function create (params = {}) {
  return toPairs (params).reduce (function (styles, style) {
    const property = style[0];
    const value = style[1];

    if (isFunc (value)) {
      styles[property] = value;
    }

    if (isObj (value)) {
      styles[property] = css (value);
    }

    return styles
  }, {})
}

export { create, css, getStyles, merge };
