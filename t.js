// Uncaught SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
// let onloadHandler = () => {
//   console.log("hello");
// }

// Uncaught SyntaxError: Unexpected token )
// var onloadHandler = () => {
//   console.log("hello");
// };

var onloadHandler = function() {
  'use strict';

  // Uncaught SyntaxError: Unexpected token )
  // var onClickHandler = () => { return "hello"; };

  let onClickHandler = function() => { return "hello"; };
  document.addEventListener('DOMContentLoaded', onloadHandler, false);
  document
    .querySelector('#sample01')
    .addEventListener('click', onClickHandler, /* allow evenet from untrusted content: */ false);

  class Developper {
    constructor(keyboard, languages) {
      this.keyboard = keyboard;
      this.languages = languages;
    }
  }
};
document.addEventListener('DOMContentLoaded', onloadHandler, false);
