import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
  * 1. Correct the line height in all browsers.
  * 2. Prevent adjustments of font size after orientation changes in iOS.
  */
const HtmlStyle = createGlobalStyle`
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
`;
export const Html = (props) => (
  <React.Fragment>
    <HtmlStyle />
    {props.children}
  </React.Fragment>
)

/**
  * 1. Remove the margin in all browsers.
  * 2. Add the correct display in IE 10.
  */
const BodyStyle = createGlobalStyle`
  body {
    margin: 0; /* 1 */
  }
  [hidden] {
    display: none; /* 2 */
  }
`;
export const Body = (props) => (
  <React.Fragment>
    <BodyStyle />
    {props.children}
  </React.Fragment>
)

/* Sections
   ========================================================================== */

/**
 * Render the `main` element consistently in IE.
 */
export const Main = styled.main`
  display: block;
`;

/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */

export const H1 = styled.h1`
  font-size: 2em;
  margin: 0.67em 0;
`

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

export const Hr = styled.hr`
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
`

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

export const Pre = styled.pre`
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
`

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

export const A = styled.a`
  background-color: transparent;
`

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

export const Abbr = styled.abbr`
  &[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
`

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
export const B = styled.b`
  font-weight: bolder;
`
export const Strong = styled.strong`
  font-weight: bolder;
`

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
const codeKdbSampStyles = css`
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
`;
export const Code = styled.code`
  ${codeKdbSampStyles}
`
export const Kdb = styled.kdb`
  ${codeKdbSampStyles}
`
export const Samp = styled.samp`
  ${codeKdbSampStyles}
`

/**
 * Add the correct font size in all browsers.
 */

export const Small = styled.small`
  font-size: 80%;
`

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

const subSupStyles = css`
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
`;

export const Sub = styled.sub`
  ${subSupStyles}
  bottom: -0.25em;
`
export const Sup = styled.sup`
  ${subSupStyles}
  top: -0.5em;
`

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

export const Img = styled.img`
  border-style: none;
`

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 * 8. Remove the default vertical scrollbar in IE 10+.
 */

const inputStyles = css`
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
`

/**
 * 1. Show the overflow in IE and Edge.
 * 2. Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 3. Correct the inability to style clickable types in iOS and Safari.
 * 4. Remove the inner border and padding in Firefox.
 * 5. Restore the focus styles unset by the previous rule.
 */
export const Button = styled.button`
  ${inputStyles}
  overflow: visible; /* 1 */
  text-transform: none; /* 2 */
  -webkit-appearance: button; /* 3 */
  &[type="button"],
  &[type="reset"],
  &[type="submit"] { /* 3 */
    -webkit-appearance: button;
  }
  &::-moz-focus-inner,
  &[type="button"]::-moz-focus-inner,
  &[type="reset"]::-moz-focus-inner,
  &[type="submit"]::-moz-focus-inner { /* 4 */
    border-style: none;
    padding: 0;
  }
  &:-moz-focusring,
  &[type="button"]:-moz-focusring,
  &[type="reset"]:-moz-focusring,
  &[type="submit"]:-moz-focusring { /* 5 */
    outline: 1px dotted ButtonText;
  }

`
/**
 * 1. Show the overflow in IE and Edge.
 * 2. Add the correct box sizing in IE 10.
 * 3. Remove the padding in IE 10.
 * 4. Correct the cursor style of increment and decrement buttons in Chrome.
 * 5. Correct the odd appearance in Chrome and Safari.
 * 6. Correct the outline style in Safari.
 * 7. Remove the inner padding in Chrome and Safari on macOS.
 * 8. Correct the inability to style clickable types in iOS and Safari.
 * 9. Change font properties to `inherit` in Safari.
 */
export const Input = styled.input`
  ${inputStyles}
  overflow: visible; /* 1 */
  &[type="checkbox"],
  &[type="radio"] {
    box-sizing: border-box; /* 2 */
    padding: 0; /* 3 */
  }
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    height: auto; /* 4 */
  }
  &[type="search"]{
    -webkit-appearance: textfield; /* 5 */
    outline-offset: -2px; /* 6 */
  }
  &[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none; /* 7 */
  }
  &::-webkit-file-upload-button {
    -webkit-appearance: button; /* 8 */
    font: inherit; /* 9 */
  }
`
export const Optgroup = styled.optgroup`
  ${inputStyles}
`
/**
 * 1. Remove the inheritance of text transform in Edge, Firefox, and IE.
 */
export const Select = styled.select`
  ${inputStyles}
  text-transform: none; /* 1 */
`
/**
 * 1. Remove the default vertical scrollbar in IE 10+.
 */
export const Textarea = styled.textarea`
  ${inputStyles}
  overflow: auto; /* 1 */
`

/**
 * Correct the padding in Firefox.
 */

export const Fieldset = styled.fieldset`
  padding: 0.35em 0.75em 0.625em;
`

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

export const Legend = styled.legend`
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
`

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

export const Progress = styled.progress`
  vertical-align: baseline;
`


/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

export const Details = styled.details`
  display: block;
`

/*
 * Add the correct display in all browsers.
 */

export const Summary = styled.summary`
  display: list-item;
`

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

export const Template = styled.template`
  display: none;
`
