import './index.css';

const $button = document.querySelector('#button') as HTMLButtonElement;
const $text = document.querySelector('#text') as HTMLDivElement;

let click: boolean = false;
$button.addEventListener('click', () => {
  if (!click) {
    $text.style.visibility = 'visible';
  } else {
    $text.style.visibility = 'hidden';
  }
  click = !click;
});

console.log('hello');
