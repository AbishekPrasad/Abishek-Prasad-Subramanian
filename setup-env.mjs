// This is a simple script to help create the .env file
import { writeFile } from 'fs/promises';
import crypto from 'crypto';

// Node.js polyfill for crypto.getRandomValues
if (typeof global !== 'undefined' && !global.crypto) {
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

const envContent = `VITE_SERVICE_ID=service_a5t7sf7
VITE_TEMPLATE_ID=template_chz4a2r
VITE_PUBLIC_KEY=hqO2fRpLycC8PmnUw
`;

try {
  await writeFile('.env', envContent);
  console.log('✅ .env file created successfully!');
} catch (error) {
  console.error('❌ Error creating .env file:', error);
} 