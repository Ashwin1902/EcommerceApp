import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <p>&copy; 2023 MyStore. All rights reserved.</p>
        <nav className="flex space-x-4">
          <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
          <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
          <a href="https://instagram.com" className="hover:text-gray-400">Instagram</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer

