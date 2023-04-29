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
