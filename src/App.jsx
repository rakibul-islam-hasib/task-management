import React from 'react';

const App = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <input type="text" id="username" className="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer" />
            <label htmlFor="username" className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all">Username</label>
        </div>
      </div>
      <h1></h1>
    </div>
  );
};

export default App;