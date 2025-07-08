// Node.js polyfill for crypto.getRandomValues
if (typeof global !== 'undefined' && !global.crypto) {
  const nodeCrypto = require('crypto');
  global.crypto = {
    getRandomValues: function(array) {
      return nodeCrypto.randomFillSync(array);
    }
  };
} 