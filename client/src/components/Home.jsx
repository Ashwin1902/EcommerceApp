import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.target);
    const data = {
      uid: formData.get('uid'),
      pw: formData.get('pw')
    };

    try {
      const response = await fetch('http://localhost:5000/products/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      navigate('/product/allProducts', { state: { data: result } });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.target);
    const data = {
      uid: formData.get('uid'),
      pw: formData.get('pw')
    };

    try {
      const response = await fetch('http://localhost:5000/products/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      navigate('/product/allProducts', { state: { data: result } });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full flex flex-wrap gap-4">
        <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow p-5">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Sign In</h2>
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
               User ID
              </label>
              <input
                type="text"
                id="email"
                name="uid"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="pw"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
            {error && <div className="mt-4 text-red-600">{error}</div>}
          </form>
        </div>
        <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow p-5">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label htmlFor="email-signup" className="block text-sm font-medium text-gray-700">
                User ID
              </label>
              <input
                type="text"
                id="email-signup"
                name="uid"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password-signup" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password-signup"
                name="pw"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
            {error && <div className="mt-4 text-red-600">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
