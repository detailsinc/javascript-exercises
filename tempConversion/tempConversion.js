const ftoc = function(fNum) {
  let result, rndResult, x;
  x = fNum;
  result = (x - 32) * (5 / 9);
  rndResult = Math.round(result * 10) / 10;
  return rndResult;
}

const ctof = function(cNum) {
  let result, rndResult, x;
  x = cNum;
  result = (x * (9 / 5)) + 32;
  rndResult = Math.round(result * 10) / 10;
  return rndResult;
}

module.exports = {
  ftoc,
  ctof
}
