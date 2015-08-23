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

  let onClickHandler = function() {
    console.log('hello');
  };
  document
    .querySelector('#sample01')
    .addEventListener('click', onClickHandler, /* allow evenet from untrusted content: */ false);

  class Developper {
    constructor(keyboard, languages) {
      this.keyboard = keyboard;
      this.languages = languages;
    }
  }
  let i = new Developper('hhkb pro2', ['c','php','python','jaava','sh/bash/zsh script']);
  console.dir(i);
};
document.addEventListener('DOMContentLoaded', onloadHandler, false);
