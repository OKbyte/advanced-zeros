module.exports = function getZerosCount(number, base) {
  "use strict";

  let i = 2; // smallest prime number
  let j = base;
  const primeFactors = {}; // prime factors for j will be here
  let zerosCount; // for !number in j base system

  function updateProp(prop) {
    if (primeFactors[prop]) {
      primeFactors[prop] += 1;
    } else {
      createProp(prop);
    }
  }

  function createProp(prop) {
    primeFactors[prop] = 1;
  }

  do {
    if (!(i % 2) && i !== 2) {
      i++;
    }

    if (!(j % i) && j !== 1) {
      updateProp(i);

      j = j / i;

      continue;
    } else if (j === 1) {
      break;
    } else {
      i++;

      continue;
    }
  } while (i <= base);

  function powerOf(primeFactor, number, x, result) {
    result += number / Math.pow(primeFactor, x);
    result = Math.floor(result);

    if (number / Math.pow(primeFactor, x) > 1) {
      x++;

      return powerOf(primeFactor, number, x, result);
    }

    return result;
  }

  for (const prop in primeFactors) {
    let zerosForPF = powerOf(Number(prop), number, 1, 0);
    zerosForPF = zerosForPF / primeFactors[prop];
    zerosForPF = Math.floor(zerosForPF);

    if (zerosCount === undefined) {
      zerosCount = zerosForPF;
    } else if (zerosCount > zerosForPF) {
      zerosCount = zerosForPF;
    }
  }

  return zerosCount;
};
