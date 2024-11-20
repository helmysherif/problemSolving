function printPrimeNumbers(n, m) {
  for (let num = n; num <= m; num++) {
    let isPrime = true;
    if (num <= 1) {
      isPrime = false;
    } else {
      for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      console.log(num);
    }
  }
}
printPrimeNumbers(5,20)