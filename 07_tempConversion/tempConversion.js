const ftoc = function(fahrenheit) {
  celsius = Math.round((fahrenheit - 32) * (5/9))/10
  return celsius
  //console.log(celsius)
};

const ctof = function(celsius) {
  fahrenheit = Math.round(celsius * (9/5) + 32)/10
  return fahrenheit
  //console.log(fahrenheit)
};

ftoc(33)

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
