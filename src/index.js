module.exports = function reverse (n) {
    let myFunc = num => Number(num);
      
    var intArr = Array.from(String(Math.abs(n)), myFunc);
return +(intArr.reverse()).join('')
  
}
