import React, { useEffect } from 'react';

// Emulating Node.js process
const process = {
  env: {
    NODE_ENV: 'development', // Set your desired environment
  },
};

// Emulating Buffer (simplified)
const Buffer = {
  data: [],

  push(data) {
    this.data.push(data);
  },

  pop() {
    return this.data.pop();
  },

  get length() {
    return this.data.length;
  },
};

const App = () => {
  useEffect(() => {
    // Example usage
    Buffer.push('Some data');
    Buffer.push('More data');
    console.log(Buffer.data); // Output: ['Some data', 'More data']
    console.log(Buffer.length); // Output: 2

    console.log(process.env.NODE_ENV); // Output: development
  }, []);

  return (
    <div>
      <h1>Hello React!</h1>
    </div>
  );
};

export default App;
