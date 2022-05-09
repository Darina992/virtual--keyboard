import './style.min.css';
// create html tags
const body = document.querySelector('body');
const conteiner = document.createElement('div');
const wrapper = document.createElement('div');
conteiner.classList.add('conteiner');
wrapper.classList.add('wrapper');
const textField = document.createElement('textarea');
textField.setAttribute('autofocus', 'autofocus');
body.prepend(conteiner);
conteiner.prepend(wrapper);
const buttonsField = document.createElement('div');
buttonsField.classList.add('buttons');
wrapper.prepend(textField, buttonsField);
const languageHint = document.createElement('p');
languageHint.classList.add('language-hint');
languageHint.innerHTML = 'P.S. To switch language press Shift+Ctrl. <br> The keyboard was created in the Windows OS';
conteiner.append(languageHint);
const title = document.createElement('h1');
title.textContent = 'Virtual keyboard';
conteiner.prepend(title);

const keyboardObj = {
  en: {
    1: ['`', '~'],
    2: ['1', '!'],
    3: ['2', '@'],
    4: ['3', '#'],
    5: ['4', '$'],
    6: ['5', '%'],
    7: ['6', '^'],
    8: ['7', '&'],
    9: ['8', '*'],
    10: ['9', '('],
    11: ['0', ')'],
    12: ['-', '_'],
    13: ['=', '+'],
    14: ['Backspace'],
    15: ['Tab'],
    16: ['q'],
    17: ['w'],
    18: ['e'],
    19: ['r'],
    20: ['t'],
    21: ['y'],
    22: ['u'],
    23: ['i'],
    24: ['o'],
    25: ['p'],
    26: ['[', '{'],
    27: [']', '}'],
    28: ['\\', '|'],
    29: ['CapsLock'],
    30: ['a'],
    31: ['s'],
    32: ['d'],
    33: ['f'],
    34: ['g'],
    35: ['h'],
    36: ['j'],
    37: ['k'],
    38: ['l'],
    39: [';', ':'],
    40: ['\'', '"'],
    41: ['Enter'],
    42: ['Shift'],
    43: ['z'],
    44: ['x'],
    45: ['c'],
    46: ['v'],
    47: ['b'],
    48: ['n'],
    49: ['m'],
    50: [',', '<'],
    51: ['.', '>'],
    52: ['/', '?'],
    53: ['↑'],
    54: ['Shift'],
    55: ['Ctrl'],
    56: ['Win'],
    57: ['Alt'],
    58: [''],
    59: ['Alt'],
    60: ['Ctrl'],
    61: ['←'],
    62: ['↓'],
    63: ['→'],
  },
  ru: {
    1: ['ё'],
    2: ['1', '!'],
    3: ['2', '"'],
    4: ['3', '№'],
    5: ['4', ';'],
    6: ['5', '%'],
    7: ['6', ':'],
    8: ['7', '?'],
    9: ['8', '*'],
    10: ['9', '('],
    11: ['0', ')'],
    12: ['-', '_'],
    13: ['=', '+'],
    14: ['Backspace'],
    15: ['Tab'],
    16: ['й'],
    17: ['ц'],
    18: ['у'],
    19: ['к'],
    20: ['е'],
    21: ['н'],
    22: ['г'],
    23: ['ш'],
    24: ['щ'],
    25: ['з'],
    26: ['х'],
    27: ['ъ'],
    28: ['\\', '/'],
    29: ['CapsLock'],
    30: ['ф'],
    31: ['ы'],
    32: ['в'],
    33: ['а'],
    34: ['п'],
    35: ['р'],
    36: ['о'],
    37: ['л'],
    38: ['д'],
    39: ['ж'],
    40: ['э'],
    41: ['Enter'],
    42: ['Shift'],
    43: ['я'],
    44: ['ч'],
    45: ['с'],
    46: ['м'],
    47: ['и'],
    48: ['т'],
    49: ['ь'],
    50: ['б'],
    51: ['ю'],
    52: ['.', ','],
    53: ['↑'],
    54: ['Shift'],
    55: ['Ctrl'],
    56: ['Win'],
    57: ['Alt'],
    58: [''],
    59: ['Alt'],
    60: ['Ctrl'],
    61: ['←'],
    62: ['↓'],
    63: ['→'],
  },
};
let lng = (localStorage.getItem('keyboard$lng')) ? localStorage.getItem('keyboard$lng') : 'en';

// create rows
for (let i = 0; i < 5; i += 1) {
  const row = document.createElement('div');
  row.classList.add('row');
  buttonsField.append(row);
}
const rows = Array.from(document.querySelectorAll('.row'));
// fill buttons textContent
function fillButtons(lang = 'en') {
  for (let i = 1; i < 64; i += 1) {
    const button = document.createElement('div');
    button.classList.add('button');
    // деструктуризация массива
    const [firstValueOfTheKey, secondValueOfTheKey] = keyboardObj[lang][i];

    if (secondValueOfTheKey) {
      button.classList.add('two-item-key');
      button.innerHTML = `<span class="add-button">${secondValueOfTheKey}</span><span class="main-button">${firstValueOfTheKey}</span>`;
    } else {
      button.classList.add('one-item-key');
      button.innerHTML = `<span class="main-button">${firstValueOfTheKey}</span>`;
    }
    if (i >= 1 && i < 15) {
      if (i === 14) {
        button.classList.add('backspace-key');
      }
      rows[0].append(button);
    }
    if (i >= 15 && i < 29) {
      if (i === 15) {
        button.classList.add('tab-key');
      }
      rows[1].append(button);
    }
    if (i >= 29 && i < 42) {
      if (i === 29) {
        button.classList.add('capslk-key');
      }
      if (i === 41) {
        button.classList.add('enter-key');
      }
      rows[2].append(button);
    }
    if (i >= 42 && i < 55) {
      if (i === 42) {
        button.classList.add('shift-key', 'shift-left-key');
      }
      if (i === 53) {
        button.classList.add('arrow-up-key');
      }
      if (i === 54) {
        button.classList.add('shift-key', 'shift-right-key');
      }
      rows[3].append(button);
    }
    if (i >= 55 && i < 64) {
      if (i === 55) {
        button.classList.add('ctrl-key', 'ctrl-left-key');
      }
      if (i === 56) {
        button.classList.add('win-key');
      }
      if (i === 57) {
        button.classList.add('alt-key', 'alt-left-key');
      }
      if (i === 58) {
        button.classList.add('space-key');
      }
      if (i === 59) {
        button.classList.add('alt-key', 'alt-right-key');
      }
      if (i === 60) {
        button.classList.add('ctrl-key', 'ctrl-right-key');
      }
      if (i === 61) {
        button.classList.add('arrow-right-key');
      }
      if (i === 62) {
        button.classList.add('arrow-down-key');
      }
      if (i === 63) {
        button.classList.add('arrow-left-key');
      }
      rows[4].append(button);
    }
  }
}
fillButtons(lng);
// search all buttons
const buttons = Array.from(document.querySelectorAll('.button'));
// search double buttons
const ctrlLeft = document.querySelector('.ctrl-left-key');
const ctrlRight = document.querySelector('.ctrl-right-key');
const shiftLeft = document.querySelector('.shift-left-key');
const shiftRight = document.querySelector('.shift-right-key');
const altLeft = document.querySelector('.alt-left-key');
const altRight = document.querySelector('.alt-right-key');
const space = document.querySelector('.space-key');
const capsLock = document.querySelector('.capslk-key');
const win = document.querySelector('.win-key');
const arrowUp = document.querySelector('.arrow-up-key');
const arrowRight = document.querySelector('.arrow-left-key');
const arrowDown = document.querySelector('.arrow-down-key');
const arrowLeft = document.querySelector('.arrow-right-key');
// set buttons attributes with their textContent
for (let i = 0; i < buttons.length; i += 1) {
  const mainButton = buttons[i].querySelector('.main-button');
  buttons[i].setAttribute('keyname', mainButton.textContent);
  buttons[i].setAttribute('uppercasename', mainButton.textContent.toUpperCase());
  buttons[i].setAttribute('lowercasename', mainButton.textContent.toLowerCase());
}
let arrPressButtons = [];
let flagCapsLk = false;
function replaceButtonTextContent(state) {
  buttons.forEach((item, i) => {
    if (keyboardObj[`${lng}`][i + 1][1]) {
      item.innerHTML = `<span class="add-button">${keyboardObj[`${lng}`][i + 1][1]}</span><span class="main-button">${keyboardObj[`${lng}`][i + 1][0]}</span>`;// eslint-disable-line no-param-reassign
      item.classList.remove('one-item-key');
      item.classList.add('two-item-key');
    } else {
      item.classList.add('one-item-key');
      item.classList.remove('two-item-key');
      item.innerHTML = `<span class="main-button">${keyboardObj[`${lng}`][i + 1][0]}</span>`;// eslint-disable-line no-param-reassign
    }

    const mainButton = item.querySelector('.main-button');
    if (state === 'upper' && ((i >= 15 && i <= 26) || (i >= 29 && i <= 39) || (i >= 42 && i <= 50))) {
      mainButton.textContent = mainButton.textContent.toUpperCase();
    }
    if (state === 'lower' && ((i >= 15 && i <= 26) || (i >= 29 && i <= 39) || (i >= 42 && i <= 50))) {
      mainButton.textContent = mainButton.textContent.toLowerCase();
    }
    item.setAttribute('keyname', mainButton.textContent);
    item.setAttribute('uppercasename', mainButton.textContent.toUpperCase());
    item.setAttribute('lowercasename', mainButton.textContent.toLowerCase());
  });
}
function changeLng() {
  lng = (lng === 'en') ? 'ru' : 'en';
  localStorage.setItem('keyboard$lng', lng);
  replaceButtonTextContent();
}

// add eventListener on buttons conteiner
window.addEventListener('keydown', (event) => {
  arrPressButtons.push(event.key);
  function highlightAddButtons() {
    const twoKeysButtons = document.querySelectorAll('.two-item-key');
    twoKeysButtons.forEach((item) => {
      item.querySelector('.add-button').classList.add('light');
      item.querySelector('.main-button').classList.add('not-light');
    });
  }

  if (arrPressButtons.length === 2 && arrPressButtons.includes('Control') && arrPressButtons.includes('Shift')) {
    changeLng();
  }
  for (let i = 0; i < buttons.length; i += 1) {
    if (event.key === buttons[i].getAttribute('keyname') || event.key === buttons[i].getAttribute('uppercasename')) {
      buttons[i].classList.add('active');
    }
    if (event.code === 'ShiftLeft' && arrPressButtons.includes('Control')) {
      shiftRight.classList.remove('active');
    }
    if (event.code === 'ShiftRight' && arrPressButtons.includes('Control')) {
      shiftLeft.classList.remove('active');
    }
    if (event.code === 'ShiftLeft' && !arrPressButtons.includes('Control')) {
      shiftRight.classList.remove('active');
      replaceButtonTextContent('upper');
      highlightAddButtons();
    }
    if (event.code === 'ShiftRight' && !arrPressButtons.includes('Control')) {
      shiftLeft.classList.remove('active');
      replaceButtonTextContent('upper');
      highlightAddButtons();
    }
    if (event.code === 'ControlLeft') {
      ctrlLeft.classList.add('active');
    }
    if (event.code === 'ControlRight') {
      ctrlRight.classList.add('active');
    }
    if (event.code === 'AltLeft') {
      event.preventDefault();
      altRight.classList.remove('active');
    }
    if (event.code === 'AltRight') {
      event.preventDefault();
      altLeft.classList.remove('active');
    }
    if (event.code === 'Space') {
      space.classList.add('active');
    }
    if (event.code === 'ArrowUp') {
      arrowUp.classList.add('active');
    }
    if (event.code === 'ArrowRight') {
      arrowRight.classList.add('active');
    }
    if (event.code === 'ArrowDown') {
      arrowDown.classList.add('active');
    }
    if (event.code === 'ArrowLeft') {
      arrowLeft.classList.add('active');
    }
    if (event.code === 'MetaLeft') {
      win.classList.add('active');
    }
    if (event.code === 'CapsLock') {
      if (flagCapsLk) {
        capsLock.classList.remove('active');
        flagCapsLk = false;
        replaceButtonTextContent('lower');
      } else {
        capsLock.classList.add('active');
        replaceButtonTextContent('upper');
        flagCapsLk = true;
      }
    }
    if (event.code === 'Tab') {
      event.preventDefault();
      textField.value += '    ';
      return;
    }
  }
});
window.addEventListener('keyup', (event) => {
  arrPressButtons = [];
  function highlightMainButtons() {
    const twoKeysButtons = document.querySelectorAll('.two-item-key');
    twoKeysButtons.forEach((item) => {
      item.querySelector('.add-button').classList.remove('light');
      item.querySelector('.main-button').classList.remove('not-light');
    });
  }
  for (let i = 0; i < buttons.length; i += 1) {
    if (event.key === buttons[i].getAttribute('keyname') || event.key === buttons[i].getAttribute('lowercasename')) {
      buttons[i].classList.remove('active');
      buttons[i].classList.add('remove');
    }
    if (event.code === 'ShiftLeft') {
      shiftRight.classList.remove('active');
      shiftRight.classList.remove('remove');
      if (flagCapsLk) {
        replaceButtonTextContent('upper');
      } else {
        replaceButtonTextContent('lower');
      }
      highlightMainButtons();
    }
    if (event.code === 'ShiftRight') {
      shiftLeft.classList.remove('active');
      shiftLeft.classList.remove('remove');
      if (flagCapsLk) {
        replaceButtonTextContent('upper');
      } else {
        replaceButtonTextContent('lower');
      }
      highlightMainButtons();
    }
    if (event.code === 'ControlLeft') {
      ctrlLeft.classList.remove('active');
      // ctrlRight.classList.remove('remove');
    }
    if (event.code === 'ControlRight') {
      ctrlRight.classList.remove('active');
      // ctrlLeft.classList.remove('remove');
    }
    if (event.code === 'AltLeft') {
      altRight.classList.remove('active');
      altRight.classList.remove('remove');
    }
    if (event.code === 'AltRight') {
      altLeft.classList.remove('active');
      altLeft.classList.remove('remove');
    }
    if (event.code === 'Space') {
      space.classList.remove('active');
      space.classList.remove('remove');
    }
    if (event.code === 'ArrowUp') {
      arrowUp.classList.remove('active');
    }
    if (event.code === 'ArrowRight') {
      arrowRight.classList.remove('active');
    }
    if (event.code === 'ArrowDown') {
      arrowDown.classList.remove('active');
    }
    if (event.code === 'ArrowLeft') {
      arrowLeft.classList.remove('active');
    }
    if (event.code === 'MetaLeft') {
      win.classList.remove('active');
    }
    if (event.code === 'CapsLock') {
      if (flagCapsLk) {
        capsLock.classList.add('active');
        flagCapsLk = true;
      } else {
        capsLock.classList.remove('active');
        flagCapsLk = false;
      }
    }
    setTimeout(() => buttons[i].classList.remove('remove'), 200);
  }
});

buttonsField.addEventListener('click', (event) => {
  if (event.target.closest('.button')) {
    textField.focus();
    if (arrPressButtons.length === 1 && arrPressButtons.includes('Control') && event.target.textContent === 'Shift') {
      changeLng();
      return;
    }
    if (arrPressButtons.length === 1 && arrPressButtons.includes('Shift') && event.target.textContent === 'Ctrl') {
      changeLng();
      return;
    }
    if (arrPressButtons.length === 1 && arrPressButtons.includes('Shift')) {
      if (event.target.classList.contains('item-one-key')) {
        textField.value += event.target.textContent;
      } else if (event.target.closest('.main-button')) {
        textField.value += event.target.parentElement.firstChild.textContent;
      } else {
        textField.value += event.target.firstChild.textContent;
      }
      return;
    }
    if (event.target.textContent === 'Backspace') {
      textField.value = textField.value.substring(0, textField.value.length - 1);
      return;
    }
    if (event.target.textContent === 'Tab') {
      textField.value += '    ';
      return;
    }
    if (event.target.textContent === 'CapsLock') {
      if (flagCapsLk) {
        capsLock.classList.remove('active');
        replaceButtonTextContent('lower');
        flagCapsLk = false;
      } else {
        capsLock.classList.add('active');
        replaceButtonTextContent('upper');
        flagCapsLk = true;
      }
      return;
    }
    if (event.target.textContent === 'Enter') {
      textField.value = `${textField.value.substring(0, textField.selectionStart)}\n${
        textField.value.substring(textField.selectionEnd, textField.value.length)}`;
      return;
    }
    if (event.target.textContent === 'Alt' || event.target.textContent === 'Ctrl'
  || event.target.textContent === 'Shift') {
      return;
    }
    if (event.target.textContent === '') {
      if (textField.value.length <= textField.selectionEnd) {
        textField.value += ' ';
      } else {
        const arr = textField.value.split('');
        const n = textField.selectionEnd;
        arr.splice(textField.selectionEnd, 0, ' ');
        textField.value = arr.join('');
        textField.selectionEnd = n + 1;
      }
      return;
    }
    if (event.target.textContent === '←') {
      textField.selectionEnd -= 1;
      return;
    }
    if (event.target.textContent === '→') {
      textField.selectionStart += 1;
      return;
    }
    if (event.target.textContent === '↑') {
      const lines = textField.value.split('\n');
      if (lines.length === 1) {
        textField.selectionEnd = 0;
      } else {
        textField.value += event.target.textContent;
      }
      return;
    }
    if (event.target.textContent === '↓') {
      const lines = textField.value.split('\n');
      // console.log(lines)
      if (lines.length === 1) {
        textField.selectionStart = textField.value.length;
      } else {
        textField.value += event.target.textContent;
      }
      return;
    }
    if (event.target.classList.contains('two-item-key')) {
      textField.value += event.target.lastElementChild.textContent;
    } else if (event.target.classList.contains('add-button')) {
      textField.value += event.target.parentElement.lastElementChild.textContent.toLowerCase();
    } else {
      textField.value += event.target.textContent;
    }
  }
});
