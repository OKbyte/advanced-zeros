module.exports = function getZerosCount(number, base) {
  "use strict";

  let i = 2; // smallest prime number
  let j = base; // base j system
  const primeFactors = {}; // for j will be here
  let zerosCount; // for number! in base j system

  // Update prime factor power or create prime factor
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

  function powerOf(primeFactor, number, x, result) {
    result += number / Math.pow(primeFactor, x);
    result = Math.floor(result);

    if (number / Math.pow(primeFactor, x) > 1) {
      x++;

      return powerOf(primeFactor, number, x, result);
    }

    return result;
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

  for (const prop in primeFactors) {
    let zerosForPrimeFacctor = powerOf(Number(prop), number, 1, 0);
    zerosForPrimeFacctor = zerosForPrimeFacctor / primeFactors[prop];
    zerosForPrimeFacctor = Math.floor(zerosForPrimeFacctor);

    if (zerosCount === undefined) {
      zerosCount = zerosForPrimeFacctor;
    } else if (zerosCount > zerosForPrimeFacctor) {
      zerosCount = zerosForPrimeFacctor;
    }
  }

  return zerosCount;
};
