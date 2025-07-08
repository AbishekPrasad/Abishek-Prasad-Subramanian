// Polyfill for crypto.getRandomValues
if (typeof window !== 'undefined' && !window.crypto) {
  window.crypto = {};
}

if (typeof window !== 'undefined' && !window.crypto.getRandomValues) {
  window.crypto.getRandomValues = function(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
    return array;
  };
}

// For Node.js environment
if (typeof global !== 'undefined' && !global.crypto) {
  const crypto = require('crypto');
  global.crypto = {
    getRandomValues: function(array) {
      const randomBytes = crypto.randomBytes(array.length);
      for (let i = 0; i < array.length; i++) {
        array[i] = randomBytes[i];
      }
      return array;
    }
  };
}

export default {}; 