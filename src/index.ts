var fs = require('fs');
var a: any;

export function med() {
  try {
    var data = fs.readFileSync('./src/file.txt', 'utf8');
    a = GetArray(data);
  } catch (e) {
    console.log('Error:', e.stack);
  }
  return a[(a.length - 1) / 2];
}

var GetArray = (s: string) => {
  return s.split(',');
};

console.log(med());
