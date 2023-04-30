//first letter toUC
const fn = (str) => str[0].toUpperCase() + str.slice(1);

//move str at loop

const mySubstr = (text, count) => {
let point = 0;
let res = '';

  while (count > point) {
    res = `${res}${text[point]}`;
    point += 1;
 }

 return res;
}

//swap every two chars
const encrypt = (text) => {
  let result = ''
  for (let i = 0; i < text.length; i+=2) {
    if (i < text.length-1) {
      result += text[i+1] + text[i]
    } else {
      result += text[i]
    }
  }
  return result;
}
