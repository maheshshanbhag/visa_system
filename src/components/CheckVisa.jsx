import React, { useState } from 'react';

const CheckVisa = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending an email
    alert("Email sent to preview document process");
    // Optionally clear form inputs
    setEmail('');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-700 to-[#be0b32]">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg border border-gray-300">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Check Your Visa Status Here</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="input-group">
            <label htmlFor="email" className="block font-medium text-gray-700">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="input-group">
            <label htmlFor="username" className="block font-medium text-gray-700">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="block font-medium text-gray-700">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 bg-[#be0b32] text-white rounded-md hover:bg-[#9a0928] focus:outline-none focus:ring-2 focus:ring-[#be0b32]"
          >
            Check Visa Status
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckVisa;
