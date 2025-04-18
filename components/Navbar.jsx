'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="text-white text-2xl font-bold uppercase tracking-wider hover:text-gray-300">
          WallpaperApp
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/" className="text-white px-4 py-2 text-lg font-medium hover:bg-gray-700 rounded-md transition-all duration-200">
            Home
          </Link>
          <Link href="/animals" className="text-white px-4 py-2 text-lg font-medium hover:bg-gray-700 rounded-md transition-all duration-200">
            Animals
          </Link>
          <Link href="/anime" className="text-white px-4 py-2 text-lg font-medium hover:bg-gray-700 rounded-md transition-all duration-200">
            Anime
          </Link>
          <Link href="/abstract" className="text-white px-4 py-2 text-lg font-medium hover:bg-gray-700 rounded-md transition-all duration-200">
            Abstract
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
