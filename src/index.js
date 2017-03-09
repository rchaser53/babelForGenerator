import 'babel-polyfill';
function* con() {
  yield 2;
}

const nyan = con();
console.log(nyan.next())
