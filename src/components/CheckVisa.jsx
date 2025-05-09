import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const CheckVisa = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy visa data (replace with dynamic data later)
    const templateParams = {
      to_name: username,
      to_email: email,
      application_id: 'APP123456',
      visa_type: 'Tourist Visa',
      status: 'Approved',
      last_updated: new Date().toLocaleDateString(),
      eta_days: '2',
    };

    emailjs
      .send(
        'service_xss8jle',      // Replace with your actual service ID
        'template_e6t3d7r',  // Replace with your actual template ID
        templateParams,
        'V1Cak8SnaEgiBy5P0'     // Replace with your public key
      )
      .then((res) => {
        console.log('Email sent:', res.status, res.text);
        alert('Visa status email sent!');
        // Clear form
        setEmail('');
        setUsername('');
        setPassword('');
      })
      .catch((err) => {
        console.error('Email error:', err);
        alert('Failed to send visa status email.');
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen  bg-gradient-to-r from-blue-400 to-red-800 p-4">
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
