import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full top-4 z-50 flex justify-center">
      <div className="max-w-7xl w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl border border-gray-200">
          {/* Top bar */}
          <div className="flex justify-between items-center py-4 px-6">
            {/* Logo & Brand */}
            <div className="flex items-center">
              <img
                className="h-12 w-12 rounded-full object-cover border-2 border-primary shadow-md"
                src="/assets/large.jpg"
                alt="Serene Stay Guest House"
              />
              <div className="ml-3">
                <h1 className="text-xl font-bold text-primary leading-tight hover:text-primary/80 transition-colors duration-200">
                  Serene Stay Guest House
                </h1>
                <p className="text-sm text-gray-600 italic">
                  Your Home Away From Home
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-700 hover:text-primary font-medium transition-colors duration-300 
                  after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-primary after:left-0 after:-bottom-1
                  hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-700 hover:text-primary p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-lg rounded-b-2xl shadow-lg">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

