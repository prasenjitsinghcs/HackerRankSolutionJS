// function getLargetPrimeFactor(n) {
//   n = BigInt(n);
//   if (isPrime(n)) {
//     return n;
//   }

//   var mid = BigInt(parseInt(n / 2n));

//   for (var i = BigInt(mid); i > 1n; i = i - 1n) {
//     if (n % i === 0n && isPrime(i)) {
//       if (isPrime(i)) {
//         return i;
//       }
//     }
//   }
//   return -1n
// }

function getLargetPrimeFactor(n) {
  n = BigInt(n);
  if (isPrime(n)) {
    return n;
  }

  var maxPrimeFact = 1n;

  var i = 1n;
  while (i < n / 2n) {
    if (n % i === 0n) {
      const nbyi = n / i;
      if (i == nbyi && isPrime(i) && maxPrimeFact < i) {
        maxPrimeFact = i;
      } else if (isPrime(nbyi) && maxPrimeFact < nbyi) {
        maxPrimeFact = nbyi;
      } else if (isPrime(i) && maxPrimeFact < i) {
        maxPrimeFact = i
      }
    }
    if (i > n / i) {
      break;
    }
    i++;
  }
  return maxPrimeFact;
}

function isPrime(n) {
  var n = BigInt(n);
  for (var i = 2n; i <= BigInt(sqrt(n)); i = i + 1n) {
    if (n % i === 0n) {
      return false;
    }
  }
  return true;
}

function sqrt(value) {
  if (value < 0n) {
    throw 'square root of negative numbers is not supported'
  }

  if (value < 2n) {
    return value;
  }

  function newtonIteration(n, x0) {
    const x1 = ((n / x0) + x0) >> 1n;
    if (x0 === x1 || x0 === (x1 - 1n)) {
      return x0;
    }
    return newtonIteration(n, x1);
  }

  return newtonIteration(value, 1n);
}

try {
  var out = getLargetPrimeFactor('123456789')

  console.log(BigInt(out).toString());
} catch (err) {
  console.log(err);
}


