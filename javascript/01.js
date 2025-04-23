/*
Implement a function limit that accepts a callback and a number n, which restricts invocation of the callback to at most n times. Subsequent calls of the created function will return the result of the last invocation of the callback function.*/

function createGreeting(name, language) {
  if (language === "spanish") {
    return `Hola, ${name}!`;
  } else if (language === "french") {
    return `Bonjour, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

function limit(callback, n) {
  let count = 0;
  let result;
  return function (...args) {
    if (count < n) {
      count++;
      result = callback(...args);
      return result;
    } else {
      return result;
    }
  };
}

const limitedGreeting = limit(createGreeting, 3);
console.log(limitedGreeting("Alice", "english")); // "Hello, Alice!"
console.log(limitedGreeting("Roberto", "spanish")); // "Hola, Roberto!"
console.log(limitedGreeting("Marie", "french")); // "Bonjour, Marie!"
console.log(limitedGreeting("John", "english")); // Still "Bonjour, Marie!"
