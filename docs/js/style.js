/*! @copyright Peter T Bosse II | @license Apache-2.0 | @link https://github.com/ptb/style/tree/e5eceba | @version 2019.9.20-1 */
function t(t={}){return H(t).reduce(function(t,n){const o=n[0],r=n[1];return t[o]=e(r),t},{})}function e(t,e){return b({input:j(t)?G(...t):t}).map(E).map(g).map(r).concat(e).filter(Boolean).join(" ")}function n(t=[],e=[]){return e.reduce(function(e,n){if(t.length){const o=n.indexOf("&");return t.forEach(function(t){e.push(o<0?t.concat(" ",n):n.slice(0,o).concat(t,n.slice(o+1)))}),e}return e.concat([n])},[])}function o(t={}){const e=t.block||[];let n=";";return e.map(function(t){return H(t).map(function(t){const e=t[0],o=t[1];if(M(o)){const t=H(o).map(function(t){return L(t[0]).concat(":",t[1])}).join(";");return n="","".concat(e,"{",t,"}")}return"".concat(e,":",o)})}).join(n)}function r(t={}){const e=t.emit,n=t.identifier;return e?n:null}function i(t=[]){return t.map(function(t){return/^%/u.test(t)?".".concat(y({property:t,value:t}).identifier):t})}function a(t=""){const e=parseInt("af",36);switch(!0){case/^%/u.test(t):return 0+e;case/^\x2D\x2D/u.test(t):return 1+e;default:return"$*,--*,all,direction,unicodeBidi,writingMode,textOrientation,glyphOrientationVertical,textCombineUpright,textTransform,whiteSpace,textSpaceCollapse,textSpaceTrim,tabSize,wordBreak,lineBreak,hyphens,overflowWrap,wordWrap,textWrap,wrapBefore,wrapAfter,wrapInside,hyphenateCharacter,hyphenateLimitZone,hyphenateLimitChars,hyphenateLimitLines,hyphenateLimitLast,textAlign,textAlignAll,textAlignLast,textJustify,textGroupAlign,wordSpacing,letterSpacing,linePadding,textSpacing,textIndent,hangingPunctuation,textDecoration,textDecorationLine,textDecorationStyle,textDecorationColor,textDecorationWidth,textDecorationSkip,textDecorationSkipInk,textUnderlineOffset,textUnderlinePosition,textEmphasis,textEmphasisStyle,textEmphasisColor,textEmphasisPosition,textEmphasisSkip,textShadow,src,font,fontStyle,fontVariant,fontWeight,fontStretch,fontSize,lineHeight,fontFamily,fontMinSize,fontMaxSize,fontSizeAdjust,fontSynthesis,fontSynthesisWeight,fontSynthesisStyle,fontSynthesisSmallCaps,unicodeRange,fontFeatureSettings,fontVariationSettings,fontLanguageOverride,fontKerning,fontVariantLigatures,fontVariantPosition,fontVariantCaps,fontVariantNumeric,fontVariantAlternates,fontVariantEastAsian,fontOpticalSizing,fontPalette,fontVariantEmoji,content,quotes,stringSet,bookmarkLevel,bookmarkLabel,bookmarkState,running,footnoteDisplay,footnotePolicy,outline,outlineColor,outlineStyle,outlineWidth,outlineOffset,resize,textOverflow,cursor,caret,caretColor,caretShape,navUp,navRight,navDown,navLeft,userSelect,appearance,position,top,right,bottom,left,offsetBefore,offsetAfter,offsetStart,offsetEnd,zIndex,display,contain,width,height,minWidth,minHeight,maxWidth,maxHeight,boxSizing,visibility,pageBreakBefore,pageBreakAfter,pageBreakInside,margin,marginTop,marginRight,marginBottom,marginLeft,marginTrim,padding,paddingTop,paddingRight,paddingBottom,paddingLeft,dominantBaseline,verticalAlign,alignmentBaseline,baselineShift,inlineSizing,initialLetters,initialLettersAlign,initialLettersWrap,listStyle,listStyleType,listStylePosition,listStyleImage,markerSide,counterReset,counterSet,counterIncrement,overflow,overflowX,overflowY,overflowBlock,overflowInline,blockOverflow,lineClamp,maxLines,continue,tableLayout,borderCollapse,borderSpacing,captionSide,emptyCells,flexFlow,flexDirection,flexWrap,order,flex,flexGrow,flexShrink,flexBasis,placeContent,alignContent,justifyContent,placeItems,alignItems,justifyItems,placeSelf,alignSelf,justifySelf,gap,rowGap,columnGap,columns,columnWidth,columnCount,columnRule,columnRuleWidth,columnRuleStyle,columnRuleColor,columnSpan,columnFill,flowInto,flowFrom,regionFragment,breakBefore,breakAfter,breakInside,orphans,widows,boxDecorationBreak,grid,gridTemplate,gridTemplateRows,gridTemplateColumns,gridTemplateAreas,gridAutoFlow,gridAutoRows,gridAutoColumns,gridArea,gridRow,gridRowStart,gridRowEnd,gridColumn,gridColumnStart,gridColumnEnd,rubyPosition,rubyMerge,rubyAlign,float,clear,blockSize,inlineSize,minBlockSize,minInlineSize,maxBlockSize,maxInlineSize,marginBlock,marginBlockStart,marginBlockEnd,marginInline,marginInlineStart,marginInlineEnd,inset,insetBlock,insetBlockStart,insetBlockEnd,insetInline,insetInlineStart,insetInlineEnd,paddingBlock,paddingBlockStart,paddingBlockEnd,paddingInline,paddingInlineStart,paddingInlineEnd,borderBlockWidth,borderBlockStartWidth,borderBlockEndWidth,borderInlineWidth,borderInlineStartWidth,borderInlineEndWidth,borderBlockStyle,borderBlockStartStyle,borderBlockEndStyle,borderInlineStyle,borderInlineStartStyle,borderInlineEndStyle,borderBlockColor,borderBlockStartColor,borderBlockEndColor,borderInlineColor,borderInlineStartColor,borderInlineEndColor,borderBlock,borderBlockStart,borderBlockEnd,borderInline,borderInlineStart,borderInlineEnd,borderStartStartRadius,borderStartEndRadius,borderEndStartRadius,borderEndEndRadius,fillRule,fillBreak,fill,fillColor,fillImage,fillOrigin,fillPosition,fillSize,fillRepeat,fillOpacity,strokeWidth,strokeAlign,strokeLinecap,strokeLinejoin,strokeMiterlimit,strokeBreak,strokeDasharray,strokeDashoffset,strokeDashCorner,strokeDashJustify,stroke,strokeColor,strokeImage,strokeOrigin,strokePosition,strokeSize,strokeRepeat,strokeOpacity,marker,markerStart,markerMid,markerEnd,markerSegment,markerPattern,markerKnockoutLeft,markerKnockoutRight,vectorEffect,colorRendering,shapeRendering,textRendering,imageRendering,bufferedRendering,stopColor,stopOpacity,color,opacity,colorAdjust,objectFit,objectPosition,imageResolution,imageOrientation,imageRendering,background,backgroundColor,backgroundImage,backgroundPosition,backgroundPositionX,backgroundPositionY,backgroundSize,backgroundRepeat,backgroundAttachment,backgroundOrigin,backgroundClip,border,borderTop,borderRight,borderBottom,borderLeft,borderWidth,borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth,borderStyle,borderTopStyle,borderRightStyle,borderBottomStyle,borderLeftStyle,borderColor,borderTopColor,borderRightColor,borderBottomColor,borderLeftColor,borderRadius,borderTopLeftRadius,borderTopRightRadius,borderBottomRightRadius,borderBottomLeftRadius,borderImage,borderImageSource,borderImageSlice,borderImageWidth,borderImageOutset,borderImageRepeat,boxShadow,clip,clipPath,clipRule,mask,maskImage,maskPosition,maskSize,maskRepeat,maskOrigin,maskClip,maskComposite,maskMode,maskBorder,maskBorderSource,maskBorderSlice,maskBorderWidth,maskBorderOutset,maskBorderRepeat,maskBorderMode,maskType,shapeOutside,shapeImageThreshold,shapeMargin,filter,floodColor,floodOpacity,colorInterpolationFilters,lightingColor,mixBlendMode,isolation,backgroundBlendMode,transition,transitionProperty,transitionDuration,transitionTimingFunction,transitionDelay,transform,transformOrigin,transformBox,transformStyle,perspective,perspectiveOrigin,backfaceVisibility,animation,animationName,animationDuration,animationTimingFunction,animationDelay,animationIterationCount,animationDirection,animationFillMode,animationPlayState,offset,offsetPosition,offsetPath,offsetDistance,offsetRotate,offsetAnchor,willChange,scrollSnapType,scrollPadding,scrollPaddingTop,scrollPaddingRight,scrollPaddingBottom,scrollPaddingLeft,scrollPaddingBlock,scrollPaddingBlockStart,scrollPaddingBlockEnd,scrollPaddingInline,scrollPaddingInlineStart,scrollPaddingInlineEnd,scrollMargin,scrollMarginTop,scrollMarginRight,scrollMarginBottom,scrollMarginLeft,scrollMarginBlock,scrollMarginBlockStart,scrollMarginBlockEnd,scrollMarginInline,scrollMarginInlineStart,scrollMarginInlineEnd,scrollSnapAlign,scrollSnapStop,scrollBehavior".split(",").indexOf(O(t).replace(/^(Moz|Ms|Webkit)/u,"").replace(/^([A-Z])/u,function(t){return t.toLowerCase()}))+e}}function l(t=""){const e="-?[A-Z_a-z\\u{00a0}-\\u{ffff}]+[-0-9A-Z_a-z\\u{00a0}-\\u{ffff}]*",n=new RegExp(["(&)","(#".concat(e,")"),"(\\.".concat(e,")"),"(\\$".concat(e,")"),"(%".concat(e,")"),"(\\^".concat(e,")"),"(\\[[-$*0-9=A-Z^_a-z|~\\u{00a0}-\\u{ffff}]+\\])","(::?".concat("(?:",e,"|[(+)]|[0-9])+",")"),"(".concat(e,")"),"(\\*)","([ +>~]+)"].join("|"),"gu");return t.split(",").map(function(t){return t.trim().match(n).map(function(t){return t.trim().replace(/^$/u," ")})})}function c(t={}){return(t.selectors||[]).map(function(t){return t.join("")}).join(",")}function s(t=""){return t.split("").reduce(function(t,e){return t<<5^t^0xffffffffff&e.charCodeAt()},21524).toString(36)}function u(t={},e=!1){const n=e&&t.media,r=t.property;return/^%/u.test(r)||!z(r)?null:"".concat(n?"@media ".concat(n,"{"):"",c(t),"{",o(t),"}",n?"}":"")}function d(){let t=[];return A.forEach(function(e,n){let o=[];e.forEach(function(t){o.push(u(t))}),o=o.sort(),n&&(o.unshift("@media ".concat(n,"{")),o.push("}")),t=t.concat(o)}),t.filter(Boolean).join("")}const f=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),m=function(){let t;return function(e=""){let n;for(n of(void 0===t&&(t=document.querySelectorAll("style[data-creator='@amory/style']")),t))if(n.media===e)return n;return(n=document.createElement("style")).setAttribute("data-creator","@amory/style"),e.length&&(n.media=e),document.head.appendChild(n),t=document.querySelectorAll("style[data-creator='@amory/style']"),n}}();function p(t={}){if(f){const e=m().sheet,n=u(t,!0);z(e)&&n&&e.insertRule(n,e.cssRules.length)}return t}function g(t={}){return f&&t.insertRule&&p(t),t}function k(){const t=m(),e=d();t.innerHTML=e}function b(t={}){return B(t).reduce(function(t,e){return t.concat(R(e))},[]).reduce(function(t,e){return t.concat(I(e))},[]).reduce(function(t,e){return t.concat(C(e))},[]).reduce(function(t,e){return t.concat(w(e))},[]).reduce(function(t,e){return t.concat(y(e))},[]).reduce(function(t,e){return t.concat(h(e))},[]).reduce(function(t,e){return t.concat(S(e))},[]).reduce(function(t,e){return t.concat(x(e))},[]).reduce(function(t,e){return t.concat(v(e))},[])}function h(t={}){const e=t.value;if(Array.isArray(e)){const n=t.property;let o=[];const r=[];switch(n){case"backgroundImage":case"backgroundPosition":case"backgroundPositionX":case"backgroundPositionY":case"backgroundRepeat":case"backgroundSize":o=[{[L(n)]:e.join(",")}];break;case"fontFamily":o=[{"font-family":e.reduce(function(t,e){if(M(e)){const o=S({property:n,value:e}).shift();return r.push(o),t.concat(o.value)}return t.concat(e)},[]).join(",")}];break;default:o=e.map(function(t){return{[L(n)]:t}})}return r.concat(G(t,{block:null},{block:o}))}return t}function S(t={}){const e=t.property,n=t.value;if("fontFamily"===e&&M(n)&&!j(n)){const e=t.media||"",o=y(G(t,{selectors:null},{selectors:[["@font-face"]]})),r=n.fontFamily||n["font-family"]||o.identifier;return n.fontFamily=r,delete n["font-family"],[G(o,{block:null},{block:H(n).reduce(function(t,e){return t.concat({[L(e[0])]:e[1]})},[]),emit:!1,media:"",value:r}),G(o,{block:null,selectors:null},{block:[{"font-family":r}],emit:!0,media:e,selectors:[[".".concat(o.identifier)]],value:r})]}return t}function y(t={}){if(t.property){const e=t.media||"",n=t.property,o=t.value;let r=t.selectors||[];const i=z(t.identifier)?t.identifier:a(n).toString(36)+s("".concat(e).concat(r.map(function(t){return t.join("")}).join(",")).concat(JSON.stringify(o))).slice(-3);return r=r.length||/^%/u.test(n)?r.map(function(t){return/^:/u.test(t[0])?[].concat(".".concat(i),t):t}):r.concat([[".".concat(i)]]),G(t,{selectors:null},{identifier:i,selectors:r})}return t}function B(t={}){const e=!z(t.emit)||t.emit,n=t.input||{},o=t.media||"",r=t.selectors||[];return H(n).reduce(function(t,n){const i=n[0],a=n[1];return t.concat({block:[{[L(i)]:a}],emit:e,input:{[i]:a},media:o,property:O(i),selectors:r,value:a})},[])}function x(t={}){const e=t.property,n=t.value;if("animationName"===e&&M(n)){const e=t.media||"",o=y(G(t,{selectors:null},{selectors:[["@keyframes"," "]]})),r=o.identifier;return[G(o,{block:null,selectors:null},{block:H(n).reduce(function(t,e){return t.concat({[L(e[0])]:e[1]})},[]),emit:!1,media:"",selectors:[o.selectors[0].concat(r)],value:r}),G(o,{block:null,selectors:null},{block:[{"animation-name":r}],emit:!0,media:e,selectors:[[".".concat(r)]],value:r})]}return t}function I(t={}){const e=t.property,n=t.value;if(/^@media/u.test(e)&&M(n)){return b({input:n,media:[t.media,L(e.slice(6).trim())].filter(Boolean).join(" and ")})}return t}function R(t={}){const e=t.property;let n=t.value;return!/(animationIterationCount|borderImage(?:Outset|Slice|Width)|box(?:(?:Flex)(?:Group)?|OrdinalGroup)|column(?:Count|s)|fillOpacity|floodOpacity|stopOpacity|stroke(?:Dash(?:array|offset)|Miterlimit|Opacity|Width)|flex(?:Grow|Positive|Shrink|Negative|Order)?\b|grid(?:Area|Column(?:End|Start)?|Row(?:End|Start)?)|fontWeight|line(?:Clamp|Height)|opacity|\border|orphans|tabSize|widows|zIndex|zoom)/u.test(e)&&W(n)&&0!==n?(n="".concat(n,"px"),G(t,{block:null},{block:[{[L(e)]:n}],value:n})):t}function C(t={}){const e=t.property,n=t.value;return/^%/u.test(e)&&!0===n?G(t,{identifier:y({media:t.media,property:e,value:e}).identifier}):t}function w(t={}){const e=t.property,o=t.value;if(/([#$%&*+,.>[^~]|:[a-z])/u.test(e)&&M(o)){const r=/^:/u.test(e),a=l(L(e)).reduce(function(e,o){return e.concat(n(t.selectors,[o]))},[]).reduce(function(t,e){return t.concat([i(e)])},[]);return b({emit:r,input:o,media:t.media,selectors:a})}return t}function v(t={}){const e=t.property,n=t.value;return/^([a-z]+)$/u.test(e)&&M(n)&&!j(n)?b({emit:!1,input:n,media:t.media,selectors:[[e]]}):t}function E(t={}){const e=t.block||[],n=t.media||"",o=JSON.stringify(e);if(A.has(n)||A.set(n,new Map),A.get(n).has(o)){const e=A.get(n).get(o),r=e.selectors.findIndex(function(e){return e.join("")===t.selectors[0].join("")})<0;A.get(n).set(o,G(t,{selectors:null},{insertRule:r,selectors:(r?e.selectors.concat(t.selectors):e.selectors).sort(function(t,e){return t.length-e.length||t.join("").localeCompare(e.join(""))})}))}else A.get(n).set(o,G(t,{insertRule:!0}));return A.get(n).get(o)}const A=new Map;function O(t=""){return t.replace(/\x2D([a-z])/gu,function(t,e){return e.toUpperCase()})}function P(t,e=0){let n;return function(){clearTimeout(n),n=setTimeout(t,e)}}function L(t=""){return t.replace(/[A-Z]|^ms/gu,"-$&").toLowerCase()}const j=Array.isArray;function z(t){return void 0!==t}function W(t){return"number"==typeof t}function M(t){return"object"==typeof t}function D(t){return Boolean(t)&&M(t)&&!/^\[object (?:Date|RegExp)\]$/u.test(Object.prototype.toString.call(t))}function T(t){return j(t)?[]:{}}function F(t){return D(t)?G(T(t),t):t}function V(t,e){return(j(t)&&j(e)?t.concat(e):e).map(F)}function $(t,e){for(const n of Object.keys(e))t[n]=G(Object.prototype.hasOwnProperty.call(t,n)?t[n]:{},e[n]);return t}function G(...t){return t.reduce(function(t,e){return j(e)?V(t,e):D(e)?$(t,e):F(e)},{})}const N=(Z=[],{pub:function(t){return Z.map(function(e){return e(t)})},sub:function(t){const e=Z.push(t)-1;return function(){return delete Z[e]}}});var Z;function H(t={}){return Object.keys(t).map(function(e){return[e,t[e]]})}export{E as cache,O as camelCase,D as canMerge,f as canUseDom,F as cloneObj,t as create,e as css,P as debounce,T as emptyObj,n as getAncestors,o as getBlockString,r as getClassName,i as getPlaceholders,a as getPropertyId,l as getSelectors,c as getSelectorsString,s as getStringHash,u as getStyle,m as getStyleElement,d as getStyles,p as insertRule,j as isArr,z as isDef,W as isNum,M as isObj,L as kebabCase,G as merge,V as mergeArr,$ as mergeObj,b as parse,h as parseFallbacks,S as parseFontFace,y as parseIdentifier,B as parseInput,x as parseKeyframes,I as parseMedia,R as parseNumbers,C as parsePlaceholder,w as parseSelectors,v as parseTypeSelector,N as pubSub,A as store,H as toPairs,g as update,k as updateStyles};