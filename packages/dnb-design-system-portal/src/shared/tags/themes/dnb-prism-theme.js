/**
 * DNB Prism Theme
 *
 */

const prismStyle = /* @css */ `
  --color-violet-medium: #a06eaf;
  --color-indigo-medium: #6e6491;

  .prism-code[contentEditable='true'] {
    cursor: text;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    opacity: 0.8;
    font-style: italic;
    color: var(--color-signal-yellow-30);
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol {
    color: var(--color-mint-green-12);
  }
  .token.tag {
    color: var(--color-sea-green-alt);
  }

  .token.selector,
  .token.class-name,/* custom */
  .token.attr-name,
  .token.string,
  .token.function,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: var(--color-summer-green);
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: var(--color-mint-green);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: var(--color-mint-green);
  }

  .token.punctuation {
    color: var(--color-violet-medium);
  }

  .namespace {
    ${'' /* opacity: 0.7; */}
    color: var(--color-indigo-medium);
  }

  .token.regex,
  .token.important {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.deleted {
    color: red;
  }
`

export default prismStyle