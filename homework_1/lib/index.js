"use strict";

require("./index.css");
const $button = document.querySelector('#button');
const $text = document.querySelector('#text');
let click = false;
$button.addEventListener('click', () => {
  if (!click) {
    $text.style.visibility = 'visible';
  } else {
    $text.style.visibility = 'hidden';
  }
  click = !click;
});
console.log('hello');