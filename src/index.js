const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let len = expr.length;
  let arrNum = [];
  for (let i = 0; i < len / 10; i++) {
    expr = expr.substring(0, len - i * 10);
    arrNum.push(expr.slice(-10));
  }
  let morsArr = arrNum
    .map((index) => {
      str = index.replace(/10/g, '.').replace(/11/g, '-').replace(/00/g, '');
      return str;
    })
    .map((index) => {
      return index === '**********' ? (index = ' ') : MORSE_TABLE[index];
    });

  return morsArr.reverse().join('');
}

module.exports = {
    decode
}
