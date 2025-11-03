// Complete the class, IterFizzBuzz, that implements the iterable interface.
//
// The constructor should take in two arguments, min and max, which are both integers. It
// should allow users to iterate over the numbers from min (inclusive) to max (exclusive).
// For each number, the iterator should return "fizz" if the number is divisible by 3,
// "buzz" if the number is divisible by 5, "fizzbuzz" if the number is divisible by 15, or
// the number itself otherwise.
//
// Ex.:
//   const arr = [...new IterFizzBuzz(1, 16)];
//   arr => [1, 2, 'fizz', 4, 'buzz', ..., 14, 'fizzbuzz']
export default class IterFizzBuzz {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }


  [Symbol.iterator]() {
    let current = this.min; // Start from the minimum value
    const max = this.max;   // End before reaching max

    // return an object that follows the iterator protocol
    return {
      next() {
        // stop iteration when current reaches or exceeds max
        if (current >= max) {
          return { done: true };
        }

        // apply FizzBuzz logic
        let value;
        if (current % 15 === 0) {
          value = 'fizzbuzz';
        } else if (current % 3 === 0) {
          value = 'fizz';
        } else if (current % 5 === 0) {
          value = 'buzz';
        } else {
          value = current;
        }

        current++; // move to the next number
        return { value, done: false }; // return the current value
      }
    };
  }
}
