// https://prettier.io/docs/en/options.html
module.exports = {
    eslintIntegration: true,
    formatOnSave: false,

    tabWidth: 4, // Specify the number of spaces per indentation-level
    printWidth: 120, // Specify the line length that the printer will wrap on

    // Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line (does not apply to self closing elements)
    // true - Example:
    // <button
    // className="prettier-class"
    // id="prettier-id"
    // onClick={this.handleClick}>
    // Click Here
    // </button>
    //
    // false - Example:
    // <button
    //   className="prettier-class"
    //   id="prettier-id"
    //   onClick={this.handleClick}
    // >
    //   Click Here
    // </button>
    jsxBracketSameLine: false,

    // Specify the global whitespace sensitivity for HTML files
    // "css" - Respect the default value of CSS display property.
    //      <!-- <span> is an inline element, <div> is a block element -->
    //      <span class="dolorum atque aspernatur"
    //          >Est molestiae sunt facilis qui rem.</span
    //      >
    //      <div class="voluptatem architecto at">
    //          Architecto rerum architecto incidunt sint.
    //      </div>
    //      We can allow magic comments (e.g., <!-- display: block -->) to tell Prettier how to format elements due to the fact that CSS display can be changed:
    //      <!-- display: block -->
    //      <span class="dolorum atque aspernatur">
    //          Est molestiae sunt facilis qui rem.
    //      </span>
    //
    // "strict" - Whitespaces are considered sensitive.
    // "ignore" - Whitespaces are considered insensitive.
    htmlWhitespaceSensitivity: "css",

    // Include parentheses around a sole arrow function parameter.
    // "always" - Always include parens. Example: (x) => x
    // "avoid" - Omit parens when possible. Example: x => x
    arrowParens: "always"
};
