import React, { useState } from 'react';
import emailjs from 'emailjs-com';

//localStorage.clear();


const LoginRegistration = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const toggleForm = () => setIsLogin(!isLogin);

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      alert('This email is already registered!');
      return;
    }

    const newUser = { email, password, name, phone };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    const templateParams = {
      to_name: name,
      to_email: email,
      reply_to: email,
      message: 'Thank you for registering with VisaEase!',
    };

    emailjs
      .send('service_ds49h36', 'template_icm916p', templateParams, 'V1Cak8SnaEgiBy5P0')
      .then((response) => {
        alert('Registration successful! Confirmation email sent.');
        console.log('Email sent successfully:', response.status, response.text);
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        alert('Failed to send confirmation email.');
      });

    setEmail('');
    setPassword('');
    setName('');
    setPhone('');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      alert('Logged in successfully');
    } else {
      alert('Invalid email or password');
    }
  };

  const PlaneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {[0, 1, 2].map((_, idx) => (
        <div
          key={idx}
          className={`absolute w-64 h-64 opacity-5 ${
            idx === 0 ? 'bottom-0 left-0' : idx === 1 ? 'top-0 right-0 rotate-180' : 'top-1/4 left-1/4 rotate-45'
          }`}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,90 Q40,40 90,10" stroke="white" fill="transparent" strokeWidth="2" />
          </svg>
        </div>
      ))}

      <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        <div className="bg-blue-900 text-white p-8 md:w-2/5 flex flex-col justify-between relative">
          <div className="z-10">
            <div className="flex items-center space-x-2 mb-8">
              <div className="bg-red-600 p-2 rounded-md">
                <PlaneIcon />
              </div>
              <span className="text-2xl font-bold">VisaEase</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Your Global Journey Starts Here</h2>
            <p className="mb-8 opacity-80">Join thousands of students and professionals who've achieved their international dreams with our help.</p>
            <div className="flex gap-4 mb-8">
              {[{ value: '15+', label: 'Years' }, { value: '50+', label: 'Countries' }, { value: '10k+', label: 'Clients' }].map((item, idx) => (
                <div key={idx} className="bg-blue-800 p-3 h-16 w-16 rounded-lg flex flex-col items-center justify-center text-xs">
                  <span className="font-bold text-lg">{item.value}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 md:w-3/5 relative">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h3>
            <div className="flex space-x-2">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isLogin ? 'bg-red-600 text-white' : 'text-gray-500'}`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!isLogin ? 'bg-red-600 text-white' : 'text-gray-500'}`}
                onClick={() => setIsLogin(false)}
              >
                Register
              </button>
            </div>
          </div>

          <form onSubmit={isLogin ? handleLogin : handleRegister} className="space-y-6">
            {!isLogin && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="+1 (123) 456-7890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder={isLogin ? 'Enter your password' : 'Create a password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
              <PlaneIcon />
            </button>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <button onClick={toggleForm} className="text-red-600 hover:underline font-medium">
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegistration;
