//is prime or not

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
